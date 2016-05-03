/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import InputErrorList from '../../src/js/components/input_error_list'
import Saved from '../../src/js/components/saved'
import Label from '../../src/js/components/label'

export function runBootstrapThemeTests(Component, props) {
  describe(`Common Bootstrap theme tests for ${Component.displayName}`, () => {
    it('renders InputErrorList with props.errors', () => {
      const errors = ['should be something', 'should be something else']
      const wrapper = mount(<Component {...props} errors={errors} />)
      const inputErrorList = wrapper.find(InputErrorList)
      expect(inputErrorList.prop('errors')).to.equal(errors)
    })

    it('renders Saved with props.saved', () => {
      const wrapper = mount(<Component {...props} saved />)
      const saved = wrapper.find(Saved)
      expect(saved.prop('saved')).to.be.true()
    })

    it('renders Label with props.label', () => {
      const labelText = 'This is a field'
      const wrapper = mount(<Component {...props} label={labelText} />)
      const label = wrapper.find(Label)
      expect(label.prop('label')).to.equal('This is a field')
    })
  })
}
