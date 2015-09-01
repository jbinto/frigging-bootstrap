var React = require("react")
var {errorList, sizeClassNames, formGroupCx, savedText} = require("../util.js")
var {div, label, input, span} = React.DOM
var cx = require("classnames")
let booleanHOC = require("frig").HigherOrderComponents.Boolean

@booleanHOC
export default class extends React.Component {

  displayName = "Frig.friggingBootstrap.Checkbox"

  static defaultProps = require("../default_props.js")

  _inputHtml() {
    return Object.assign({}, this.props.inputHtml, {
      type: "checkbox",
      value: this.props.key,
      checkedLink: this.props.valueLink,
    })
  }

  render() {
    return div({className: "form-group"},
      div({className: cx(sizeClassNames(this.props))},
        div({className: formGroupCx(this.props)},
          label(this.props.labelHtml,
            input(this._inputHtml()),
            this.props.label ? ` ${this.props.label}` : "",
          ),
          savedText({saved: this.props.saved, className: "frigb-checkbox"}),
          errorList(this.props.errors),
        ),
      ),
    )
  }

}
