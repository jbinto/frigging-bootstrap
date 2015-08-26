let React = require("react")
let {errorList, sizeClassNames, formGroupCx, label} = require("../util.js")
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

   _savedNotification(){
    let layout = this.props.layout
    let label = this.props.label
    let saved = this.props.saved
    let savedInline = span({className: "frigb-saved-inline"}, "saved")

    if (label === false && saved) return savedInline
    if (label && saved && layout == "horizontal") return savedInline
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: formGroupCx(this.props)},
        label(this.props),
        div({className: "controls"},
          textarea(this._inputHtml()),
        ),
        this._savedNotification(),
        errorList(this.props.errors),
      ),
    )
  }

}
