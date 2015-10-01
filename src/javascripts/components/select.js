let React = require("react")
let cx = require("classnames")

let {
  savedText,
  errorList,
  sizeClassNames,
  formGroupCx,
  label,
  savedNotification,
} = require("../util.js")
let {div} = React.DOM
let select = React.createFactory(require("frig").ValueLinkedSelect)

export default class extends React.Component {

  displayName = "Frig.friggingBootstrap.Select"

  static defaultProps = require("../default_props.js")

  _inputHtml() {
    return Object.assign({}, this.props.inputHtml, {
      key: "input",
      className: "form-control",
      valueLink: this.props.valueLink,
      options: this.props.options,
    })
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: formGroupCx(this.props)},
        label(this.props, {className: ""}),
        savedText({
          saved: this.props.saved &&
          this.props.modified &&
          this.props.layout === "vertical"
        }),
        div({className: "controls"},
          select(this._inputHtml()),
          savedNotification({parentProps: this.props}),
          errorList(this.props.errors),
        )
      )
    )
  }

}
