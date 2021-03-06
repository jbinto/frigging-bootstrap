import React from "react"
import ReactDOM from "react-dom"
import Colr from 'colr'
import {
  saveList,
  errorList,
  sizeClassNames,
  formGroupCx,
  label,
} from "../util.js"
import cx from "classnames"
import {HigherOrderComponents} from "frig"
import ColorMap from "./color/map"
import HueSlider from "./color/hue_slider"

@HigherOrderComponents.Focusable
export default class Color extends React.Component {
  static displayName = "FriggingBootstrap.Color"

  static defaultProps = Object.assign(require("../default_props.js"))

  // Color information is stored in state (as well as being received in props)
  // because the HSV format we use looses some accuracy when converted to the
  // RGB format (ie. it is a lossy conversion). To maintain information we
  // have to maintain the HSV non-lossy intermediate value.
  //
  // As an example if you were to set the saturation to 0 then the RGB color
  // would set hue and value to zero as well (#000) loosing that hue and value
  // context we need for the color map.
  state = {colr: Colr.fromHex("#fff")}

  componentWillMount() {
    this._updateColrCache(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this._updateColrCache(nextProps)
  }

  _updateColrCache(nextProps) {
    let nextColr = this._generateColr(nextProps.valueLink.value)
    if( this.state.colr.toHex() === nextColr.toHex()) return
    this.setState({colr: nextColr})
  }

  _generateColr(hex) {
    hex = hex || "#fff"
    if (!hex.match(/^#?([a-f0-9]{3}|[a-f0-9]{6})$/i)) hex = "#fff"
    return Colr.fromHex(hex)
  }

  _requestColrChange(colr) {
    // Update state and then props so that the cache invalidation for incomming
    // props (_updateColrCache) always sees the latest state.
    let updateProps = () => this.props.valueLink.requestChange(colr.toHex())
    this.setState({colr: colr}, updateProps)
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
    return (
      <div className={cx(sizeClassNames(this.props))}>
        <div className={formGroupCx(this.props)}>
          {label(this.props)}
          <input {...Object.assign({}, this.props.inputHtml, {
            valueLink: this.props.valueLink,
            ref: "frigColorInput",
            className: cx(
              this.props.inputHtml.className,
              "frigb-color-input",
              "form-control",
            ),
          })}/>
          <div
            className="frigb-color-block"
            style={{backgroundColor: this.state.colr.toHex()}}
            onClick={this._onColorBlockClick.bind(this)}
          />
          {this._colorPopup()}
          {saveList(this.props.saved)}
          {errorList(this.props.errors)}
        </div>
      </div>
    )
  }

}
