/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Input from '../../src/js/components/input'

import * as common from './_common.test'

const props = {
  value: 'Some text entered into a field',
  onChange: () => {},
  inputHtml: { type: 'text' },
}

describe('<Input />', () => {
  it('renders', () => {
    mount(<Input {...props} />)
  })

  describe('Common Bootstrap tests', () => {
    common.runInputErrorListTest(Input, props)
    common.runSavedTest(Input, props)
    common.runLabelTest(Input, props)
    common.runInputHtmlTest(Input, props, 'input')
  })

  describe('prefix/suffix tests', () => {
    common.runPrefixSuffixTest(Input, props)
    common.runPrefixOnlyTest(Input, props)
    common.runSuffixOnlyTest(Input, props)
  })

  it('renders an <input> tag with value=props.value', () => {
    const wrapper = mount(<Input {...props} />)
    const input = wrapper.find('input')
    const node = input.get(0)
    expect(node.value).to.equal('Some text entered into a field')
  })
})
