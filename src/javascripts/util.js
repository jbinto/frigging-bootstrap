import cx from "classnames"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

module.exports = {
  errorList(errors) {
    let i = 0
    return (errors || []).map( (msg) => module.exports.error(msg, i++))
  },

  error(msg, i=0) {
    let transtionAttrs = {
      transitionName: "errorLabel",
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
            {" "}
            {msg}
          </i>
        </span>
      </ReactCSSTransitionGroup>
    )
  },

  label(props, overrides = {}) {
    let horizontalClasses = sizeClassNames(props.labelWidth, {offsets: false})
    if (!props.label || props.block) {
      if (props.layout === "horizontal" && !props.block) {
        return <div className={horizontalClasses}/>
      }
      else {
        return ""
      }
    }
    let labelHtml = Object.assign({}, props, overrides)
    labelHtml.className = cx(labelHtml.className, {
      [horizontalClasses]: props.layout === "horizontal",
    })

    return (
      <div>
        <label {...labelHtml}>
          {props.label}
        </label>
      </div>
    )
  },

  saveList(isSave) {
    return module.exports.save({
      saved: isSave,
    })
  },

  save({saved, className}) {
    className = className || "frigb-saved pull-right"
    if (!saved) return ""
    return <span className={className} key="saved">saved</span>
  },

  inputContainerCx(props) {
    let labelWidth = props.labelWidth || {}
    let inputWidth = {}
    // The width of the input is the number of columns left after the label
    // is placed on the row. If the label takes a full row (12 coluns) then
    // the input is given another row (12 columns wide).
    for (let k in labelWidth) inputWidth[k] = (12 - labelWidth[k]) || 12
    let horizontalClasses = sizeClassNames(inputWidth, {offsets: false})
    return cx({
      [horizontalClasses]: props.layout === "horizontal" && !props.block,
      ["col-xs-12"]: props.layout === "horizontal" && props.block,
    })
  },

  sizeClassNames(props = {}, opts = {offsets: true}) {
    var classes = {}
    var sizes = ["xs", "sm", "md", "lg"]
    // Adding column classes
    for (var k of sizes) {
      if (props[k] != null) classes[`col-${k}-${props[k]}`] = true
    }
    // Adding offset classes
    if (opts.offsets) {
      for (var size of sizes) {
        k = `${size}Offset`
        if (props[k] == null) continue
        classes[`col-${size}-offset-${props[k]}`] = true
      }
    }
    return cx(classes)
  },

  formGroupCx(props, overrides = {}) {
    let isCheckbox = props.inputHtml.type === "checkbox"
    return cx(Object.assign({
      "form-group": !isCheckbox,
      "checkbox": isCheckbox,
      "has-error": props.errors != null,
      "has-success": props.modified && props.errors == null,
    }, overrides))
  },

}

var {sizeClassNames} = module.exports
