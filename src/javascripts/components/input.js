import React from "react"
import cx from "classnames"
import {
  saveList,
  errorList,
  sizeClassNames,
  formGroupCx,
  label,
  inputContainerCx,
} from "../util.js"

export default class Input extends React.Component {
  displayName = "FriggingBootstrap.Input"

  static defaultProps = Object.assign(require("../default_props.js"), {
    // Bootstrap input addon texts
    prefix: undefined,
    suffix: undefined,
    inputWrapper: input,
  })

  _inputHtml() {
    return Object.assign({}, this.props.inputHtml, {
      className: cx(this.props.className, "form-control"),
      valueLink: this.props.valueLink,
    })
  }

  _inputPrefix() {
    if (this.props.prefix == null) return ""
    return div({className: "input-group-addon"}, this.props.prefix)
  }

  _input() {
    return this.props.inputWrapper(this._inputHtml())
  }

  _inputSuffix() {
    if (this.props.suffix == null) return ""
    div({className: "input-group-addon"}, this.props.suffix)
  }

  _inputGroup() {
    let inputLabel = label(this.props)
    let saved = saveList(this.props.saved)

    if (this.props.prefix || this.props.suffix) {
      return inputLabel,
      div({className: "input-group"},
        this._inputPrefix(),
        this._input(),
        saved,
        this._inputSuffix(),
      )
    }
    else {
      return div({},
        inputLabel,
        this._input(),
        saved,
      )
    }
  }

  render() {
    return (
      <div className={cx(sizeClassNames(this.props))}>
        <div className={formGroupCx(this.props)}>
          <div className={inputContainerCx(this.props)}>
            {this._inputGroup()}
            {errorList(this.props.errors)}
          </div>
        </div>
      </div>
    )
  }

}
