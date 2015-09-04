require("whatwg-fetch/fetch.js")
let React = require("react")
let cx = require("classnames")
let fuzzy = require('fuzzy')
let {div, a, input, i, ul, li, span} = React.DOM
let BootstrapInput = require("./input.js")
let FrigInput = React.createFactory(require("frig").Input)
let {errorList, savedNotification} = require("../util")
let {promisedTimeout} = require("frig").util

export default class extends React.Component {

  displayName = "Frig.friggingBootstrap.Typeahead"

  static defaultProps = Object.assign(require("../default_props.js"), {
    minLength: 3,
    maxSuggestions: 5,
    displaySelections: true,
  })

  state = {
    persistedOptions: [],
  }

  componentWillMount() {
    this._updateInputValueFromProps(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this._updateInputValueFromProps(nextProps, this.props)
  }

  componentDidMount() {
    this._onDocumentClick = this._onDocumentClick.bind(this)
    document.addEventListener("click", this._onDocumentClick)
  }

  componentWillUnmount() {
    document.removeEventListener("click", this._onDocumentClick)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.inputValue === prevState.inputValue) return
    this._onInputChange(this.state.inputValue)
  }

  _updateInputValueFromProps(nextProps, prevProps = {valueLink: {}}) {
    if (nextProps.valueLink.value === (prevProps.valueLink||{}).value) return
    let selections = this._selections(nextProps)
    if (this.props.multiple || selections.length != 1) return
    let value = selections[0].label
    if (value !== this.state.inputValue) this.setState({inputValue: value})
  }

  // Select the user-entered option if they press enter
  _onKeyDown(e) {
    if (!(e.key === 'Enter') || !this.props.multiple) return
    e.preventDefault()
    let option = this._optionForCurrentInput()
    if (option == null) {
      // TODO: Present the user with an error if their input is not an option
    }
    else {
      this._select(option)
    }
  }

  _optionForCurrentInput(inputValue = this._inputValue()) {
    let filter = (o) => o.label === inputValue
    return this._options().filter(filter)[0]
  }

  _select(option, e) {
    if (e != null) {
      e.stopPropagation()
      e.preventDefault()
    }
    // Reseting the suggestions and input text for multiple-selects and updating
    // the input text for single-selects
    this.setState({
      inputValue: this.props.multiple ? "" : option.label,
      // Selected options are persisted so that they are not lost when the
      // props.options updates
      persistedOptions: this.state.persistedOptions.concat(option),
    })
    let requestChange = this.props.valueLink.requestChange
    if (this.props.multiple) {
      let values = (this.props.valueLink.value || []).concat(option.value)
      requestChange(values)
    }
    else {
      requestChange(option.value)
    }
  }

  _deselect(option, e) {
    if (e != null) {
      e.stopPropagation()
      e.preventDefault()
    }
    let filter = (o) => o.hash !== option.hash
    let persistedOptions = this.state.persistedOptions.filter(filter)
    this.setState({persistedOptions})
    if (this.props.multiple) {
      let value = this.props.valueLink.value.filter(
        (val) => JSON.stringify(val) !== option.hash
      )
      this.props.valueLink.requestChange(value)
    }
    else {
      this.props.valueLink.requestChange(undefined)
    }
  }

  _onInputChange(val) {
    // select the user's input if it matches an option (single-selects only)
    let option = this._optionForCurrentInput(val)
    if(!this.props.multiple && option != null) this._select(option)
  }

  _options(nextProps = this.props) {
    let options = nextProps.options
    options = (options || []).concat(this.state.persistedOptions)
    let hashes = []
    // Adding hashes (for selection lookup) and removing duplicates
    for (let i in options) {
      let hash = options[i].hash = JSON.stringify(options[i].value)
      if (hashes.indexOf(hash) >= 0) delete options[i]
      hashes.push(hash)
    }
    return options
  }

  _selections(nextProps = this.props) {
    let values = nextProps.valueLink.value
    if (values == null) return []
    if (!nextProps.multiple) values = [values]
    let hashedValues = values.map((value) => JSON.stringify(value))
    let options = this._options(nextProps)
    return options.filter((o) => hashedValues.indexOf(o.hash) >= 0)
  }

  _suggestions() {
    // fuzzy match on the options
    let fuzzyOpts = {extract: (o) => o.label}
    let matches = fuzzy.filter(this._inputValue(), this._options(), fuzzyOpts)
    let suggestions = matches.map((match) => match.original)
    // filter out already selected options from the suggestions
    let selectionHashes = this._selections().map((o) => o.hash)
    suggestions = suggestions.filter((o) => selectionHashes.indexOf(o.hash) < 0)
    // truncate the suggestions to it's max length
    suggestions.length = Math.min(suggestions.length, this.props.maxSuggestions)
    return suggestions
  }

  _selectionsList() {
    if (!this.props.multiple || !this.props.displaySelections) return ""
    let className = "label label-primary frigb-ta-selection"
    let index = 0
    // if there are selected items and multiple is true return the actual list
    return this._selections().map((o) => {
      return div({className, key: `selection-${index++}`},
        o.label,
        " ",
        i({
          className: "fa fa-times",
          onClick: this._deselect.bind(this, o),
          title: "Remove from list",
        }),
      )
    })
  }

  // Transfers focus to the nested React.DOM.input component
  // (nested inside the FriggingBootstrapInput inside the FrigInput)
  _focusInput() {
    React.findDOMNode(this._inputComponent).focus()
  }

  _onDocumentClick(e) {
    let target = (e.originalTarget) ? e.originalTarget : e.srcElement
    let isInside = React.findDOMNode(this._wrapperComponent).contains(target)
    if (!isInside) this.setState({focused: false})
  }

  _suggestionsList() {
    let suggestions = this._suggestions()
    let wrapperCx = cx("dropdown", {
      open: suggestions.length > 0 && this.state.focused,
    })
    return div({className: wrapperCx},
      ul({className: "dropdown-menu frigb-ta-suggestions col-xs-12"},
        suggestions.map((o) => {
          return li({key: `option-${o.hash}`},
            a({href: "#", onClick: this._select.bind(this, o)}, o.label),
          )
        })
      ),
    )
  }

  _inputWrapper(inputHtml) {
    let className = inputHtml.className
    inputHtml = Object.assign({}, inputHtml, {
      className: "frigb-ta-input",
      ref: (component) => this._inputComponent = component,
      onFocus: () => this.setState({focused: true}),
    })
    inputHtml.onKeyDown = this._onKeyDown.bind(this)
    return div({className: "frigb-ta", ref: (c) => this._wrapperComponent = c},
      div({className, onClick: this._focusInput.bind(this)},
        this._selectionsList(),
        input(inputHtml),
      ),
      savedNotification({parentProps: this.props}),
      this._suggestionsList(),
      errorList(this.state.errors),
    )
  }

  _inputValue() {
    return this.state.inputValue || ""
  }

  render() {
    let inputPropOverrides = {
      component: BootstrapInput,
      inputWrapper: this._inputWrapper.bind(this),
      valueLink: {
        value: this._inputValue(),
        requestChange: (inputValue) => this.setState({inputValue}),
      },
      validate: false,
      ref: "frigInput",
      onComponentMount: () => {},
      onComponentUnmount: () => {},
    }
    return FrigInput(Object.assign({}, this.props, inputPropOverrides))
  }

}
