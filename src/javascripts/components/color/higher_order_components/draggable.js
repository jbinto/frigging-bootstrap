let React = require("react")
let Colr = require('colr')
let {clamp} = require("../clamp")

export default function(componentClass) {

  return class extends React.Component {
    static propTypes = {
      max: React.PropTypes.number,
    }

    static defaultProps = {
      max: 1,
    }

    state = { active: false }

    _changeActive(newActive) {
      this.setState({ active: newActive })
    }

    render() {
      Object.assign(componentClass.prototype, {
        componentDidMount() {
          document.addEventListener('mousemove', this.handleUpdate.bind(this))
          document.addEventListener('touchmove', this.handleUpdate.bind(this))
          document.addEventListener('mouseup', this.stopUpdates.bind(this))
          document.addEventListener('touchend', this.stopUpdates.bind(this))
        },

        componentWillUnmount() {
          document.removeEventListener('mousemove', this.handleUpdate.bind(this))
          document.removeEventListener('touchmove', this.handleUpdate.bind(this))
          document.removeEventListener('mouseup', this.stopUpdates.bind(this))
          document.removeEventListener('touchend', this.stopUpdates.bind(this))
        },

        startUpdates(e) {
          var coords = this.getPosition(e)
          this.props.activeLink.requestChange(true)
          this._updatePosition(coords.x, coords.y)
        },

        handleUpdate(e) {
          if (this.props.activeLink.value) {
            e.preventDefault()
            var coords = this.getPosition(e)
            this._updatePosition(coords.x, coords.y)
          }
        },

        stopUpdates() {
          if (this.props.activeLink.value) {
            this.props.activeLink.requestChange(false)
          }
        },

        getHSV() {
          let hexColor = this.props.valueLink.value || "#fff"
          let hsv = Colr.fromHex(hexColor).toRawHsvObject()

          return [hsv, hexColor]
        },

        getPosition(e) {
          if (e.touches) {
            e = e.touches[0]
          }

          return {
            x : e.clientX,
            y : e.clientY,
          }
        },

        getPercentageValue(value) {
          return (value / this.props.max) * 100 + "%"
        },

        getScaledValue(value) {
          return clamp(value, 0, 1) * this.props.max
        },
      })

      let childProps = Object.assign({}, this.props, {
        activeLink: {
          value: this.state.active,
          requestChange: this._changeActive.bind(this),
        },
      })

      return React.createElement(componentClass, childProps)
    }

  }
}
