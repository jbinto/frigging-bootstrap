/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'
import Color from '../../src/js/components/color'
import HueSlider from '../../src/js/components/color/hue_slider'
import ColorMap from '../../src/js/components/color/map'
import td from 'testdouble'
import Colr from 'colr'

import * as common from './_common.test'

const props = {
  value: '#bb00bb',
  onChange: () => {},
  inputHtml: {},
}

describe('<Color />', () => {
  describe('common Bootstrap tests', () => {
    common.runInputErrorListTest(Color, props)
    common.runSavedTest(Color, props)
    common.runLabelTest(Color, props)
    common.runInputHtmlTest(Color, props, 'input')
  })

  describe('_colorPopup', () => {
    it('executes when props.focused=true', () => {
      const hocWrapper = mount(<Color {...props} />)
      const colorWrapper = shallow(hocWrapper.instance().render())

      // const wrapper = getWrapper()
      colorWrapper.setProps({ focused: true })

      expect(colorWrapper.find(HueSlider)).to.have.length(1)
      expect(colorWrapper.find(ColorMap)).to.have.length(1)
    })
  })

  it('renders', () => {
    mount(<Color {...props} />)
  })

  const getWrapper = () => {
    const hocWrapper = mount(<Color {...props} />)
    const colorWrapper = mount(hocWrapper.instance().render())
    return colorWrapper
  }

  describe('_normalizeColr', () => {
    const instance = getWrapper().instance()

    it('returns a Colr object when given a valid hex color', () => {
      const result = instance._normalizeColr('#00ff00')
      expect(result.toHex()).to.equal('#00ff00')
    })

    it('returns #ffffff when given an invalid hex color', () => {
      const result = instance._normalizeColr('2fgoijeroigj')
      expect(result.toHex()).to.equal('#ffffff')
    })

    it('returns #ffffff when given undefined', () => {
      const result = instance._normalizeColr()
      expect(result.toHex()).to.equal('#ffffff')
    })
  })

  describe('componentWillReceiveProps', () => {
    it('sets state.colr as a Colr object from the hex props.value', () => {
      const wrapper = getWrapper()
      // const newValueLink = Object.assign({}, props.valueLink)
      const newValue = '#00ff00'

      // state should change
      wrapper.setProps({ value: newValue })
      let nextHex = wrapper.state('colr').toHex()
      expect(nextHex).to.equal('#00ff00')

      // state should remain the same
      wrapper.setProps({ value: newValue })
      nextHex = wrapper.state('colr').toHex()
      expect(nextHex).to.equal('#00ff00')
    })
  })

  describe('_requestColrChange', () => {
    const wrapper = getWrapper()
    const instance = wrapper.instance()
    const onChange = td.function()

    // const newValueLink = Object.assign({}, props.valueLink)
    // newValueLink.onChange = onChange

    wrapper.setProps({ onChange })

    const colr = Colr.fromHex('#abc123')
    instance._requestColrChange(colr)

    it('sets state.colr', () => {
      expect(wrapper.state('colr')).to.equal(colr)
    })

    it('calls props.valueLink.onChange()', () => {
      td.verify(onChange('#abc123'))
    })
  })

  describe('_onColorBlockClick', () => {
    const wrapper = getWrapper()
    const colorBlock = wrapper.findWhere((c) => c.hasClass('frigb-color-block'))

    it('executes', () => {
      // Nothing to assert here really, we'd have to find the <input>
      // and see if it was selected, too much trouble for too little gain.
      // If this throws an exception the test will fail.
      colorBlock.simulate('click')
    })
  })
})
