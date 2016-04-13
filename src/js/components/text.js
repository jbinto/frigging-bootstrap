import React from 'react'
import {
  saveList,
  errorList,
  sizeClassNames,
  formGroupCx,
  label,
} from '../util.js'
import cx from 'classnames'

export default class Text extends React.Component {
  static displayName = 'FriggingBootstrap.Text'

  static defaultProps = Object.assign(require('../default_props.js'))

  static propTypes = {
    inputHtml: React.PropTypes.shape({
      type: React.PropTypes.string.isRequired,
    }).isRequired,

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
          {label(this.props)}
          <div className="controls">
            <textarea {...this._inputHtml()} />
          </div>
          {saveList(this.props.saved)}
          {errorList(this.props.errors)}
        </div>
      </div>
    )
  }

}
