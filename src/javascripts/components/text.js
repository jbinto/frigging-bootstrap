let React = require("react")
let {
  saveList,
  errorList,
  sizeClassNames,
  formGroupCx,
  label,
} = require("../util.js")
let {div, textarea} = React.DOM
let cx = require("classnames")

export default class extends React.Component {

  displayName = "Frig.friggingBootstrap.Text"

  static defaultProps = Object.assign(require("../default_props.js"))

  _inputHtml() {
    return Object.assign({}, this.props.inputHtml, {
      className: cx(this.props.className, "form-control"),
      valueLink: {
        value: this.props.valueLink.value || "",
        requestChange: this.props.valueLink.requestChange,
      },
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
        saveList(this.props.saved),
        errorList(this.props.errors),
      ),
    )
  }

}
