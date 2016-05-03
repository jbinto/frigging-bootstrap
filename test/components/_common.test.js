/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import InputErrorList from '../../src/js/components/input_error_list'
import Saved from '../../src/js/components/saved'
import Label from '../../src/js/components/label'

export function runInputErrorListTest(Component, props) {
  it('renders InputErrorList with props.errors', () => {
    const errors = ['should be something', 'should be something else']
    const wrapper = mount(<Component {...props} errors={errors} />)
    const inputErrorList = wrapper.find(InputErrorList)
    expect(inputErrorList.prop('errors')).to.equal(errors)
  })
}

export function runSavedTest(Component, props) {
  it('renders Saved with props.saved', () => {
    const wrapper = mount(<Component {...props} saved />)
    const saved = wrapper.find(Saved)
    expect(saved.prop('saved')).to.be.true()
  })
}

export function runLabelTest(Component, props) {
  it('renders Label with props.label', () => {
    const labelText = 'This is a field'
    const wrapper = mount(<Component {...props} label={labelText} />)
    const label = wrapper.find(Label)
    expect(label.prop('label')).to.equal('This is a field')
  })
}

export function runInputHtmlTest(Component, props, inputTagName) {
  it(`renders ${inputTagName} tag with attrs from props.inputHtml`, () => {
    const inputHtml = { autocomplete: 'off' }
    const wrapper = mount(<Component {...props} inputHtml={inputHtml} />)
    const label = wrapper.find(inputTagName)
    expect(label.prop('autocomplete')).to.equal('off')
  })
}

export function runPrefixSuffixTest(Component, props) {
  it('renders props.prefix and props.suffix', () => {
    const prefix = 'before'
    const suffix = 'after'
    const wrapper = mount(<Component {...props} prefix={prefix} suffix={suffix} />)
    expect(wrapper.text()).to.match(/^before.*after$/)
  })
}

export function runPrefixOnlyTest(Component, props) {
  it('renders props.prefix only', () => {
    const prefix = 'before'
    const wrapper = mount(<Component {...props} prefix={prefix} />)
    expect(wrapper.text()).to.match(/^before$/)
  })
}

export function runSuffixOnlyTest(Component, props) {
  it('renders props.suffix only', () => {
    const suffix = 'after'
    const wrapper = mount(<Component {...props} suffix={suffix} />)
    expect(wrapper.text()).to.match(/^after$/)
  })
}
