webpackJsonp([1],{

/***/ "./app/component/table/Table.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__("./node_modules/react-virtualized/styles.css");

var _reactVirtualized = __webpack_require__("./node_modules/react-virtualized/dist/es/index.js");

__webpack_require__("./app/component/table/table.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Table data as a array of objects
var list = [{
  name: 'Brian Vaughn',
  description: 'Software engineer',
  description1: 'Software engineer',
  description2: 'Software engineer',
  description3: 'Software engineer',
  description4: 'Software engineer',
  description5: 'Software engineer',
  description6: 'Software engineer',
  description7: 'Software engineer'
  // And so on...
}];

var GirdList = function (_React$Component) {
  _inherits(GirdList, _React$Component);

  function GirdList(props) {
    _classCallCheck(this, GirdList);

    var _this = _possibleConstructorReturn(this, (GirdList.__proto__ || Object.getPrototypeOf(GirdList)).call(this, props));

    _this._rowClassName = _this._rowClassName.bind(_this);
    return _this;
  }

  _createClass(GirdList, [{
    key: '_rowClassName',
    value: function _rowClassName(_ref) {
      var index = _ref.index;

      if (index < 0) {
        return 'headerRow';
      } else {
        return index % 2 === 0 ? 'evenRow' : 'oddRow';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactVirtualized.AutoSizer,
        null,
        function (_ref2) {
          var width = _ref2.width,
              height = _ref2.height;
          return _react2.default.createElement(
            _reactVirtualized.Table,
            { width: width, height: 700, headerHeight: 40, rowHeight: 30, rowCount: list.length, rowClassName: _this2._rowClassName,
              onRowClick: function onRowClick(e) {
                window.alert(e.type);
              }, headerClassName: 'headerCell', rowGetter: function rowGetter(_ref3) {
                var index = _ref3.index;
                return list[index];
              } },
            _react2.default.createElement(_reactVirtualized.Column, { label: '\u5E8F\u53F7', dataKey: 'name', className: 'exampleColumn', width: 100 }),
            _react2.default.createElement(_reactVirtualized.Column, { width: 200, label: '\u7701/\u76F4\u8F96\u5E02/\u81EA\u6CBB\u533A', className: 'exampleColumn', dataKey: 'description' }),
            _react2.default.createElement(_reactVirtualized.Column, { width: 200, label: '\u7701/\u76F4\u8F96\u5E02/\u81EA\u6CBB\u533A', className: 'exampleColumn', dataKey: 'description2' }),
            _react2.default.createElement(_reactVirtualized.Column, { width: 200, label: '\u7701/\u76F4\u8F96\u5E02/\u81EA\u6CBB\u533A', className: 'exampleColumn', dataKey: 'description3' }),
            _react2.default.createElement(_reactVirtualized.Column, { width: 200, label: '\u7701/\u76F4\u8F96\u5E02/\u81EA\u6CBB\u533A', className: 'exampleColumn', dataKey: 'description4' }),
            _react2.default.createElement(_reactVirtualized.Column, { width: 200, label: '\u7701/\u76F4\u8F96\u5E02/\u81EA\u6CBB\u533A', className: 'exampleColumn', dataKey: 'description5' }),
            _react2.default.createElement(_reactVirtualized.Column, { width: 200, label: '\u7701/\u76F4\u8F96\u5E02/\u81EA\u6CBB\u533A', className: 'exampleColumn', dataKey: 'description6' }),
            _react2.default.createElement(_reactVirtualized.Column, { width: 200, label: '\u7701/\u76F4\u8F96\u5E02/\u81EA\u6CBB\u533A', className: 'exampleColumn', dataKey: 'description7' })
          );
        }
      );
    }
  }]);

  return GirdList;
}(_react2.default.Component);

exports.default = GirdList;

/***/ }),

/***/ "./app/component/table/table.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"modules\":false}!./node_modules/postcss-loader/lib/index.js!./app/component/table/table.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js!./table.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--1-1!../../../node_modules/postcss-loader/lib/index.js!./table.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./app/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactVirtualized = __webpack_require__("./node_modules/react-virtualized/dist/es/index.js");

var _Table = __webpack_require__("./app/component/table/Table.js");

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Render your table
_reactDom2.default.render(_react2.default.createElement(_Table2.default, null), document.getElementById('__index__'));

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"modules\":false}!./node_modules/postcss-loader/lib/index.js!./app/component/table/table.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".Table{width:100%;margin-top:15px}.headerCell{height:20px;line-height:20px}.evenRow,.oddRow{border-width:0 1px 1px;border-color:#ddd;border-style:solid}.headerRow,.oddRow{background-color:#f7f7f7}.headerColumn{text-transform:none}.exampleColumn{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.checkboxLabel{margin-left:8px;margin-left:.5rem}.checkboxLabel:first-of-type{margin-left:0}.noRows{position:absolute;top:0;bottom:0;left:0;right:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:1em;color:#bdbdbd}", ""]);

// exports


/***/ })

},["./app/index.js"]);
//# sourceMappingURL=index.js.map