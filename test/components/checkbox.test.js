/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Checkbox from '../../src/js/components/checkbox'
// import InputErrorList from '../../src/js/components/input_error_list'
// import Saved from '../../src/js/components/saved'

import * as common from './_common.test'

const props = {
  valueLink: {
    value: true,
    requestChange: () => {},
  },
  inputHtml: { type: 'checkbox' },
}

common.runInputErrorListTest(Checkbox, props)
common.runSavedTest(Checkbox, props)
// n.b. <Checkbox> doesn't use the bootstrap <Label/>, rather an HTML <label>

describe('<Checkbox />', () => {
  it('renders', () => {
    mount(<Checkbox {...props} />)
  })

  it('renders HTML <label> tag with attrs from props.labelHtml', () => {
    const labelHtml = { foo: 'bar' }
    const wrapper = mount(<Checkbox {...props} labelHtml={labelHtml} />)
    const label = wrapper.find('label')
    expect(label.prop('foo')).to.equal('bar')
  })

  it('renders input tag with attrs from props.inputHtml', () => {
    const inputHtml = { autocomplete: 'off' }
    const wrapper = mount(<Checkbox {...props} inputHtml={inputHtml} />)
    const label = wrapper.find('input')
    expect(label.prop('autocomplete')).to.equal('off')
  })

  // it('renders InputErrorList with props.errors', () => {
  //   const errors = ['should be something', 'should be something else']
  //   const wrapper = mount(<Checkbox {...props} errors={errors} />)
  //   const inputErrorList = wrapper.find(InputErrorList)
  //   expect(inputErrorList.prop('errors')).to.equal(errors)
  // })
  //
  // it('renders Saved with props.saved', () => {
  //   const wrapper = mount(<Checkbox {...props} saved />)
  //   const saved = wrapper.find(Saved)
  //   expect(saved.prop('saved')).to.be.true()
  // })
})
