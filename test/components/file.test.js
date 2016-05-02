/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import File from '../../src/js/components/file'
import InputErrorList from '../../src/js/components/input_error_list'
import Saved from '../../src/js/components/saved'

const props = {
  valueLink: {
    value: '/url/to/some.jpeg',
    requestChange: () => {},
  },
  inputHtml: { type: 'file' },
}

describe('<File />', () => {
  it('renders', () => {
    mount(<File {...props} />)
  })

  it('renders', () => {
    mount(<File {...props} />)
  })

  it('renders input tag with attrs from props.inputHtml', () => {
    const inputHtml = { autocomplete: 'off' }
    const wrapper = mount(<File {...props} inputHtml={inputHtml} />)
    const label = wrapper.find('input')
    expect(label.prop('autocomplete')).to.equal('off')
  })

  it('renders InputErrorList with props.errors', () => {
    const errors = ['should be something', 'should be something else']
    const wrapper = mount(<File {...props} errors={errors} />)
    const inputErrorList = wrapper.find(InputErrorList)
    expect(inputErrorList.prop('errors')).to.equal(errors)
  })

  it('renders Saved with props.saved', () => {
    const wrapper = mount(<File {...props} saved />)
    const saved = wrapper.find(Saved)
    expect(saved.prop('saved')).to.be.true()
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
