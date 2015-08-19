let React = require("react")
let Colr = require('colr')
let cx = require("classnames")
let draggable = require('./higher_order_components/draggable')
let {div} = React.DOM

@draggable
export default class extends React.Component {
  _updatePosition(clientX, clientY) {
    let rect = React.findDOMNode(this).getBoundingClientRect()
    let x = (clientX - rect.left) / rect.width
    let y = (rect.bottom - clientY) / rect.height

    x = this.getScaledValue(x)
    y = this.getScaledValue(y)

    this.props.valueLink.requestChange(x, y)
  }

  render() {
    let hexColor = this.props.valueLink.value || "#fff"
    let hsv = Colr.fromHex(hexColor).toRawHsvObject()
    let x = hsv.s
    let y = hsv.v
    let hue = Colr.fromHsv(hsv.h, 100, 100).toHex()
    let luminosity = Colr.fromHex(hexColor).toGrayscale()

    return div(
      {
        className: cx({
            map: true,
            active: this.props.activeLink.value,
            dark: luminosity <= 128,
            light: luminosity > 128,
        }),
        onMouseDown: this.startUpdates.bind(this),
        onTouchStart: this.startUpdates.bind(this),
      },
      div({
        className: "background",
        style: {
          backgroundColor: hue,
        },
      }),
      div({
        className: "pointer",
        style: {
          left: this.getPercentageValue(x),
          bottom: this.getPercentageValue(y),
        },
      })
    )
  }

}
