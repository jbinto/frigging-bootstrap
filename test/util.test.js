/* global describe, it, beforeEach */

import { expect } from 'chai'
import {
  sizeClassNames,
  formGroupCx,
  inputContainerCx,
} from '../src/js/util'
import cloner from 'cloner'

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
        const actual = sizeClassNames({}, { offsets: false })
        expect(actual).to.equal('')
      })
    })
  })

  describe('formGroupCx', () => {
    describe('using props', () => {
      it('should return checkbox if inputHtml.type=checkbox', () => {
        const props = {
          inputHtml: {
            type: 'checkbox',
          },
        }
        const result = formGroupCx(props)
        expect(result).to.equal('checkbox')
      })
      it('should return form-group if inputHtml.type!=checkbox', () => {
        const props = {
          inputHtml: {
            type: 'input',
          },
        }
        const result = formGroupCx(props)
        expect(result).to.equal('form-group')
      })
      it('should return form-goup if inputHtml is has no type', () => {
        const props = {
          inputHtml: {},
        }
        const result = formGroupCx(props)
        expect(result).to.equal('form-group')
      })
      it('should return form-goup if no inputHtml', () => {
        const result = formGroupCx({})
        expect(result).to.equal('form-group')
      })
      it('should set has-error if props.errors is not undefined', () => {
        const props = {
          inputHtml: {
            type: 'input',
          },
          errors: ['errors'],
        }
        const result = formGroupCx(props)
        expect(result).to.equal('form-group has-error')
      })
      it('should set has-success if modified and no errors', () => {
        const props = {
          inputHtml: {
            type: 'checkbox',
          },
          modified: true,
        }
        const result = formGroupCx(props)
        expect(result).to.equal('checkbox has-success')
      })
    })
  })

  describe('inputContainerCx', () => {
    describe('using props', () => {
      const props = {
        inputHtml: { type: 'input' },
        layout: 'horizontal',
      }

      it('should return empty string on blank prop', () => {
        const result = inputContainerCx({})
        expect(result).to.equal('')
      })

      describe('block', () => {
        it('should have block=false return empty string', () => {
          const inputProps = cloner.deep.merge({}, props, {
            block: false,
          })

          const result = inputContainerCx(inputProps)
          expect(result).to.equal('')
        })
        it('should have block=true return col-xs-12', () => {
          const inputProps = cloner.deep.merge({}, props, {
            block: true,
          })

          const result = inputContainerCx(inputProps)
          expect(result).to.equal('col-xs-12')
        })
      })

      describe('labelWidth with block', () => {
        it('ignores labelWidth when block=true (always returns xs-12)', () => {
          const inputProps = cloner.deep.merge({}, props, {
            labelWidth: { md: 8 },
            block: true,
          })
          const result = inputContainerCx(inputProps)
          expect(result).to.equal('col-xs-12')
        })
      })

      describe('labelWidth', () => {
        it('when labelWidth={xs:9}, should return col-xs-3 (12-9=3)', () => {
          const inputProps = cloner.deep.merge({}, props, {
            labelWidth: { xs: 9 },
            block: false,
          })

          const result = inputContainerCx(inputProps)
          expect(result).to.equal('col-xs-3')
        })

        it('when labelWidth={xs:12}, should return col-xs-12 (12-12=0)', () => {
          const inputProps = cloner.deep.merge({}, props, {
            labelWidth: { xs: 12 },
            block: false,
          })

          const result = inputContainerCx(inputProps)
          expect(result).to.equal('col-xs-12')
        })
      })

      describe('when layout is vertical', () => {
        const badProps = cloner.deep.merge({}, props, {
          layout: 'vertical',
        })

        it('should return blank always', () => {
          const inputProps = cloner.deep.merge({}, badProps, {
            labelWidth: { xs: 12 },
            block: false,
          })

          const result = inputContainerCx(inputProps)
          expect(result).to.equal('')
        })
      })
    })
  })
})
