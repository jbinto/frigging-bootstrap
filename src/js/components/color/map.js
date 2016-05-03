import React from 'react'
import ReactDOM from 'react-dom'
import Colr from 'colr'
import cx from 'classnames'
import draggable from './higher_order_components/draggable.js'
import defaultProps from '../../default_props.js'

@draggable({
  // See this for the below issue with eslint and higher order components - https://github.com/yannickcr/eslint-plugin-react/issues/322
  updateClientCoords({ clientX, clientY }) { // eslint-disable-line react/prop-types
    const rect = ReactDOM.findDOMNode(this).getBoundingClientRect()
    const x = (clientX - rect.left) / rect.width
    const y = (rect.bottom - clientY) / rect.height
    const saturation = this.getScaledValue(x)
    const value = this.getScaledValue(y)
    const colr = Colr.fromHsv(this.props.hsv.h, saturation, value)

    this.props.colrLink.requestChange(colr)
  },
})
export default class ColorMap extends React.Component {
  static displayName = 'ColorMap'

  static defaultProps = defaultProps

  static propTypes = {
    hsv: React.PropTypes.shape({
      h: React.PropTypes.number.isRequired,
      s: React.PropTypes.number.isRequired,
      v: React.PropTypes.number.isRequired,
    }).isRequired,

    colrLink: React.PropTypes.shape({
      value: React.PropTypes.object.isRequired,
      requestChange: React.PropTypes.func.isRequired,
    }).isRequired,

    active: React.PropTypes.bool.isRequired,
    startDragging: React.PropTypes.bool.isRequired,
    getPercentageValue: React.PropTypes.func.isRequired,
  }

  render() {
    const x = this.props.hsv.s
    const y = this.props.hsv.v
    const hue = Colr.fromHsv(this.props.hsv.h, 100, 100).toHex()
    const luminosity = this.props.colrLink.value.toGrayscale()

    return (
      <div
        className={cx({
          'frigb-map': true,
          'frigb-active': this.props.active,
          'frigb-dark': luminosity <= 128,
          'frigb-light': luminosity > 128,
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
