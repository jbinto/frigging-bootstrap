/* global describe, it, beforeEach, afterEach */

import React from 'react'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import TimePicker from '../../src/js/components/timepicker'
import TimePickerPopup from '../../src/js/components/time/timepicker_popup'
import td from 'testdouble'
import cloner from 'cloner'

const defaultProps = {
  valueLink: {
    value: '5:30 PM',
    requestChange: () => {},
  },
}

describe('<TimePicker />', () => {
  afterEach(() => { td.reset() })

  const getWrapper = (props = defaultProps) => {
    const focusableHOC = mount(<TimePicker {...props} />)
    return shallow(focusableHOC.instance().render())
  }

  it('renders a TimePickerPopup with correct props', () => {
    const wrapper = getWrapper()

    wrapper.setProps({ focused: true })

    const popup = wrapper.find(TimePickerPopup)

    expect(popup.prop('hours')).to.equal('5')
    expect(popup.prop('minutes')).to.equal('30')
    expect(popup.prop('amPm')).to.equal('PM')
  })

  describe('focus', () => {
    it('should set an initial time on first focus', () => {
      const requestChange = td.function()
      const newProps = cloner.deep.copy(defaultProps)
      newProps.valueLink.value = null
      newProps.valueLink.requestChange = requestChange

      const wrapper = getWrapper(newProps)
      const input = wrapper.find('input')
      input.simulate('focus')

      td.verify(requestChange('12:00 AM'))
    })

    it('should not set a time on focus if time is already populated', () => {
      const requestChange = td.function()
      const newProps = cloner.deep.copy(defaultProps)
      newProps.valueLink.requestChange = requestChange

      const wrapper = getWrapper(newProps)
      const input = wrapper.find('input')
      input.simulate('focus')

      td.verify(requestChange('12:00 AM'), { times: 0 })
    })
  })

  describe('onTimeChange', () => {
    it('calls Frig Input requestChange', () => {
      const requestChange = td.function()
      const newProps = cloner.deep.copy(defaultProps)
      newProps.valueLink.requestChange = requestChange
      const wrapper = getWrapper(newProps)
      const instance = wrapper.instance()

      instance._onTimeChange('5:55 AM')
      td.verify(requestChange('5:55 AM'))
    })
  })

  describe('errors', () => {
    it('when TimePicker has invalid entry, sends 12:00 AM to TimePickerPopup', () => {
      const newProps = cloner.deep.copy(defaultProps)
      newProps.valueLink.value = '1:'

      const wrapper = getWrapper(newProps)
      wrapper.setProps({ focused: true })

      const popupWrapper = wrapper.find(TimePickerPopup)

      expect(popupWrapper.prop('hours')).to.equal('12')
      expect(popupWrapper.prop('minutes')).to.equal('00')
      expect(popupWrapper.prop('amPm')).to.equal('AM')
    })
  })
})
