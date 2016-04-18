import React from 'react'

export default class Saved extends React.Component {
  static propTypes = {
    saved: React.PropTypes.bool,
    className: React.PropTypes.string.isRequired,
  }

  static defaultProps = {
    className: 'frigb-saved pull-right',
  }

  render() {
    const { saved, className } = this.props
    if (!saved) return null
    return <span className={className} key="saved">saved</span>
  }
}
