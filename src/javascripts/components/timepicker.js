let React = require("react")
let cx = require("classnames")
let {Focusable} = require("frig").HigherOrderComponents
let popup = React.createFactory(require("./timepicker_popup"))
let {errorList, sizeClassNames, formGroupCx, label} = require("../util.js")
let {savedNotification} = require("../util.js")
let {div, input} = React.DOM

@Focusable
export default class extends React.Component {

  displayName = "Frig.friggingBootstrap.TimePicker"

  static defaultProps = Object.assign(require("../default_props.js"))

  _inputCx() {
    return cx(
      this.props.inputHtml.className,
      "frigb-timepicker-input",
      "form-control",
    )
  }

  _input() {
    return input(Object.assign({}, this.props.inputHtml, {
        valueLink: this.props.valueLink,
        className: this._inputCx(),
        onFocus: () => {
          if (this.props.valueLink.value == null) {
            return this.props.valueLink.requestChange("12:00pm")
          }
        },
      })
    )
  }

  _timePopup() {
    if(this.props.focused === false) return

    return popup({
      valueLink: this.props.valueLink,
    })
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: formGroupCx(this.props)},
        div({}, label(this.props)),
        this._input(),
        savedNotification({parentProps: this.props}),
        errorList(this.props.errors),
      ),
      this._timePopup(),
    )
  }

}
