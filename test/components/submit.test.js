/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Submit from '../../src/js/components/submit'

const context = {
  frigForm: {
    layout: 'horizontal',
  },
}

describe('<Submit />', () => {
  it('renders HTML button with value=props.title', () => {
    const wrapper = mount(<Submit title="Save" />, { context })
    const button = wrapper.find('button')
    expect(button.text()).to.equal('Save')
  })

  it('renders HTML button on vertical layout', () => {
    context.frigForm.layout = 'vertical'
    const wrapper = mount(<Submit title="Save" />, { context })
    const submitContainer = wrapper.findWhere((c) => c.hasClass(''))
    expect(submitContainer).to.have.length(1)
  })
})
