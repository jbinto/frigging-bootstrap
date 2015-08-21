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

  _backgroundColor() {
    return this._colr().toHex()
  }

  _colr() {
    let value = this.props.valueLink.value
    if (!value.match(/^#?([a-f0-9]{3}|[a-f0-9]{6})$/i)) value = "#FFF"
    return Colr.fromHex(value)
  }

  _colrLink() {
    return {
      value: this._colr(),
      requestChange: (colr) => this.props.valueLink.requestChange(colr.toHex()),
    }
  }

  _hsv() {
    return this._colr().toHsvObject()
  }

  _onKeydown(e) {
    if (e.key === "Tab") this._turnOffColorPopup()
  }

  _turnOnColorPopup() {
    this.setState({ showPopup: true })
  }

  _turnOffColorPopup() {
    this.setState({ showPopup: false })
  }

  _colorPopup() {
    if (this.state.showPopup === false) return undefined
    return [ div({
        className: "frigb-popup-bg",
        onClick: this._turnOffColorPopup.bind(this),
        key: "frigb-color-popup-bg",
      }),
      div({
          className: "controls frigb-colorpicker",
          key: "frigb-color-popup",
        },
        div({ className: "frigb-hue-slider" },
          hue_slider({
            max: 360,
            colrLink: this._colrLink(),
            hsv: this._hsv(),
          })
        ),
        colorMap({
          max: 100,
          colrLink: this._colrLink(),
          hsv: this._hsv(),
        })
      ),
    ]
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: formGroupCx(this.props)},
        label(this.props),
        input(Object.assign({}, this.props.inputHtml, {
          valueLink: this.props.valueLink,
          className: cx(
            this.props.inputHtml.className,
            "frigb-color-input",
            "form-control",
          ),
          onClick: this._turnOnColorPopup.bind(this),
          onKeyDownCapture: this._onKeydown.bind(this),
        })),
        div({
          className: "frigb-color-block",
          style: { backgroundColor: this._backgroundColor() },
        }),
        this._colorPopup(),
        errorList(this.props.errors),
      )
    )
  }

}
