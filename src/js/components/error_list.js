import React from 'react'
import ErrorMessage from './error_message'

export default class ErrorList extends React.Component {
  static propTypes = {
    errors: React.PropTypes.arrayOf(
      React.PropTypes.string
    ).isRequired,
  }

  render() {
    const { errors } = this.props
    if (!errors) return null
    return (
      <div>
        {errors.map((msg, i) =>
          <ErrorMessage msg={msg} i={i} />
        )}
      </div>
    )
  }
}
