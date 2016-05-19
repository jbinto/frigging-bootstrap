import React from 'react'
import cx from 'classnames'

import { HigherOrderComponents } from 'frig'

import InputErrorList from './input_error_list'
import Saved from './saved'
import {
  sizeClassNames,
  formGroupCx,
} from '../util.js'
import defaultProps from '../default_props.js'
import defaultPropTypes from '../default_prop_types.js'

@HigherOrderComponents.Boolean
export default class Checkbox extends React.Component {
  static displayName = 'FriggingBootstrap.Checkbox'

  static defaultProps = defaultProps

  static propTypes = defaultPropTypes

  _inputHtml() {
    return Object.assign({}, this.props.inputHtml, {
      type: 'checkbox',
      value: this.props.key,
      checked: this.props.value,
      onChange: this.props.onChange,
    })
  }

  render() {
    return (
      <div className="form-group">
        <div className={cx(sizeClassNames(this.props))}>
          <div className={formGroupCx(this.props)}>
            <label {...this.props.labelHtml}>
              <input {...this._inputHtml()} />
              {this.props.label ? ` ${this.props.label}` : ''}
            </label>
            <Saved saved={this.props.saved} />
            <InputErrorList errors={this.props.errors} />
          </div>
        </div>
      </div>
    )
  }

}
