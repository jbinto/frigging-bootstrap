import React from 'react'
import ReactDOM from 'react-dom'
import {
  saveList,
  errorList,
  sizeClassNames,
  formGroupCx,
  label,
} from '../util.js'
import cx from 'classnames'

export default class FileInput extends React.Component {
  static displayName = 'FriggingBootstrap.FileInput'

  static defaultProps = Object.assign(require('../default_props.js'), {
    prefix: undefined,
    suffix: undefined,
  })

  static propTypes = {
    inputHtml: React.PropTypes.shape({
      type: React.PropTypes.string.isRequired,
    }).isRequired,
    initialValue: React.PropTypes.string.isRequired,

    valueLink: React.PropTypes.shape({
      value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
        React.PropTypes.bool,
      ]),
      requestChange: React.PropTypes.func,
    }).isRequired,

    className: React.PropTypes.string,
    prefix: React.PropTypes.string,
    suffix: React.PropTypes.string,

    saved: React.PropTypes.bool,
    errors: React.PropTypes.array,
  }

  componentWillMount() {
    this.setState({ image: this.props.initialValue })
  }

  _input() {
    const inputProps = Object.assign({}, this.props.inputHtml, {
      className: cx(this.props.className, 'form-control'),
      type: 'file',
      accept: 'image/png,image/gif,image/jpeg',
      ref: 'frigFile',
      valueLink: {
        requestChange: this._loadFile.bind(this),
      },
    })
    return <input {...inputProps} />
  }

  _loadFile() {
    this.fReader = new FileReader()
    this.fReader.onloadend = this._onFileLoad.bind(this)
    const file = ReactDOM.findDOMNode(this.refs.frigFile).files[0]
    this.fReader.readAsDataURL(file)
  }

  _onFileLoad() {
    this.props.valueLink.requestChange(this.fReader.result.slice(0))
  }

  _image() {
    if (this.props.valueLink.value == null) return ''
    return (
      <img
        className="thumbnail"
        height="125"
        width="125"
        src={this.props.valueLink.value}
      />
    )
  }

  _inputPrefix() {
    if (this.props.prefix == null) return ''
    return <div className="input-group-addon">{this.props.prefix}</div>
  }

  _inputSuffix() {
    if (this.props.suffix == null) return ''
    return <div className="input-group-addon">{this.props.suffix}</div>
  }

  _inputGroup() {
    if (this.props.prefix || this.props.suffix) {
      return (
        <div className="input-group">
          {this._inputPrefix()}
          {this._input()}
          {this._inputSuffix()}
        </div>
      )
    }

    return this._input()
  }

  render() {
    return (
      <div className={cx(sizeClassNames(this.props))}>
        <div className={formGroupCx(this.props)}>
          {label(this.props)}
          <div className="controls">
            <div className="image-upload">
              {this._image()}
              {this._inputGroup()}
              {saveList(this.props.saved)}
            </div>
          </div>
          {errorList(this.props.errors)}
        </div>
      </div>
    )
  }

}
