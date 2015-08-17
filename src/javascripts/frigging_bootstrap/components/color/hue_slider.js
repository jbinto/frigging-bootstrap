let React = require("react")
let Colr = require('colr')
let {errorList, sizeClassNames, formGroupCx, label} = require("../../util.js")
let {div, input, img} = React.DOM
let cx = require("classnames")

export default class extends React.Component {
  static defaultProps = Object.assign(require("../../default_props.js"))

  propTypes: {
    value: React.PropTypes.number.isRequired,
  }

  render() {
    return div({
        className: "slider vertical",
        onMouseDown: this.startUpdates,
        onTouchStart: this.startUpdates,
      },
        div({
          className: "track",
        }),
        div({
          className: "pointer",
          style: {
            "bottom": this._getPercentageValue(this.props.value),
          },
        })
      )
    }
}