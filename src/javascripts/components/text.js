let React = require("react")
let {errorList, sizeClassNames, formGroupCx, label, savedNotification} = require("../util.js")
let {div, textarea, span} = React.DOM
let cx = require("classnames")

export default class extends React.Component {

  displayName = "Frig.friggingBootstrap.Text"

  static defaultProps = Object.assign(require("../default_props.js"))

  _inputHtml() {
    return Object.assign({}, this.props.inputHtml, {
      className: cx(this.props.className, "form-control"),
      valueLink: this.props.valueLink,
      rows: this.props.rows,
    })
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: formGroupCx(this.props)},
        label(this.props),
        div({className: "controls"},
          textarea(this._inputHtml()),
        ),
        savedNotification(this.props),
        errorList(this.props.errors),
      ),
    )
  }

}
