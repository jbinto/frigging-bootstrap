let React = require("react")
let ReactDOM = require("react-dom")
let Colr = require('colr')
let cx = require("classnames")
let draggable = require('./higher_order_components/draggable.js')
let {div} = React.DOM

@draggable({
  updateClientCoords({clientX, clientY}) {
    let rect = ReactDOM.findDOMNode(this).getBoundingClientRect()
    let x = (clientX - rect.left) / rect.width
    let y = (rect.bottom - clientY) / rect.height
    let saturation = this.getScaledValue(x)
    let value = this.getScaledValue(y)
    let colr = Colr.fromHsv(this.props.hsv.h, saturation, value)

    this.props.colrLink.requestChange(colr)
  },
})
export default class extends React.Component {
  static displayName = "ColorMap"

  render() {
    let x = this.props.hsv.s
    let y = this.props.hsv.v
    let hue = Colr.fromHsv(this.props.hsv.h, 100, 100).toHex()
    let luminosity = this.props.colrLink.value.toGrayscale()

    return div(
      {
        className: cx({
            "frigb-map": true,
            "frigb-active": this.props.active,
            "frigb-dark": luminosity <= 128,
            "frigb-light": luminosity > 128,
        }),
        onMouseDown: this.props.startDragging,
        onTouchStart: this.props.startDragging,
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
          left: this.props.getPercentageValue(x),
          bottom: this.props.getPercentageValue(y),
        },
      })
    )
  }

}
