/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Form from '../../src/js/components/form'

describe('<Form />', () => {
  const Stub = () => <div />

  describe('when no prop is entered', () => {
    it('renders only prop <Form ref=form>', () => {
      const wrapper = mount(<Form />)
      expect(wrapper.ref('form').text()).to.equal('')
    })
  })

  describe('on props.layout="horizontal"', () => {
    it('renders prop className=form-horizontal', () => {
      const wrapper = mount(<Form layout="horizontal" />)
      const form = wrapper.ref('form')
      expect(form.prop('className')).to.equal('form-horizontal')
    })
  })

  describe('on props.className', () => {
    it('renders prop className=some_class', () => {
      const wrapper = mount(<Form formHtml={{ className: 'some_class' }} />)
      const form = wrapper.ref('form')
      expect(form.prop('className')).to.contain('some_class')
    })
  })

  describe('on prop.children', () => {
    it('renders the children', () => {
      const jsx = (
        <Form>
          <Stub />
        </Form>
      )
      const wrapper = mount(jsx)
      const form = wrapper.ref('form')
      expect(form.find(Stub)).to.have.length(1)
    })
  })
})
