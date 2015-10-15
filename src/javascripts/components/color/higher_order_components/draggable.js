let React = require("react")

export default function(componentClass) {

  return class extends React.Component {
    static displayName = "Draggable"

    static propTypes = {
      max: React.PropTypes.number,
    }

    static defaultProps = {
      max: 1,
    }

    state = { dragging: false }

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
      return (value / this.props.max) * 100 + "%"
    }

    getScaledValue = (value) => {
      let min = 0
      let max = 1
      let clamp = value < min ? min : (value > max ? max : value)
      return clamp * this.props.max
    }

    startDragging = (e) => {
      this.setState({dragging: true})
      this._setCoordinates(e)
    }

    _getPosition(e) {
      if (e.touches) e = e.touches[0]
      return {x: e.clientX, y: e.clientY}
    }

    _onMouseMove = (e) => {
      if (this.state.dragging) {
        e.preventDefault()
        this._setCoordinates(e)
      }
    }

    _onMouseUp = () => {
      if (this.state.dragging) {
        this.setState({dragging: false})
      }
    }

    _setCoordinates(e) {
      let coords = this._getPosition(e)
      this.setState({
        clientX: coords.x,
        clientY: coords.y,
      })
    }

    _childProps() {
      let {clientX, clientY} = this.state
      let {startDragging, getPercentageValue, getScaledValue, active} = this
      return Object.assign({}, this.props, {
        clientX,
        clientY,
        active,
        startDragging,
        getPercentageValue,
        getScaledValue,
      })
    }

    render() {
      return React.createElement(componentClass, this._childProps())
    }

  }
}
