/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import File from '../../src/js/components/file'

import * as common from './_common.test'

const props = {
  value: '/url/to/some.jpeg',
  onChange: () => {},
  inputHtml: { type: 'file' },
}

describe('<File />', () => {
  it('renders', () => {
    mount(<File {...props} />)
  })

  describe('common Bootstrap tests', () => {
    common.runInputErrorListTest(File, props)
    common.runSavedTest(File, props)
    common.runLabelTest(File, props)
    common.runInputHtmlTest(File, props, 'input')
  })

  describe('prefix/suffix tests', () => {
    common.runPrefixSuffixTest(File, props)
    common.runPrefixOnlyTest(File, props)
    common.runSuffixOnlyTest(File, props)
  })

  it('renders an <img> tag with src=props.value', () => {
    const wrapper = mount(<File {...props} />)
    const img = wrapper.find('img')
    expect(img.prop('src')).to.equal('/url/to/some.jpeg')
  })
})
