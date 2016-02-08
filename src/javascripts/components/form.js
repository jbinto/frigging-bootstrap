let React = require("react")

export default class Form extends React.Component {
  displayName = "FriggingBootstrap.Form"

  static defaultProps = {
    layout: require("../default_props.js").layout,
  }

  _formHtml() {
    let className = this.props.layout ? `form-${this.props.layout}` : ""
    return Object.assign({}, this.props.formHtml, {
      ref: "form",
      className: `${this.props.formHtml.className||""} ${className}`.trim(),
    })
  }

  formData() {
    let formElement = ReactDOM.findDOMNode(this.refs.form)
    return new FormData(formElement)
  }

  render() {
    return (
      <form {...this._formHtml()}>
        {this.props.children}
      </form>
    )
  }

}
