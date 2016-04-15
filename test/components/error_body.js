/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import ErrorBody from '../../src/js/components/error_body'

describe('<ErrorBody />', () => {
  it('renders the given props.msg', () => {
    const wrapper = mount(<ErrorBody msg="abcdefg" />)
    expect(wrapper.text()).to.match(/abcdefg/)
  })
})
