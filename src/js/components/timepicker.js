import React from 'react'
import cx from 'classnames'

import { HigherOrderComponents } from 'frig'

import TimepickerPopup from './timepicker_popup'
import InputErrorList from './input_error_list'
import Saved from './saved'
import Label from './label'
import { sizeClassNames, formGroupCx } from '../util.js'
import defaultProps from '../default_props.js'
import defaultPropTypes from '../default_prop_types.js'

@HigherOrderComponents.Focusable
export default class TimePicker extends React.Component {
  static displayName = 'FriggingBootstrap.TimePicker'

  static defaultProps = defaultProps

  static propTypes = Object.assign({},
    defaultPropTypes, {
      focused: React.PropTypes.bool.isRequired,
      inputHtml: React.PropTypes.object,
    }
  )

  _inputCx() {
    return cx(
      this.props.inputHtml.className,
      'frigb-timepicker-input',
      'form-control',
    )
  }

  _input() {
    const inputProps = Object.assign({}, this.props.inputHtml, {
      valueLink: this.props.valueLink,
      className: this._inputCx(),
      onFocus: () => {
        if (this.props.valueLink.value == null) {
          this.props.valueLink.requestChange('12:00pm')
          return true
        }

        return false
      },
    })
    return <input {...inputProps} />
  }

  _timePopup() {
    if (this.props.focused === false) return false

    return <TimepickerPopup valueLink={this.props.valueLink} />
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
        {this._timePopup()}
      </div>
    )
  }

}
