let React = require("react")
let cx = require("classnames")
let draggable = require('./higher_order_components/draggable')
let {div} = React.DOM

@draggable
export default class extends React.Component {
  static propTypes = {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    backgroundColor: React.PropTypes.string.isRequired,
  }

  _updatePosition(clientX, clientY) {
    let rect = React.findDOMNode(this).getBoundingClientRect()
    let x = (clientX - rect.left) / rect.width
    let y = (rect.bottom - clientY) / rect.height

    x = this.getScaledValue(x)
    y = this.getScaledValue(y)

    this.props.valueLink.requestChange(x, y)
  }

  render() {
    return div(
      {
        className: cx(Object.assign({}, this.props.className, {
            map: true,
            active: this.props.activeLink.value,
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
