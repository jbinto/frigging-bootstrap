import React from "react"
import ReactDOM from "react-dom"
import Colr from "colr"
import draggable from "./higher_order_components/draggable.js"

@draggable({
  updateClientCoords({clientY}) {
    const rect = ReactDOM.findDOMNode(this).getBoundingClientRect()
    const hue = this.getScaledValue((rect.bottom - clientY) / rect.height)
    const colr = Colr.fromHsv(hue, this.props.hsv.s, this.props.hsv.v)

    this.props.colrLink.requestChange(colr)
  },
})
export default class extends React.Component {
  static displayName = "HueSlider"
  static defaultProps = require("../../default_props.js")

  render() {
    return (
      <div
        className="frigb-slider frigb-vertical"
        onMouseDown={this.props.startDragging}
        onTouchStart={this.props.startDragging}
      >
        <div
          className="frigb-track"
        />
        <div
          className="frigb-pointer"
          style={{
            "bottom": this.props.getPercentageValue(this.props.hsv.h),
          }}
        />
      </div>
    )
  }
}
