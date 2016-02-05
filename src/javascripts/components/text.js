import React from "react"
import {
  saveList,
  errorList,
  sizeClassNames,
  formGroupCx,
  label,
} from "../util.js"
import cx from "classnames"

export default class Text extends React.Component {
  displayName = "FriggingBootstrap.Text"

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
    return (
      <div className={cx(sizeClassNames(this.props))}>
        <div className={formGroupCx(this.props)}>
          {label(this.props)}
          <div className="controls">
            <textarea {...this._inputHtml()}/>
          </div>
          {saveList(this.props.saved)}
          {errorList(this.props.errors)}
        </div>
      </div>
    )
  }

}
