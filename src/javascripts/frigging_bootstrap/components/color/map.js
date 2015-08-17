let React = require("react")
let Colr = require('colr')
let cx = require("classnames")
let draggable = require('./higher_order_components/draggable')
let {errorList, sizeClassNames, formGroupCx, label} = require("../../util.js")
let {div, input, img} = React.DOM

@draggable
export default class extends React.Component {

  static propTypes = {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    backgroundColor: React.PropTypes.string.isRequired,
  }

  state = {
    active: false,
  }

  _updatePosition(clientX, clientY) {
    let rect = React.findDOMNode(this).getBoundingClientRect()
    let x = (clientX - rect.left) / rect.width
    let y = (rect.bottom - clientY) / rect.height

    x = this.getScaledValue(x)
    y = this.getScaledValue(y)

    this.props.onChange(x, y)
  }

  render() {

    return div(
      {
        className: cx(Object.assign({}, this.props.className, {
            map: true,
            active: this.state.active,
          })
        ),
        onMouseDown: this.startUpdates.bind(this),
        onTouchStart: this.startUpdates.bind(this),
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

}
