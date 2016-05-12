/* global describe, it, beforeEach */

import { expect } from 'chai'
import TimeFormatter from '../../../src/js/components/time/time_formatter'

describe('TimeFormatter', () => {
  describe('Hour', () => {
    it('should return 11 from \'11:00PM\'', () => {
      const timeformater = new TimeFormatter('11:00PM')

      expect(timeformater.hours).to.equal('11')
    })

    it('should return 6 from \'6:00PM\'', () => {
      const timeformater = new TimeFormatter('6:00PM')
      expect(timeformater.hours).to.equal('6')
    })

    it('should return 3 from \'03:00AM\'', () => {
      const timeformater = new TimeFormatter('03:00AM')
      expect(timeformater.hours).to.equal('3')
    })
  })

  describe('Minute', () => {
    it('should return 00 from \'12:00PM\'', () => {
      const timeformater = new TimeFormatter('12:00PM   ')
      expect(timeformater.minutes).to.equal('00')
    })

    it('should return 55 from \'12:55PM\'', () => {
      const timeformater = new TimeFormatter('12:55PM')
      expect(timeformater.minutes).to.equal('55')
    })
  })

  describe('AmPm', () => {
    it('should return PM from \'12:00PM\'', () => {
      const timeformater = new TimeFormatter('12:00PM')
      expect(timeformater.amPm).to.equal('PM')
    })

    it('should return PM from \'12:00 PM\'', () => {
      const timeformater = new TimeFormatter('12:00 PM')
      expect(timeformater.amPm).to.equal('PM')
    })

    it('should return AM from \'12:00AM\'', () => {
      const timeformater = new TimeFormatter('12:00AM')
      expect(timeformater.amPm).to.equal('AM')
    })

    it('should return PM from \'6:10pm\'', () => {
      const timeformater = new TimeFormatter('6:10pm')
      expect(timeformater.amPm).to.equal('PM')
    })
  })

  describe('toString', () => {
    it('should return full time string', () => {
      const timeformater = new TimeFormatter('3:45AM')
      expect(timeformater.toString()).to.equal('3:45AM')
    })
  })

  describe('From 24 hour To 12 hour format', () => {
    it('should return 6 PM from \'18:00PM\'', () => {
      const timeformater = new TimeFormatter('18:00PM')
      expect(timeformater.hours).to.equal('6')
      expect(timeformater.amPm).to.equal('PM')
    })

    it('ignores AM/PM when 24 hour time is provided', () => {
      const timeformater = new TimeFormatter('18:00 AM')
      expect(timeformater.hours).to.equal('6')
      expect(timeformater.amPm).to.equal('PM')
    })

    it('parses 18:00 (without AM/PM) as 6PM', () => {
      const timeformater = new TimeFormatter('18:00')
      expect(timeformater.hours).to.equal('6')
      expect(timeformater.amPm).to.equal('PM')
    })

    it('parses 06:00 (without AM/PM) as 6AM', () => {
      const timeformater = new TimeFormatter('06:00')
      expect(timeformater.hours).to.equal('6')
      expect(timeformater.amPm).to.equal('AM')
    })

    it('parses 12:00 PM as 12:00 PM', () => {
      const timeformater = new TimeFormatter('12:00 PM')
      expect(timeformater.hours).to.equal('12')
      expect(timeformater.amPm).to.equal('PM')
    })

    it('parses 00:00 (without AM/PM) as 12AM', () => {
      const timeformater = new TimeFormatter('00:00')
      expect(timeformater.hours).to.equal('12')
      expect(timeformater.amPm).to.equal('AM')
    })

    it('parses 12:00 (without AM/PM) as 12PM', () => {
      const timeformater = new TimeFormatter('12:00')
      expect(timeformater.hours).to.equal('12')
      expect(timeformater.amPm).to.equal('PM')
    })
  })

  describe('bad time format', () => {
    const didThrow = (block, errorType, regex) => {
      try {
        block()
      } catch (e) {
        expect(e).to.be.an.instanceof(errorType)
        if (regex != null) {
          expect(e.message).to.match(regex)
        }
        return
      }

      throw new Error(
        `expected to throw ${errorType.name}(${regex && regex.toString() || ''}), nothing caught`
      )
    }

    describe('invalid times', () => {
      it('should throw error for \'PM1200\'', () => {
        didThrow(() => {
          new TimeFormatter('PM1200') // eslint-disable-line no-new
        }, Error, /invalid time/)
      })

      it('should throw error for \'-1:48 PM\'', () => {
        didThrow(() => {
          new TimeFormatter('-1:48 PM') // eslint-disable-line no-new
        }, Error, /invalid time/)
      })

      it('at -1 minutes throws error', () => {
        didThrow(() => {
          new TimeFormatter('4:-48 PM') // eslint-disable-line no-new
        }, Error, /invalid time/)
      })
    })

    describe('invalid hours', () => {
      it('should throw error for \'25:48 PM\'', () => {
        didThrow(() => {
          new TimeFormatter('25:48 PM') // eslint-disable-line no-new
        }, RangeError, /hour must not be >24/)
      })
    })

    describe('invalid minutes', () => {
      it('at 60 minutes throws error', () => {
        didThrow(() => {
          new TimeFormatter('4:60 PM') // eslint-disable-line no-new
        }, RangeError, /minute must not be >59/)
      })

      it('at :5 minutes throws error', () => {
        didThrow(() => {
          new TimeFormatter('4:5') // eslint-disable-line no-new
        }, Error, /invalid time/)
      })
    })
  })
})
