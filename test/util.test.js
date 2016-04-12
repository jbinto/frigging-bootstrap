/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import { sizeClassNames } from '../src/js/util'

describe('Util', () => {
  describe('sizeClassNames', () => {
    describe('using props', () => {
      it('should return one classname given props', () => {
        const props = { xs: 12 }
        const actual = sizeClassNames(props)
        expect(actual).to.equal('col-xs-12')
      })

      it('should not return classnames given undefined props', () => {
        const props = {
          xs: 12,
          sm: undefined,
          md: undefined,
          lg: undefined,
        }
        const actual = sizeClassNames(props)
        expect(actual).to.equal('col-xs-12')
      })

      it('should return all classnames given props', () => {
        const props = {
          xs: 12,
          sm: 6,
          md: 1,
          lg: 23,
        }
        const actual = sizeClassNames(props)
        expect(actual).to.equal('col-xs-12 col-sm-6 col-md-1 col-lg-23')
      })
    })

    describe('using props and offset', () => {
      it('should return one offset classname given props', () => {
        const props = { xsOffset: 20 }
        const actual = sizeClassNames(props)
        expect(actual).to.equal('col-xs-offset-20')
      })

      it('should not return one offset classname given undefined props', () => {
        const props = {
          xsOffset: 2,
          smOffset: undefined,
          mdOffset: undefined,
          lgOffset: undefined,
        }
        const actual = sizeClassNames(props)
        expect(actual).to.equal('col-xs-offset-2')
      })

      it('should return empty when offset is set to false', () => {
        const actual = sizeClassNames({}, { Offsets: false })
        expect(actual).to.equal('')
      })
    })
  })
})
