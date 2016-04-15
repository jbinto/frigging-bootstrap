/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Saved from '../../src/js/components/saved'

describe('<Saved />', () => {
  it('renders the text "saved"', () => {
    const wrapper = mount(<Saved saved />)
    expect(wrapper.text()).to.match(/saved/)
  })
  it('renders with the given className', () => {
    const wrapper = mount(<Saved saved className="zyx" />)
    expect(wrapper.find('span').hasClass('zyx')).to.be.true()
  })
  it('renders null when saved={false}', () => {
    const wrapper = mount(<Saved />)
    expect(wrapper.html()).to.be.null()
  })
})
