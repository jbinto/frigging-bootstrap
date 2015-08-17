let React = require("react")
let Colr = require('colr')
let {errorList, sizeClassNames, formGroupCx, label} = require("../util.js")
let {div, input, img} = React.DOM
let cx = require("classnames")

let colorMap = React.createFactory(require("./color/map"))
let sample =  React.createFactory(require("./color/sample"))

export default class extends React.Component {

  static displayName = "Frig.friggingBootstrap.Color"

  static defaultProps = Object.assign(require("../default_props.js"), {
    color: "#000000",
  })

  propTypes: {
    color: React.PropTypes.string,
  }

  state = this._getStateFrom(this.props.color)

  // compare props against state using hex strings
  // only use the new props if the color is different
  // this prevents data loss when converting between RGB and HSV
  componentWillReceiveProps(nextProps) {
    let nextColor = nextProps.color.toLowerCase()
    let currentColor = Colr.fromHsvObject(this.state.hsv).toHex()

    if(nextColor !== currentColor) {
      this.setState(this._getStateFrom(nextProps.color))
    }
  }

  // generate state object from a hex string
  _getStateFrom(color) {
    color = Colr.fromHex(color)
    return {
      color: color,
      origin: color.clone(),
      hsv: color.toRawHsvObject(),
    }
  }

  // replace current color with another one
  _loadColor(color) {
    this.setState(this._getStateFrom(color))
    this.props.onChange(Colr.fromHex(color).bind(this))
  }

  // update the current color using the raw hsv values
  _update() {
    let color = Colr.fromHsvObject(this.state.hsv)
    this.setState({ color: color })
    console.log(color)
    // this.props.onChange(color).bind(this)
  }

  // set the hue
  _setHue(hue) {
    this.state.hsv.h = hue
    this._update()
  }

  // set the saturation
  _setSaturation(saturation) {
    this.state.hsv.s = saturation
    this._update()
  }

  // set the value
  _setValue(value) {
    this.state.hsv.v = value
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

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: formGroupCx(this.props)},
        label(this.props),
        div({className: "controls colorpicker"},
          this._inputMap(),
          sample({
            color: this.state.color.toHex(),
            origin: this.state.origin.toHex(),
            onChange: this._loadColor.bind(this),
          })
        ),
        errorList(this.props.errors),
      ),
    )
  }

}
