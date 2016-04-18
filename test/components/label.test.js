/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Label from '../../src/js/components/label'

describe('<Label />', () => {
  describe('when props.label is empty', () => {
    describe('and props.block is true', () => {
      // two: block is true => return empty text node
      it('returns empty text node', () => {
        const wrapper = mount(<Label block />)
        expect(wrapper.html()).to.be.null()
      })
    })
    // four: label is empty, layout is vertical => return empty text node (!)
    describe('and layout is vertical', () => {
      it('returns empty text node', () => {
        const wrapper = mount(<Label block layout="vertical" />)
        expect(wrapper.html()).to.be.null()
      })
    })

    describe('and layout is horizontal', () => {
      // one: label is empty., layout is horizontal => return empty div WITHOUT horiz classes
      it('renders empty div', () => {
        const wrapper = mount(<Label layout="horizontal" />)
        expect(wrapper.find('div')).to.have.length(1)
      })

      describe('with labelWidth', () => {
        // one and a half: label is empty., layout is horizontal,
        // labelWidth is defined => return empty div WITH horiz classes
        it('renders div with className=col-xs-12', () => {
          const wrapper = mount(<Label layout="horizontal" labelWidth={{ xs: 8 }} />)
          expect(wrapper.find('div').hasClass('col-xs-8')).to.be.true()
        })
      })
    })
  })

  describe('when props.label is NOT empty', () => {
    describe('and props.block is false', () => {
            // three: label is not empty, block is false => render real label WITH horiz classes
      it('renders HTML <label> with className', () => {
        const wrapper = mount(
          <Label label="Hello" layout="horizontal" labelWidth={{ xs: 12 }} />
        )
        const labelWrapper = wrapper.find('label')
        expect(labelWrapper).to.have.length(1)
        expect(labelWrapper.hasClass('col-xs-12')).to.be.true()
      })
    })

    // five: label is not empty. layout is vertical => render real label WITHOUT horiz classes
    describe('and layout is vertical', () => {
      it('renders HTML <label> without className', () => {
        const wrapper = mount(
          <Label label="Hello" layout="vertical" labelWidth={{ xs: 12 }} />
        )
        const labelWrapper = wrapper.find('label')
        expect(labelWrapper).to.have.length(1)
        expect(labelWrapper.hasClass('col-xs-12')).to.be.false()
      })
    })
  })
})
