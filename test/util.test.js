/* global describe, it, beforeEach */

import React from 'react'
import { expect } from 'chai'
import {
  sizeClassNames,
  formGroupCx,
  inputContainerCx,
  Label,
  ErrorBody,
  Save,
} from '../src/js/util'
import { mount } from 'enzyme'

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
          const inputProps = Object.assign({}, props, {
            block: false,
          })

          const result = inputContainerCx(inputProps)
          expect(result).to.equal('')
        })
        it('should have block=true return col-xs-12', () => {
          const inputProps = Object.assign({}, props, {
            block: true,
          })

          const result = inputContainerCx(inputProps)
          expect(result).to.equal('col-xs-12')
        })
      })

      describe('labelWidth with block', () => {
        it('ignores labelWidth when block=true (always returns xs-12)', () => {
          const inputProps = Object.assign({}, props, {
            labelWidth: { md: 8 },
            block: true,
          })
          const result = inputContainerCx(inputProps)
          expect(result).to.equal('col-xs-12')
        })
      })

      describe('labelWidth', () => {
        it('when labelWidth={xs:9}, should return col-xs-3 (12-9=3)', () => {
          const inputProps = Object.assign({}, props, {
            labelWidth: { xs: 9 },
            block: false,
          })

          const result = inputContainerCx(inputProps)
          expect(result).to.equal('col-xs-3')
        })

        it('when labelWidth={xs:12}, should return col-xs-12 (12-12=0)', () => {
          const inputProps = Object.assign({}, props, {
            labelWidth: { xs: 12 },
            block: false,
          })

          const result = inputContainerCx(inputProps)
          expect(result).to.equal('col-xs-12')
        })
      })

      describe('when layout is vertical', () => {
        const badProps = Object.assign({}, props, {
          layout: 'vertical',
        })

        it('should return blank always', () => {
          const inputProps = Object.assign({}, badProps, {
            labelWidth: { xs: 12 },
            block: false,
          })

          const result = inputContainerCx(inputProps)
          expect(result).to.equal('')
        })
      })
    })
  })

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
          // one and a half: label is empty., layout is horizontal, labelWidth is defined => return empty div WITH horiz classes
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

  describe('<ErrorBody />', () => {
    it('render a message "Error"', () => {
      const wrapper = mount(<ErrorBody msg="Error" />)
      expect(wrapper.text()).to.match(/Error/)
    })
  })

  describe('<Save />', () => {
    it('render saved', () => {
      const wrapper = mount(<Save saved />)
      expect(wrapper.text()).to.match(/saved/)
    })
    it('render a classname', () => {
      const wrapper = mount(<Save saved className="zyx" />)
      expect(wrapper.find('span').hasClass('zyx')).to.be.true()
    })
    it('if saved={false} render empty string', () => {
      const wrapper = mount(<Save />)
      expect(wrapper.html()).to.be.null()
    })
  })
})
