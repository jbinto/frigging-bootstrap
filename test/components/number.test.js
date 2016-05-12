/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import NumberComponent from '../../src/js/components/number'
import td from 'testdouble'
import cloner from 'cloner'

import * as common from './_common.test'

const props = {
  valueLink: {
    value: 0,
    requestChange: () => {},
  },
  inputHtml: {},
}

describe('<NumberComponent />', () => {
  it('renders', () => {
    mount(<NumberComponent {...props} />)
  })

  describe('common Bootstrap tests', () => {
    common.runInputErrorListTest(NumberComponent, props)
    common.runSavedTest(NumberComponent, props)
    common.runLabelTest(NumberComponent, props)
    common.runInputHtmlTest(NumberComponent, props, 'input')
  })

  describe('_onBlur', () => {
    it('state formattedValue is set to \'0\'', () => {
      const wrapper = mount(<NumberComponent {...props} />)
      const input = wrapper.find('input')

      input.simulate('blur')

      expect(wrapper.state('formattedValue')).to.equal('0')
    })

    it('valueLink.value=undefined state formattedValue is empty', () => {
      const nextProps = cloner.deep.copy(props)
      nextProps.valueLink.value = ''

      const wrapper = mount(<NumberComponent {...nextProps} />)
      const input = wrapper.find('input')

      input.simulate('blur')

      expect(wrapper.state('formattedValue')).to.be.empty()
    })
  })

  describe('_onChange', () => {
    const wrapper = mount(<NumberComponent {...props} />)
    const input = wrapper.find('input')
    const requestChange = td.function()
    const value = '5'
    const newValueLink = Object.assign({}, props.valueLink)
    newValueLink.requestChange = requestChange

    wrapper.setProps({ valueLink: newValueLink })

    input.get(0).value = value
    input.simulate('change')

    it('sets state.formattedValue', () => {
      expect(wrapper.state('formattedValue')).to.equal(value)
    })

    it('calls props.valueLink.requestChange()', () => {
      td.verify(requestChange(value))
    })
  })
})
