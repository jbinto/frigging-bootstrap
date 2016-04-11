import React from 'react'
import ReactDOM from 'react-dom'
import DefaultProps from '../default_props.js'

export default class Form extends React.Component {
  static displayName = 'FriggingBootstrap.Form'

  static defaultProps = {
    layout: DefaultProps.layout,
  }

  static propTypes = {
    formHtml: React.PropTypes.shape({
      className: React.PropTypes.string,
    }),
    layout: React.PropTypes.string,
    children: React.PropTypes.arrayOf(React.PropTypes.element),
  }

  _formHtml() {
    const className = this.props.layout ? `form-${this.props.layout}` : ''
    return Object.assign({}, this.props.formHtml, {
      ref: 'form',
      className: `${this.props.formHtml.className || ''} ${className}`.trim(),
    })
  }

  formData() {
    const formElement = ReactDOM.findDOMNode(this.refs.form)
    return new FormData(formElement)
  }

  render() {
    return (
      <form {...this._formHtml()}>
        { this.props.children }
      </form>
    )
  }

}
