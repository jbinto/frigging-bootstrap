let React = require("react")
let cx = require("classnames")

let {
  saveList,
  errorList,
  sizeClassNames,
  formGroupCx,
  label,
} = require("../util.js")
let select = React.createFactory(require("frig").ValueLinkedSelect)

export default class Select extends React.Component {
  displayName = "FriggingBootstrap.Select"

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
    return (
      <div className={cx(sizeClassNames(this.props))}>
        <div className={formGroupCx(this.props)}>
          {label(this.props, {className:""})}
          <div className="controls">
            {select(this._inputHtml())}
            {errorList(this.props.errors)}
          </div>
          {saveList(this.props.saved)}
        </div>
      </div>
    )
  }

}
