import React from 'react'
import cx from 'classnames'

import InputErrorList from './input_error_list'
import Saved from './saved'
import Label from './label'
import { sizeClassNames, formGroupCx } from '../util.js'

export default class Text extends React.Component {
  static displayName = 'FriggingBootstrap.Text'

  static defaultProps = Object.assign(require('../default_props.js'))

  static propTypes = {
    inputHtml: React.PropTypes.object,
    valueLink: React.PropTypes.shape({
      value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
        React.PropTypes.bool,
      ]),
      requestChange: React.PropTypes.func,
    }).isRequired,

    rows: React.PropTypes.number,
    className: React.PropTypes.string,
    saved: React.PropTypes.bool,
    errors: React.PropTypes.array,
  }

  _inputHtml() {
    return Object.assign({}, this.props.inputHtml, {
      className: cx(this.props.className, 'form-control'),
      valueLink: {
        value: this.props.valueLink.value || '',
        requestChange: this.props.valueLink.requestChange,
      },
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
