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
      return (value / this.props.max) * 100 + "%"
    }

    getScaledValue = (value) => {
      let min = 0
      let max = 1
      let clamp = value < min ? min : (value > max ? max : value)
      return clamp * this.props.max
    }

    startDragging = (e) => {
      this.setState({
        dragging: true,
        ...this._clientCoords(e),
      })
    }

    _onMouseMove = (e) => {
      if (this.state.dragging) {
        e.preventDefault()
        this.setState(this._clientCoords(e))
      }
    }

    _onMouseUp = (e) => {
      this.setState({
        dragging: false,
        ...this._clientCoords(e),
      })
    }

    _clientCoords(e) {
      let {clientX, clientY} = (e.touches == null ? e : e.touches[0])
      return {clientX, clientY}
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
