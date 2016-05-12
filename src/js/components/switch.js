import React from 'react'
import cx from 'classnames'

import { HigherOrderComponents } from 'frig'

import InputErrorList from './input_error_list'
import Saved from './saved'
import Label from './label'
import { sizeClassNames, formGroupCx, inputContainerCx } from '../util.js'
import defaultProps from '../default_props.js'
import defaultPropTypes from '../default_prop_types.js'

@HigherOrderComponents.Boolean
export default class Switch extends React.Component {
  static displayName = 'FriggingBootstrap.Switch'

  static defaultProps = Object.assign({}, defaultProps, {
    onColor: 'primary',
    onText: 'ON',
    offColor: 'default',
    offText: 'OFF',
    bsSize: undefined,
    disabled: false,
    handleWidth: undefined,
  })

  static propTypes = Object.assign({},
    defaultPropTypes, {
      align: React.PropTypes.string,
      onColor: React.PropTypes.string,
      onText: React.PropTypes.string,
      offColor: React.PropTypes.string,
      offText: React.PropTypes.string,
      bsSize: React.PropTypes.string,
      disabled: React.PropTypes.bool,
      handleWidth: React.PropTypes.number,
    }
  )

  constructor() {
    super()
    this._onClick = this._onClick.bind(this)
  }


  _isChecked() {
    return this.props.valueLink.value
  }

  _onClick() {
    if (this.props.disabled === true) return false

    return this.props.valueLink.requestChange(!this.props.valueLink.value)
  }

  _switchCx() {
    return cx(
      'bootstrap-switch',
      'bootstrap-switch-wrapper',
      'bootstrap-switch-on',
      'bootstrap-switch-id-switch-state',
      'bootstrap-switch-animate',
      {
        [`bootstrap-switch-${this.props.bsSize}`]: this.props.bsSize != null,
        'bootstrap-switch-disabled': this.props.disabled,
        'pull-right': this.props.align === 'right',
      },
    )
  }

  _switchStyle() {
    const { handleWidth } = this.props
    return { width: handleWidth ? `${handleWidth * 2 + 2}px` : undefined }
  }

  _onSpanCx() {
    return cx('bootstrap-switch-handle-on', {
      [`bootstrap-switch-${this.props.onColor}`]: this.props.onColor != null,
    })
  }

  _offSpanCx() {
    return cx('bootstrap-switch-handle-off', {
      [`bootstrap-switch-${this.props.offColor}`]: this.props.offColor != null,
    })
  }

  _input() {
    const { handleWidth } = this.props
    const handleStyle = { width: handleWidth }
    const checkedOffset = handleWidth || 50
    return (
      <div
        className="bootstrap-switch-container"
        ref="switchContainer"
        onClick={this._onClick}
        style={{
          marginLeft: this._isChecked() ? '0' : `-${checkedOffset}px`,
          width: handleWidth ? handleWidth * 3 : undefined,
        }}
      >
        <span className={this._onSpanCx()} style={handleStyle}>
          {this.props.onText}
        </span>
        <span className="bootstrap-switch-label" style={handleStyle}>
          {' '}
        </span>
        <span className={this._offSpanCx()} style={handleStyle}>
          {this.props.offText}
        </span>
      </div>
    )
  }

  render() {
    return (
      <div className={cx(sizeClassNames(this.props))} tabIndex={0}>
        <div className={formGroupCx(this.props)}>
          <Label {...this.props} />
          <Saved saved={this.props.saved} />
          <div className={inputContainerCx(this.props)}>
            <div className={this._switchCx()} style={this._switchStyle()}>
              {this._input()}
            </div>
            <InputErrorList errors={this.props.errors} />
          </div>
        </div>
      </div>
    )
  }

}
