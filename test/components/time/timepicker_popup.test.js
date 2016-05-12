/* global describe, it, beforeEach, afterEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import TimePickerPopup from '../../../src/js/components/time/timepicker_popup'
import Switch from '../../../src/js/components/switch'
import td from 'testdouble'

describe('<TimePickerPopup />', () => {
  const defaultProps = {
    onTimeChange: td.function(),
    hours: '3',
    minutes: '45',
    amPm: 'PM',
  }

  afterEach(() => { td.reset() })

  const getWrapper = (props = defaultProps) => mount(<TimePickerPopup {...props} />)

  const simulateChangeHours = (wrapper, newHours) => {
    const input = wrapper.ref('hours')
    const realInput = input.find('input')
    const node = realInput.get(0)
    node.value = newHours
    realInput.simulate('change')
  }

  const simulateChangeMinutes = (wrapper, newMinutes) => {
    const input = wrapper.ref('minutes')
    const realInput = input.find('input')
    const node = realInput.get(0)
    node.value = newMinutes
    realInput.simulate('change')
  }

  const simulateToggleAmPm = (wrapper) => {
    const theSwitch = wrapper.ref('amPm')
    const magicDiv = theSwitch.find('.bootstrap-switch-container')
    magicDiv.simulate('click')
  }

  describe('render', () => {
    it('renders <Input> components with props.hours, minutes', () => {
      const wrapper = getWrapper()
      const hoursInput = wrapper.ref('hours')
      const realHoursInput = hoursInput.find('input').get(0)
      expect(realHoursInput.value).to.equal('3')

      const minutesInput = wrapper.ref('minutes')
      const realMinutesInput = minutesInput.find('input').get(0)
      expect(realMinutesInput.value).to.equal('45')
    })

    it('renders <Switch> component with props.amPm', () => {
      const wrapper = getWrapper()
      const theSwitch = wrapper.find(Switch)
      const isAm = theSwitch.prop('valueLink').value
      expect(isAm).to.be.false()
    })
  })

  describe('change callbacks', () => {
    it('calls onTimeChange when hours changes', () => {
      simulateChangeHours(getWrapper(), '4')
      td.verify(defaultProps.onTimeChange('4:45 PM'))
    })

    it('calls onTimeChange when minutes changes', () => {
      simulateChangeMinutes(getWrapper(), '30')
      td.verify(defaultProps.onTimeChange('3:30 PM'))
    })

    it('calls onTimeChange when am/pm changes', () => {
      simulateToggleAmPm(getWrapper())
      td.verify(defaultProps.onTimeChange('3:45 AM'))
    })
  })

  describe('normalizes out-of-range values before calling onTimeChange', () => {
    describe('hour', () => {
      it('when hour is 0 return 12', () => {
        const wrapper = getWrapper() // 3:45 PM
        simulateChangeHours(wrapper, '0')
        td.verify(defaultProps.onTimeChange('12:45 PM'))
      })

      it('when hour is 13 return 1', () => {
        const wrapper = getWrapper() // 3:45 PM
        simulateChangeHours(wrapper, '13')
        td.verify(defaultProps.onTimeChange('1:45 PM'))
      })
    })

    describe('minute', () => {
      it('when minute is 60 return 0', () => {
        const wrapper = getWrapper() // 3:45 PM
        simulateChangeMinutes(wrapper, '60')
        td.verify(defaultProps.onTimeChange('3:00 PM'))
      })

      it('when minute is 75 return 15', () => {
        const wrapper = getWrapper()  // 3:45 PM
        simulateChangeMinutes(wrapper, '75')
        td.verify(defaultProps.onTimeChange('3:15 PM'))
      })

      it('when minute is 130 return 10', () => {
        const wrapper = getWrapper()  // 3:45 PM
        simulateChangeMinutes(wrapper, '130')
        td.verify(defaultProps.onTimeChange('3:10 PM'))
      })

      it('when minute is -15 return 45', () => {
        const props = Object.assign({}, defaultProps, {
          hours: 7,
          minutes: 20,
          amPm: 'AM',
        })
        const wrapper = getWrapper(props)  // 7:20 AM
        simulateChangeMinutes(wrapper, '-15')
        td.verify(defaultProps.onTimeChange('7:45 AM'))
      })

      it('when minute is -5 return 55', () => {
        const wrapper = getWrapper()  // 3:45 PM
        simulateChangeMinutes(wrapper, '-5')
        td.verify(defaultProps.onTimeChange('3:55 PM'))
      })

      it('when minute is -150 return 30', () => {
        const wrapper = getWrapper()  // 3:45 PM
        simulateChangeMinutes(wrapper, '-150')
        td.verify(defaultProps.onTimeChange('3:30 PM'))
      })
    })
  })
})
