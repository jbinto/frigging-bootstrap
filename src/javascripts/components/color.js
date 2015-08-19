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

  _onInputClick() {
    this.setState({
      showPopup: !this.state.showPopup,
    })
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

  _inputMap() {
    return colorMap({
      max: 100,
      valueLink: this.props.valueLink,
    })
  }

  _displayColor(){
    if (this.state.showPopup === false) return false
    return div({className: "controls colorpicker"},
      div({ className: "hue-slider" },
        hue_slider({
          max: 360,
          valueLink: this.props.valueLink,
        })
      ),
      this._inputMap(),
    )
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
            valueLink: this.props.valueLink,
            className: cx(this.props.inputHtml.className, "form-control"),
            onClick: this._onInputClick.bind(this),
            style: {
               backgroundColor: this.props.valueLink.value,
               color: this._getContrastYIQ(this.props.valueLink.value),
            },
          }),
        ),
        this._displayColor(),
        errorList(this.props.errors),
      )
    )
  }

}
