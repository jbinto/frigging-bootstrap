let React = require("react")
let cx = require("classnames")
let {
  saveList,
  errorList,
  sizeClassNames,
  formGroupCx,
  label,
} = require("../util.js")
let {div, input} = React.DOM

export default class extends React.Component {
  displayName = "Frig.friggingBootstrap.Number"

  static defaultProps = Object.assign(require("../default_props.js"))

  _isNumber(value) {
    let number = parseFloat(value)
    return !Number.isNaN(parseFloat(number)) && Number.isFinite(number)
  }

  _requestNumberChange(value) {
    let currentNumber = this._isNumber(value) ? value : ""
    this.props.valueLink.requestChange(currentNumber)
  }

  _inputCx() {
    return cx(
      this.props.inputHtml.className,
      "form-control",
    )
  }

  _input() {
    return input(Object.assign({}, this.props.inputHtml, {
        className: this._inputCx(),
        valueLink: {
          value: this.props.valueLink.value,
          requestChange: this._requestNumberChange.bind(this),
        },
      })
    )
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: formGroupCx(this.props)},
        div({},
          label(this.props)),
        this._input(),
        saveList(this.props.saved),
        errorList(this.props.errors),
      ),
    )
  }

}
