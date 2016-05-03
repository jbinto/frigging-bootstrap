/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import File from '../../src/js/components/file'

import * as common from './_common.test'

const props = {
  valueLink: {
    value: '/url/to/some.jpeg',
    requestChange: () => {},
  },
  inputHtml: { type: 'file' },
}

describe('<File />', () => {
  describe('Common Bootstrap tests', () => {
    common.runInputErrorListTest(File, props)
    common.runSavedTest(File, props)
    common.runLabelTest(File, props)
    common.runInputHtmlTest(File, props, 'input')
  })

  it('renders', () => {
    mount(<File {...props} />)
  })

  it('renders props.prefix and props.suffix', () => {
    const prefix = 'before'
    const suffix = 'after'
    const wrapper = mount(<File {...props} prefix={prefix} suffix={suffix} />)
    expect(wrapper.text()).to.match(/^before.*after$/)
  })

  it('renders props.prefix only', () => {
    const prefix = 'before'
    const wrapper = mount(<File {...props} prefix={prefix} />)
    expect(wrapper.text()).to.match(/^before$/)
  })

  it('renders props.suffix only', () => {
    const suffix = 'after'
    const wrapper = mount(<File {...props} suffix={suffix} />)
    expect(wrapper.text()).to.match(/^after$/)
  })

  it('renders an <img> tag with src=valueLink.value', () => {
    const wrapper = mount(<File {...props} />)
    const img = wrapper.find('img')
    expect(img.prop('src')).to.equal('/url/to/some.jpeg')
  })
})
