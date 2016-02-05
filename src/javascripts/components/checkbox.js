import React from "react"
import cx from "classnames"
import {HigherOrderComponents} from "frig"
import {
  errorList,
  sizeClassNames,
  formGroupCx,
  saveList,
} from "../util.js"

@HigherOrderComponents.Boolean
export default class Checkbox extends React.Component {
  displayName = "FriggingBootstrap.Checkbox"

  static defaultProps = require("../default_props.js")

  _inputHtml() {
    return Object.assign({}, this.props.inputHtml, {
      type: "checkbox",
      value: this.props.key,
      checkedLink: this.props.valueLink,
    })
  }

  render() {
    return (
      <div className="form-group">
        <div className={cx(sizeClassNames(this.props))}>
          <div className={formGroupCx(this.props)}>
            <label {...this.props.labelHtml}>
              <input {...this._inputHtml()}/>
              {this.props.label ? ` ${this.props.label}` : ""}
            </label>
            {saveList(this.props.saved)}
            {errorList(this.props.errors)}
          </div>
        </div>
      </div>
    )
  }

}
