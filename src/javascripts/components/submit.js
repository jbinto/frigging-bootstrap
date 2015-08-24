var React = require("react")
var {div, button} = React.DOM
var {sizeClassNames} = require("../util.js")
var cx = require("classnames")

export default class extends React.Component {

  displayName = "Frig.friggingBootstrap.Submit"

  static defaultProps = Object.assign({}, require("../default_props.js"), {
    bsStyle: "default",
    bsSize: undefined,
    block: false,
  })

  _inputCx() {
    let optionalClasses = {
      "btn-block": this.props.block,
      [`btn-${this.props.bsSize}`]: this.props.bsSize != null,
    }
    return cx(
      this.props.className,
      `btn btn-${this.props.bsStyle}`,
      optionalClasses
    )
  }

  _inputHtml() {
    return Object.assign({}, this.props.inputHtml, {
      className: this._inputCx(),
      type: "submit",
    })
  }

  render() {
    return div({className: cx(sizeClassNames(this.props))},
      div({className: "form-group"},
        button(this._inputHtml(), this.props.title),
      ),
    )
  }

}
