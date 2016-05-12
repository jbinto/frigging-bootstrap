import React from 'react'
import cx from 'classnames'

import { HigherOrderComponents } from 'frig'

import TimeFormatter from './time/time_formatter'
import TimepickerPopup from './time/timepicker_popup'
import InputErrorList from './input_error_list'
import Saved from './saved'
import Label from './label'
import { sizeClassNames, formGroupCx } from '../util.js'
import defaultProps from '../default_props.js'
import defaultPropTypes from '../default_prop_types.js'

@HigherOrderComponents.Focusable
export default class TimePicker extends React.Component {
  static displayName = 'FriggingBootstrap.TimePicker'

  static defaultProps = defaultProps

  static propTypes = Object.assign({},
    defaultPropTypes, {
      focused: React.PropTypes.bool.isRequired,
    }
  )

  constructor() {
    super()
    this._onTimeChange = this._onTimeChange.bind(this)
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
          this.props.valueLink.requestChange('12:00 AM')
          return true
        }

        return false
      },
    })
    return <input {...inputProps} />
  }

  _onTimeChange(newTime) {
    const time = new TimeFormatter(newTime)
    this.props.valueLink.requestChange(time.toString())
  }

  _timePopup() {
    if (this.props.focused === false) return false
    const value = this.props.valueLink.value
    let props = {}

    try {
      const time = new TimeFormatter(value)
      props = {
        hours: time.hours,
        minutes: time.minutes,
        amPm: time.amPm,
      }
    } catch (ex) {
      props = {
        hours: '12',
        minutes: '00',
        amPm: 'AM',
      }
    }

    return (
      <TimepickerPopup
        {...props}
        onTimeChange={this._onTimeChange}
      />
    )
  }

  render() {
    return (
      <div className={cx(sizeClassNames(this.props))}>
        <div className={formGroupCx(this.props)}>
          <div>
            <Label {...this.props} />
          </div>
          {this._input()}
          <Saved saved={this.props.saved} />
          <InputErrorList errors={this.props.errors} />
        </div>
        {this._timePopup()}
      </div>
    )
  }

}
