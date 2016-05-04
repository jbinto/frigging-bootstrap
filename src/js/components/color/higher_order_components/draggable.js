import React from 'react'

export default function({ updateClientCoords }) {
  return (ComponentClass) => { // eslint-disable-line arrow-body-style
    return class Draggable extends React.Component {
      static displayName = 'Draggable'

      static propTypes = {
        clientY: React.PropTypes.number,
        clientX: React.PropTypes.number,
        max: React.PropTypes.number,
      }

      static defaultProps = {
        max: 1,
      }

      state = {
        dragging: false,
      }

      componentDidMount() {
        document.addEventListener('mousemove', this._onMouseMove)
        document.addEventListener('touchmove', this._onMouseMove)
        document.addEventListener('mouseup', this._onMouseUp)
        document.addEventListener('touchend', this._onMouseUp)
      }

      componentWillUnmount() {
        document.removeEventListener('mousemove', this._onMouseMove)
        document.removeEventListener('touchmove', this._onMouseMove)
        document.removeEventListener('mouseup', this._onMouseUp)
        document.removeEventListener('touchend', this._onMouseUp)
      }

      getPercentageValue = (value) => {
        const percentage = (value / this.props.max) * 100
        return `${percentage}%`
      }

      getScaledValue = (value) => {
        let clamp = value
        if (value < 0) clamp = 0
        if (value > 1) clamp = 1
        return clamp * this.props.max
      }

      startDragging = (e) => {
        this.setState({
          dragging: true,
        })
        this._updateClientCoords(e)
      }

      _onMouseMove = (e) => {
        if (this.state.dragging) {
          this._updateClientCoords(e)
        }
      }

      _onMouseUp = (e) => {
        if (this.state.dragging) {
          this.setState({
            dragging: false,
          })
          this._updateClientCoords(e)
        }
      }

      _updateClientCoords(e) {
        e.preventDefault()
        const { clientX, clientY } = (e.touches == null ? e : e.touches[0])
        updateClientCoords.bind(this)({ clientX, clientY })
      }

      _childProps() {
        const { startDragging, getPercentageValue, getScaledValue, active } = this
        return Object.assign({}, this.props, {
          active,
          startDragging,
          getPercentageValue,
          getScaledValue,
        })
      }

      render() {
        return <ComponentClass {...this._childProps()} />
      }
    }
  }
}
