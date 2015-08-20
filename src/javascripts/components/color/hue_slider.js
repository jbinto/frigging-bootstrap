let React = require("react")
let Colr = require('colr')
let draggable = require('./higher_order_components/draggable')
let { div } = React.DOM

@draggable
export default class extends React.Component {
  static defaultProps = Object.assign(require("../../default_props.js"))

  _updatePosition(clientX, clientY){
    let rect = React.findDOMNode(this).getBoundingClientRect()
    let hue = this.getScaledValue((rect.bottom - clientY) / rect.height)
    let colr = Colr.fromHsv(hue, this.props.hsv.s, this.props.hsv.v)

    this.props.colrLink.requestChange(colr)
  }

  render() {
    return div({
        className: "slider vertical",
        onMouseDown: this.startUpdates.bind(this),
        onTouchStart: this.startUpdates.bind(this),
      },
        div({
          className: "track",
        }),
        div({
          className: "frigb-pointer",
          style: {
            "bottom": this.getPercentageValue(this.props.hsv.h),
          },
        })
      )
    }
}