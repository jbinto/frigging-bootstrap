import React from 'react'

export default class ErrorBody extends React.Component {
  static propTypes = {
    msg: React.PropTypes.string.isRequired,
    i: React.PropTypes.number,
  }

  static defaultProps = {
    i: 0,
  }

  render() {
    return (
      <span className="help-block" key={`error-${this.props.i}`}>
        <i
          className="fa fa-exclamation-circle"
          key={`error-label-${this.props.i}`}
        ></i>
        {' '}
        {this.props.msg}
      </span>
    )
  }
}
