/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Text from '../../src/js/components/text'

describe('<Text />', () => {
  const defaultProps = {
    inputHtml: { type: 'text' },
    value: '',
    onChange: () => {},
  }

  describe('when no prop is entered', () => {
    it('renders only empty textarea', () => {
      const wrapper = mount(<Text {...defaultProps} />)
      const textarea = wrapper.find('textarea')
      expect(textarea.text()).to.be.empty()
    })
  })

  describe('on props.row={2}', () => {
    it('renders textarea with a row of 2', () => {
      const props = Object.assign({}, defaultProps, { rows: 2 })
      const wrapper = mount(<Text {...props} />)
      const textarea = wrapper.find('textarea')
      expect(textarea.prop('rows')).to.equal(2)
    })
  })
})
