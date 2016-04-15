import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ErrorBody from './error_body'

export default class ErrorMessage extends React.Component {
  static propTypes = {
    msg: React.PropTypes.string.isRequired,
    i: React.PropTypes.number,
  }

  static defaultProps = {
    i: 0,
  }

  render() {
    const transtionAttrs = {
      transitionName: 'errorLabel',
      transitionAppear: true,
      transitionAppearTimeout: 0,
      transitionEnterTimeout: 0,
      transitionLeaveTimeout: 0,
      key: `error-transition-${this.props.i}`,
    }
    return (
      <ReactCSSTransitionGroup {...transtionAttrs}>
        <ErrorBody {...this.props} />
      </ReactCSSTransitionGroup>
    )
  }
}
