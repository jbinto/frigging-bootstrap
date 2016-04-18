import cx from 'classnames'

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
  sizeClassNames,
  inputContainerCx,
  formGroupCx,
}
