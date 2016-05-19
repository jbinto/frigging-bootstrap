/* global describe, it, beforeEach */

import React from 'react'
import ReactDOM from 'react-dom'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { ValueLinkedSelect } from 'frig'

import Select from '../../src/js/components/select'
import InputErrorList from '../../src/js/components/input_error_list'
import Saved from '../../src/js/components/saved'
import Label from '../../src/js/components/label'


const props = {
  value: 'red',
  onChange: () => {},
  inputHtml: {},
  options: [
    { label: 'blue', value: 'blue' },
    { label: 'green`', value: 'green' },
    { label: 'red', value: 'red' },
  ],
}

describe('<Select />', () => {
  it('renders', () => {
    mount(<Select {...props} />)
  })

  it('renders ValueLinkedSelect tag with attrs from props.inputHtml', () => {
    const inputHtml = { disabled: true }
    const wrapper = mount(<Select {...props} inputHtml={inputHtml} />)
    const select = wrapper.find(ValueLinkedSelect)
    expect(select.prop('disabled')).to.be.true()
  })

  it('renders select tag with props.value as selected value', () => {
    const wrapper = mount(<Select {...props} />)
    const select = wrapper.find('select')
    const node = ReactDOM.findDOMNode(select.get(0))
    expect(node.value).to.equal('red')
  })

  it('renders InputErrorList with props.errors', () => {
    const errors = ['should be something', 'should be something else']
    const wrapper = mount(<Select {...props} errors={errors} />)
    const inputErrorList = wrapper.find(InputErrorList)
    expect(inputErrorList.prop('errors')).to.equal(errors)
  })

  it('renders Saved with props.saved', () => {
    const wrapper = mount(<Select {...props} saved />)
    const saved = wrapper.find(Saved)
    expect(saved.prop('saved')).to.be.true()
  })

  it('renders Label with props.label', () => {
    const labelText = 'Pick an option'
    const wrapper = mount(<Select {...props} label={labelText} />)
    const label = wrapper.find(Label)
    expect(label.prop('label')).to.equal('Pick an option')
  })
})
