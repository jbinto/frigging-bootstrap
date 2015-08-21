let React = require("react")
let cx = require("classnames")
let popup = React.createFactory(require("./timepicker_popup"))
let {errorList, sizeClassNames, formGroupCx, label} = require("../util.js")
let {div, input} = React.DOM

export default class extends React.Component {

  displayName = "Frig.friggingBootstrap.TimePicker"

  static defaultProps = Object.assign(require("../default_props.js"))

  state = {
    showPopup: false,
  }

  _onKeydown(e) {
    if (e.key === "Tab") this._turnOffColorPopup()
  }

  _turnOnTimePopup() {
    if (this.state.showPopup === true) return undefined
    this.setState({ showPopup: true })
  }

  _turnOffColorPopup() {
    this.setState({ showPopup: false })
  }

  _input() {
    return input(Object.assign({}, this.props.inputHtml, {
        valueLink: this.props.valueLink,
        className: cx(
          this.props.inputHtml.className,
          "frig-timepicker-input",
          "form-control",
        ),
        onClick: this._turnOnTimePopup.bind(this),
        onKeyDownCapture: this._onKeydown.bind(this),
      })
    )
  }

  _timePopup() {
    if(this.state.showPopup === false) return

    return [
      div({
        className: "frigb-popup-bg",
        onClick: this._turnOffColorPopup.bind(this),
        key: "frigb-time-popup-bg",
      }),
      popup({
        valueLink: this.props.valueLink,
        key: "frigb-time-popup",
      }),
    ]
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: formGroupCx(this.props)},
        div({}, label(this.props)),
        this._input(),
        errorList(this.props.errors),
      ),
      this._timePopup(),
    )
  }

}
