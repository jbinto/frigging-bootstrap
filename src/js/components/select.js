import React from 'react'
import cx from 'classnames'

import { ValueLinkedSelect } from 'frig'

import InputErrorList from './input_error_list'
import Saved from './saved'
import Label from './label'
import { sizeClassNames, formGroupCx } from '../util.js'
import defaultProps from '../default_props.js'
import defaultPropTypes from '../default_prop_types.js'

export default class Select extends React.Component {
  static displayName = 'FriggingBootstrap.Select'

  static defaultProps = Object.assign({}, defaultProps, {
    options: {},
  })

  static propTypes = Object.assign({},
    defaultPropTypes, {
      options: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.object,
        React.PropTypes.string,
      ]),
    }
  )

  _inputHtml() {
    return Object.assign({}, this.props.inputHtml, {
      key: 'input',
      className: 'form-control',
      value: this.props.value,
      onChange: this.props.onChange,
      options: this.props.options,
    })
  }

  render() {
    const labelProps = Object.assign({}, this.props, { className: '' })
    return (
      <div className={cx(sizeClassNames(this.props))}>
        <div className={formGroupCx(this.props)}>
          <Label {...labelProps} />
          <div className="controls">
            <ValueLinkedSelect {...this._inputHtml()} />
            <InputErrorList errors={this.props.errors} />
          </div>
          <Saved saved={this.props.saved} />
        </div>
      </div>
    )
  }

}
