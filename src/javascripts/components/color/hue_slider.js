let React = require("react")
let ReactDOM = require("react-dom")
let Colr = require('colr')
let draggable = require('./higher_order_components/draggable.js')

@draggable({
  updateClientCoords({clientY}) {
    let rect = ReactDOM.findDOMNode(this).getBoundingClientRect()
    let hue = this.getScaledValue((rect.bottom - clientY) / rect.height)
    let colr = Colr.fromHsv(hue, this.props.hsv.s, this.props.hsv.v)

    this.props.colrLink.requestChange(colr)
  },
})
export default class extends React.Component {
  static displayName = "HueSlider"
  static defaultProps = Object.assign(require("../../default_props.js"))

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
