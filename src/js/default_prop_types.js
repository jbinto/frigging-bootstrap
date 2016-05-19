import React from 'react'

const propTypes = {
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
    React.PropTypes.bool,
  ]).isRequired,
  onChange: React.PropTypes.func.isRequired,
  inputHtml: React.PropTypes.object,
  className: React.PropTypes.string,
  saved: React.PropTypes.bool,
  errors: React.PropTypes.array,
}

Object.freeze(propTypes)

export default propTypes
