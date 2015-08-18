let React = require("react")
let Colr = require('colr')
let {errorList, sizeClassNames, formGroupCx, label} = require("../util.js")
let {div, input, img} = React.DOM
let cx = require("classnames")

let colorMap = React.createFactory(require("./color/map"))
let sample =  React.createFactory(require("./color/sample"))
let hue_slider =  React.createFactory(require("./color/hue_slider"))

export default class extends React.Component {

  static displayName = "Frig.friggingBootstrap.Color"

  static defaultProps = Object.assign(require("../default_props.js"), {
    color: "#000000",
  })

  propTypes: {
    color: React.PropTypes.string,
  }

  state = this._getStateFrom(this.props.color)

  componentDidMount() {
   this.setState({ showPopup: false })
  }

  // compare props against state using hex strings
  // only use the new props if the color is different
  // this prevents data loss when converting between RGB and HSV
  componentWillReceiveProps(nextProps) {
    let nextColor = nextProps.color.toLowerCase()
    let currentColor = this._getCurrentHex()

    if(nextColor !== currentColor) {
      this.setState(this._getStateFrom(nextProps.color))
    }
  }

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

  // replace current color with another one
  _loadColor(color) {
    this.setState(this._getStateFrom(color))
    this.props.onChange(Colr.fromHex(color))
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

  _displayColorMap(){
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

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: formGroupCx(this.props)},
        label(this.props),
        input(Object.assign({}, this.props.inputHtml, {
            valueLink: {
              value: this._getCurrentHex(),
              requestChange: this._update.bind(this),
            },
            disabled: true,
            className: cx(this.props.inputHtml.className, "form-control"),
            onClick: this._onInputClick.bind(this),
            style: {
               backgroundColor: this._getCurrentHex(),
            },
          }),
        ),
        this._displayColorMap(),
        errorList(this.props.errors),
      )
    )
  }

}
