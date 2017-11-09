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
  description: 'Software engineer'
}, {
  name: 'Brian Vaughn1',
  description: 'Software engineer1'
}, {
  name: 'Brian Vaughn2',
  description: 'Software engineer2'
}, {
  name: 'Brian Vaughn1',
  description: 'Software engineer1'
}, {
  name: 'Brian Vaughn2',
  description: 'Software engineer2'
}, {
  name: 'Brian Vaughn1',
  description: 'Software engineer1'
}, {
  name: 'Brian Vaughn2',
  description: 'Software engineer2'
}, {
  name: 'Brian Vaughn1',
  description: 'Software engineer1'
}, {
  name: 'Brian Vaughn2',
  description: 'Software engineer2'
}, {
  name: 'Brian Vaughn1',
  description: 'Software engineer1'
}, {
  name: 'Brian Vaughn2',
  description: 'Software engineer2'
}, {
  name: 'Brian Vaughn1',
  description: 'Software engineer1'
}, {
  name: 'Brian Vaughn2',
  description: 'Software engineer2'
}, {
  name: 'Brian Vaughn1',
  description: 'Software engineer1'
}, {
  name: 'Brian Vaughn2',
  description: 'Software engineer2'
  // And so on...
}];

var GirdList = function (_React$Component) {
  _inherits(GirdList, _React$Component);

  function GirdList() {
    _classCallCheck(this, GirdList);

    return _possibleConstructorReturn(this, (GirdList.__proto__ || Object.getPrototypeOf(GirdList)).apply(this, arguments));
  }

  _createClass(GirdList, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactVirtualized.AutoSizer,
        null,
        function (_ref) {
          var width = _ref.width,
              height = _ref.height;
          return _react2.default.createElement(
            _reactVirtualized.Table,
            { width: width, height: height, headerHeight: 20, rowHeight: 30, rowCount: list.length, rowClassName: 'headerRow',
              onRowClick: function onRowClick(e) {
                window.alert(e.type);
              }, headerClassName: 'headerColumn', rowGetter: function rowGetter(_ref2) {
                var index = _ref2.index;
                return list[index];
              } },
            _react2.default.createElement(_reactVirtualized.Column, { label: 'Name', dataKey: 'name', className: 'exampleColumn', width: 100 }),
            _react2.default.createElement(_reactVirtualized.Column, { width: 200, label: 'Description', className: 'exampleColumn', dataKey: 'description' })
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
exports.push([module.i, ".Table{width:100%;margin-top:15px}.evenRow,.headerRow,.oddRow{border-bottom:1px solid #e0e0e0}.oddRow{background-color:#fafafa}.headerColumn{text-transform:none}.exampleColumn{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.checkboxLabel{margin-left:8px;margin-left:.5rem}.checkboxLabel:first-of-type{margin-left:0}.noRows{position:absolute;top:0;bottom:0;left:0;right:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:1em;color:#bdbdbd}", ""]);

// exports


/***/ })

},["./app/index.js"]);
//# sourceMappingURL=index.js.map