/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import draggable from '../../../../src/js/components/color/higher_order_components/draggable'
import td from 'testdouble'

// the component we are wrapping in a @draggable
const Stub = () => <div />

// ExampleDraggable => a Stub object decorated with @draggable,
// but hardcoded with updateClientCoords that does nothing
const noop = () => {}
const ExampleDraggable = draggable({ noop })(Stub)

// ExampleDraggableFactory => return a custom decorated @draggable
// so tests can provide their own updateClientCoords
const ExampleDraggableFactory = (updateClientCoords) =>
  draggable({ updateClientCoords })(Stub)

describe('colour draggable higher order components', () => {
  describe('getPercentageValue', () => {
    it('returns a percentage', () => {
      const wrapper = mount(<ExampleDraggable max={1000} />)
      const instance = wrapper.instance()

      const value = instance.getPercentageValue(500)
      expect(value).to.equal('50%')
    })
  })

  describe('getScaledValue', () => {
    const wrapper = mount(<ExampleDraggable max={360} />)
    const instance = wrapper.instance()

    it('returns a scaled value', () => {
      expect(instance.getScaledValue(0.5)).to.equal(180)
    })

    it('returns max if value > max', () => {
      expect(instance.getScaledValue(500)).to.equal(360)
    })

    it('returns 0 if value < 0', () => {
      expect(instance.getScaledValue(-0.5)).to.equal(0)
    })
  })

  describe('startDragging', () => {
    let instance
    let updateClientCoords
    let wrapper

    beforeEach(() => {
      updateClientCoords = td.function()
      const Draggable = ExampleDraggableFactory(updateClientCoords) // eslint-disable-line new-cap

      wrapper = mount(<Draggable max={360} />)
      instance = wrapper.instance()
    })

    describe('with mouse', () => {
      let e

      beforeEach(() => {
        e = {
          preventDefault: td.function(),
          clientX: 123,
          clientY: 321,
        }

        instance.startDragging(e)
      })

      it('should set the state', () => {
        expect(wrapper.state('dragging')).to.be.true()
      })

      it('should call e.preventDefault()', () => {
        td.verify(e.preventDefault())
      })

      it('should call updateClientCoords with `e`', () => {
        td.verify(updateClientCoords({
          clientX: 123,
          clientY: 321,
        }))
      })
    })

    describe('with touch', () => {
      let e

      beforeEach(() => {
        e = {
          preventDefault: td.function(),
          touches: [{
            clientX: 123,
            clientY: 321,
          }],
        }

        instance.startDragging(e)
      })

      it('should set the state', () => {
        expect(wrapper.state('dragging')).to.be.true()
      })

      it('should call e.preventDefault()', () => {
        td.verify(e.preventDefault())
      })

      it('should call updateClientCoords with `e`', () => {
        td.verify(updateClientCoords({
          clientX: 123,
          clientY: 321,
        }))
      })
    })
  })
})
