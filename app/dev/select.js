webpackJsonp([6],{

/***/ "./app/component/select/select.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Select = function (_React$Component) {
    _inherits(Select, _React$Component);

    function Select(props) {
        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

        _this.state = props;
        return _this;
    }

    _createClass(Select, [{
        key: 'getOptions',
        value: function getOptions() {
            var option = [],
                optionData = this.state.options;
            for (var i = 0; i < optionData.length; i++) {
                option.push(_react2.default.createElement(
                    'option',
                    { key: optionData[i].name + i,
                        value: optionData[i].value },
                    optionData[i].name
                ));
            }
            return option;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'select',
                { onChange: function onChange(ev) {
                        return _this2.state.changeState(ev);
                    }, className: 'form-control' },
                this.getOptions()
            );
        }
    }]);

    return Select;
}(_react2.default.Component);

Select.propTypes = {
    changeState: _propTypes2.default.func.isRequired,
    options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        name: _propTypes2.default.string.isRequired,
        value: _propTypes2.default.any.isRequired
    }))
};

exports.default = Select;

/***/ }),

/***/ "./app/page/select.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _select = __webpack_require__("./app/component/select/select.js");

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_select2.default, { changeState: function changeState(ev) {
        console.log(ev.target.value);
    }, options: [{ name: '第一个', value: 1 }, { name: '第二个', value: 2 }, { name: '第三个', value: 3 }] }), document.getElementById('__select__'));

/***/ })

},["./app/page/select.js"]);
//# sourceMappingURL=select.js.map