import React from 'react'
import cx from 'classnames'

import { HigherOrderComponents } from 'frig'

import ErrorsList from './error_list'
import Saved from './saved'
import {
  sizeClassNames,
  formGroupCx,
} from '../util.js'

@HigherOrderComponents.Boolean
export default class Checkbox extends React.Component {
  static displayName = 'FriggingBootstrap.Checkbox'

  static defaultProps = require('../default_props.js')

  static propTypes = {
    inputHtml: React.PropTypes.object.isRequired,
    labelHtml: React.PropTypes.array.isRequired,

    valueLink: React.PropTypes.shape({
      value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
        React.PropTypes.bool,
      ]),
      requestChange: React.PropTypes.func,
    }).isRequired,

    key: React.PropTypes.string,
    label: React.PropTypes.string,

    saved: React.PropTypes.bool,
    errors: React.PropTypes.array,
  }

  _inputHtml() {
    return Object.assign({}, this.props.inputHtml, {
      type: 'checkbox',
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
              <input {...this._inputHtml()} />
              {this.props.label ? ` ${this.props.label}` : ''}
            </label>
            <Saved saved={this.props.saved} />
            <ErrorsList errors={this.props.errors} />
          </div>
        </div>
      </div>
    )
  }

}
