import React from 'react'
import cx from 'classnames'

import InputErrorList from './input_error_list'
import Saved from './saved'
import Label from './label'
import { sizeClassNames, formGroupCx } from '../util.js'
import defaultProps from '../default_props.js'
import defaultPropTypes from '../default_prop_types.js'

export default class Text extends React.Component {
  static displayName = 'FriggingBootstrap.Text'

  static defaultProps = defaultProps

  static propTypes = Object.assign({},
    defaultPropTypes, {
      rows: React.PropTypes.number,
    }
  )

  _inputHtml() {
    return Object.assign({}, this.props.inputHtml, {
      className: cx(this.props.className, 'form-control'),
      value: this.props.value || '',
      onChange: this.props.onChange,
      rows: this.props.rows,
    })
  }

  render() {
    return (
      <div className={cx(sizeClassNames(this.props))}>
        <div className={formGroupCx(this.props)}>
          <Label {...this.props} />
          <div className="controls">
            <textarea {...this._inputHtml()} />
          </div>
          <Saved saved={this.props.saved} />
          <InputErrorList errors={this.props.errors} />
        </div>
      </div>
    )
  }

}
