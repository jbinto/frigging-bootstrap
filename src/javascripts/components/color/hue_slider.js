let React = require("react")
let Colr = require('colr')
let draggable = require('./higher_order_components/draggable')
let {div} = React.DOM

@draggable
export default class extends React.Component {
  static defaultProps = Object.assign(require("../../default_props.js"))

  _updatePosition(saturation, value){
    let rect = React.findDOMNode(this).getBoundingClientRect()
    let hue = this.getScaledValue((rect.bottom - value) / rect.height)
    let color = Colr.fromHsv(hue, saturation, value)

    this.props.valueLink.requestChange(color.toHex())
  }

  render() {
    let [hsv] = this.getHSV()

    return div({
        className: "slider vertical",
        onMouseDown: this.startUpdates.bind(this),
        onTouchStart: this.startUpdates.bind(this),
      },
        div({
          className: "track",
        }),
        div({
          className: "pointer",
          style: {
            "bottom": this.getPercentageValue(hsv.h),
          },
        })
      )
    }
}