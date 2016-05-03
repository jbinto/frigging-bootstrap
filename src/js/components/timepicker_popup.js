import React from 'react'
import { UnboundInput } from 'frig'
import defaultProps from '../default_props.js'
import defaultPropTypes from '../default_prop_types.js'

export default class TimePickerPopup extends React.Component {
  static displayName = 'FriggingBootstrap.TimePickerPopup'

  static defaultProps = defaultProps

  static propTypes = defaultPropTypes

  // Returns the number of hours from 12 to 1 to 11
  _getHour(minutesSinceMidnight = this._minutesSinceMidnight()) {
    let hour = this._hoursSinceMeridiem(minutesSinceMidnight)
    if (hour === 0) hour = 12

    return hour
  }

  // Returns the minutes portion of the valueLink's time value from 0 to 59
  _getMinutes(minutesSinceMidnight = this._minutesSinceMidnight()) {
    if (minutesSinceMidnight < 0) return minutesSinceMidnight * (-1)

    return minutesSinceMidnight % 60
  }

  _isMeridiemAM() {
    const [, , isAM] = this._getValuesFromTimepicker()

    return isAM
  }

  _onHourChange(hour) {
    const val = this._calculateHourChange(hour)

    this._setMinutesSinceMidnight(val)
  }

  _onMinutesChange(minutes) {
    const val = this._calculateMinutesChange(minutes)

    this._setMinutesSinceMidnight(val)
  }

  _onMeridiemChange(isAM) {
    const [hours] = this._getValuesFromTimepicker()
    const val = this._calculateHourChange(hours)

    this._setMinutesSinceMidnight(val, isAM)
  }

  _calculateHourChange(hour) {
    let changeHour = (parseInt(hour, 10) || 0)
    changeHour = changeHour % 12

    return this._getMinutes() + changeHour * 60
  }

  _calculateMinutesChange(minutes) {
    const changeMinutes = (parseInt(minutes, 10) || 0)

    return changeMinutes + this._hoursSinceMeridiem() * 60
  }

  _hoursSinceMeridiem(minutesSinceMidnight = this._minutesSinceMidnight()) {
    return Math.floor(minutesSinceMidnight / 60)
  }

  _getValuesFromTimepicker() {
    const val = this.props.valueLink.value || ''

    // Parsing the input string
    const [hours, minutes] = val.split(':').map((s) => parseInt(s, 10))

    const isAM = /am$/i.test(val)

    return [hours, minutes, isAM]
  }

  _minutesSinceMidnight() {
    let [hours, minutes] = this._getValuesFromTimepicker()

    // Limiting the hours to a range of 0 to 11 and the minutes to 0 to 59
    hours = (hours || 0) % 12
    minutes = (minutes || 0) % 60

    // Calculating the number of minutes since midnight
    return hours * 60 + minutes
  }

  _setMinutesSinceMidnight(m, isAM = this._isMeridiemAM()) {
    const minutesSinceMidnight = m % (12 * 60)
    let currentMeridiem = isAM

    let hours = this._getHour(minutesSinceMidnight)
    let minutes = this._getMinutes(minutesSinceMidnight)
    const [, , selectedMeridiem] = this._getValuesFromTimepicker()

    if (hours < 0) hours = 11
    if (hours === 12 && minutes === 0) currentMeridiem = !selectedMeridiem
    minutes = minutes < 10 ? `0${minutes}` : minutes

    const meridiem = currentMeridiem ? 'AM' : 'PM'

    const s = `${hours}:${minutes} ${meridiem}`
    this.props.valueLink.requestChange(s)
  }

  _inputPropOverrides() {
    return {
      type: 'string',
      required: false,
      xs: 4,
    }
  }

  _hourProps() {
    return Object.assign(
      {},
      this.props,
      this._inputPropOverrides(), {
        name: 'hours',
        value: this._getHour(),
        onChange: this._onHourChange.bind(this),
        inputHtml: {
          type: 'number',
          step: 1,
        },
      }
    )
  }

  _minuteProps() {
    return Object.assign(
      {},
      this.props,
      this._inputPropOverrides(), {
        name: 'minutes',
        value: this._getMinutes(),
        onChange: this._onMinutesChange.bind(this),
        inputHtml: {
          type: 'number',
          step: 15,
        },
      }
    )
  }

  _meridiemProps() {
    return Object.assign(
      {},
      this.props, {
        type: 'switch',
        required: false,
        xs: 4,
        name: 'meridiem',
        onText: 'AM',
        onColor: 'warning',
        offText: 'PM',
        offColor: 'primary',
        value: this._isMeridiemAM(),
        onChange: this._onMeridiemChange.bind(this),
      }
    )
  }

  render() {
    return (
      <div className="frigb-popup-container popover bottom">
        <div className="arrow" />
        <div className="row">
          <UnboundInput {...this._hourProps()} />
          <UnboundInput {...this._minuteProps()} />
          <UnboundInput {...this._meridiemProps()} />
        </div>
      </div>
    )
  }

}
