import cx from 'classnames'
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const errorList = (errors) => {
  let i = 0
  return (errors || []).map((msg) => module.exports.error(msg, i++))
}

const error = (msg, i = 0) => { // eslint-disable-line react/display-name
  const transtionAttrs = {
    transitionName: 'errorLabel',
    transitionAppear: true,
    transitionAppearTimeout: 0,
    transitionEnterTimeout: 0,
    transitionLeaveTimeout: 0,
    key: `error-transition-${i}`,
  }
  return (
    <ReactCSSTransitionGroup {...transtionAttrs}>
      <span className="help-block" key={`error-${i}`}>
        <i
          className="fa fa-exclamation-circle"
          key={`error-label-${i}`}
        >
          {' '}
          {msg}
        </i>
      </span>
    </ReactCSSTransitionGroup>
  )
}

const sizeClassNames = (props = {}, opts = { offsets: true }) => {
  const classes = {}
  const sizes = ['xs', 'sm', 'md', 'lg']
  // Adding column classes
  for (const k of sizes) {
    if (props[k] != null) classes[`col-${k}-${props[k]}`] = true
  }
  // Adding offset classes
  if (opts.offsets) {
    for (const size of sizes) {
      const k = `${size}Offset`
      if (props[k] == null) continue
      classes[`col-${size}-offset-${props[k]}`] = true
    }
  }
  return cx(classes)
}

class Label extends React.Component {
  static propTypes = {
    labelWidth: React.PropTypes.number.isRequired,
    layout: React.PropTypes.string.isRequired,
    block: React.PropTypes.bool,
    label: React.PropTypes.string,
  }

  static defaultProps = {
    block: false,
    label: '',
  }

  isEmpty() { return !this.props.label }

  render() {
    const horizontalClasses = sizeClassNames(
      this.props.labelWidth, { offsets: false }
    )

    if (this.props.block) return null
    if (this.props.layout === 'horizontal' && this.isEmpty()) {
      return <div className={horizontalClasses} />
    }

    const labelHtml = Object.assign({}, this.props)
    labelHtml.className = cx(labelHtml.className, {
      [horizontalClasses]: this.props.layout === 'horizontal',
    })

    return (
      <div>
        <label {...labelHtml}>
          {this.props.label}
        </label>
      </div>
    )
  }
}

const saveList = (isSave) =>
  module.exports.save({
    saved: isSave,
  })

const save = ({ saved, className = 'frigb-saved pull-right' }) => {
  if (!saved) return ''
  return <span className={className} key="saved">saved</span>
}

save.propTypes = {
  saved: React.PropTypes.bool.isRequired,
  className: React.PropTypes.string.isRequired,
}

const inputContainerCx = (props) => {
  const labelWidth = props.labelWidth || {}
  const inputWidth = {}
  // The width of the input is the number of columns left after the label
  // is placed on the row. If the label takes a full row (12 coluns) then
  // the input is given another row (12 columns wide).
  Object.keys(labelWidth).forEach((k) => {
    inputWidth[k] = (12 - labelWidth[k]) || 12
  })

  const horizontalClasses = sizeClassNames(inputWidth, { offsets: false })
  return cx({
    ['col-xs-12']: props.layout === 'horizontal' && props.block,
    [horizontalClasses]: props.layout === 'horizontal' && !props.block,
  })
}

const formGroupCx = (props) => {
  const isCheckbox = props.inputHtml.type === 'checkbox'

  return cx(Object.assign({
    'form-group': !isCheckbox,
    checkbox: isCheckbox,
    'has-error': props.errors != null,
    'has-success': props.modified && props.errors == null,
  }))
}

export {
  error,
  errorList,
  sizeClassNames,
  Label,
  saveList,
  save,
  inputContainerCx,
  formGroupCx,
  sizeClassNames,
}
