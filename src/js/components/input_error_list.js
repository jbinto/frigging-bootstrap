import React from 'react'
import InputError from './input_error'

export default class InputErrorList extends React.Component {
  static propTypes = {
    errors: React.PropTypes.array,
  }

  render() {
    const { errors } = this.props
    if (!errors) return null
    return (
      <div>
        {errors.map((msg, i) => {
          return <InputError msg={msg} i={i} key={i} />
        }
        )}
      </div>
    )
  }
}
