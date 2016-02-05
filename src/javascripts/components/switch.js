import React from "react"
import cx from "classnames"
import {HigherOrderComponents} from "frig"
import {
  saveList,
  errorList,
  sizeClassNames,
  formGroupCx,
  label,
  inputContainerCx,
} from "../util.js"

@HigherOrderComponents.Boolean
export default class Switch extends React.Component {
  displayName = "FriggingBootstrap.Switch"

  static defaultProps = Object.assign(require("../default_props.js"), {
    onColor: "primary",
    onText: "ON",
    offColor: "default",
    offText: "OFF",
    bsSize: undefined,
    disabled: false,
    handleWidth: undefined,
  })

  _isChecked() {
    return this.props.valueLink.value
  }

  _onClick() {
    if (this.props.disabled === true) return
    this.props.valueLink.requestChange(!this.props.valueLink.value)
  }

  _switchCx() {
    return cx(
      "bootstrap-switch",
      "bootstrap-switch-wrapper",
      "bootstrap-switch-on",
      "bootstrap-switch-id-switch-state",
      "bootstrap-switch-animate",
      {
        [`bootstrap-switch-${this.props.bsSize}`]: this.props.bsSize != null,
        "bootstrap-switch-disabled": this.props.disabled,
        "pull-right": this.props.align === "right",
      },
    )
  }

  _switchStyle() {
    let {handleWidth} = this.props
    return {width: handleWidth ? `${handleWidth*2+2}px` : undefined}
  }

  _onSpanCx() {
    return cx("bootstrap-switch-handle-on", {
      [`bootstrap-switch-${this.props.onColor}`]: this.props.onColor != null,
    })
  }

  _offSpanCx() {
    return cx("bootstrap-switch-handle-off", {
      [`bootstrap-switch-${this.props.offColor}`]: this.props.offColor != null,
    })
  }

  _input() {
    let {handleWidth} = this.props
    let handleStyle = {width: handleWidth}
    let checkedOffset = handleWidth ? handleWidth : 50
    return (
      <div
        className="bootstrap-switch-container"
        ref="switchContainer"
        onClick={this._onClick.bind(this)}
        style={{
          marginLeft: this._isChecked() ? "0" : `-${checkedOffset}px`,
          width: handleWidth ? handleWidth * 3 : undefined,
        }}
      >
        <span className={this._onSpanCx()} style={handleStyle}>
          this.props.onText
        </span>
        <span className="bootstrap-switch-label" style={handleStyle}>
          "\u00a0"
        </span>
        <span className={this._offSpanCx()} style={handleStyle}>
          this.props.offText
        </span>
      </div>
    )
  }

  render() {
    return (
      <div className={cx(sizeClassNames(this.props))}>
        <div className={formGroupCx(this.props)}>
          {label(this.props)}
          {saveList(this.props.saved)}
          <div className={inputContainerCx(this.props)}>
            <div className={this._switchCx()} style={this._switchStyle()}>
              {this._input()}
            </div>
            {errorList(this.props.errors)}
          </div>
        </div>
      </div>
    )
  }

}
