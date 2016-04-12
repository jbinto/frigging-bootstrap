import React from 'react'
import Numeral from 'numeral'
import cx from 'classnames'
import {
  saveList,
  errorList,
  sizeClassNames,
  formGroupCx,
  label,
} from '../util.js'

export default class Number extends React.Component {
  static displayName = 'FriggingBootstrap.Number'

  static defaultProps = Object.assign(require('../default_props.js'), {
    format: '0,0[.][00]',
  })

  static propTypes = {
    inputHtml: React.PropTypes.shape({
      type: React.PropTypes.string.isRequired,
      className: React.PropTypes.string,
    }).isRequired,

    format: React.PropTypes.string,

    valueLink: React.PropTypes.shape({
      value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
        React.PropTypes.bool,
      ]),
      requestChange: React.PropTypes.func,
    }).isRequired,

    saved: React.PropTypes.bool,
    errors: React.PropTypes.array,
  }

  state = {
    formattedValue: '',
  }

  _formatNumber(currentNumber) {
    if (!this.props.format) return currentNumber

    return currentNumber ? currentNumber.format(this.props.format) : ''
  }

  _onBlur() {
    let value = this.props.valueLink.value
    value = value.replace(/,/g, '')
    value = this._toNumeral(value) || ''
    value = this._formatNumber(value)

    this.setState({ formattedValue: value })
  }

  _onChange(value) {
    this.setState({ formattedValue: value })

    this.props.valueLink.requestChange(value.replace(/,/g, ''))
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
      valueLink: {
        value: (this.state.formattedValue || this._formatNumber(
          this._toNumeral(this.props.valueLink.value) || '')
        ),
        requestChange: this._onChange.bind(this),
      },
    })

    return <input {...inputProps} />
  }

  _isNumber(value) {
    const number = parseFloat(value)
    return !Number.isNaN(parseFloat(number)) && Number.isFinite(number)
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
            {label(this.props)}
          </div>
          {this._input()}
          {saveList(this.props.saved)}
          {errorList(this.props.errors)}
        </div>
      </div>
    )
  }

}
