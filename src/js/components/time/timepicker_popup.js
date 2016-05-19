import React from 'react'
import Input from '../input'
import Switch from '../switch'
import defaultProps from '../../default_props.js'

export default class TimePickerPopup extends React.Component {
  static displayName = 'FriggingBootstrap.TimePickerPopup'

  static defaultProps = defaultProps

  static propTypes = {
    onTimeChange: React.PropTypes.func.isRequired,
    hours: React.PropTypes.string.isRequired,
    minutes: React.PropTypes.string.isRequired,
    amPm: React.PropTypes.string.isRequired,
  }

  constructor() {
    super()
    this.onMinuteChange = this.onMinuteChange.bind(this)
    this.onHourChange = this.onHourChange.bind(this)
    this.onAmPmChange = this.onAmPmChange.bind(this)
  }

  onHourChange(newHour) {
    const hours = newHour
    const minutes = this._getMinutesFromProps()
    const amPm = this._getAmPmFromProps()
    this.onPopupTimeChange(hours, minutes, amPm)
  }

  onMinuteChange(newMinute) {
    const hours = this._getHoursFromProps()
    const minutes = newMinute
    const amPm = this._getAmPmFromProps()
    this.onPopupTimeChange(hours, minutes, amPm)
  }

  onAmPmChange(isAm) {
    const hours = this._getHoursFromProps()
    const minutes = this._getMinutesFromProps()
    const amPm = isAm ? 'AM' : 'PM'

    this.onPopupTimeChange(hours, minutes, amPm)
  }

  // Sends a new time string to the <TimePicker>.
  //
  // The value we send must be a valid time parseable by TimeFormatter.
  //
  // Since we use <input type="number" step="..." />, this is
  // the final chance to normalize values like "3:-15" and "3:75".
  onPopupTimeChange(hours, minutes, amPm) {
    const normalizedHours = this.normalizeHours(hours)
    const normalizedMinutes = this.normalizeMinutes(minutes)

    const newTimeString = `${normalizedHours}:${normalizedMinutes} ${amPm}`
    this.props.onTimeChange(newTimeString)
  }

  normalizeHours(strHours) {
    const hours = parseInt(strHours, 10)
    if (hours <= 0) return 12
    if (hours >= 13) return 1
    return hours
  }

  normalizeMinutes(strMinutes) {
    let minutes = parseInt(strMinutes, 10)

    // if minutes=75 (e.g. <input type="number" step="15">),
    // "roll over" to 15
    minutes = minutes % 60

    // if minutes=-15 (e.g. <input type="number" step="15">),
    // "roll over" to 45
    if (minutes < 0) {
      minutes = 60 - Math.abs(minutes)
    }

    // left-pad single digit minute numbers
    if (minutes >= 0 && minutes <= 9) {
      return `0${minutes}`
    }

    return minutes.toString()
  }

  _getMinutesFromProps() {
    return this.refs.minutes.props.value
  }

  _getHoursFromProps() {
    return this.refs.hours.props.value
  }

  _getAmPmFromProps() {
    return this.refs.amPm.props.value ? 'AM' : 'PM'
  }

  _hourProps() {
    return {
      value: this.props.hours,
      onChange: this.onHourChange,
      name: 'hours',
      label: 'Hours',
      required: false,
      xs: 4,
      inputHtml: {
        type: 'number',
        step: 1,
      },
    }
  }

  _minuteProps() {
    return {
      value: this.props.minutes,
      onChange: this.onMinuteChange,
      name: 'minutes',
      label: 'Minutes',
      required: false,
      xs: 4,
      inputHtml: {
        type: 'number',
        step: 15,
      },
    }
  }

  _meridiemProps() {
    return {
      value: this.props.amPm === 'AM',
      onChange: this.onAmPmChange,
      label: 'AM/PM',
      required: false,
      xs: 4,
      name: 'meridiem',
      onText: 'AM',
      onColor: 'warning',
      offText: 'PM',
      offColor: 'primary',
    }
  }

  render() {
    return (
      <div className="frigb-popup-container popover bottom">
        <div className="arrow" />
        <div className="row">
          <Input ref="hours" {...this._hourProps()} />
          <Input ref="minutes" {...this._minuteProps()} />
          <Switch ref="amPm" {...this._meridiemProps()} />
        </div>
      </div>
    )
  }

}
