import React from 'react'
import cx from 'classnames'
import {
  saveList,
  errorList,
  sizeClassNames,
  formGroupCx,
  label,
} from '../util.js'

import { ValueLinkedSelect } from 'frig'

export default class Select extends React.Component {
  static displayName = 'FriggingBootstrap.Select'

  static defaultProps = Object.assign({}, require('../default_props.js'), {
    options: {},
  })

  static propTypes = {
    inputHtml: React.PropTypes.shape({
      type: React.PropTypes.string.isRequired,
    }).isRequired,
    options: React.PropTypes.object,
    valueLink: React.PropTypes.shape({
      value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
        React.PropTypes.bool,
      ]),
      requestChange: React.PropTypes.func,
    }).isRequired,

    saved: React.PropTypes.bool,
    errors: React.PropTypes.array,
  }

  _inputHtml() {
    return Object.assign({}, this.props.inputHtml, {
      key: 'input',
      className: 'form-control',
      valueLink: this.props.valueLink,
      options: this.props.options,
    })
  }

  render() {
    return (
      <div className={cx(sizeClassNames(this.props))}>
        <div className={formGroupCx(this.props)}>
          {
            label(this.props, { className: '' })
          }
          <div className="controls">
            <ValueLinkedSelect {...this._inputHtml()} />
            {errorList(this.props.errors)}
          </div>
          {saveList(this.props.saved)}
        </div>
      </div>
    )
  }

}
