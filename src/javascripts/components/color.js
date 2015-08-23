let React = require("react")
let Colr = require('colr')
let {errorList, sizeClassNames, formGroupCx, label} = require("../util.js")
let {div, input} = React.DOM
let cx = require("classnames")
let {Focusable} = require("frig").HigherOrderComponents

let colorMap = React.createFactory(require("./color/map"))
let hue_slider =  React.createFactory(require("./color/hue_slider"))

@Focusable
export default class extends React.Component {

  static displayName = "Frig.friggingBootstrap.Color"

  static defaultProps = Object.assign(require("../default_props.js"))

  _backgroundColor() {
    return this._colr().toHex()
  }

  _colr() {
    let value = this.props.valueLink.value || ""
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

  _onColorBlockClick() {
    React.findDOMNode(this.refs.frigColorInput).select()
  }

  _colorPopup() {
    if (this.props.focused === false) return undefined
    return div({className: "controls frigb-colorpicker"},
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
    )
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: formGroupCx(this.props)},
        label(this.props),
        input(Object.assign({}, this.props.inputHtml, {
          valueLink: this.props.valueLink,
          ref: "frigColorInput",
          className: cx(
            this.props.inputHtml.className,
            "frigb-color-input",
            "form-control",
          ),
        })),
        div({
          className: "frigb-color-block",
          style: { backgroundColor: this._backgroundColor() },
          onClick: this._onColorBlockClick.bind(this),
        }),
        this._colorPopup(),
        errorList(this.props.errors),
      )
    )
  }

}