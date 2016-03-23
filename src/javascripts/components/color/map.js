import React from "react"
import ReactDOM from "react-dom"
import Colr from "colr"
import cx from "classnames"
import draggable from "./higher_order_components/draggable.js"

@draggable({
  updateClientCoords({clientX, clientY}) {
    const rect = ReactDOM.findDOMNode(this).getBoundingClientRect()
    const x = (clientX - rect.left) / rect.width
    const y = (rect.bottom - clientY) / rect.height
    const saturation = this.getScaledValue(x)
    const value = this.getScaledValue(y)
    const colr = Colr.fromHsv(this.props.hsv.h, saturation, value)

    this.props.colrLink.requestChange(colr)
  },
})
export default class extends React.Component {
  static displayName = "ColorMap"
  static defaultProps = require("../../default_props.js")

  render() {
    const x = this.props.hsv.s
    const y = this.props.hsv.v
    const hue = Colr.fromHsv(this.props.hsv.h, 100, 100).toHex()
    const luminosity = this.props.colrLink.value.toGrayscale()

    return (
      <div
        className={cx({
          "frigb-map": true,
          "frigb-active": this.props.active,
          "frigb-dark": luminosity <= 128,
          "frigb-light": luminosity > 128,
        })}
        onMouseDown={this.props.startDragging}
        onTouchStart={this.props.startDragging}
      >
        <div
          className="frigb-background"
          style={{
            backgroundColor: hue,
          }}
        />
        <div
          className="frigb-pointer"
          style={{
            left: this.props.getPercentageValue(x),
            bottom: this.props.getPercentageValue(y),
          }}
        />
      </div>
    )
  }
}
