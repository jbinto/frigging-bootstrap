import React from 'react'

const propTypes = {
  valueLink: React.PropTypes.shape({
    value: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.bool,
    ]),
    requestChange: React.PropTypes.func,
  }).isRequired,
  inputHtml: React.PropTypes.object,
  className: React.PropTypes.string,
  saved: React.PropTypes.bool,
  errors: React.PropTypes.array,
}

export default propTypes