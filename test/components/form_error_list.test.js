/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import FormErrorList from '../../src/js/components/form_error_list'

const props = {
  errors: ['must be x', 'must be y'],
}

describe('<FormErrorList />', () => {
  it('renders with props.errors in bootstrap alert divs', () => {
    const wrapper = mount(<FormErrorList {...props} />)
    const alerts = wrapper.findWhere((c) => c.hasClass('alert'))
    expect(alerts).to.have.length(2)
    expect(wrapper.text()).to.match(/Error: must be x/)
    expect(wrapper.text()).to.match(/Error: must be y/)
  })
})
