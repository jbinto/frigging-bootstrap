const defaultProps = {
  // Sizes
  xs: 12,
  // Block changes inputs with layout: "horizontal" to use the full width of
  // their container and disables the label.
  block: false,
  // Label width for horizontal labels
  labelWidth: {
    xs: 12,
    sm: 2,
  },
  inputHtml: {},
}

Object.freeze(defaultProps)

module.exports = defaultProps
