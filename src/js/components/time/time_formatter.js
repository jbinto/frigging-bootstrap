export default class TimeFormatter {
  static regex = /^(\d{1,2}):(\d{2}) ?([APap][Mm])?$/

  constructor(timeString) {
    this.timeString = timeString.trim()
    this.matches = this.timeString.match(TimeFormatter.regex)

    if (this.matches == null) {
      throw new Error(`invalid time ${timeString} supplied to TimeFormatter`)
    }

    if (this._hours() > 24) throw new RangeError('hour must not be >24')
    if (this._minutes() > 59) throw new RangeError('minute must not be >59')
  }

  get hours() {
    let nextHour = (this._hours() % 12)
    if (nextHour === 0) nextHour = 12

    return nextHour.toString()
  }

  get minutes() {
    return this._minutes()
  }

  get amPm() {
    const hours = parseInt(this._hours(), 10)
    const amPmProvided = this._amPm() != null

    // special case: handle e.g. 00:00 => 12:00 AM
    if (hours === 0) return 'AM'

    // special case: handle 12:00 without AM/PM as 12:00 PM
    if (hours === 12 && !amPmProvided) return 'PM'

    // handle 24 hour time (e.g. 14:50) as PM
    if (hours > 12) return 'PM'

    // if AM/PM provided, and none of the special cases above,
    // use provided AM/PM
    if (amPmProvided) return this._amPm().toUpperCase()

    // if no AM/PM provided, and none of the special cases above,
    // treat as 24 hour time (AM)
    return 'AM'
  }

  toString() {
    return this.timeString
  }

  _hours() {
    return this.matches[1]
  }

  _minutes() {
    return this.matches[2]
  }

  _amPm() {
    return this.matches[3]
  }
}
