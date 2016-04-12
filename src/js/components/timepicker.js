import React from 'react'
import cx from 'classnames'
import { HigherOrderComponents } from 'frig'
import TimepickerPopup from './timepicker_popup'
import {
  saveList,
  errorList,
  sizeClassNames,
  formGroupCx,
  label,
} from '../util.js'

@HigherOrderComponents.Focusable
export default class TimePicker extends React.Component {
  static displayName = 'FriggingBootstrap.TimePicker'

  static defaultProps = Object.assign(require('../default_props.js'))

  // TODO: standarized proptyles accross componets
  propTypes = {
    inputHtml: React.PropTypes.object.isRequired,
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
    focused: React.PropTypes.bool.isRequired,
  }

  _inputCx() {
    return cx(
      this.props.inputHtml.className,
      'frigb-timepicker-input',
      'form-control',
    )
  }

  _input() {
    const inputProps = Object.assign({}, this.props.inputHtml, {
      valueLink: this.props.valueLink,
      className: this._inputCx(),
      onFocus: () => {
        if (this.props.valueLink.value == null) {
          this.props.valueLink.requestChange('12:00pm')
          return true
        }

        return false
      },
    })
    return <input {...inputProps} />
  }

  _timePopup() {
    if (this.props.focused === false) return false

    return <TimepickerPopup valueLink={this.props.valueLink} />
  }

  render() {
    return (
      <div className={cx(sizeClassNames(this.props))}>
        <div className={formGroupCx(this.props)}>
          <div>
            {label(this.props)}
          </div>
          {this._input()}
          {saveList(this.props.saved)}
          {errorList(this.props.errors)}
        </div>
        {this._timePopup()}
      </div>
    )
  }

}
