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
    let saturation = this.getScaledValue(x)
    let value = this.getScaledValue(y)
    let colr = Colr.fromHsv(this.props.hsv.h, saturation, value)

    this.props.colrLink.requestChange(colr)
  }

  render() {
    let x = this.props.hsv.s
    let y = this.props.hsv.v
    let hue = Colr.fromHsv(this.props.hsv.h, 100, 100).toHex()
    let luminosity = this.props.colrLink.value.toGrayscale()

    return div(
      {
        className: cx({
            "frigb-map": true,
            "frigb-active": this.props.activeLink.value,
            "frigb-dark": luminosity <= 128,
            "frigb-light": luminosity > 128,
        }),
        onMouseDown: this.startUpdates.bind(this),
        onTouchStart: this.startUpdates.bind(this),
      },
      div({
        className: "frigb-background",
        style: {
          backgroundColor: hue,
        },
      }),
      div({
        className: "frigb-pointer",
        style: {
          left: this.getPercentageValue(x),
          bottom: this.getPercentageValue(y),
        },
      })
    )
  }

}
