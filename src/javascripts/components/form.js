let React = require("react")

export default class Form extends React.Component {
  displayName = "FriggingBootstrap.Form"

  static defaultProps = {
    layout: require("../default_props.js").layout,
  }

  _formHtml() {
    let className = this.props.layout ? `form-${this.props.layout}` : ""
    return Object.assign({}, this.props.formHtml, {
      className: `${this.props.formHtml.className||""} ${className}`.trim(),
    })
  }

  render() {
    return (
      <form {...this._formHtml()}>
        {this.props.children}
      </form>
    )
  }

}
