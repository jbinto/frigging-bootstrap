import React from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'

import Colr from 'colr'
import { HigherOrderComponents } from 'frig'

import InputErrorList from './input_error_list'
import Saved from './saved'
import Label from './label'
import ColorMap from './color/map'
import HueSlider from './color/hue_slider'
import { sizeClassNames, formGroupCx } from '../util.js'
import defaultProps from '../default_props.js'
import defaultPropTypes from '../default_prop_types.js'

@HigherOrderComponents.Focusable
export default class Color extends React.Component {
  static displayName = 'FriggingBootstrap.Color'

  static defaultProps = defaultProps

  static propTypes = Object.assign({},
    defaultPropTypes, {
      focused: React.PropTypes.bool,
    }
  )

  constructor() {
    super()
    this._onColorBlockClick = this._onColorBlockClick.bind(this)
  }

  // Color information is stored in state (as well as being received in props)
  // because the HSV format we use looses some accuracy when converted to the
  // RGB format (ie. it is a lossy conversion). To maintain information we
  // have to maintain the HSV non-lossy intermediate value.
  //
  // As an example if you were to set the saturation to 0 then the RGB color
  // would set hue and value to zero as well (#000) loosing that hue and value
  // context we need for the color map.
  state = { colr: Colr.fromHex('#fff') }

  componentWillMount() {
    this._updateColrCache(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this._updateColrCache(nextProps)
  }

  _updateColrCache(nextProps) {
    const nextColr = this._normalizeColr(nextProps.value)
    if (this.state.colr.toHex() === nextColr.toHex()) return
    this.setState({ colr: nextColr })
  }

  _normalizeColr(hex) {
    let colour = hex || '#fff'
    if (!colour.match(/^#?([a-f0-9]{3}|[a-f0-9]{6})$/i)) colour = '#fff'
    return Colr.fromHex(colour)
  }

  _requestColrChange(colr) {
    // Update state and then props so that the cache invalidation for incomming
    // props (_updateColrCache) always sees the latest state.
    const updateProps = () => this.props.onChange(colr.toHex())
    this.setState({ colr }, updateProps)
  }

  _colrLink() {
    return {
      value: this.state.colr,
      requestChange: this._requestColrChange.bind(this),
    }
  }

  _hsv() {
    return this.state.colr.toHsvObject()
  }

  _onColorBlockClick() {
    ReactDOM.findDOMNode(this.refs.frigColorInput).select()
  }

  _colorPopup() {
    if (this.props.focused === false) return undefined
    return (
      <div className="controls frigb-colorpicker">
        <div className="frigb-hue-slider">
          <HueSlider
            max={360}
            colrLink={this._colrLink()}
            hsv={this._hsv()}
          />
        </div>
        <ColorMap
          max={100}
          colrLink={this._colrLink()}
          hsv={this._hsv()}
        />
      </div>
    )
  }

  render() {
    const inputProps = Object.assign({}, this.props.inputHtml, {
      value: this.props.value,
      onChange: this.props.onChange,
      ref: 'frigColorInput',
      className: cx(
        this.props.inputHtml.className,
        'frigb-color-input',
        'form-control',
      ),
    })
    return (
      <div className={cx(sizeClassNames(this.props))}>
        <div className={formGroupCx(this.props)}>
          <Label {...this.props} />
          <input {...inputProps} />
          <div
            className="frigb-color-block"
            style={{ backgroundColor: this.state.colr.toHex() }}
            onClick={this._onColorBlockClick}
          />
          {this._colorPopup()}
          <Saved saved={this.props.saved} />
          <InputErrorList errors={this.props.errors} />
        </div>
      </div>
    )
  }

}
