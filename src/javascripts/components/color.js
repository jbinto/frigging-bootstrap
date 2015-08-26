let React = require("react")
let Colr = require('colr')
let {errorList, sizeClassNames, formGroupCx, label} = require("../util.js")
let {div, input, span} = React.DOM
let cx = require("classnames")
let {Focusable} = require("frig").HigherOrderComponents

let colorMap = React.createFactory(require("./color/map"))
let hue_slider =  React.createFactory(require("./color/hue_slider"))

@Focusable
export default class extends React.Component {

  static displayName = "Frig.friggingBootstrap.Color"

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

  _savedNotification(){
    let layout = this.props.layout
    let label = this.props.label
    let saved = this.props.saved
    let savedInline = span({
      className: "frigb-saved-inline frigb-colorpicker-inline"},
      "saved")

    if (label === false && saved) return savedInline
    if (label && saved && layout == "horizontal") return savedInline
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
          style: { backgroundColor: this.state.colr.toHex() },
          onClick: this._onColorBlockClick.bind(this),
        }),
        this._colorPopup(),
        this._savedNotification(),
        errorList(this.props.errors),
      )
    )
  }

}
