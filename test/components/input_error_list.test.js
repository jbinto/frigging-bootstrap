/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import InputErrorList from '../../src/js/components/input_error_list'

describe('<InputErrorList />', () => {
  it('when called with empty props.errors, renders no children', () => {
    const wrapper = mount(<InputErrorList />)
    expect(wrapper.html()).to.be.null()
  })

  it('renders an <InputError> for each props.error', () => {
    const errorTexts = ['error 1', 'error 2', 'error 3']
    const wrapper = mount(<InputErrorList errors={errorTexts} />)
    expect(wrapper.find('InputError')).to.have.length(3)
  })
})
