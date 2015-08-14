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

  updatePosition(clientX, clientY) {
    let rect = this.getDOMNode().getBoundingClientRect()
    let x = (clientX - rect.left) / rect.width
    let y = (rect.bottom - clientY) / rect.height

    x = this.getScaledValue(x)
    y = this.getScaledValue(y)

    this.props.onChange(x, y)
  }

  startUpdates(e) {
    var coords = this.getPosition(e)
    this.setState({ active: true })
    this.updatePosition(coords.x, coords.y)
  }

  handleUpdate(e) {
    if (this.state.active) {
      e.preventDefault()
      var coords = this.getPosition(e)
      this.updatePosition(coords.x, coords.y)
    }
  }

  stopUpdates() {
    if (this.state.active) {
      this.setState({ active: false })
    }
  }

  getPosition (e) {
    if (e.touches) {
      e = e.touches[0]
    }

    return {
      x : e.clientX,
      y : e.clientY,
    }
  }

  getPercentageValue(value) {
    return (value / this.props.max) * 100 + "%"
  }

  getScaledValue(value) {
    return clamp(value, 0, 1) * this.props.max
  }

  _input() {
    return div(
      {
        className: cx(Object.assign({}, this.props.className, {
            map: true,
            active: this.state.active,
          })
        ),
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
          left: this.getPercentageValue(this.props.x),
          bottom: this.getPercentageValue(this.props.y),
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
