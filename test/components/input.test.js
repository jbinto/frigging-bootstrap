/* global describe, it, beforeEach */

import React from 'react'
// import { expect } from 'chai'
import { mount } from 'enzyme'
import Input from '../../src/js/components/input'

import * as common from './_common.test'

const props = {
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

})
