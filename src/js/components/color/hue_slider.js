import React from 'react'
import ReactDOM from 'react-dom'
import Colr from 'colr'
import draggable from './higher_order_components/draggable.js'

@draggable({
  // See this for the below issue with eslint and higher order components - https://github.com/yannickcr/eslint-plugin-react/issues/322
  updateClientCoords({ clientY }) { // eslint-disable-line react/prop-types
    const rect = ReactDOM.findDOMNode(this).getBoundingClientRect()
    const hue = this.getScaledValue((rect.bottom - clientY) / rect.height)
    const colr = Colr.fromHsv(hue, this.props.hsv.s, this.props.hsv.v)

    this.props.colrLink.requestChange(colr)
  },
})
export default class HueSlider extends React.Component {
  static displayName = 'HueSlider'
  static defaultProps = require('../../default_props.js')

  static propTypes = {
    hsv: React.PropTypes.shape({
      h: React.PropTypes.number.isRequired,
    }).isRequired,

    startDragging: React.PropTypes.bool.isRequired,
    getPercentageValue: React.PropTypes.func.isRequired,
  }

  render() {
    return (
      <div
        className="frigb-slider frigb-vertical"
        onMouseDown={this.props.startDragging}
        onTouchStart={this.props.startDragging}
      >
        <div className="frigb-track" />
        <div
          className="frigb-pointer"
          style={{
            bottom: this.props.getPercentageValue(this.props.hsv.h),
          }}
        />
      </div>
    )
  }
}
