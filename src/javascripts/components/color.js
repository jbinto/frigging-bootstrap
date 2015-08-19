let React = require("react")
let Colr = require('colr')
let {errorList, sizeClassNames, formGroupCx, label} = require("../util.js")
let {div, input} = React.DOM
let cx = require("classnames")

let colorMap = React.createFactory(require("./color/map"))
let hue_slider =  React.createFactory(require("./color/hue_slider"))

export default class extends React.Component {

  static displayName = "Frig.friggingBootstrap.Color"

  static defaultProps = Object.assign(require("../default_props.js"))

  state = { showPopup: false }

  // generate state object from a hex string
  _getStateFrom(color) {
    color = Colr.fromHex(color)
    return {
      color: color,
      hsv: color.toRawHsvObject(),
    }
  }

  _onInputClick() {
    this.setState({
      showPopup: !this.state.showPopup,
    })
  }

  // update the current color using the raw hsv values
  _update() {
    let color = Colr.fromHsvObject(this.state.hsv)
    this.setState({ color: color })
  }

  // set the hue
  _setHue(hue) {
    this.state.hsv.h = hue
    this._update()
  }

  _setHex(hex) {
    hex = hex.replace(/[^\w\s]/gi, '')
    if(hex.length !== 3 && hex.length !== 6) return false

    let color = Colr.fromHex(hex)
    this.setState({
      color: color,
      hsv: color.toRawHsvObject(),
    })
  }

  // set the saturation
  _setSaturation(saturation) {
    this.state.hsv.s = saturation
    this._update()
  }

  // set the saturation and the value
  _setSaturationAndValue(saturation, value) {
    this.state.hsv.s = saturation
    this.state.hsv.v = value
    this._update()
  }

  _getBackgroundHue() {
    return Colr.fromHsv(this.state.hsv.h, 100, 100).toHex()
  }

  _inputMap() {
    let hue = this._getBackgroundHue()
    let luminosity = this.state.color.toGrayscale()

    return colorMap({
      x: this.state.hsv.s,
      y: this.state.hsv.v,
      max: 100,
      backgroundColor: hue,
      className: cx({
        dark: luminosity <= 128,
        light: luminosity > 128,
      }),
      onChange: this._setSaturationAndValue.bind(this),
    })
  }

  _displayColor(){
    if (this.state.showPopup === false) return false
    return div({className: "controls colorpicker"},
      div({ className: "hue-slider" },
        hue_slider({
          value: this.state.hsv.h,
          max: 360,
          onChange: this._setHue.bind(this),
        })
      ),
      this._inputMap(),
    )
  }

  _getCurrentHex() {
    return Colr.fromHsvObject(this.state.hsv).toHex()
  }

  _getContrastYIQ(hexcolor){
    var r = parseInt(hexcolor.substr(1,2),16)
    var g = parseInt(hexcolor.substr(3,2),16)
    var b = parseInt(hexcolor.substr(5,2),16)
    var yiq = ((r*299)+(g*587)+(b*114))/1000

    return (yiq >= 128) ? 'black' : 'white'
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: formGroupCx(this.props)},
        label(this.props),
        input(Object.assign({}, this.props.inputHtml, {
            valueLink: {
              value: this._getCurrentHex(),
              requestChange: this._setHex.bind(this),
            },
            className: cx(this.props.inputHtml.className, "form-control"),
            onClick: this._onInputClick.bind(this),
            style: {
               backgroundColor: this._getCurrentHex(),
               color: this._getContrastYIQ(this._getCurrentHex()),
            },
          }),
        ),
        this._displayColor(),
        errorList(this.props.errors),
      )
    )
  }

}
