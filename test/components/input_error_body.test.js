/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import InputErrorBody from '../../src/js/components/input_error_body'

describe('<InputErrorBody />', () => {
  it('renders the given props.msg', () => {
    const wrapper = mount(<InputErrorBody msg="abcdefg" />)
    expect(wrapper.text()).to.match(/abcdefg/)
  })
})
