import React from 'react'

export default class Form extends React.Component {
  static displayName = 'FriggingBootstrap.Form'

  static defaultProps = {
    layout: 'vertical',
  }

  static propTypes = {
    formHtml: React.PropTypes.shape({
      className: React.PropTypes.string,
    }),
    layout: React.PropTypes.string,
    children: React.PropTypes.any.isRequired,
  }

  _formHtml() {
    const layoutClassName = `form-${this.props.layout}`
    const className = this.props.formHtml ? this.props.formHtml.className : ''
    return Object.assign({}, this.props.formHtml, {
      ref: 'form',
      className: `${className} ${layoutClassName}`.trim(),
    })
  }

  render() {
    return (
      <form {...this._formHtml()}>
        {this.props.children}
      </form>
    )
  }

}
