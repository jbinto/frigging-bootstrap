import React from "react"
import {sizeClassNames} from "../util.js"
import cx from "classnames"

export default class Submit extends React.Component {
  displayName = "FriggingBootstrap.Submit"

  static defaultProps = Object.assign({}, require("../default_props.js"), {
    bsStyle: "default",
    bsSize: undefined,
    block: false,
  })

  static contextTypes = {
    frigForm: React.PropTypes.shape({
      layout: React.PropTypes.string.isRequired,
    }).isRequired,
  }

  _inputCx() {
    let optionalClasses = {
      "btn-block": this.props.block,
      [`btn-${this.props.bsSize}`]: this.props.bsSize != null,
      "pull-right": this.props.align === "right",
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

  _submitContainerCx() {
    const {block} = this.props
    const {layout} = this.context.frigForm
    if (layout !== "horizontal") return ""
    return cx({
      "col-sm-9 col-sm-offset-3": block === false,
      "col-sm-12": block === true,
    })
  }

  render() {
    return (
      <div className={cx(sizeClassNames(this.props))}>
        <div className="form-group">
          <div className={this._submitContainerCx()}>
            <button {...this._inputHtml()}>{this.props.title}</button>
          </div>
        </div>
      </div>
    )
  }

}
