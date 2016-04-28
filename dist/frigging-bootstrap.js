(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("frig"), require("react-addons-css-transition-group"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "frig", "react-addons-css-transition-group", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["FriggingBootstrap"] = factory(require("react"), require("frig"), require("react-addons-css-transition-group"), require("react-dom"));
	else
		root["FriggingBootstrap"] = factory(root["React"], root["Frig"], root["React.addons.CSSTransitionGroup"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_18__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _checkbox = __webpack_require__(5);

	var _checkbox2 = _interopRequireDefault(_checkbox);

	var _color = __webpack_require__(17);

	var _color2 = _interopRequireDefault(_color);

	var _form_error_list = __webpack_require__(25);

	var _form_error_list2 = _interopRequireDefault(_form_error_list);

	var _file = __webpack_require__(26);

	var _file2 = _interopRequireDefault(_file);

	var _form = __webpack_require__(27);

	var _form2 = _interopRequireDefault(_form);

	var _input = __webpack_require__(28);

	var _input2 = _interopRequireDefault(_input);

	var _number = __webpack_require__(29);

	var _number2 = _interopRequireDefault(_number);

	var _select = __webpack_require__(31);

	var _select2 = _interopRequireDefault(_select);

	var _submit = __webpack_require__(32);

	var _submit2 = _interopRequireDefault(_submit);

	var _switch = __webpack_require__(33);

	var _switch2 = _interopRequireDefault(_switch);

	var _text = __webpack_require__(34);

	var _text2 = _interopRequireDefault(_text);

	var _timepicker = __webpack_require__(35);

	var _timepicker2 = _interopRequireDefault(_timepicker);

	var _input_error_list = __webpack_require__(10);

	var _input_error_list2 = _interopRequireDefault(_input_error_list);

	var _saved = __webpack_require__(14);

	var _saved2 = _interopRequireDefault(_saved);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = {
	  Checkbox: _checkbox2.default,
	  Color: _color2.default,
	  FormErrorList: _form_error_list2.default,
	  File: _file2.default,
	  Form: _form2.default,
	  Input: _input2.default,
	  Number: _number2.default,
	  Select: _select2.default,
	  Submit: _submit2.default,
	  Switch: _switch2.default,
	  Text: _text2.default,
	  Timepicker: _timepicker2.default,
	  InputErrorList: _input_error_list2.default,
	  Saved: _saved2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _frig = __webpack_require__(9);

	var _input_error_list = __webpack_require__(10);

	var _input_error_list2 = _interopRequireDefault(_input_error_list);

	var _saved = __webpack_require__(14);

	var _saved2 = _interopRequireDefault(_saved);

	var _util = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Checkbox = (_dec = _frig.HigherOrderComponents.Boolean, _dec(_class = (_temp = _class2 = function (_React$Component) {
	  _inherits(Checkbox, _React$Component);

	  function Checkbox() {
	    _classCallCheck(this, Checkbox);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).apply(this, arguments));
	  }

	  _createClass(Checkbox, [{
	    key: '_inputHtml',
	    value: function _inputHtml() {
	      return Object.assign({}, this.props.inputHtml, {
	        type: 'checkbox',
	        value: this.props.key,
	        checkedLink: this.props.valueLink
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'form-group' },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _classnames2.default)((0, _util.sizeClassNames)(this.props)) },
	          _react2.default.createElement(
	            'div',
	            { className: (0, _util.formGroupCx)(this.props) },
	            _react2.default.createElement(
	              'label',
	              this.props.labelHtml,
	              _react2.default.createElement('input', this._inputHtml()),
	              this.props.label ? ' ' + this.props.label : ''
	            ),
	            _react2.default.createElement(_saved2.default, { saved: this.props.saved }),
	            _react2.default.createElement(_input_error_list2.default, { errors: this.props.errors })
	          )
	        )
	      );
	    }
	  }]);

	  return Checkbox;
	}(_react2.default.Component), _class2.displayName = 'FriggingBootstrap.Checkbox', _class2.defaultProps = __webpack_require__(16), _class2.propTypes = {
	  inputHtml: _react2.default.PropTypes.object.isRequired,
	  labelHtml: _react2.default.PropTypes.array.isRequired,

	  valueLink: _react2.default.PropTypes.shape({
	    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
	    requestChange: _react2.default.PropTypes.func
	  }).isRequired,

	  key: _react2.default.PropTypes.string,
	  label: _react2.default.PropTypes.string,

	  saved: _react2.default.PropTypes.bool,
	  errors: _react2.default.PropTypes.array
	}, _temp)) || _class);
	exports.default = Checkbox;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if ("function" === 'function' && _typeof(__webpack_require__(8)) === 'object' && __webpack_require__(8)) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	})();

/***/ },
/* 8 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _input_error = __webpack_require__(11);

	var _input_error2 = _interopRequireDefault(_input_error);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputErrorList = (_temp = _class = function (_React$Component) {
	  _inherits(InputErrorList, _React$Component);

	  function InputErrorList() {
	    _classCallCheck(this, InputErrorList);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputErrorList).apply(this, arguments));
	  }

	  _createClass(InputErrorList, [{
	    key: 'render',
	    value: function render() {
	      var errors = this.props.errors;

	      if (!errors) return null;
	      return _react2.default.createElement(
	        'div',
	        null,
	        errors.map(function (msg, i) {
	          return _react2.default.createElement(_input_error2.default, { msg: msg, i: i, key: i });
	        })
	      );
	    }
	  }]);

	  return InputErrorList;
	}(_react2.default.Component), _class.propTypes = {
	  errors: _react2.default.PropTypes.array
	}, _temp);
	exports.default = InputErrorList;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(12);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _input_error_body = __webpack_require__(13);

	var _input_error_body2 = _interopRequireDefault(_input_error_body);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputError = (_temp = _class = function (_React$Component) {
	  _inherits(InputError, _React$Component);

	  function InputError() {
	    _classCallCheck(this, InputError);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputError).apply(this, arguments));
	  }

	  _createClass(InputError, [{
	    key: 'render',
	    value: function render() {
	      var transtionAttrs = {
	        transitionName: 'errorLabel',
	        transitionAppear: true,
	        transitionAppearTimeout: 0,
	        transitionEnterTimeout: 0,
	        transitionLeaveTimeout: 0,
	        key: 'error-transition-' + this.props.i
	      };
	      return _react2.default.createElement(
	        _reactAddonsCssTransitionGroup2.default,
	        transtionAttrs,
	        _react2.default.createElement(_input_error_body2.default, this.props)
	      );
	    }
	  }]);

	  return InputError;
	}(_react2.default.Component), _class.propTypes = {
	  msg: _react2.default.PropTypes.string.isRequired,
	  i: _react2.default.PropTypes.number
	}, _class.defaultProps = {
	  i: 0
	}, _temp);
	exports.default = InputError;

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InputErrorBody = (_temp = _class = function (_React$Component) {
	  _inherits(InputErrorBody, _React$Component);

	  function InputErrorBody() {
	    _classCallCheck(this, InputErrorBody);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(InputErrorBody).apply(this, arguments));
	  }

	  _createClass(InputErrorBody, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "span",
	        { className: "help-block", key: "error-" + this.props.i },
	        _react2.default.createElement("i", {
	          className: "fa fa-exclamation-circle",
	          key: "error-label-" + this.props.i
	        }),
	        ' ',
	        this.props.msg
	      );
	    }
	  }]);

	  return InputErrorBody;
	}(_react2.default.Component), _class.propTypes = {
	  msg: _react2.default.PropTypes.string.isRequired,
	  i: _react2.default.PropTypes.number
	}, _class.defaultProps = {
	  i: 0
	}, _temp);
	exports.default = InputErrorBody;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Saved = (_temp = _class = function (_React$Component) {
	  _inherits(Saved, _React$Component);

	  function Saved() {
	    _classCallCheck(this, Saved);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Saved).apply(this, arguments));
	  }

	  _createClass(Saved, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var saved = _props.saved;
	      var className = _props.className;

	      if (!saved) return null;
	      return _react2.default.createElement(
	        'span',
	        { className: className, key: 'saved' },
	        'saved'
	      );
	    }
	  }]);

	  return Saved;
	}(_react2.default.Component), _class.propTypes = {
	  saved: _react2.default.PropTypes.bool,
	  className: _react2.default.PropTypes.string.isRequired
	}, _class.defaultProps = {
	  className: 'frigb-saved pull-right'
	}, _temp);
	exports.default = Saved;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.formGroupCx = exports.inputContainerCx = exports.sizeClassNames = undefined;

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var sizeClassNames = function sizeClassNames() {
	  var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var opts = arguments.length <= 1 || arguments[1] === undefined ? { offsets: true } : arguments[1];

	  var classes = {};
	  var sizes = ['xs', 'sm', 'md', 'lg'];
	  // Adding column classes
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = sizes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var _k = _step.value;

	      if (props[_k] != null) classes['col-' + _k + '-' + props[_k]] = true;
	    }
	    // Adding offset classes
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }

	  if (opts.offsets) {
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	      for (var _iterator2 = sizes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var size = _step2.value;

	        var k = size + 'Offset';
	        if (props[k] == null) continue;
	        classes['col-' + size + '-offset-' + props[k]] = true;
	      }
	    } catch (err) {
	      _didIteratorError2 = true;
	      _iteratorError2 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	          _iterator2.return();
	        }
	      } finally {
	        if (_didIteratorError2) {
	          throw _iteratorError2;
	        }
	      }
	    }
	  }
	  return (0, _classnames2.default)(classes);
	};

	var inputContainerCx = function inputContainerCx(props) {
	  var _cx;

	  var labelWidth = props.labelWidth || {};
	  var inputWidth = {};
	  // The width of the input is the number of columns left after the label
	  // is placed on the row. If the label takes a full row (12 coluns) then
	  // the input is given another row (12 columns wide).
	  Object.keys(labelWidth).forEach(function (k) {
	    inputWidth[k] = 12 - labelWidth[k] || 12;
	  });

	  var horizontalClasses = sizeClassNames(inputWidth, { offsets: false });
	  return (0, _classnames2.default)((_cx = {}, _defineProperty(_cx, 'col-xs-12', props.layout === 'horizontal' && props.block), _defineProperty(_cx, horizontalClasses, props.layout === 'horizontal' && !props.block), _cx));
	};

	var formGroupCx = function formGroupCx(props) {
	  var isCheckbox = props.inputHtml.type === 'checkbox';

	  return (0, _classnames2.default)(Object.assign({
	    'form-group': !isCheckbox,
	    checkbox: isCheckbox,
	    'has-error': props.errors != null,
	    'has-success': props.modified && props.errors == null
	  }));
	};

	exports.sizeClassNames = sizeClassNames;
	exports.inputContainerCx = inputContainerCx;
	exports.formGroupCx = formGroupCx;

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	module.exports = {
	  // Sizes
	  xs: 12,
	  sm: undefined,
	  md: undefined,
	  lg: undefined,
	  // Offsets
	  xsOffset: undefined,
	  smOffset: undefined,
	  mdOffset: undefined,
	  lgOffset: undefined,
	  // Block changes inputs with layout: "horizontal" to use the full width of
	  // their container and disables the label.
	  block: false,
	  // Label width for horizontal labels
	  labelWidth: {
	    xs: 12,
	    sm: 2
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(18);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _colr = __webpack_require__(19);

	var _colr2 = _interopRequireDefault(_colr);

	var _frig = __webpack_require__(9);

	var _input_error_list = __webpack_require__(10);

	var _input_error_list2 = _interopRequireDefault(_input_error_list);

	var _saved = __webpack_require__(14);

	var _saved2 = _interopRequireDefault(_saved);

	var _label = __webpack_require__(21);

	var _label2 = _interopRequireDefault(_label);

	var _map = __webpack_require__(22);

	var _map2 = _interopRequireDefault(_map);

	var _hue_slider = __webpack_require__(24);

	var _hue_slider2 = _interopRequireDefault(_hue_slider);

	var _util = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Color = (_dec = _frig.HigherOrderComponents.Focusable, _dec(_class = (_temp = _class2 = function (_React$Component) {
	  _inherits(Color, _React$Component);

	  function Color() {
	    _classCallCheck(this, Color);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Color).call(this));

	    _this.state = { colr: _colr2.default.fromHex('#fff') };

	    _this._onColorBlockClick = _this._onColorBlockClick.bind(_this);
	    return _this;
	  }

	  // Color information is stored in state (as well as being received in props)
	  // because the HSV format we use looses some accuracy when converted to the
	  // RGB format (ie. it is a lossy conversion). To maintain information we
	  // have to maintain the HSV non-lossy intermediate value.
	  //
	  // As an example if you were to set the saturation to 0 then the RGB color
	  // would set hue and value to zero as well (#000) loosing that hue and value
	  // context we need for the color map.


	  _createClass(Color, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this._updateColrCache(this.props);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this._updateColrCache(nextProps);
	    }
	  }, {
	    key: '_updateColrCache',
	    value: function _updateColrCache(nextProps) {
	      var nextColr = this._generateColr(nextProps.valueLink.value);
	      if (this.state.colr.toHex() === nextColr.toHex()) return;
	      this.setState({ colr: nextColr });
	    }
	  }, {
	    key: '_generateColr',
	    value: function _generateColr(hex) {
	      var colour = hex || '#fff';
	      if (!colour.match(/^#?([a-f0-9]{3}|[a-f0-9]{6})$/i)) colour = '#fff';
	      return _colr2.default.fromHex(colour);
	    }
	  }, {
	    key: '_requestColrChange',
	    value: function _requestColrChange(colr) {
	      var _this2 = this;

	      // Update state and then props so that the cache invalidation for incomming
	      // props (_updateColrCache) always sees the latest state.
	      var updateProps = function updateProps() {
	        return _this2.props.valueLink.requestChange(colr.toHex());
	      };
	      this.setState({ colr: colr }, updateProps);
	    }
	  }, {
	    key: '_colrLink',
	    value: function _colrLink() {
	      return {
	        value: this.state.colr,
	        requestChange: this._requestColrChange.bind(this)
	      };
	    }
	  }, {
	    key: '_hsv',
	    value: function _hsv() {
	      return this.state.colr.toHsvObject();
	    }
	  }, {
	    key: '_onColorBlockClick',
	    value: function _onColorBlockClick() {
	      _reactDom2.default.findDOMNode(this.refs.frigColorInput).select();
	    }
	  }, {
	    key: '_colorPopup',
	    value: function _colorPopup() {
	      if (this.props.focused === false) return undefined;
	      return _react2.default.createElement(
	        'div',
	        { className: 'controls frigb-colorpicker' },
	        _react2.default.createElement(
	          'div',
	          { className: 'frigb-hue-slider' },
	          _react2.default.createElement(_hue_slider2.default, {
	            max: 360,
	            colrLink: this._colrLink(),
	            hsv: this._hsv()
	          })
	        ),
	        _react2.default.createElement(_map2.default, {
	          max: 100,
	          colrLink: this._colrLink(),
	          hsv: this._hsv()
	        })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var inputProps = Object.assign({}, this.props.inputHtml, {
	        valueLink: this.props.valueLink,
	        ref: 'frigColorInput',
	        className: (0, _classnames2.default)(this.props.inputHtml.className, 'frigb-color-input', 'form-control')
	      });
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)((0, _util.sizeClassNames)(this.props)) },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _util.formGroupCx)(this.props) },
	          _react2.default.createElement(_label2.default, this.props),
	          _react2.default.createElement('input', inputProps),
	          _react2.default.createElement('div', {
	            className: 'frigb-color-block',
	            style: { backgroundColor: this.state.colr.toHex() },
	            onClick: this._onColorBlockClick
	          }),
	          this._colorPopup(),
	          _react2.default.createElement(_saved2.default, { saved: this.props.saved }),
	          _react2.default.createElement(_input_error_list2.default, { errors: this.props.errors })
	        )
	      );
	    }
	  }]);

	  return Color;
	}(_react2.default.Component), _class2.displayName = 'FriggingBootstrap.Color', _class2.defaultProps = Object.assign(__webpack_require__(16)), _class2.propTypes = {
	  inputHtml: _react2.default.PropTypes.object,
	  valueLink: _react2.default.PropTypes.shape({
	    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
	    requestChange: _react2.default.PropTypes.func
	  }).isRequired,

	  focused: _react2.default.PropTypes.bool,

	  saved: _react2.default.PropTypes.bool,
	  errors: _react2.default.PropTypes.array
	}, _temp)) || _class);
	exports.default = Color;

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/*
	 * DEPENDENCIES
	 */

	var convert = __webpack_require__(20);

	/*
	 * CONSTRUCTOR
	 */

	function Colr() {
	  if (this instanceof Colr === false) {
	    return new Colr();
	  }
	  this._ = {};
	}

	/*
	 * STATIC METHODS
	 */

	Colr.fromHex = function (hex) {
	  return new Colr().fromHex(hex);
	};

	Colr.fromGrayscale = function (value) {
	  return new Colr().fromGrayscale(value);
	};

	Colr.fromRgb = function (r, g, b) {
	  return new Colr().fromRgb(r, g, b);
	};

	Colr.fromRgbArray = function (arr) {
	  return new Colr().fromRgb(arr[0], arr[1], arr[2]);
	};

	Colr.fromRgbObject = function (obj) {
	  return new Colr().fromRgb(obj.r, obj.g, obj.b);
	};
	Colr.fromHsl = function (h, s, l) {
	  return new Colr().fromHsl(h, s, l);
	};

	Colr.fromHslArray = function (arr) {
	  return new Colr().fromHsl(arr[0], arr[1], arr[2]);
	};

	Colr.fromHslObject = function (obj) {
	  return new Colr().fromHsl(obj.h, obj.s, obj.l);
	};

	Colr.fromHsv = function (h, s, v) {
	  return new Colr().fromHsv(h, s, v);
	};

	Colr.fromHsvArray = function (arr) {
	  return new Colr().fromHsv(arr[0], arr[1], arr[2]);
	};

	Colr.fromHsvObject = function (obj) {
	  return new Colr().fromHsv(obj.h, obj.s, obj.v);
	};

	/*
	 * IMPORTERS
	 */

	// HEX

	Colr.prototype.fromHex = function (input) {
	  var value = convert.hex.rgb(input);
	  this._ = { rgb: value };
	  return this;
	};

	// GRAYSCALE

	Colr.prototype.fromGrayscale = function (input) {
	  input = clampByte(input);
	  var value = convert.grayscale.rgb(input);
	  this._ = { rgb: value };
	  return this;
	};

	// RGB

	Colr.prototype.fromRgb = function (r, g, b) {
	  if (typeof r !== 'number' || typeof g !== 'number' || typeof b !== 'number') {
	    throw new Error('Arguments must be numbers');
	  }
	  var value = clampRgb(r, g, b);
	  this._ = { rgb: value };
	  return this;
	};

	Colr.prototype.fromRgbArray = function (arr) {
	  return this.fromRgb(arr[0], arr[1], arr[2]);
	};

	Colr.prototype.fromRgbObject = function (obj) {
	  return this.fromRgb(obj.r, obj.g, obj.b);
	};

	// HSL

	Colr.prototype.fromHsl = function (h, s, l) {
	  if (typeof h !== 'number' || typeof s !== 'number' || typeof l !== 'number') {
	    throw new Error('Arguments must be numbers');
	  }
	  this._ = { hsl: clampHsx(h, s, l) };
	  return this;
	};

	Colr.prototype.fromHslArray = function (arr) {
	  return this.fromHsl(arr[0], arr[1], arr[2]);
	};

	Colr.prototype.fromHslObject = function (obj) {
	  return this.fromHsl(obj.h, obj.s, obj.l);
	};

	// HSV

	Colr.prototype.fromHsv = function (h, s, v) {
	  if (typeof h !== 'number' || typeof s !== 'number' || typeof v !== 'number') {
	    throw new Error('Arguments must be numbers');
	  }
	  this._ = { hsv: clampHsx(h, s, v) };
	  return this;
	};

	Colr.prototype.fromHsvArray = function (arr) {
	  return this.fromHsv(arr[0], arr[1], arr[2]);
	};

	Colr.prototype.fromHsvObject = function (obj) {
	  return this.fromHsv(obj.h, obj.s, obj.v);
	};

	/*
	 * EXPORTERS
	 */

	// HEX

	Colr.prototype.toHex = function () {
	  var cached = this._.hex;
	  if (cached !== undefined) {
	    return cached;
	  }

	  var input;
	  var cachedFrom = this._.rgb;

	  if (cachedFrom !== undefined) {
	    input = cachedFrom;
	  } else {
	    input = this.toRawRgbArray();
	  }

	  input[0] = Math.round(input[0]);
	  input[1] = Math.round(input[1]);
	  input[2] = Math.round(input[2]);

	  var value = convert.rgb.hex(input);
	  this._.hex = value;

	  return value;
	};

	// GRAYSCALE

	Colr.prototype.toGrayscale = function () {
	  var cached = this._.grayscale;
	  if (cached !== undefined) {
	    return cached;
	  }

	  var input;
	  var cachedFrom = this._.rgb;

	  if (cachedFrom !== undefined) {
	    input = cachedFrom;
	  } else {
	    input = this.toRawRgbArray();
	  }

	  var value = convert.rgb.grayscale(input);
	  this._.grayscale = value;
	  return value;
	};

	// RGB

	Colr.prototype.toRawRgbArray = function () {
	  var cached = this._.rgb;
	  if (cached !== undefined) {
	    return cached;
	  }

	  var value;

	  if ((value = this._.hsv) !== undefined) {
	    value = convert.hsv.rgb(value);
	  } else if ((value = this._.hsl) !== undefined) {
	    value = convert.hsl.rgb(value);
	  } else {
	    throw new Error('No data to convert');
	  }

	  this._.rgb = value;
	  return value;
	};

	Colr.prototype.toRawRgbObject = function () {
	  var arr = this.toRawRgbArray();
	  return { r: arr[0], g: arr[1], b: arr[2] };
	};

	Colr.prototype.toRgbArray = function () {
	  var arr = this.toRawRgbArray();
	  return [Math.round(arr[0]), Math.round(arr[1]), Math.round(arr[2])];
	};

	Colr.prototype.toRgbObject = function () {
	  var arr = this.toRgbArray();
	  return { r: arr[0], g: arr[1], b: arr[2] };
	};

	// HSL

	Colr.prototype.toRawHslArray = function () {
	  var cached = this._.hsl;
	  if (cached !== undefined) {
	    return cached;
	  }

	  var value;

	  if ((value = this._.hsv) !== undefined) {
	    value = convert.hsv.hsl(value);
	  } else if ((value = this._.rgb) !== undefined) {
	    value = convert.rgb.hsl(value);
	  } else {
	    throw new Error('No data to convert');
	  }

	  this._.hsl = value;
	  return value;
	};

	Colr.prototype.toRawHslObject = function () {
	  var arr = this.toRawHslArray();
	  return { h: arr[0], s: arr[1], l: arr[2] };
	};

	Colr.prototype.toHslArray = function () {
	  var arr = this.toRawHslArray();
	  return [Math.round(arr[0]), Math.round(arr[1]), Math.round(arr[2])];
	};

	Colr.prototype.toHslObject = function () {
	  var arr = this.toHslArray();
	  return { h: arr[0], s: arr[1], l: arr[2] };
	};

	// HSV

	Colr.prototype.toRawHsvArray = function () {
	  var cached = this._.hsv;
	  if (cached !== undefined) {
	    return cached;
	  }

	  var value;

	  if ((value = this._.hsl) !== undefined) {
	    value = convert.hsl.hsv(value);
	  } else if ((value = this._.rgb) !== undefined) {
	    value = convert.rgb.hsv(value);
	  } else {
	    throw new Error('No data to convert');
	  }

	  this._.hsv = value;
	  return value;
	};

	Colr.prototype.toRawHsvObject = function () {
	  var arr = this.toRawHsvArray();
	  return { h: arr[0], s: arr[1], v: arr[2] };
	};

	Colr.prototype.toHsvArray = function () {
	  var arr = this.toRawHsvArray();
	  return [Math.round(arr[0]), Math.round(arr[1]), Math.round(arr[2])];
	};

	Colr.prototype.toHsvObject = function () {
	  var arr = this.toHsvArray();
	  return { h: arr[0], s: arr[1], v: arr[2] };
	};

	/*
	 * MODIFIERS
	 */

	Colr.prototype.lighten = function (amount) {
	  var hsl = this.toRawHslArray();
	  hsl[2] = clampPercentage(hsl[2] + amount);
	  this._ = { hsl: hsl };
	  return this;
	};

	Colr.prototype.darken = function (amount) {
	  var hsl = this.toRawHslArray();
	  hsl[2] = clampPercentage(hsl[2] - amount);
	  this._ = { hsl: hsl };
	  return this;
	};

	/*
	 * MISC
	 */

	Colr.prototype.clone = function () {
	  var colr = new Colr();
	  colr._.hex = this._.hex;
	  colr._.grayscale = this._.grayscale;

	  if (this._.rgb !== undefined) {
	    colr._.rgb = this._.rgb.slice(0);
	  }
	  if (this._.hsv !== undefined) {
	    colr._.hsv = this._.hsv.slice(0);
	  }
	  if (this._.hsl !== undefined) {
	    colr._.hsl = this._.hsl.slice(0);
	  }

	  return colr;
	};

	/*
	 * UTILS
	 */

	function clampPercentage(val) {
	  return Math.max(Math.min(val, 100), 0);
	}

	function clampByte(byte) {
	  return Math.max(Math.min(byte, 255), 0);
	}

	function clampRgb(r, g, b) {
	  return [Math.max(Math.min(r, 255), 0), Math.max(Math.min(g, 255), 0), Math.max(Math.min(b, 255), 0)];
	}

	function clampHsx(h, s, x) {
	  return [Math.max(Math.min(h, 360), 0), Math.max(Math.min(s, 100), 0), Math.max(Math.min(x, 100), 0)];
	}

	module.exports = Colr;

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  grayscale: {
	    rgb: grayscale2rgb
	  },
	  hex: {
	    rgb: hex2rgb
	  },
	  rgb: {
	    hsl: rgb2hsl,
	    hsv: rgb2hsv,
	    hex: rgb2hex,
	    grayscale: rgb2grayscale
	  },
	  hsl: {
	    rgb: hsl2rgb,
	    hsv: hsl2hsv
	  },
	  hsv: {
	    rgb: hsv2rgb,
	    hsl: hsv2hsl
	  }
	};

	// convert a charcode to a hex val
	function hexVal(c) {
	  return c < 58 ? c - 48 : // 0 - 9
	  c < 71 ? c - 55 : // A - F
	  c - 87 // a - f
	  ;
	}

	function hex2rgb(hex) {
	  var i = hex[0] === '#' ? 1 : 0;
	  var len = hex.length;

	  if (len - i < 3) {
	    throw new Error('hex input must be at least three chars long');
	  }

	  var r, g, b;

	  var h1 = hexVal(hex.charCodeAt(0 + i));
	  var h2 = hexVal(hex.charCodeAt(1 + i));
	  var h3 = hexVal(hex.charCodeAt(2 + i));

	  if (len - i >= 6) {
	    r = (h1 << 4) + h2;
	    g = (h3 << 4) + hexVal(hex.charCodeAt(3 + i));
	    b = (hexVal(hex.charCodeAt(4 + i)) << 4) + hexVal(hex.charCodeAt(5 + i));
	  } else {
	    r = (h1 << 4) + h1;
	    g = (h2 << 4) + h2;
	    b = (h3 << 4) + h3;
	  }

	  if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
	    throw new Error('hex input is invalid');
	  }

	  return [r, g, b];
	}

	function rgb2hex(rgb) {
	  return '#' + ('000000' + ((rgb[0] << 16) + (rgb[1] << 8) + rgb[2]).toString(16)).slice(-6);
	}

	function rgb2hsl(rgb) {
	  var r = rgb[0] / 255;
	  var g = rgb[1] / 255;
	  var b = rgb[2] / 255;

	  var min = Math.min(r, g, b);
	  var max = Math.max(r, g, b);
	  var delta = max - min;
	  var h, s, l;

	  if (max === min) {
	    h = 0;
	  } else if (r === max) {
	    h = (g - b) / delta;
	  } else if (g === max) {
	    h = 2 + (b - r) / delta;
	  } else if (b === max) {
	    h = 4 + (r - g) / delta;
	  }

	  h = Math.min(h * 60, 360);

	  if (h < 0) {
	    h += 360;
	  }

	  l = (min + max) / 2;

	  if (max === min) {
	    s = 0;
	  } else if (l <= 0.5) {
	    s = delta / (max + min);
	  } else {
	    s = delta / (2 - max - min);
	  }

	  return [h, s * 100, l * 100];
	}

	function rgb2hsv(rgb) {
	  var r = rgb[0];
	  var g = rgb[1];
	  var b = rgb[2];
	  var min = Math.min(r, g, b);
	  var max = Math.max(r, g, b);
	  var delta = max - min;
	  var h, s, v;

	  if (max === 0) {
	    s = 0;
	  } else {
	    s = delta / max * 100;
	  }

	  if (max === min) {
	    h = 0;
	  } else if (r === max) {
	    h = (g - b) / delta;
	  } else if (g === max) {
	    h = 2 + (b - r) / delta;
	  } else if (b === max) {
	    h = 4 + (r - g) / delta;
	  }

	  h = Math.min(h * 60, 360);

	  if (h < 0) {
	    h += 360;
	  }

	  v = max / 255 * 100;

	  return [h, s, v];
	}

	function hsl2rgb(hsl) {
	  var h = hsl[0] / 360;
	  var s = hsl[1] / 100;
	  var l = hsl[2] / 100;

	  var r, g, b;

	  if (s === 0) {
	    // monochrome
	    r = g = b = l;
	  } else {
	    var q = l < 0.5 ? l * (s + 1) : l + s - l * s;
	    var p = 2 * l - q;
	    var t;

	    // red
	    t = h + 1 / 3;
	    if (t < 0) {
	      t += 1;
	    } else if (t > 1) {
	      t -= 1;
	    }
	    if (t < 1 / 6) {
	      r = p + (q - p) * t * 6;
	    } else if (t < 1 / 2) {
	      r = q;
	    } else if (t < 2 / 3) {
	      r = p + (q - p) * (2 / 3 - t) * 6;
	    } else {
	      r = p;
	    }

	    // green
	    t = h;
	    if (t < 0) {
	      t += 1;
	    } else if (t > 1) {
	      t -= 1;
	    }
	    if (t < 1 / 6) {
	      g = p + (q - p) * t * 6;
	    } else if (t < 1 / 2) {
	      g = q;
	    } else if (t < 2 / 3) {
	      g = p + (q - p) * (2 / 3 - t) * 6;
	    } else {
	      g = p;
	    }

	    // blue
	    t = h - 1 / 3;
	    if (t < 0) {
	      t += 1;
	    } else if (t > 1) {
	      t -= 1;
	    }
	    if (t < 1 / 6) {
	      b = p + (q - p) * t * 6;
	    } else if (t < 1 / 2) {
	      b = q;
	    } else if (t < 2 / 3) {
	      b = p + (q - p) * (2 / 3 - t) * 6;
	    } else {
	      b = p;
	    }
	  }

	  return [r * 255, g * 255, b * 255];
	}

	function hsl2hsv(hsl) {
	  var h = hsl[0];
	  var s = hsl[1] / 100;
	  var l = hsl[2] / 100;
	  var sv, v;

	  if (s === 0) {
	    return [h, 0, l * 100];
	  }

	  if (l === 0) {
	    return [h, 0, 0];
	  }

	  l *= 2;
	  s *= l <= 1 ? l : 2 - l;
	  v = (l + s) / 2;
	  sv = 2 * s / (l + s);
	  return [h, sv * 100, v * 100];
	}

	function hsv2rgb(hsv) {
	  var h = hsv[0] / 60;
	  var s = hsv[1] / 100;
	  var v = hsv[2] / 100;

	  var hi = Math.floor(h) % 6;

	  var f = h - Math.floor(h);
	  var p = 255 * v * (1 - s);
	  var q = 255 * v * (1 - s * f);
	  var t = 255 * v * (1 - s * (1 - f));
	  v = 255 * v;

	  switch (hi) {
	    case 0:
	      return [v, t, p];
	    case 1:
	      return [q, v, p];
	    case 2:
	      return [p, v, t];
	    case 3:
	      return [p, q, v];
	    case 4:
	      return [t, p, v];
	    case 5:
	      return [v, p, q];
	  }
	}

	function hsv2hsl(hsv) {
	  var h = hsv[0];
	  var s = hsv[1] / 100;
	  var v = hsv[2] / 100;
	  var sl, l;

	  if (s === 0) {
	    return [h, 0, v * 100];
	  }

	  if (v === 0) {
	    return [h, 0, 0];
	  }

	  l = (2 - s) * v;
	  sl = s * v;
	  sl /= l <= 1 ? l : 2 - l;
	  l /= 2;
	  return [h, sl * 100, l * 100];
	}

	function grayscale2rgb(value) {
	  return [value, value, value];
	}

	function rgb2grayscale(rgb) {
	  return (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _util = __webpack_require__(15);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Label = (_temp = _class = function (_React$Component) {
	  _inherits(Label, _React$Component);

	  function Label() {
	    _classCallCheck(this, Label);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Label).apply(this, arguments));
	  }

	  _createClass(Label, [{
	    key: 'isEmpty',
	    value: function isEmpty() {
	      return !this.props.label;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var horizontalClasses = (0, _util.sizeClassNames)(this.props.labelWidth, { offsets: false });

	      if (this.props.block) return null;
	      if (this.props.layout === 'horizontal' && this.isEmpty()) {
	        return _react2.default.createElement('div', { className: horizontalClasses });
	      }

	      var labelHtml = Object.assign({}, this.props);
	      labelHtml.className = (0, _classnames2.default)(labelHtml.className, _defineProperty({}, horizontalClasses, this.props.layout === 'horizontal'));

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'label',
	          labelHtml,
	          this.props.label
	        )
	      );
	    }
	  }]);

	  return Label;
	}(_react2.default.Component), _class.propTypes = {
	  labelWidth: _react2.default.PropTypes.object.isRequired,
	  layout: _react2.default.PropTypes.string.isRequired,
	  block: _react2.default.PropTypes.bool,
	  label: _react2.default.PropTypes.string
	}, _class.defaultProps = {
	  block: false,
	  label: ''
	}, _temp);
	exports.default = Label;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(18);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _colr = __webpack_require__(19);

	var _colr2 = _interopRequireDefault(_colr);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _draggable = __webpack_require__(23);

	var _draggable2 = _interopRequireDefault(_draggable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ColorMap = (_dec = (0, _draggable2.default)({
	  // See this for the below issue with eslint and higher order components - https://github.com/yannickcr/eslint-plugin-react/issues/322

	  updateClientCoords: function updateClientCoords(_ref) {
	    var clientX = _ref.clientX;
	    var clientY = _ref.clientY;
	    // eslint-disable-line react/prop-types
	    var rect = _reactDom2.default.findDOMNode(this).getBoundingClientRect();
	    var x = (clientX - rect.left) / rect.width;
	    var y = (rect.bottom - clientY) / rect.height;
	    var saturation = this.getScaledValue(x);
	    var value = this.getScaledValue(y);
	    var colr = _colr2.default.fromHsv(this.props.hsv.h, saturation, value);

	    this.props.colrLink.requestChange(colr);
	  }
	}), _dec(_class = (_temp = _class2 = function (_React$Component) {
	  _inherits(ColorMap, _React$Component);

	  function ColorMap() {
	    _classCallCheck(this, ColorMap);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ColorMap).apply(this, arguments));
	  }

	  _createClass(ColorMap, [{
	    key: 'render',
	    value: function render() {
	      var x = this.props.hsv.s;
	      var y = this.props.hsv.v;
	      var hue = _colr2.default.fromHsv(this.props.hsv.h, 100, 100).toHex();
	      var luminosity = this.props.colrLink.value.toGrayscale();

	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)({
	            'frigb-map': true,
	            'frigb-active': this.props.active,
	            'frigb-dark': luminosity <= 128,
	            'frigb-light': luminosity > 128
	          }),
	          onMouseDown: this.props.startDragging,
	          onTouchStart: this.props.startDragging
	        },
	        _react2.default.createElement('div', {
	          className: 'frigb-background',
	          style: {
	            backgroundColor: hue
	          }
	        }),
	        _react2.default.createElement('div', {
	          className: 'frigb-pointer',
	          style: {
	            left: this.props.getPercentageValue(x),
	            bottom: this.props.getPercentageValue(y)
	          }
	        })
	      );
	    }
	  }]);

	  return ColorMap;
	}(_react2.default.Component), _class2.displayName = 'ColorMap', _class2.defaultProps = __webpack_require__(16), _class2.propTypes = {
	  hsv: _react2.default.PropTypes.shape({
	    h: _react2.default.PropTypes.number.isRequired,
	    s: _react2.default.PropTypes.number.isRequired,
	    v: _react2.default.PropTypes.number.isRequired
	  }).isRequired,

	  colrLink: _react2.default.PropTypes.shape({
	    value: _react2.default.PropTypes.object.isRequired,
	    requestChange: _react2.default.PropTypes.func.isRequired
	  }).isRequired,

	  active: _react2.default.PropTypes.bool.isRequired,
	  startDragging: _react2.default.PropTypes.bool.isRequired,
	  getPercentageValue: _react2.default.PropTypes.func.isRequired
	}, _temp)) || _class);
	exports.default = ColorMap;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.default = Draggable;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function Draggable(_ref) {
	  var updateClientCoords = _ref.updateClientCoords;

	  return function (ComponentClass) {
	    var _class, _temp2;

	    // eslint-disable-line arrow-body-style
	    return _temp2 = _class = function (_React$Component) {
	      _inherits(_class, _React$Component);

	      function _class() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        _classCallCheck(this, _class);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	          args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(_class)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	          dragging: false
	        }, _this.getPercentageValue = function (value) {
	          var percentage = value / _this.props.max * 100;
	          return percentage + '%';
	        }, _this.getScaledValue = function (value) {
	          var clamp = value;
	          if (value < 0) clamp = 0;
	          if (value > 1) clamp = 1;
	          return clamp * _this.props.max;
	        }, _this.startDragging = function (e) {
	          _this.setState({
	            dragging: true
	          });
	          _this._updateClientCoords(e);
	        }, _this._onMouseMove = function (e) {
	          if (_this.state.dragging) {
	            _this._updateClientCoords(e);
	          }
	        }, _this._onMouseUp = function (e) {
	          if (_this.state.dragging) {
	            _this.setState({
	              dragging: false
	            });
	            _this._updateClientCoords(e);
	          }
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	      }

	      _createClass(_class, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	          document.addEventListener('mousemove', this._onMouseMove);
	          document.addEventListener('touchmove', this._onMouseMove);
	          document.addEventListener('mouseup', this._onMouseUp);
	          document.addEventListener('touchend', this._onMouseUp);
	        }
	      }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	          document.removeEventListener('mousemove', this._onMouseMove);
	          document.removeEventListener('touchmove', this._onMouseMove);
	          document.removeEventListener('mouseup', this._onMouseUp);
	          document.removeEventListener('touchend', this._onMouseUp);
	        }
	      }, {
	        key: '_updateClientCoords',
	        value: function _updateClientCoords(e) {
	          e.preventDefault();

	          var _ref2 = e.touches == null ? e : e.touches[0];

	          var clientX = _ref2.clientX;
	          var clientY = _ref2.clientY;

	          updateClientCoords.bind(this)({ clientX: clientX, clientY: clientY });
	        }
	      }, {
	        key: '_childProps',
	        value: function _childProps() {
	          var startDragging = this.startDragging;
	          var getPercentageValue = this.getPercentageValue;
	          var getScaledValue = this.getScaledValue;
	          var active = this.active;

	          return Object.assign({}, this.props, {
	            active: active,
	            startDragging: startDragging,
	            getPercentageValue: getPercentageValue,
	            getScaledValue: getScaledValue
	          });
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          return _react2.default.createElement(ComponentClass, this._childProps());
	        }
	      }]);

	      return _class;
	    }(_react2.default.Component), _class.displayName = 'Draggable', _class.propTypes = {
	      clientY: _react2.default.PropTypes.number,
	      clientX: _react2.default.PropTypes.number,
	      max: _react2.default.PropTypes.number
	    }, _class.defaultProps = {
	      max: 1
	    }, _temp2;
	  };
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(18);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _colr = __webpack_require__(19);

	var _colr2 = _interopRequireDefault(_colr);

	var _draggable = __webpack_require__(23);

	var _draggable2 = _interopRequireDefault(_draggable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HueSlider = (_dec = (0, _draggable2.default)({
	  // See this for the below issue with eslint and higher order components - https://github.com/yannickcr/eslint-plugin-react/issues/322

	  updateClientCoords: function updateClientCoords(_ref) {
	    var clientY = _ref.clientY;
	    // eslint-disable-line react/prop-types
	    var rect = _reactDom2.default.findDOMNode(this).getBoundingClientRect();
	    var hue = this.getScaledValue((rect.bottom - clientY) / rect.height);
	    var colr = _colr2.default.fromHsv(hue, this.props.hsv.s, this.props.hsv.v);

	    this.props.colrLink.requestChange(colr);
	  }
	}), _dec(_class = (_temp = _class2 = function (_React$Component) {
	  _inherits(HueSlider, _React$Component);

	  function HueSlider() {
	    _classCallCheck(this, HueSlider);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(HueSlider).apply(this, arguments));
	  }

	  _createClass(HueSlider, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'frigb-slider frigb-vertical',
	          onMouseDown: this.props.startDragging,
	          onTouchStart: this.props.startDragging
	        },
	        _react2.default.createElement('div', { className: 'frigb-track' }),
	        _react2.default.createElement('div', {
	          className: 'frigb-pointer',
	          style: {
	            bottom: this.props.getPercentageValue(this.props.hsv.h)
	          }
	        })
	      );
	    }
	  }]);

	  return HueSlider;
	}(_react2.default.Component), _class2.displayName = 'HueSlider', _class2.defaultProps = __webpack_require__(16), _class2.propTypes = {
	  hsv: _react2.default.PropTypes.shape({
	    h: _react2.default.PropTypes.number.isRequired
	  }).isRequired,

	  startDragging: _react2.default.PropTypes.bool.isRequired,
	  getPercentageValue: _react2.default.PropTypes.func.isRequired
	}, _temp)) || _class);
	exports.default = HueSlider;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FormErrorList = (_temp = _class = function (_React$Component) {
	  _inherits(FormErrorList, _React$Component);

	  function FormErrorList() {
	    _classCallCheck(this, FormErrorList);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FormErrorList).apply(this, arguments));
	  }

	  _createClass(FormErrorList, [{
	    key: 'render',
	    value: function render() {
	      var errors = this.props.errors;

	      return _react2.default.createElement(
	        'div',
	        null,
	        errors.map(function (error) {
	          return _react2.default.createElement(
	            'div',
	            { className: 'col-xs-12', key: 'error-' + error },
	            _react2.default.createElement(
	              'div',
	              { className: 'frigb-error', ref: 'error-' + error },
	              _react2.default.createElement(
	                'div',
	                { className: 'alert alert-danger' },
	                _react2.default.createElement('i', { className: 'fa fa-exclamation-circle' }),
	                _react2.default.createElement(
	                  'span',
	                  { className: 'sr-only' },
	                  'Error:'
	                ),
	                ' ' + error,
	                _react2.default.createElement('div', { className: 'clearfix' })
	              )
	            )
	          );
	        })
	      );
	    }
	  }]);

	  return FormErrorList;
	}(_react2.default.Component), _class.displayName = 'FriggingBootstrap.Errors', _class.defaultProps = __webpack_require__(16), _class.propTypes = {
	  errors: _react2.default.PropTypes.array.isRequired
	}, _temp);
	exports.default = FormErrorList;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(18);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _input_error_list = __webpack_require__(10);

	var _input_error_list2 = _interopRequireDefault(_input_error_list);

	var _saved = __webpack_require__(14);

	var _saved2 = _interopRequireDefault(_saved);

	var _label = __webpack_require__(21);

	var _label2 = _interopRequireDefault(_label);

	var _util = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FileInput = (_temp = _class = function (_React$Component) {
	  _inherits(FileInput, _React$Component);

	  function FileInput() {
	    _classCallCheck(this, FileInput);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(FileInput).apply(this, arguments));
	  }

	  _createClass(FileInput, [{
	    key: '_input',
	    value: function _input() {
	      var inputProps = Object.assign({}, this.props.inputHtml, {
	        className: (0, _classnames2.default)(this.props.className, 'form-control'),
	        type: 'file',
	        accept: 'image/png,image/gif,image/jpeg',
	        ref: 'frigFile',
	        valueLink: {
	          requestChange: this._loadFile.bind(this)
	        }
	      });
	      return _react2.default.createElement('input', inputProps);
	    }
	  }, {
	    key: '_loadFile',
	    value: function _loadFile() {
	      this.fReader = new FileReader();
	      this.fReader.onloadend = this._onFileLoad.bind(this);
	      var file = _reactDom2.default.findDOMNode(this.refs.frigFile).files[0];
	      this.fReader.readAsDataURL(file);
	    }
	  }, {
	    key: '_onFileLoad',
	    value: function _onFileLoad() {
	      this.props.valueLink.requestChange(this.fReader.result.slice(0));
	    }
	  }, {
	    key: '_image',
	    value: function _image() {
	      if (this.props.valueLink.value == null) return '';
	      return _react2.default.createElement('img', {
	        className: 'thumbnail',
	        height: '125',
	        width: '125',
	        src: this.props.valueLink.value
	      });
	    }
	  }, {
	    key: '_inputPrefix',
	    value: function _inputPrefix() {
	      if (this.props.prefix == null) return '';
	      return _react2.default.createElement(
	        'div',
	        { className: 'input-group-addon' },
	        this.props.prefix
	      );
	    }
	  }, {
	    key: '_inputSuffix',
	    value: function _inputSuffix() {
	      if (this.props.suffix == null) return '';
	      return _react2.default.createElement(
	        'div',
	        { className: 'input-group-addon' },
	        this.props.suffix
	      );
	    }
	  }, {
	    key: '_inputGroup',
	    value: function _inputGroup() {
	      if (this.props.prefix || this.props.suffix) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'input-group' },
	          this._inputPrefix(),
	          this._input(),
	          this._inputSuffix()
	        );
	      }

	      return this._input();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)((0, _util.sizeClassNames)(this.props)) },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _util.formGroupCx)(this.props) },
	          _react2.default.createElement(_label2.default, this.props),
	          _react2.default.createElement(
	            'div',
	            { className: 'controls' },
	            _react2.default.createElement(
	              'div',
	              { className: 'image-upload' },
	              this._image(),
	              this._inputGroup(),
	              _react2.default.createElement(_saved2.default, { saved: this.props.saved })
	            )
	          ),
	          _react2.default.createElement(_input_error_list2.default, { errors: this.props.errors })
	        )
	      );
	    }
	  }]);

	  return FileInput;
	}(_react2.default.Component), _class.displayName = 'FriggingBootstrap.FileInput', _class.defaultProps = Object.assign(__webpack_require__(16), {
	  prefix: undefined,
	  suffix: undefined
	}), _class.propTypes = {
	  inputHtml: _react2.default.PropTypes.object,
	  valueLink: _react2.default.PropTypes.shape({
	    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
	    requestChange: _react2.default.PropTypes.func
	  }).isRequired,

	  className: _react2.default.PropTypes.string,
	  prefix: _react2.default.PropTypes.string,
	  suffix: _react2.default.PropTypes.string,

	  saved: _react2.default.PropTypes.bool,
	  errors: _react2.default.PropTypes.array
	}, _temp);
	exports.default = FileInput;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(18);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _default_props = __webpack_require__(16);

	var _default_props2 = _interopRequireDefault(_default_props);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Form = (_temp = _class = function (_React$Component) {
	  _inherits(Form, _React$Component);

	  function Form() {
	    _classCallCheck(this, Form);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Form).apply(this, arguments));
	  }

	  _createClass(Form, [{
	    key: '_formHtml',
	    value: function _formHtml() {
	      var className = this.props.layout ? 'form-' + this.props.layout : '';
	      return Object.assign({}, this.props.formHtml, {
	        ref: 'form',
	        className: ((this.props.formHtml.className || '') + ' ' + className).trim()
	      });
	    }
	  }, {
	    key: 'formData',
	    value: function formData() {
	      var formElement = _reactDom2.default.findDOMNode(this.refs.form);
	      return new FormData(formElement);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'form',
	        this._formHtml(),
	        this.props.children
	      );
	    }
	  }]);

	  return Form;
	}(_react2.default.Component), _class.displayName = 'FriggingBootstrap.Form', _class.defaultProps = {
	  layout: _default_props2.default.layout
	}, _class.propTypes = {
	  formHtml: _react2.default.PropTypes.shape({
	    className: _react2.default.PropTypes.string
	  }),
	  layout: _react2.default.PropTypes.string,
	  children: _react2.default.PropTypes.any.isRequired
	}, _temp);
	exports.default = Form;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _input_error_list = __webpack_require__(10);

	var _input_error_list2 = _interopRequireDefault(_input_error_list);

	var _saved = __webpack_require__(14);

	var _saved2 = _interopRequireDefault(_saved);

	var _label = __webpack_require__(21);

	var _label2 = _interopRequireDefault(_label);

	var _util = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Input = (_temp = _class = function (_React$Component) {
	  _inherits(Input, _React$Component);

	  function Input() {
	    _classCallCheck(this, Input);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).apply(this, arguments));
	  }

	  _createClass(Input, [{
	    key: '_inputHtml',
	    value: function _inputHtml() {
	      return Object.assign({}, this.props.inputHtml, {
	        className: (0, _classnames2.default)(this.props.className, 'form-control'),
	        valueLink: this.props.valueLink
	      });
	    }
	  }, {
	    key: '_inputPrefix',
	    value: function _inputPrefix() {
	      if (this.props.prefix == null) return '';
	      return _react2.default.createElement(
	        'div',
	        { className: 'input-group-addon' },
	        this.props.prefix
	      );
	    }
	  }, {
	    key: '_input',
	    value: function _input() {
	      return this.props.inputWrapper(this._inputHtml());
	    }
	  }, {
	    key: '_inputSuffix',
	    value: function _inputSuffix() {
	      if (this.props.suffix == null) return '';
	      return _react2.default.createElement(
	        'div',
	        { className: 'input-group-addon' },
	        this.props.suffix
	      );
	    }
	  }, {
	    key: '_inputGroup',
	    value: function _inputGroup() {
	      var inputLabel = _react2.default.createElement(_label2.default, this.props);
	      var saved = _react2.default.createElement(_saved2.default, { saved: this.props.saved });

	      if (this.props.prefix || this.props.suffix) {
	        return [inputLabel, _react2.default.createElement(
	          'div',
	          { className: 'input-group' },
	          this._inputPrefix(),
	          this._input(),
	          saved,
	          this._inputSuffix()
	        )];
	      }

	      return _react2.default.createElement(
	        'div',
	        null,
	        inputLabel,
	        this._input(),
	        saved
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)((0, _util.sizeClassNames)(this.props)) },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _util.formGroupCx)(this.props) },
	          _react2.default.createElement(
	            'div',
	            { className: (0, _util.inputContainerCx)(this.props) },
	            this._inputGroup(),
	            _react2.default.createElement(_input_error_list2.default, { errors: this.props.errors })
	          )
	        )
	      );
	    }
	  }]);

	  return Input;
	}(_react2.default.Component), _class.displayName = 'FriggingBootstrap.Input', _class.propTypes = {
	  inputHtml: _react2.default.PropTypes.shape({
	    type: _react2.default.PropTypes.string.isRequired
	  }).isRequired,
	  inputWrapper: _react2.default.PropTypes.func.isRequired,

	  valueLink: _react2.default.PropTypes.shape({
	    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
	    requestChange: _react2.default.PropTypes.func
	  }).isRequired,

	  className: _react2.default.PropTypes.string,
	  prefix: _react2.default.PropTypes.string,
	  suffix: _react2.default.PropTypes.string,

	  saved: _react2.default.PropTypes.bool,
	  errors: _react2.default.PropTypes.array
	}, _class.defaultProps = Object.assign(__webpack_require__(16), {
	  // Bootstrap input addon texts
	  prefix: undefined,
	  suffix: undefined,
	  inputWrapper: function inputWrapper(inputProps) {
	    return _react2.default.createElement('input', inputProps);
	  }
	}), _temp);
	exports.default = Input;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _numeral = __webpack_require__(30);

	var _numeral2 = _interopRequireDefault(_numeral);

	var _input_error_list = __webpack_require__(10);

	var _input_error_list2 = _interopRequireDefault(_input_error_list);

	var _saved = __webpack_require__(14);

	var _saved2 = _interopRequireDefault(_saved);

	var _label = __webpack_require__(21);

	var _label2 = _interopRequireDefault(_label);

	var _util = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Number = (_temp2 = _class = function (_React$Component) {
	  _inherits(Number, _React$Component);

	  function Number() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Number);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Number)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      formattedValue: ''
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Number, [{
	    key: '_formatNumber',
	    value: function _formatNumber(currentNumber) {
	      if (!this.props.format) return currentNumber;

	      return currentNumber ? currentNumber.format(this.props.format) : '';
	    }
	  }, {
	    key: '_onBlur',
	    value: function _onBlur() {
	      var value = this.props.valueLink.value;
	      value = value.replace(/,/g, '');
	      value = this._toNumeral(value) || '';
	      value = this._formatNumber(value);

	      this.setState({ formattedValue: value });
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange(value) {
	      this.setState({ formattedValue: value });

	      this.props.valueLink.requestChange(value.replace(/,/g, ''));
	    }
	  }, {
	    key: '_inputCx',
	    value: function _inputCx() {
	      return (0, _classnames2.default)(this.props.inputHtml.className, 'form-control');
	    }
	  }, {
	    key: '_input',
	    value: function _input() {
	      var inputProps = Object.assign({}, this.props.inputHtml, {
	        className: this._inputCx(),
	        onBlur: this._onBlur.bind(this),
	        valueLink: {
	          value: this.state.formattedValue || this._formatNumber(this._toNumeral(this.props.valueLink.value) || ''),
	          requestChange: this._onChange.bind(this)
	        }
	      });

	      return _react2.default.createElement('input', inputProps);
	    }
	  }, {
	    key: '_isNumber',
	    value: function _isNumber(value) {
	      var number = parseFloat(value);
	      return !Number.isNaN(parseFloat(number)) && Number.isFinite(number);
	    }
	  }, {
	    key: '_toNumeral',
	    value: function _toNumeral(value) {
	      var n = (0, _numeral2.default)(value); // eslint-disable-line new-cap

	      // numeral.js converts empty strings into 0 for no reason, so if given
	      // value was not '0' or 0, treat it as null.
	      // or
	      // numeral.js can sometimes convert values (like '4.5.2') into NaN
	      // and we would rather null than NaN.
	      if (n.value() === 0 && value !== 0 && value !== '0' || isNaN(n.value())) {
	        return null;
	      }

	      return n;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)((0, _util.sizeClassNames)(this.props)) },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _util.formGroupCx)(this.props) },
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_label2.default, this.props)
	          ),
	          this._input(),
	          _react2.default.createElement(_saved2.default, { saved: this.props.saved }),
	          _react2.default.createElement(_input_error_list2.default, { errors: this.props.errors })
	        )
	      );
	    }
	  }]);

	  return Number;
	}(_react2.default.Component), _class.displayName = 'FriggingBootstrap.Number', _class.defaultProps = Object.assign(__webpack_require__(16), {
	  format: '0,0[.][00]'
	}), _class.propTypes = {
	  inputHtml: _react2.default.PropTypes.object,
	  format: _react2.default.PropTypes.string,

	  valueLink: _react2.default.PropTypes.shape({
	    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
	    requestChange: _react2.default.PropTypes.func
	  }).isRequired,

	  saved: _react2.default.PropTypes.bool,
	  errors: _react2.default.PropTypes.array
	}, _temp2);
	exports.default = Number;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	/*!
	 * numeral.js
	 * version : 1.5.3
	 * author : Adam Draper
	 * license : MIT
	 * http://adamwdraper.github.com/Numeral-js/
	 */

	(function () {

	    /************************************
	        Constants
	    ************************************/

	    var _numeral,
	        VERSION = '1.5.3',

	    // internal storage for language config files
	    languages = {},
	        currentLanguage = 'en',
	        zeroFormat = null,
	        defaultFormat = '0,0',

	    // check for nodeJS
	    hasModule = typeof module !== 'undefined' && module.exports;

	    /************************************
	        Constructors
	    ************************************/

	    // Numeral prototype object
	    function Numeral(number) {
	        this._value = number;
	    }

	    /**
	     * Implementation of toFixed() that treats floats more like decimals
	     *
	     * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
	     * problems for accounting- and finance-related software.
	     */
	    function toFixed(value, precision, roundingFunction, optionals) {
	        var power = Math.pow(10, precision),
	            optionalsRegExp,
	            output;

	        //roundingFunction = (roundingFunction !== undefined ? roundingFunction : Math.round);
	        // Multiply up by precision, round accurately, then divide and use native toFixed():
	        output = (roundingFunction(value * power) / power).toFixed(precision);

	        if (optionals) {
	            optionalsRegExp = new RegExp('0{1,' + optionals + '}$');
	            output = output.replace(optionalsRegExp, '');
	        }

	        return output;
	    }

	    /************************************
	        Formatting
	    ************************************/

	    // determine what type of formatting we need to do
	    function formatNumeral(n, format, roundingFunction) {
	        var output;

	        // figure out what kind of format we are dealing with
	        if (format.indexOf('$') > -1) {
	            // currency!!!!!
	            output = formatCurrency(n, format, roundingFunction);
	        } else if (format.indexOf('%') > -1) {
	            // percentage
	            output = formatPercentage(n, format, roundingFunction);
	        } else if (format.indexOf(':') > -1) {
	            // time
	            output = formatTime(n, format);
	        } else {
	            // plain ol' numbers or bytes
	            output = formatNumber(n._value, format, roundingFunction);
	        }

	        // return string
	        return output;
	    }

	    // revert to number
	    function unformatNumeral(n, string) {
	        var stringOriginal = string,
	            thousandRegExp,
	            millionRegExp,
	            billionRegExp,
	            trillionRegExp,
	            suffixes = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
	            bytesMultiplier = false,
	            power;

	        if (string.indexOf(':') > -1) {
	            n._value = unformatTime(string);
	        } else {
	            if (string === zeroFormat) {
	                n._value = 0;
	            } else {
	                if (languages[currentLanguage].delimiters.decimal !== '.') {
	                    string = string.replace(/\./g, '').replace(languages[currentLanguage].delimiters.decimal, '.');
	                }

	                // see if abbreviations are there so that we can multiply to the correct number
	                thousandRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.thousand + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
	                millionRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.million + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
	                billionRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.billion + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');
	                trillionRegExp = new RegExp('[^a-zA-Z]' + languages[currentLanguage].abbreviations.trillion + '(?:\\)|(\\' + languages[currentLanguage].currency.symbol + ')?(?:\\))?)?$');

	                // see if bytes are there so that we can multiply to the correct number
	                for (power = 0; power <= suffixes.length; power++) {
	                    bytesMultiplier = string.indexOf(suffixes[power]) > -1 ? Math.pow(1024, power + 1) : false;

	                    if (bytesMultiplier) {
	                        break;
	                    }
	                }

	                // do some math to create our number
	                n._value = (bytesMultiplier ? bytesMultiplier : 1) * (stringOriginal.match(thousandRegExp) ? Math.pow(10, 3) : 1) * (stringOriginal.match(millionRegExp) ? Math.pow(10, 6) : 1) * (stringOriginal.match(billionRegExp) ? Math.pow(10, 9) : 1) * (stringOriginal.match(trillionRegExp) ? Math.pow(10, 12) : 1) * (string.indexOf('%') > -1 ? 0.01 : 1) * ((string.split('-').length + Math.min(string.split('(').length - 1, string.split(')').length - 1)) % 2 ? 1 : -1) * Number(string.replace(/[^0-9\.]+/g, ''));

	                // round if we are talking about bytes
	                n._value = bytesMultiplier ? Math.ceil(n._value) : n._value;
	            }
	        }
	        return n._value;
	    }

	    function formatCurrency(n, format, roundingFunction) {
	        var symbolIndex = format.indexOf('$'),
	            openParenIndex = format.indexOf('('),
	            minusSignIndex = format.indexOf('-'),
	            space = '',
	            spliceIndex,
	            output;

	        // check for space before or after currency
	        if (format.indexOf(' $') > -1) {
	            space = ' ';
	            format = format.replace(' $', '');
	        } else if (format.indexOf('$ ') > -1) {
	            space = ' ';
	            format = format.replace('$ ', '');
	        } else {
	            format = format.replace('$', '');
	        }

	        // format the number
	        output = formatNumber(n._value, format, roundingFunction);

	        // position the symbol
	        if (symbolIndex <= 1) {
	            if (output.indexOf('(') > -1 || output.indexOf('-') > -1) {
	                output = output.split('');
	                spliceIndex = 1;
	                if (symbolIndex < openParenIndex || symbolIndex < minusSignIndex) {
	                    // the symbol appears before the "(" or "-"
	                    spliceIndex = 0;
	                }
	                output.splice(spliceIndex, 0, languages[currentLanguage].currency.symbol + space);
	                output = output.join('');
	            } else {
	                output = languages[currentLanguage].currency.symbol + space + output;
	            }
	        } else {
	            if (output.indexOf(')') > -1) {
	                output = output.split('');
	                output.splice(-1, 0, space + languages[currentLanguage].currency.symbol);
	                output = output.join('');
	            } else {
	                output = output + space + languages[currentLanguage].currency.symbol;
	            }
	        }

	        return output;
	    }

	    function formatPercentage(n, format, roundingFunction) {
	        var space = '',
	            output,
	            value = n._value * 100;

	        // check for space before %
	        if (format.indexOf(' %') > -1) {
	            space = ' ';
	            format = format.replace(' %', '');
	        } else {
	            format = format.replace('%', '');
	        }

	        output = formatNumber(value, format, roundingFunction);

	        if (output.indexOf(')') > -1) {
	            output = output.split('');
	            output.splice(-1, 0, space + '%');
	            output = output.join('');
	        } else {
	            output = output + space + '%';
	        }

	        return output;
	    }

	    function formatTime(n) {
	        var hours = Math.floor(n._value / 60 / 60),
	            minutes = Math.floor((n._value - hours * 60 * 60) / 60),
	            seconds = Math.round(n._value - hours * 60 * 60 - minutes * 60);
	        return hours + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds);
	    }

	    function unformatTime(string) {
	        var timeArray = string.split(':'),
	            seconds = 0;
	        // turn hours and minutes into seconds and add them all up
	        if (timeArray.length === 3) {
	            // hours
	            seconds = seconds + Number(timeArray[0]) * 60 * 60;
	            // minutes
	            seconds = seconds + Number(timeArray[1]) * 60;
	            // seconds
	            seconds = seconds + Number(timeArray[2]);
	        } else if (timeArray.length === 2) {
	            // minutes
	            seconds = seconds + Number(timeArray[0]) * 60;
	            // seconds
	            seconds = seconds + Number(timeArray[1]);
	        }
	        return Number(seconds);
	    }

	    function formatNumber(value, format, roundingFunction) {
	        var negP = false,
	            signed = false,
	            optDec = false,
	            abbr = '',
	            abbrK = false,
	            // force abbreviation to thousands
	        abbrM = false,
	            // force abbreviation to millions
	        abbrB = false,
	            // force abbreviation to billions
	        abbrT = false,
	            // force abbreviation to trillions
	        abbrForce = false,
	            // force abbreviation
	        bytes = '',
	            ord = '',
	            abs = Math.abs(value),
	            suffixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
	            min,
	            max,
	            power,
	            w,
	            precision,
	            thousands,
	            d = '',
	            neg = false;

	        // check if number is zero and a custom zero format has been set
	        if (value === 0 && zeroFormat !== null) {
	            return zeroFormat;
	        } else {
	            // see if we should use parentheses for negative number or if we should prefix with a sign
	            // if both are present we default to parentheses
	            if (format.indexOf('(') > -1) {
	                negP = true;
	                format = format.slice(1, -1);
	            } else if (format.indexOf('+') > -1) {
	                signed = true;
	                format = format.replace(/\+/g, '');
	            }

	            // see if abbreviation is wanted
	            if (format.indexOf('a') > -1) {
	                // check if abbreviation is specified
	                abbrK = format.indexOf('aK') >= 0;
	                abbrM = format.indexOf('aM') >= 0;
	                abbrB = format.indexOf('aB') >= 0;
	                abbrT = format.indexOf('aT') >= 0;
	                abbrForce = abbrK || abbrM || abbrB || abbrT;

	                // check for space before abbreviation
	                if (format.indexOf(' a') > -1) {
	                    abbr = ' ';
	                    format = format.replace(' a', '');
	                } else {
	                    format = format.replace('a', '');
	                }

	                if (abs >= Math.pow(10, 12) && !abbrForce || abbrT) {
	                    // trillion
	                    abbr = abbr + languages[currentLanguage].abbreviations.trillion;
	                    value = value / Math.pow(10, 12);
	                } else if (abs < Math.pow(10, 12) && abs >= Math.pow(10, 9) && !abbrForce || abbrB) {
	                    // billion
	                    abbr = abbr + languages[currentLanguage].abbreviations.billion;
	                    value = value / Math.pow(10, 9);
	                } else if (abs < Math.pow(10, 9) && abs >= Math.pow(10, 6) && !abbrForce || abbrM) {
	                    // million
	                    abbr = abbr + languages[currentLanguage].abbreviations.million;
	                    value = value / Math.pow(10, 6);
	                } else if (abs < Math.pow(10, 6) && abs >= Math.pow(10, 3) && !abbrForce || abbrK) {
	                    // thousand
	                    abbr = abbr + languages[currentLanguage].abbreviations.thousand;
	                    value = value / Math.pow(10, 3);
	                }
	            }

	            // see if we are formatting bytes
	            if (format.indexOf('b') > -1) {
	                // check for space before
	                if (format.indexOf(' b') > -1) {
	                    bytes = ' ';
	                    format = format.replace(' b', '');
	                } else {
	                    format = format.replace('b', '');
	                }

	                for (power = 0; power <= suffixes.length; power++) {
	                    min = Math.pow(1024, power);
	                    max = Math.pow(1024, power + 1);

	                    if (value >= min && value < max) {
	                        bytes = bytes + suffixes[power];
	                        if (min > 0) {
	                            value = value / min;
	                        }
	                        break;
	                    }
	                }
	            }

	            // see if ordinal is wanted
	            if (format.indexOf('o') > -1) {
	                // check for space before
	                if (format.indexOf(' o') > -1) {
	                    ord = ' ';
	                    format = format.replace(' o', '');
	                } else {
	                    format = format.replace('o', '');
	                }

	                ord = ord + languages[currentLanguage].ordinal(value);
	            }

	            if (format.indexOf('[.]') > -1) {
	                optDec = true;
	                format = format.replace('[.]', '.');
	            }

	            w = value.toString().split('.')[0];
	            precision = format.split('.')[1];
	            thousands = format.indexOf(',');

	            if (precision) {
	                if (precision.indexOf('[') > -1) {
	                    precision = precision.replace(']', '');
	                    precision = precision.split('[');
	                    d = toFixed(value, precision[0].length + precision[1].length, roundingFunction, precision[1].length);
	                } else {
	                    d = toFixed(value, precision.length, roundingFunction);
	                }

	                w = d.split('.')[0];

	                if (d.split('.')[1].length) {
	                    d = languages[currentLanguage].delimiters.decimal + d.split('.')[1];
	                } else {
	                    d = '';
	                }

	                if (optDec && Number(d.slice(1)) === 0) {
	                    d = '';
	                }
	            } else {
	                w = toFixed(value, null, roundingFunction);
	            }

	            // format number
	            if (w.indexOf('-') > -1) {
	                w = w.slice(1);
	                neg = true;
	            }

	            if (thousands > -1) {
	                w = w.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + languages[currentLanguage].delimiters.thousands);
	            }

	            if (format.indexOf('.') === 0) {
	                w = '';
	            }

	            return (negP && neg ? '(' : '') + (!negP && neg ? '-' : '') + (!neg && signed ? '+' : '') + w + d + (ord ? ord : '') + (abbr ? abbr : '') + (bytes ? bytes : '') + (negP && neg ? ')' : '');
	        }
	    }

	    /************************************
	        Top Level Functions
	    ************************************/

	    _numeral = function numeral(input) {
	        if (_numeral.isNumeral(input)) {
	            input = input.value();
	        } else if (input === 0 || typeof input === 'undefined') {
	            input = 0;
	        } else if (!Number(input)) {
	            input = _numeral.fn.unformat(input);
	        }

	        return new Numeral(Number(input));
	    };

	    // version number
	    _numeral.version = VERSION;

	    // compare numeral object
	    _numeral.isNumeral = function (obj) {
	        return obj instanceof Numeral;
	    };

	    // This function will load languages and then set the global language.  If
	    // no arguments are passed in, it will simply return the current global
	    // language key.
	    _numeral.language = function (key, values) {
	        if (!key) {
	            return currentLanguage;
	        }

	        if (key && !values) {
	            if (!languages[key]) {
	                throw new Error('Unknown language : ' + key);
	            }
	            currentLanguage = key;
	        }

	        if (values || !languages[key]) {
	            loadLanguage(key, values);
	        }

	        return _numeral;
	    };

	    // This function provides access to the loaded language data.  If
	    // no arguments are passed in, it will simply return the current
	    // global language object.
	    _numeral.languageData = function (key) {
	        if (!key) {
	            return languages[currentLanguage];
	        }

	        if (!languages[key]) {
	            throw new Error('Unknown language : ' + key);
	        }

	        return languages[key];
	    };

	    _numeral.language('en', {
	        delimiters: {
	            thousands: ',',
	            decimal: '.'
	        },
	        abbreviations: {
	            thousand: 'k',
	            million: 'm',
	            billion: 'b',
	            trillion: 't'
	        },
	        ordinal: function ordinal(number) {
	            var b = number % 10;
	            return ~ ~(number % 100 / 10) === 1 ? 'th' : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
	        },
	        currency: {
	            symbol: '$'
	        }
	    });

	    _numeral.zeroFormat = function (format) {
	        zeroFormat = typeof format === 'string' ? format : null;
	    };

	    _numeral.defaultFormat = function (format) {
	        defaultFormat = typeof format === 'string' ? format : '0.0';
	    };

	    /************************************
	        Helpers
	    ************************************/

	    function loadLanguage(key, values) {
	        languages[key] = values;
	    }

	    /************************************
	        Floating-point helpers
	    ************************************/

	    // The floating-point helper functions and implementation
	    // borrows heavily from sinful.js: http://guipn.github.io/sinful.js/

	    /**
	     * Array.prototype.reduce for browsers that don't support it
	     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce#Compatibility
	     */
	    if ('function' !== typeof Array.prototype.reduce) {
	        Array.prototype.reduce = function (callback, opt_initialValue) {
	            'use strict';

	            if (null === this || 'undefined' === typeof this) {
	                // At the moment all modern browsers, that support strict mode, have
	                // native implementation of Array.prototype.reduce. For instance, IE8
	                // does not support strict mode, so this check is actually useless.
	                throw new TypeError('Array.prototype.reduce called on null or undefined');
	            }

	            if ('function' !== typeof callback) {
	                throw new TypeError(callback + ' is not a function');
	            }

	            var index,
	                value,
	                length = this.length >>> 0,
	                isValueSet = false;

	            if (1 < arguments.length) {
	                value = opt_initialValue;
	                isValueSet = true;
	            }

	            for (index = 0; length > index; ++index) {
	                if (this.hasOwnProperty(index)) {
	                    if (isValueSet) {
	                        value = callback(value, this[index], index, this);
	                    } else {
	                        value = this[index];
	                        isValueSet = true;
	                    }
	                }
	            }

	            if (!isValueSet) {
	                throw new TypeError('Reduce of empty array with no initial value');
	            }

	            return value;
	        };
	    }

	    /**
	     * Computes the multiplier necessary to make x >= 1,
	     * effectively eliminating miscalculations caused by
	     * finite precision.
	     */
	    function multiplier(x) {
	        var parts = x.toString().split('.');
	        if (parts.length < 2) {
	            return 1;
	        }
	        return Math.pow(10, parts[1].length);
	    }

	    /**
	     * Given a variable number of arguments, returns the maximum
	     * multiplier that must be used to normalize an operation involving
	     * all of them.
	     */
	    function correctionFactor() {
	        var args = Array.prototype.slice.call(arguments);
	        return args.reduce(function (prev, next) {
	            var mp = multiplier(prev),
	                mn = multiplier(next);
	            return mp > mn ? mp : mn;
	        }, -Infinity);
	    }

	    /************************************
	        Numeral Prototype
	    ************************************/

	    _numeral.fn = Numeral.prototype = {

	        clone: function clone() {
	            return _numeral(this);
	        },

	        format: function format(inputString, roundingFunction) {
	            return formatNumeral(this, inputString ? inputString : defaultFormat, roundingFunction !== undefined ? roundingFunction : Math.round);
	        },

	        unformat: function unformat(inputString) {
	            if (Object.prototype.toString.call(inputString) === '[object Number]') {
	                return inputString;
	            }
	            return unformatNumeral(this, inputString ? inputString : defaultFormat);
	        },

	        value: function value() {
	            return this._value;
	        },

	        valueOf: function valueOf() {
	            return this._value;
	        },

	        set: function set(value) {
	            this._value = Number(value);
	            return this;
	        },

	        add: function add(value) {
	            var corrFactor = correctionFactor.call(null, this._value, value);
	            function cback(accum, curr, currI, O) {
	                return accum + corrFactor * curr;
	            }
	            this._value = [this._value, value].reduce(cback, 0) / corrFactor;
	            return this;
	        },

	        subtract: function subtract(value) {
	            var corrFactor = correctionFactor.call(null, this._value, value);
	            function cback(accum, curr, currI, O) {
	                return accum - corrFactor * curr;
	            }
	            this._value = [value].reduce(cback, this._value * corrFactor) / corrFactor;
	            return this;
	        },

	        multiply: function multiply(value) {
	            function cback(accum, curr, currI, O) {
	                var corrFactor = correctionFactor(accum, curr);
	                return accum * corrFactor * (curr * corrFactor) / (corrFactor * corrFactor);
	            }
	            this._value = [this._value, value].reduce(cback, 1);
	            return this;
	        },

	        divide: function divide(value) {
	            function cback(accum, curr, currI, O) {
	                var corrFactor = correctionFactor(accum, curr);
	                return accum * corrFactor / (curr * corrFactor);
	            }
	            this._value = [this._value, value].reduce(cback);
	            return this;
	        },

	        difference: function difference(value) {
	            return Math.abs(_numeral(this._value).subtract(value).value());
	        }

	    };

	    /************************************
	        Exposing Numeral
	    ************************************/

	    // CommonJS module is defined
	    if (hasModule) {
	        module.exports = _numeral;
	    }

	    /*global ender:false */
	    if (typeof ender === 'undefined') {
	        // here, `this` means `window` in the browser, or `global` on the server
	        // add `numeral` as a global object via a string identifier,
	        // for Closure Compiler 'advanced' mode
	        this['numeral'] = _numeral;
	    }

	    /*global define:false */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            return _numeral;
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }
	}).call(undefined);

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _frig = __webpack_require__(9);

	var _input_error_list = __webpack_require__(10);

	var _input_error_list2 = _interopRequireDefault(_input_error_list);

	var _saved = __webpack_require__(14);

	var _saved2 = _interopRequireDefault(_saved);

	var _label = __webpack_require__(21);

	var _label2 = _interopRequireDefault(_label);

	var _util = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Select = (_temp = _class = function (_React$Component) {
	  _inherits(Select, _React$Component);

	  function Select() {
	    _classCallCheck(this, Select);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Select).apply(this, arguments));
	  }

	  _createClass(Select, [{
	    key: '_inputHtml',
	    value: function _inputHtml() {
	      return Object.assign({}, this.props.inputHtml, {
	        key: 'input',
	        className: 'form-control',
	        valueLink: this.props.valueLink,
	        options: this.props.options
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var labelProps = Object.assign({}, this.props, { className: '' });
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)((0, _util.sizeClassNames)(this.props)) },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _util.formGroupCx)(this.props) },
	          _react2.default.createElement(_label2.default, labelProps),
	          _react2.default.createElement(
	            'div',
	            { className: 'controls' },
	            _react2.default.createElement(_frig.ValueLinkedSelect, this._inputHtml()),
	            _react2.default.createElement(_input_error_list2.default, { errors: this.props.errors })
	          ),
	          _react2.default.createElement(_saved2.default, { saved: this.props.saved })
	        )
	      );
	    }
	  }]);

	  return Select;
	}(_react2.default.Component), _class.displayName = 'FriggingBootstrap.Select', _class.defaultProps = Object.assign({}, __webpack_require__(16), {
	  options: {}
	}), _class.propTypes = {
	  inputHtml: _react2.default.PropTypes.object,
	  options: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.array, _react2.default.PropTypes.object, _react2.default.PropTypes.string]),
	  valueLink: _react2.default.PropTypes.shape({
	    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
	    requestChange: _react2.default.PropTypes.func
	  }).isRequired,

	  saved: _react2.default.PropTypes.bool,
	  errors: _react2.default.PropTypes.array
	}, _temp);
	exports.default = Select;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _util = __webpack_require__(15);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Submit = (_temp = _class = function (_React$Component) {
	  _inherits(Submit, _React$Component);

	  function Submit() {
	    _classCallCheck(this, Submit);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Submit).apply(this, arguments));
	  }

	  _createClass(Submit, [{
	    key: '_inputCx',
	    value: function _inputCx() {
	      var _optionalClasses;

	      var optionalClasses = (_optionalClasses = {
	        'btn-block': this.props.block
	      }, _defineProperty(_optionalClasses, 'btn-' + this.props.bsSize, this.props.bsSize != null), _defineProperty(_optionalClasses, 'pull-right', this.props.align === 'right'), _optionalClasses);
	      return (0, _classnames2.default)(this.props.className, 'btn btn-' + this.props.bsStyle, optionalClasses);
	    }
	  }, {
	    key: '_inputHtml',
	    value: function _inputHtml() {
	      return Object.assign({}, this.props.inputHtml, {
	        className: this._inputCx(),
	        type: 'submit'
	      });
	    }
	  }, {
	    key: '_submitContainerCx',
	    value: function _submitContainerCx() {
	      var block = this.props.block;
	      var layout = this.context.frigForm.layout;

	      if (layout !== 'horizontal') return '';
	      return (0, _classnames2.default)({
	        'col-sm-9 col-sm-offset-3': block === false,
	        'col-sm-12': block === true
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)((0, _util.sizeClassNames)(this.props)) },
	        _react2.default.createElement(
	          'div',
	          { className: 'form-group' },
	          _react2.default.createElement(
	            'div',
	            { className: this._submitContainerCx() },
	            _react2.default.createElement(
	              'button',
	              this._inputHtml(),
	              this.props.title
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Submit;
	}(_react2.default.Component), _class.displayName = 'FriggingBootstrap.Submit', _class.defaultProps = Object.assign({}, __webpack_require__(16), {
	  bsStyle: 'default',
	  bsSize: undefined,
	  block: false
	}), _class.propTypes = {
	  inputHtml: _react2.default.PropTypes.object,
	  align: _react2.default.PropTypes.string,
	  bsSize: _react2.default.PropTypes.string,
	  bsStyle: _react2.default.PropTypes.string,
	  className: _react2.default.PropTypes.string,
	  title: _react2.default.PropTypes.string,
	  block: _react2.default.PropTypes.bool
	}, _class.contextTypes = {
	  frigForm: _react2.default.PropTypes.shape({
	    layout: _react2.default.PropTypes.string.isRequired
	  }).isRequired
	}, _temp);
	exports.default = Submit;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _frig = __webpack_require__(9);

	var _input_error_list = __webpack_require__(10);

	var _input_error_list2 = _interopRequireDefault(_input_error_list);

	var _saved = __webpack_require__(14);

	var _saved2 = _interopRequireDefault(_saved);

	var _label = __webpack_require__(21);

	var _label2 = _interopRequireDefault(_label);

	var _util = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Switch = (_dec = _frig.HigherOrderComponents.Boolean, _dec(_class = (_temp = _class2 = function (_React$Component) {
	  _inherits(Switch, _React$Component);

	  function Switch() {
	    _classCallCheck(this, Switch);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Switch).call(this));

	    _this._onClick = _this._onClick.bind(_this);
	    return _this;
	  }

	  _createClass(Switch, [{
	    key: '_isChecked',
	    value: function _isChecked() {
	      return this.props.valueLink.value;
	    }
	  }, {
	    key: '_onClick',
	    value: function _onClick() {
	      if (this.props.disabled === true) return false;

	      return this.props.valueLink.requestChange(!this.props.valueLink.value);
	    }
	  }, {
	    key: '_switchCx',
	    value: function _switchCx() {
	      var _cx;

	      return (0, _classnames2.default)('bootstrap-switch', 'bootstrap-switch-wrapper', 'bootstrap-switch-on', 'bootstrap-switch-id-switch-state', 'bootstrap-switch-animate', (_cx = {}, _defineProperty(_cx, 'bootstrap-switch-' + this.props.bsSize, this.props.bsSize != null), _defineProperty(_cx, 'bootstrap-switch-disabled', this.props.disabled), _defineProperty(_cx, 'pull-right', this.props.align === 'right'), _cx));
	    }
	  }, {
	    key: '_switchStyle',
	    value: function _switchStyle() {
	      var handleWidth = this.props.handleWidth;

	      return { width: handleWidth ? handleWidth * 2 + 2 + 'px' : undefined };
	    }
	  }, {
	    key: '_onSpanCx',
	    value: function _onSpanCx() {
	      return (0, _classnames2.default)('bootstrap-switch-handle-on', _defineProperty({}, 'bootstrap-switch-' + this.props.onColor, this.props.onColor != null));
	    }
	  }, {
	    key: '_offSpanCx',
	    value: function _offSpanCx() {
	      return (0, _classnames2.default)('bootstrap-switch-handle-off', _defineProperty({}, 'bootstrap-switch-' + this.props.offColor, this.props.offColor != null));
	    }
	  }, {
	    key: '_input',
	    value: function _input() {
	      var handleWidth = this.props.handleWidth;

	      var handleStyle = { width: handleWidth };
	      var checkedOffset = handleWidth || 50;
	      return _react2.default.createElement(
	        'div',
	        {
	          className: 'bootstrap-switch-container',
	          ref: 'switchContainer',
	          onClick: this._onClick,
	          style: {
	            marginLeft: this._isChecked() ? '0' : '-' + checkedOffset + 'px',
	            width: handleWidth ? handleWidth * 3 : undefined
	          }
	        },
	        _react2.default.createElement(
	          'span',
	          { className: this._onSpanCx(), style: handleStyle },
	          this.props.onText
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: 'bootstrap-switch-label', style: handleStyle },
	          ' '
	        ),
	        _react2.default.createElement(
	          'span',
	          { className: this._offSpanCx(), style: handleStyle },
	          this.props.offText
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)((0, _util.sizeClassNames)(this.props)), tabIndex: 0 },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _util.formGroupCx)(this.props) },
	          _react2.default.createElement(_label2.default, this.props),
	          _react2.default.createElement(_saved2.default, { saved: this.props.saved }),
	          _react2.default.createElement(
	            'div',
	            { className: (0, _util.inputContainerCx)(this.props) },
	            _react2.default.createElement(
	              'div',
	              { className: this._switchCx(), style: this._switchStyle() },
	              this._input()
	            ),
	            _react2.default.createElement(_input_error_list2.default, { errors: this.props.errors })
	          )
	        )
	      );
	    }
	  }]);

	  return Switch;
	}(_react2.default.Component), _class2.displayName = 'FriggingBootstrap.Switch', _class2.defaultProps = Object.assign(__webpack_require__(16), {
	  onColor: 'primary',
	  onText: 'ON',
	  offColor: 'default',
	  offText: 'OFF',
	  bsSize: undefined,
	  disabled: false,
	  handleWidth: undefined
	}), _class2.propTypes = {
	  align: _react2.default.PropTypes.string,
	  onColor: _react2.default.PropTypes.string,
	  onText: _react2.default.PropTypes.string,
	  offColor: _react2.default.PropTypes.string,
	  offText: _react2.default.PropTypes.string,
	  bsSize: _react2.default.PropTypes.string,
	  disabled: _react2.default.PropTypes.bool,
	  handleWidth: _react2.default.PropTypes.number,

	  valueLink: _react2.default.PropTypes.shape({
	    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
	    requestChange: _react2.default.PropTypes.func
	  }).isRequired,

	  saved: _react2.default.PropTypes.bool,
	  errors: _react2.default.PropTypes.array
	}, _temp)) || _class);
	exports.default = Switch;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _input_error_list = __webpack_require__(10);

	var _input_error_list2 = _interopRequireDefault(_input_error_list);

	var _saved = __webpack_require__(14);

	var _saved2 = _interopRequireDefault(_saved);

	var _label = __webpack_require__(21);

	var _label2 = _interopRequireDefault(_label);

	var _util = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Text = (_temp = _class = function (_React$Component) {
	  _inherits(Text, _React$Component);

	  function Text() {
	    _classCallCheck(this, Text);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Text).apply(this, arguments));
	  }

	  _createClass(Text, [{
	    key: '_inputHtml',
	    value: function _inputHtml() {
	      return Object.assign({}, this.props.inputHtml, {
	        className: (0, _classnames2.default)(this.props.className, 'form-control'),
	        valueLink: {
	          value: this.props.valueLink.value || '',
	          requestChange: this.props.valueLink.requestChange
	        },
	        rows: this.props.rows
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)((0, _util.sizeClassNames)(this.props)) },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _util.formGroupCx)(this.props) },
	          _react2.default.createElement(_label2.default, this.props),
	          _react2.default.createElement(
	            'div',
	            { className: 'controls' },
	            _react2.default.createElement('textarea', this._inputHtml())
	          ),
	          _react2.default.createElement(_saved2.default, { saved: this.props.saved }),
	          _react2.default.createElement(_input_error_list2.default, { errors: this.props.errors })
	        )
	      );
	    }
	  }]);

	  return Text;
	}(_react2.default.Component), _class.displayName = 'FriggingBootstrap.Text', _class.defaultProps = Object.assign(__webpack_require__(16)), _class.propTypes = {
	  inputHtml: _react2.default.PropTypes.object,
	  valueLink: _react2.default.PropTypes.shape({
	    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
	    requestChange: _react2.default.PropTypes.func
	  }).isRequired,

	  rows: _react2.default.PropTypes.number,
	  className: _react2.default.PropTypes.string,
	  saved: _react2.default.PropTypes.bool,
	  errors: _react2.default.PropTypes.array
	}, _temp);
	exports.default = Text;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class, _class2, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(7);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _frig = __webpack_require__(9);

	var _timepicker_popup = __webpack_require__(36);

	var _timepicker_popup2 = _interopRequireDefault(_timepicker_popup);

	var _input_error_list = __webpack_require__(10);

	var _input_error_list2 = _interopRequireDefault(_input_error_list);

	var _saved = __webpack_require__(14);

	var _saved2 = _interopRequireDefault(_saved);

	var _label = __webpack_require__(21);

	var _label2 = _interopRequireDefault(_label);

	var _util = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TimePicker = (_dec = _frig.HigherOrderComponents.Focusable, _dec(_class = (_temp = _class2 = function (_React$Component) {
	  _inherits(TimePicker, _React$Component);

	  function TimePicker() {
	    _classCallCheck(this, TimePicker);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TimePicker).apply(this, arguments));
	  }

	  _createClass(TimePicker, [{
	    key: '_inputCx',
	    value: function _inputCx() {
	      return (0, _classnames2.default)(this.props.inputHtml.className, 'frigb-timepicker-input', 'form-control');
	    }

	    // TODO: standarized proptyles accross componets

	  }, {
	    key: '_input',
	    value: function _input() {
	      var _this2 = this;

	      var inputProps = Object.assign({}, this.props.inputHtml, {
	        valueLink: this.props.valueLink,
	        className: this._inputCx(),
	        onFocus: function onFocus() {
	          if (_this2.props.valueLink.value == null) {
	            _this2.props.valueLink.requestChange('12:00pm');
	            return true;
	          }

	          return false;
	        }
	      });
	      return _react2.default.createElement('input', inputProps);
	    }
	  }, {
	    key: '_timePopup',
	    value: function _timePopup() {
	      if (this.props.focused === false) return false;

	      return _react2.default.createElement(_timepicker_popup2.default, { valueLink: this.props.valueLink });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: (0, _classnames2.default)((0, _util.sizeClassNames)(this.props)) },
	        _react2.default.createElement(
	          'div',
	          { className: (0, _util.formGroupCx)(this.props) },
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_label2.default, this.props)
	          ),
	          this._input(),
	          _react2.default.createElement(_saved2.default, { saved: this.props.saved }),
	          _react2.default.createElement(_input_error_list2.default, { errors: this.props.errors })
	        ),
	        this._timePopup()
	      );
	    }
	  }]);

	  return TimePicker;
	}(_react2.default.Component), _class2.displayName = 'FriggingBootstrap.TimePicker', _class2.defaultProps = Object.assign(__webpack_require__(16)), _class2.propTypes = {
	  inputHtml: _react2.default.PropTypes.object,
	  valueLink: _react2.default.PropTypes.shape({
	    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
	    requestChange: _react2.default.PropTypes.func
	  }).isRequired,
	  saved: _react2.default.PropTypes.bool,
	  errors: _react2.default.PropTypes.array,
	  focused: _react2.default.PropTypes.bool.isRequired
	}, _temp)) || _class);
	exports.default = TimePicker;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _frig = __webpack_require__(9);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TimePickerPopup = (_temp = _class = function (_React$Component) {
	  _inherits(TimePickerPopup, _React$Component);

	  function TimePickerPopup() {
	    _classCallCheck(this, TimePickerPopup);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TimePickerPopup).apply(this, arguments));
	  }

	  _createClass(TimePickerPopup, [{
	    key: '_getHour',


	    // Returns the number of hours from 12 to 1 to 11
	    value: function _getHour() {
	      var minutesSinceMidnight = arguments.length <= 0 || arguments[0] === undefined ? this._minutesSinceMidnight() : arguments[0];

	      var hour = this._hoursSinceMeridiem(minutesSinceMidnight);
	      if (hour === 0) hour = 12;

	      return hour;
	    }

	    // Returns the minutes portion of the valueLink's time value from 0 to 59

	  }, {
	    key: '_getMinutes',
	    value: function _getMinutes() {
	      var minutesSinceMidnight = arguments.length <= 0 || arguments[0] === undefined ? this._minutesSinceMidnight() : arguments[0];

	      if (minutesSinceMidnight < 0) return minutesSinceMidnight * -1;

	      return minutesSinceMidnight % 60;
	    }
	  }, {
	    key: '_isMeridiemAM',
	    value: function _isMeridiemAM() {
	      var _getValuesFromTimepic = this._getValuesFromTimepicker();

	      var _getValuesFromTimepic2 = _slicedToArray(_getValuesFromTimepic, 3);

	      var isAM = _getValuesFromTimepic2[2];


	      return isAM;
	    }
	  }, {
	    key: '_onHourChange',
	    value: function _onHourChange(hour) {
	      var val = this._calculateHourChange(hour);

	      this._setMinutesSinceMidnight(val);
	    }
	  }, {
	    key: '_onMinutesChange',
	    value: function _onMinutesChange(minutes) {
	      var val = this._calculateMinutesChange(minutes);

	      this._setMinutesSinceMidnight(val);
	    }
	  }, {
	    key: '_onMeridiemChange',
	    value: function _onMeridiemChange(isAM) {
	      var _getValuesFromTimepic3 = this._getValuesFromTimepicker();

	      var _getValuesFromTimepic4 = _slicedToArray(_getValuesFromTimepic3, 1);

	      var hours = _getValuesFromTimepic4[0];

	      var val = this._calculateHourChange(hours);

	      this._setMinutesSinceMidnight(val, isAM);
	    }
	  }, {
	    key: '_calculateHourChange',
	    value: function _calculateHourChange(hour) {
	      var changeHour = parseInt(hour, 10) || 0;
	      changeHour = changeHour % 12;

	      return this._getMinutes() + changeHour * 60;
	    }
	  }, {
	    key: '_calculateMinutesChange',
	    value: function _calculateMinutesChange(minutes) {
	      var changeMinutes = parseInt(minutes, 10) || 0;

	      return changeMinutes + this._hoursSinceMeridiem() * 60;
	    }
	  }, {
	    key: '_hoursSinceMeridiem',
	    value: function _hoursSinceMeridiem() {
	      var minutesSinceMidnight = arguments.length <= 0 || arguments[0] === undefined ? this._minutesSinceMidnight() : arguments[0];

	      return Math.floor(minutesSinceMidnight / 60);
	    }
	  }, {
	    key: '_getValuesFromTimepicker',
	    value: function _getValuesFromTimepicker() {
	      var val = this.props.valueLink.value || '';

	      // Parsing the input string

	      var _val$split$map = val.split(':').map(function (s) {
	        return parseInt(s, 10);
	      });

	      var _val$split$map2 = _slicedToArray(_val$split$map, 2);

	      var hours = _val$split$map2[0];
	      var minutes = _val$split$map2[1];


	      var isAM = /am$/i.test(val);

	      return [hours, minutes, isAM];
	    }
	  }, {
	    key: '_minutesSinceMidnight',
	    value: function _minutesSinceMidnight() {
	      var _getValuesFromTimepic5 = this._getValuesFromTimepicker();

	      var _getValuesFromTimepic6 = _slicedToArray(_getValuesFromTimepic5, 2);

	      var hours = _getValuesFromTimepic6[0];
	      var minutes = _getValuesFromTimepic6[1];

	      // Limiting the hours to a range of 0 to 11 and the minutes to 0 to 59

	      hours = (hours || 0) % 12;
	      minutes = (minutes || 0) % 60;

	      // Calculating the number of minutes since midnight
	      return hours * 60 + minutes;
	    }
	  }, {
	    key: '_setMinutesSinceMidnight',
	    value: function _setMinutesSinceMidnight(m) {
	      var isAM = arguments.length <= 1 || arguments[1] === undefined ? this._isMeridiemAM() : arguments[1];

	      var minutesSinceMidnight = m % (12 * 60);
	      var currentMeridiem = isAM;

	      var hours = this._getHour(minutesSinceMidnight);
	      var minutes = this._getMinutes(minutesSinceMidnight);

	      var _getValuesFromTimepic7 = this._getValuesFromTimepicker();

	      var _getValuesFromTimepic8 = _slicedToArray(_getValuesFromTimepic7, 3);

	      var selectedMeridiem = _getValuesFromTimepic8[2];


	      if (hours < 0) hours = 11;
	      if (hours === 12 && minutes === 0) currentMeridiem = !selectedMeridiem;
	      minutes = minutes < 10 ? '0' + minutes : minutes;

	      var meridiem = currentMeridiem ? 'AM' : 'PM';

	      var s = hours + ':' + minutes + ' ' + meridiem;
	      this.props.valueLink.requestChange(s);
	    }
	  }, {
	    key: '_inputPropOverrides',
	    value: function _inputPropOverrides() {
	      return {
	        type: 'string',
	        required: false,
	        xs: 4
	      };
	    }
	  }, {
	    key: '_hourProps',
	    value: function _hourProps() {
	      return Object.assign({}, this.props, this._inputPropOverrides(), {
	        name: 'hours',
	        value: this._getHour(),
	        onChange: this._onHourChange.bind(this),
	        inputHtml: {
	          type: 'number',
	          step: 1
	        }
	      });
	    }
	  }, {
	    key: '_minuteProps',
	    value: function _minuteProps() {
	      return Object.assign({}, this.props, this._inputPropOverrides(), {
	        name: 'minutes',
	        value: this._getMinutes(),
	        onChange: this._onMinutesChange.bind(this),
	        inputHtml: {
	          type: 'number',
	          step: 15
	        }
	      });
	    }
	  }, {
	    key: '_meridiemProps',
	    value: function _meridiemProps() {
	      return Object.assign({}, this.props, {
	        type: 'switch',
	        required: false,
	        xs: 4,
	        name: 'meridiem',
	        onText: 'AM',
	        onColor: 'warning',
	        offText: 'PM',
	        offColor: 'primary',
	        value: this._isMeridiemAM(),
	        onChange: this._onMeridiemChange.bind(this)
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'frigb-popup-container popover bottom' },
	        _react2.default.createElement('div', { className: 'arrow' }),
	        _react2.default.createElement(
	          'div',
	          { className: 'row' },
	          _react2.default.createElement(_frig.UnboundInput, this._hourProps()),
	          _react2.default.createElement(_frig.UnboundInput, this._minuteProps()),
	          _react2.default.createElement(_frig.UnboundInput, this._meridiemProps())
	        )
	      );
	    }
	  }]);

	  return TimePickerPopup;
	}(_react2.default.Component), _class.displayName = 'FriggingBootstrap.TimePickerPopup', _class.defaultProps = Object.assign(__webpack_require__(16)), _class.propTypes = {
	  valueLink: _react2.default.PropTypes.shape({
	    value: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.bool]),
	    requestChange: _react2.default.PropTypes.func
	  }).isRequired
	}, _temp);
	exports.default = TimePickerPopup;

/***/ }
/******/ ])
});
;