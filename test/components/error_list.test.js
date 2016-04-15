/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import ErrorList from '../../src/js/components/error_list'

describe('<ErrorList />', () => {
  it('when called with empty props.errors, renders no children', () => {
    const wrapper = mount(<ErrorList />)
    expect(wrapper.html()).to.be.null()
  })

  it('renders an <Error> for each props.error', () => {
    const errorTexts = ['error 1', 'error 2', 'error 3']
    const wrapper = mount(<ErrorList errors={errorTexts} />)
    expect(wrapper.find('Error')).to.have.length(3)
  })
})
