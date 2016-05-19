import React from 'react'
import cx from 'classnames'

import Numeral from 'numeral'

import InputErrorList from './input_error_list'
import Saved from './saved'
import Label from './label'
import { sizeClassNames, formGroupCx } from '../util.js'
import defaultProps from '../default_props.js'
import defaultPropTypes from '../default_prop_types.js'

export default class Number extends React.Component {
  static displayName = 'FriggingBootstrap.Number'

  static defaultProps = Object.assign({}, defaultProps, {
    format: '0,0[.][00]',
  })

  static propTypes = Object.assign({},
    defaultPropTypes, {
      format: React.PropTypes.string,
    }
  )

  state = {
    formattedValue: '',
  }

  _formatNumber(currentNumber) {
    return currentNumber ? currentNumber.format(this.props.format) : ''
  }

  _onBlur() {
    let value = this.props.value
    value = value.toString().replace(/,/g, '')
    value = this._toNumeral(value) || ''
    value = this._formatNumber(value)

    this.setState({ formattedValue: value })
  }

  _onChange(e) {
    const value = e.target.value
    this.setState({ formattedValue: value })

    this.props.onChange(value.replace(/,/g, ''))
  }

  _inputCx() {
    return cx(
      this.props.inputHtml.className,
      'form-control',
    )
  }

  _input() {
    const inputProps = Object.assign({}, this.props.inputHtml, {
      className: this._inputCx(),
      onBlur: this._onBlur.bind(this),
      value: (this.state.formattedValue || this._formatNumber(
        this._toNumeral(this.props.value) || '')
      ),
      onChange: this._onChange.bind(this),
    })

    return <input {...inputProps} />
  }

  _toNumeral(value) {
    const n = Numeral(value) // eslint-disable-line new-cap

    // numeral.js converts empty strings into 0 for no reason, so if given
    // value was not '0' or 0, treat it as null.
    // or
    // numeral.js can sometimes convert values (like '4.5.2') into NaN
    // and we would rather null than NaN.
    if (n.value() === 0 && (value !== 0 && value !== '0') || isNaN(n.value())) {
      return null
    }

    return n
  }

  render() {
    return (
      <div className={cx(sizeClassNames(this.props))}>
        <div className={formGroupCx(this.props)}>
          <div>
            <Label {...this.props} />
          </div>
          {this._input()}
          <Saved saved={this.props.saved} />
          <InputErrorList errors={this.props.errors} />
        </div>
      </div>
    )
  }

}
