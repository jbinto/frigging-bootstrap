/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Switch from '../../src/js/components/switch'
import td from 'testdouble'
import cloner from 'cloner'

import * as common from './_common.test'

describe('<Switch />', () => {
  const defaultProps = {
    value: true,
    onChange: () => {},
  }

  describe('common Bootstrap tests', () => {
    common.runInputErrorListTest(Switch, defaultProps)
    common.runSavedTest(Switch, defaultProps)
    common.runLabelTest(Switch, defaultProps)
  })

  const renderWrapper = (
    props = defaultProps,
    findClass = '.bootstrap-switch'
  ) => {
    const wrapper = mount(<Switch {...props} />)
    return wrapper.find(findClass)
  }

  describe('Default Props', () => {
    it('has width-switch=undefined', () => {
      const switchContainer = renderWrapper()

      expect(switchContainer.prop('width-switch')).to.be.undefined()
    })

    it('has style=marginLeft=0;width=undefined', () => {
      const switchComponent = renderWrapper(
        defaultProps,
        '.bootstrap-switch-container'
      )
      const switchComponentStyle = switchComponent.prop('style')

      expect(switchComponentStyle).to.have.property('marginLeft', '0')
      expect(switchComponentStyle).to.have.property('width', undefined)
    })
  })

  describe('prop.disable=true', () => {
    it('renders disable class', () => {
      const props = cloner.deep.merge({}, defaultProps, { disabled: true })
      const switchContainer = renderWrapper(props)

      expect(switchContainer.hasClass('bootstrap-switch-disabled')).to.be.true()
    })
  })

  describe('prop.handleWidth=50', () => {
    const handleWidth = 50

    it('outer switch has offset width of 102 (handleWidth * 2 + 2)', () => {
      const props = cloner.deep.merge({}, defaultProps, { handleWidth })
      const switchContainer = renderWrapper(props)
      const switchComponentStyle = switchContainer.prop('style')

      expect(switchComponentStyle).to.have.property('width', '102px')
    })

    describe('inner switch container', () => {
      it('offset marginLeft becomes 50 on value=false', () => {
        const props = Object.assign({}, defaultProps, {
          handleWidth,
          value: false,
        })
        const switchComponent = renderWrapper(props, '.bootstrap-switch-container')
        const switchComponentStyle = switchComponent.prop('style')

        expect(switchComponentStyle).to.have.property('marginLeft', '-50px')
      })

      it('offset width becomes 150 (handleWidth * 3)', () => {
        const props = cloner.deep.merge({}, defaultProps, { handleWidth })
        const switchComponent = renderWrapper(props, '.bootstrap-switch-container')
        const switchComponentStyle = switchComponent.prop('style')

        expect(switchComponentStyle).to.have.property('width', 150)
      })
    })
  })

  describe('on & off color', () => {
    it('renders class bootstrap-switch-onColour', () => {
      const props = cloner.deep.merge({}, defaultProps, { onColor: 'onColour' })
      const switchComponent = renderWrapper(props, '.bootstrap-switch-handle-on')

      expect(switchComponent.hasClass('bootstrap-switch-onColour')).to.be.true()
    })

    it('renders class bootstrap-switch-offColour', () => {
      const props = cloner.deep.merge({}, defaultProps, { offColor: 'offColour' })
      const switchComponent = renderWrapper(props, '.bootstrap-switch-handle-off')

      expect(switchComponent.hasClass('bootstrap-switch-offColour')).to.be.true()
    })
  })

  describe('private functions', () => {
    describe('_onClick()', () => {
      it('return false when disabled', () => {
        const props = cloner.deep.merge({}, defaultProps, { disabled: true })
        const booleanHOC = mount(<Switch {...props} />)
        const switchComponent = mount(booleanHOC.instance().render())
        const instance = switchComponent.instance()

        expect(instance._onClick()).to.be.false()
      })

      it('return true after updating value', () => {
        const onChange = td.function.call()
        const props = Object.assign({}, defaultProps, {
          value: true,
          onChange,
        })

        const booleanHOC = mount(<Switch {...props} />)
        const switchComponent = mount(booleanHOC.instance().render())
        const instance = switchComponent.instance()

        instance._onClick()

        td.verify(onChange(false))
      })
    })
  })
})
