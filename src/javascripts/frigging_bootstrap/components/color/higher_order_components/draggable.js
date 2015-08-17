let React = require("react")
let {clamp} = require("../clamp")

export default function(componentClass) {

  return class extends React.Component {

    static propTypes = {
      max: React.PropTypes.number,
    }

    static defaultProps = {
      max: 1,
    }

    state = {
      active: false,
    }

    render() {
      Object.assign(componentClass.prototype, {

        componentDidMount() {
          document.addEventListener('mousemove', this.handleUpdate)
          document.addEventListener('touchmove', this.handleUpdate)
          document.addEventListener('mouseup', this.stopUpdates)
          document.addEventListener('touchend', this.stopUpdates)
        },

        componentWillUnmount() {
          document.removeEventListener('mousemove', this.handleUpdate)
          document.removeEventListener('touchmove', this.handleUpdate)
          document.removeEventListener('mouseup', this.stopUpdates)
          document.removeEventListener('touchend', this.stopUpdates)
        },

        startUpdates(e) {
          var coords = this.getPosition(e)
          this.setState({ active: true })
          this.updatePosition(coords.x, coords.y)
        },

        handleUpdate(e) {
          if (this.state.active) {
            e.preventDefault()
            var coords = this.getPosition(e)
            this.updatePosition(coords.x, coords.y)
          }
        },

        stopUpdates() {
          if (this.state.active) {
            this.setState({ active: false })
          }
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

      return React.createElement(componentClass, this.props)
    }

  }
}
