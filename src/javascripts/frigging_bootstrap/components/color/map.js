let React = require("react")
let Colr = require('colr')
let {errorList, sizeClassNames, formGroupCx, label} = require("../../util.js")
let {div, input, img} = React.DOM
let cx = require("classnames")

export default class extends React.Component {
  static defaultProps = Object.assign(require("../../default_props.js"), {
    max: 1,
  })

  state = {
    active: false,
  }

  propTypes: {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    backgroundColor: React.PropTypes.string.isRequired,
    max: React.PropTypes.number,
  }

  _updatePosition(clientX, clientY) {
    let rect = React.findDOMNode(this).getBoundingClientRect()
    let x = (clientX - rect.left) / rect.width
    let y = (rect.bottom - clientY) / rect.height

    x = this._getScaledValue(x)
    y = this._getScaledValue(y)

    this.props.onChange(x, y)
  }

  _startUpdates(e) {
    var coords = this._getPosition(e)
    this.setState({ active: true })
    this._updatePosition(coords.x, coords.y)
  }

  _handleUpdate(e) {
    if (this.state.active) {
      e.preventDefault()
      var coords = this._getPosition(e)
      this._updatePosition(coords.x, coords.y)
    }
  }

  _stopUpdates() {
    if (this.state.active) {
      this.setState({ active: false })
    }
  }

  _getPosition (e) {
    if (e.touches) {
      e = e.touches[0]
    }

    return {
      x : e.clientX,
      y : e.clientY,
    }
  }

  _getPercentageValue(value) {
    return (value / this.props.max) * 100 + "%"
  }

  _getScaledValue(value) {
    return this._clamp(value, 0, 1) * this.props.max
  }

  _clamp(val, min, max) {
    return val < min ? min : (val > max ? max : val)
  }

  _input() {
    return div(
      {
        className: cx(Object.assign({}, this.props.className, {
            map: true,
            active: this.state.active,
          })
        ),
        onMouseDown: this._startUpdates.bind(this),
        onTouchStart: this._startUpdates.bind(this),
      },
      div({
        className: "background",
        style: {
          backgroundColor: this.props.backgroundColor,
        },
      }),
      div({
        className: "pointer",
        style: {
          left: this._getPercentageValue(this.props.x),
          bottom: this._getPercentageValue(this.props.y),
        },
      })
    )
  }

  render() {
    return div({className: "controls colorpicker"},
      this._input(),
    )
  }

}
