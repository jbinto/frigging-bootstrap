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

  _onInputClick() {
    if (this.state.showPopup === true) return undefined
    this.setState({ showPopup: true })
  }

  _onPopupBGClick() {
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
        onClick: this._onInputClick.bind(this),
      })
    )
  }

  _inputPopup() {
    if(this.state.showPopup === false) return

    return [
      div({
        className: "frigb-popup-bg",
        onClick: this._onPopupBGClick.bind(this),
      }),
      popup({ valueLink: this.props.valueLink }),
    ]
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: formGroupCx(this.props)},
        div({},
          label(this.props)
        ),
        this._input(),
        errorList(this.props.errors),
      ),
      this._inputPopup(),
    )
  }

}
