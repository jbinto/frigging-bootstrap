import React from 'react'

export class ErrorList extends React.Component {
  static propTypes = {
    errors: React.PropTypes.arrayOf(
      React.PropTypes.string
    ).isRequired,
  }

  render() {
    const { errors } = this.props
    if (!errors) {
      return null
    }
    return (
      <div>
        {errors.map((msg, i) =>
          <Error msg={msg} i={i} />
        )}
      </div>
    )
  }
}
