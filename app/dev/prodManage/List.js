webpackJsonp([10],{

/***/ "./app/component/condition/Condition.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Condition = function (_Component) {
  _inherits(Condition, _Component);

  function Condition(props) {
    _classCallCheck(this, Condition);

    return _possibleConstructorReturn(this, (Condition.__proto__ || Object.getPrototypeOf(Condition)).call(this, props));
  }

  _createClass(Condition, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "opt clearfix condition" },
        this.props.children
      );
    }
  }]);

  return Condition;
}(_react.Component);

exports.default = Condition;

/***/ }),

/***/ "./app/component/container/Container.js":
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

var Container = function (_Component) {
  _inherits(Container, _Component);

  function Container(props) {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).call(this, props));
  }

  _createClass(Container, [{
    key: 'render',
    value: function render() {
      var clazz = this.props.className;
      clazz = clazz + ' tb-wrap' || '';
      return _react2.default.createElement(
        'div',
        { className: 'wrap' },
        _react2.default.createElement(
          'div',
          { className: 'tb-head' },
          this.props.title
        ),
        _react2.default.createElement(
          'div',
          { className: 'tb-content' },
          _react2.default.createElement(
            'div',
            { className: clazz },
            this.props.children
          )
        )
      );
    }
  }]);

  return Container;
}(_react.Component);

Container.propTypes = {
  title: _propTypes2.default.string.isRequired
};

exports.default = Container;

/***/ }),

/***/ "./app/component/pageNation/link.js":
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

var Link = function (_React$Component) {
    _inherits(Link, _React$Component);

    function Link() {
        _classCallCheck(this, Link);

        return _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
    }

    _createClass(Link, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var link = _react2.default.createElement(
                'a',
                { href: '#', onClick: function onClick(e) {
                        return _this2.handleClick(e);
                    } },
                this.props.pageArgument.page
            );
            if (this.props.pageArgument.pageCode === this.props.pageArgument.currentPage) {
                link = _react2.default.createElement(
                    'a',
                    { href: '#', className: 'active' },
                    this.props.pageArgument.page
                );
            }
            return link;
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            e.preventDefault();
            var pageArgument = {
                pageCode: this.props.pageArgument.pageCode,
                currentPage: this.props.pageArgument.pageCode
            };
            this.props.onLink(pageArgument);
        }
    }]);

    return Link;
}(_react2.default.Component);

Link.propTypes = {
    pageArgument: _propTypes2.default.shape({
        page: _propTypes2.default.string.isRequired,
        pageCode: _propTypes2.default.number.isRequired,
        currentPage: _propTypes2.default.number.isRequired
    })
};
exports.default = Link;

/***/ }),

/***/ "./app/component/pageNation/pageNation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__("./app/component/pageNation/link.js");

var _link2 = _interopRequireDefault(_link);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__("./app/component/pageNation/pagenation.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //分页展示组件


var PageNation = function (_React$Component) {
    _inherits(PageNation, _React$Component);

    function PageNation(props) {
        _classCallCheck(this, PageNation);

        var _this = _possibleConstructorReturn(this, (PageNation.__proto__ || Object.getPrototypeOf(PageNation)).call(this, props));

        _this.state = props;
        return _this;
    }

    _createClass(PageNation, [{
        key: 'getPageNumber',
        value: function getPageNumber(ev) {
            var pageNumber = parseInt(ev.target.value);
            this.setState({
                pageNumber: pageNumber
            });
        }
    }, {
        key: 'goPage',
        value: function goPage(ev) {
            ev.preventDefault();
            this.props.getPage({
                pageCode: this.state.pageNumber,
                currentPage: this.state.pageNumber
            });
        }
    }, {
        key: 'getLinkList',
        value: function getLinkList() {
            var _this2 = this;

            var list = [_react2.default.createElement(_link2.default, { key: 'firstpage', pageArgument: {
                    page: '首页',
                    pageCode: 1,
                    currentPage: parseInt(this.props.currentPage)
                }, onLink: function onLink(ev) {
                    return _this2.props.getPage(ev);
                } }), _react2.default.createElement(_link2.default, { key: 'prePage', pageArgument: {
                    page: '上一页',
                    pageCode: this.props.currentPage - 1 === 0 ? 1 : this.props.currentPage - 1,
                    currentPage: parseInt(this.props.currentPage)
                }, onLink: function onLink(ev) {
                    return _this2.props.getPage(ev);
                } })];
            var pageNumber = this.props.pageNumber;
            var pages = 5,
                strNo = 1;
            if (this.props.currentPage >= 3 && pageNumber >= 5) {
                strNo = this.props.currentPage - 2;
                pages = this.props.currentPage + 2;
            }
            pages = pageNumber < pages ? pageNumber : pages;
            for (strNo; strNo <= pages; strNo++) {
                console.log(strNo);
                list.push(_react2.default.createElement(_link2.default, { key: "page" + strNo, pageArgument: {
                        page: strNo.toString(),
                        pageCode: strNo,
                        currentPage: parseInt(this.props.currentPage)
                    }, onLink: function onLink(ev) {
                        return _this2.props.getPage(ev);
                    } }));
            }
            list = [].concat(_toConsumableArray(list), [_react2.default.createElement(_link2.default, { key: 'nextPage', pageArgument: {
                    page: '下一页',
                    pageCode: this.props.currentPage + 1 >= this.props.pageNumber ? this.props.pageNumber : this.props.currentPage + 1,
                    currentPage: this.props.currentPage
                }, onLink: function onLink(ev) {
                    return _this2.props.getPage(ev);
                } }), _react2.default.createElement(_link2.default, { key: 'lastPage', pageArgument: {
                    page: '末页',
                    pageCode: this.props.pageNumber,
                    currentPage: this.props.currentPage
                }, onLink: function onLink(ev) {
                    return _this2.props.getPage(ev);
                } }), _react2.default.createElement(
                'span',
                { key: 'msg' },
                '共 ' + this.props.pageCount + ' 条' + ' ' + this.props.pageNumber + ' 页'
            ), _react2.default.createElement(
                'span',
                { key: 'info' },
                '\u5230\u7B2C'
            ), _react2.default.createElement('input', { key: 'input', type: 'text', className: 'pageInput', onChange: function onChange(ev) {
                    return _this2.getPageNumber(ev);
                } }), _react2.default.createElement(
                'span',
                { key: 'pages' },
                '\u9875'
            ), _react2.default.createElement(
                'a',
                { key: 'confirm', href: '#', className: 'btn-main', onClick: function onClick(ev) {
                        return _this2.goPage(ev);
                    } },
                '\u786E\u5B9A'
            )]);
            return list;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'pd20 clearfix' },
                _react2.default.createElement(
                    'div',
                    { className: 'pageNation' },
                    this.getLinkList()
                )
            );
        }
    }]);

    return PageNation;
}(_react2.default.Component);

PageNation.propTypes = {
    getPage: _propTypes2.default.func.isRequired, //回调函数，用来获取数据
    pageNumber: _propTypes2.default.number.isRequired, //总页数
    currentPage: _propTypes2.default.number.isRequired, //当前页数
    pageCount: _propTypes2.default.number.isRequired //总条数
};
exports.default = PageNation;

/***/ }),

/***/ "./app/component/pageNation/pagenation.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/component/pageNation/pagenation.css");
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
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/lib/index.js!./pagenation.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/lib/index.js!./pagenation.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./app/component/table/Table.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _rcTable = __webpack_require__("./node_modules/rc-table/es/index.js");

var _rcTable2 = _interopRequireDefault(_rcTable);

var _lodash = __webpack_require__("./node_modules/lodash/lodash.js");

var _lodash2 = _interopRequireDefault(_lodash);

__webpack_require__("./node_modules/rc-table/assets/index.css");

__webpack_require__("./app/component/table/rc-table.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = function (_React$Component) {
  _inherits(Grid, _React$Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: 'render',
    value: function render() {
      var rowClassName = this.props.rowClassName ? this.props.rowClassName + ' my-row-class' : 'my-row-class';
      var columns = _lodash2.default.map(this.props.columns, function (column) {
        var className = column.className ? column.className + ' my-col-class' : 'my-col-class';
        return _extends({}, column, {
          className: className
        });
      });
      var props = _lodash2.default.omit(this.props, 'rowClassName', 'columns');
      return _react2.default.createElement(_rcTable2.default, _extends({ emptyText: '\u65E0', columns: columns, rowClassName: rowClassName }, props));
    }
  }]);

  return Grid;
}(_react2.default.Component);

exports.default = Grid;

/***/ }),

/***/ "./app/lib/Api/ApiMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var user_id = localStorage.getItem('__user__');

var commonData = {
  src_type: 'Web Admin',
  pf_type: 'Web',
  user_id: parseInt(user_id)
};

var ApiMap = {
  //公共参数
  commonData: commonData,
  // 商品销售统计
  getShopProdSaleStat: {
    url: '/hca/web/admin/shop/prod/sale/stat',
    method: 'post'
  },

  // 商品销售统计导出
  shopProdSaleStatExport: {
    url: '/hca/web/admin/shop/prod/sale/stat/export',
    method: 'post'
  },

  // 销售统计
  getShopSaleStat: {
    url: '/hca/web/admin/shop/sale/stat',
    method: 'post'
  },

  // 销售统计导出
  shopSaleStatExport: {
    url: '/hca/web/admin/shop/sale/stat/export',
    method: 'post'
  },

  // 健管师销售统计
  getShopHecadreSaleStat: {
    url: '/hca/web/admin/shop/hecadre/sale/stat',
    method: 'post'
  },

  // 健管师销售统计
  shopHecadreSaleStatExport: {
    url: '/hca/web/admin/shop/hecadre/sale/stat/export',
    method: 'post'
  },

  // 居民统计
  getShopInhabitantStat: {
    url: '/hca/web/admin/shop/inhabitant/stat',
    method: 'post'
  },

  // 居民统计导出
  shopInhabitantStat: {
    url: '/hca/web/admin/shop/inhabitant/stat/export',
    method: 'post'
  },

  // 居民订单列表
  getShopInhabitantOrderList: {
    url: '/hca/web/admin/shop/inhabitant/order/list',
    method: 'post'
  },

  // 居民订单导出
  shopInhabitantOrderExport: {
    url: '/hca/web/admin/shop/inhabitant/order/export',
    method: 'post'
  },
  // 订单详情
  getShopOrder: {
    url: '/hca/web/admin/shop/order',
    method: 'post'
  },

  // 1.1.23	(Web)门店商品列表
  shopStationProdList: {
    url: '/hca/web/admin/shop/station/prod/list',
    method: 'POST',
    data: commonData
  },

  //1.1.5	(Web)商品标签列表
  goodsTagList: {
    url: '/hca/web/admin/shop/prodtag/list',
    method: 'POST'
  },

  //1.1.8	(Web)商品资料新增
  goodsCreate: {
    url: '/hca/web/admin/shop/prod/create',
    method: 'POST'
  },
  //1.1.9	(Web)商品资料修改
  goodsNew: {
    url: '/hca/web/admin/shop/prod/create',
    method: 'POST'
  },
  //1.1.2	(Web)商品标签新增
  goodsTagCreate: {
    url: '/hca/web/admin/shop/prodtag/create',
    method: 'POST'
  },

  //1.1.3	(Web)商品标签修改
  goodsTagUpdate: {
    url: '/hca/web/admin/shop/prodtag/update',
    method: 'POST'
  },

  //1.1.4	(Web)商品标签删除
  goodsTagDelete: {
    url: '/hca/web/admin/shop/prodtag/delete',
    method: 'POST'
  },

  //1.1.20	(Web)商品列表
  goodsList: {
    url: '/hca/web/admin/shop/prod/list',
    method: 'POST'
  },

  //1.1.9	(Web)商品资料修改
  goodsUpdate: {
    url: '/hca/web/admin/shop/prod/update',
    method: 'POST'
  },

  //1.1.10	(Web)商品资料删除
  goodsDelete: {
    url: '/hca/web/admin/shop/prod/delete',
    method: 'POST'
  },

  //1.1.21	(Web)商品列表导出
  goodsExport: {
    url: '/hca/web/admin/shop/prod/export',
    method: 'POST',
    data: commonData,
    responseType: 'blob'
  },

  //1.1.21	(Web)商品列表导出
  stationProdExport: {
    url: '/hca/web/admin/shop/station/prod/export',
    method: 'POST',
    data: commonData,
    responseType: 'blob'
  },

  //1.1.12	(Web)商品价格调整列表
  goodsAdjustPriceList: {
    url: '/hca/web/admin/shop/prodprice/adjust/list',
    method: 'POST'
  },

  //1.1.11	(Web)商品价格调整申请
  goodsPriceCreate: {
    url: '/hca/web/admin/shop/prodprice/adjust/create',
    method: 'POST'
  },

  //1.1.13	(Web)商品价格调整详情
  goodsPriceAdjust: {
    url: '/hca/web/admin/shop/prodprice/adjust',
    method: 'POST'
  },

  //1.1.24	(Web)商品价格导出
  goodsPriceExport: {
    url: '/hca/web/admin/shop/prodprice/export',
    method: 'POST'
  },

  //1.1.12	(Web)商品价格调整取消申请
  goodsPriceCancel: {
    url: '/hca/web/admin/shop/prodprice/adjust/cancel',
    method: 'POST'
  },

  //1.1.14	(Web)商品价格调整详情
  goodsPriceAancel: {
    url: '/hca/web/admin/shop/prodprice/adjust',
    method: 'POST'
  },

  //1.1.16	(Web)商品调价审核
  goodsPriceAudit: {
    url: '/hca/web/admin/shop/prodprice/audit',
    method: 'POST'
  },

  //1.1.14	(Web)商品价格调整导出
  goodsPriceAdjustExport: {
    url: '/hca/web/admin/shop/prodprice/adjust/export',
    method: 'POST',
    responseType: 'blob'
  },

  //1.1.15	(Web)商品详情
  goodsPriceDetail: {
    url: '/hca/web/admin/shop/prod',
    method: 'POST'
  },

  //1.1.7	(Web)商品分类/标签/适用人群
  shopProdmeta: {
    url: '/hca/web/admin/shop/prodmeta',
    method: 'POST',
    data: commonData
  },

  // 1.1.25	(Web)门店商品修改(上下架)
  stationProdUpdate: {
    url: '/hca/web/admin/shop/station/prod/update',
    method: 'POST',
    data: commonData
  },

  // 1.1.25	(Web)门店商品修改(上下架)
  stationProdDelete: {
    url: '/hca/web/admin/shop/station/prod/delete',
    method: 'POST',
    data: commonData
  },
  //1.3.14	(Web)订货意向列表
  shopGuestorderList: {
    url: '/hca/web/admin/shop/guestorder/list',
    method: 'POST',
    data: commonData
  },

  //1.3.14	(Web)订货意向列表
  shopOrderList: {
    url: '/hca/web/admin/shop/order/list',
    method: 'POST',
    data: commonData
  },

  //1.4.3	订单详情
  shopOrderInfo: {
    url: '/hca/web/admin/shop/order',
    method: 'POST',
    data: commonData
  },

  // 辖区外地址列表
  stationNongridList: {
    url: '/hca/web/admin/station/nongrid/list',
    method: 'POST'
  },

  // 辖区外地址删除
  stationNongridDelete: {
    url: '/hca/web/admin/station/nongrid/delete',
    method: 'POST'
  },

  // 辖区外地址修改
  stationNongridUpdate: {
    url: '/hca/web/admin/station/nongrid/update',
    method: 'POST'
  },

  // 辖区外地址重新分配健管师
  stationNongridAssign: {
    url: '/hca/web/admin/station/nongrid/assign',
    method: 'POST'
  },

  // 获取下级行政区列表
  getAreaList: {
    url: '/hca/web/admin/getarealist',
    method: 'POST'
  },

  // 卫生站健管师查询
  stationHecadreListbyperm: {
    url: '/hca/web/admin/station/hecadre/listbyperm',
    method: 'POST'
  },

  //8.6获取下级行政区列表
  getArealist: {
    url: '/hca/web/admin/getarealist',
    method: 'POST',
    data: commonData
  },

  //1.3.15	(Web)根据区域获取健管师列表
  listbyareastation: {
    url: '/hca/web/admin/hecadre/listbyareastation',
    method: 'POST',
    data: commonData
  },

  //1.1.21	(Web)商品列表
  shopProdList: {
    url: '/hca/web/admin/shop/prod/list',
    method: 'POST',
    data: commonData
  },

  //1.1.25	(Web)门店商品新增
  stationProdCreate: {
    url: '/hca/web/admin/shop/station/prod/create',
    method: 'POST',
    data: commonData
  },

  //1.3.16	(Web)订货意向 - 指派
  shopGuestorderAssign: {
    url: '/hca/web/admin/shop/guestorder/assign',
    method: 'POST',
    data: commonData
  },

  //1.3.17	(Web)订货意向 - 详情
  shopGuestorder: {
    url: '/hca/web/admin/shop/guestorder',
    method: 'POST',
    data: commonData
  },

  //1.3.18	(Web)订货意向导出
  shopGuestorderExport: {
    url: '/hca/web/admin/shop/guestorder/export',
    method: 'POST',
    data: commonData,
    responseType: 'blob'
  },

  //1.4.2	订单列表导出
  shopOrderExport: {
    url: '/hca/web/admin/shop/order/export',
    method: 'POST',
    data: commonData,
    responseType: 'blob'
  },

  //1.1.17	(Web)商品详情
  shopProdInfo: {
    url: '/hca/web/admin/shop/prod',
    method: 'POST',
    data: commonData
  }
};

exports.default = ApiMap;

/***/ }),

/***/ "./app/lib/Api/http.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseURL = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _axios = __webpack_require__("./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _objectAssign = __webpack_require__("./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _lodash = __webpack_require__("./node_modules/lodash/lodash.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _ApiMap = __webpack_require__("./app/lib/Api/ApiMap.js");

var _ApiMap2 = _interopRequireDefault(_ApiMap);

var _logger = __webpack_require__("./app/lib/logger.js");

var _Util = __webpack_require__("./app/lib/Util.js");

__webpack_require__("./static/assets/jquery.mloading-master/src/jquery.mloading.js");

__webpack_require__("./static/assets/jquery.mloading-master/src/jquery.mloading.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__("./node_modules/es6-promise/dist/es6-promise.js").polyfill();


var baseURL = "";
var $ = window.$;

var demo = false;
if (process.env.NODE_ENV === 'production') {
  exports.baseURL = baseURL = "/";
} else {
  exports.baseURL = baseURL = "http://localhost:8081";
  // baseURL = "http://192.168.1.33:8081";
}

_axios2.default.interceptors.request.use(function (config) {
  (0, _logger.logger)('===============请求接口开始===============\n');
  (0, _logger.logger)('请求接口：' + config.url + '\n');
  var data = _extends({}, config.data, {
    auth_str: (0, _Util.getAuthStr)()
  });
  config.data = data;
  (0, _logger.logger)('参数：' + JSON.stringify(config.data) + '\n');
  $(document.body).mLoading({ mask: false }); //显示loading组件
  return config;
}, function (error) {
  return Promise.reject(error);
});

_axios2.default.interceptors.response.use(function (response) {
  if (response.data && response.data.ret_code === 2001) {
    _axios2.default.post('/logout').then(function (response) {
      (0, _Util.confirm)('您的账号在其他地方登录，请重新登录', function () {
        window.location.href = location.origin + '/login';
      });
    }).catch(function (err) {
      (0, _logger.logger)(err);
    });
    return false;
  }
  (0, _logger.logger)("响应数据：" + JSON.stringify(response) + "\n");
  (0, _logger.logger)("===============请求接口结束===============\n");
  $(document.body).mLoading("hide"); //隐藏loading组件
  return response;
}, function (error) {
  (0, _logger.logger)("响应失败：" + error + "\n");
  (0, _logger.logger)("===============请求接口结束===============\n");
  $(document.body).mLoading("hide"); //隐藏loading组件
  return Promise.resolve(error.response);
});

var settings = {
  baseURL: baseURL,
  timeout: 10000,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  responseType: 'json'
};

var httpServer = function httpServer() {
  var url = void 0,
      config = void 0;
  switch (arguments.length) {
    case 1:
      url = arguments[0].url;
      config = _lodash2.default.omit(arguments[0], 'url');
      break;
    case 2:
      url = arguments[0];
      config = arguments[1];
      break;
  }
  if (demo) {
    var key = _lodash2.default.findKey(_ApiMap2.default, { 'url': url });
    return (0, _axios2.default)('./rss/' + key + '.json');
  }
  if (url.indexOf("?") > 0) {
    url += '&_=' + +new Date();
  } else {
    url += '?_=' + +new Date();
  }
  config = (0, _objectAssign2.default)({}, settings, config);
  // 去除值为空的参数
  // let data = config.data;
  // if (typeof data === 'string') {
  //   data = JSON.parse(data);
  // }
  // data = _.pickBy(data, function(item) {
  //   return item;
  // });
  // config.data = data;
  return (0, _axios2.default)(url, config);
};
exports.baseURL = baseURL;
exports.default = httpServer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./app/lib/Util.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchTemplate = exports.exportTemplate = exports.payTypeMap = exports.Util = exports.common = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.confirm = confirm;
exports.alert = alert;
exports.setInitDate = setInitDate;
exports.addDate = addDate;
exports.getTimestamp = getTimestamp;
exports.orderStatus = orderStatus;
exports.payType = payType;
exports.downloadExcel = downloadExcel;
exports.formatDateTime = formatDateTime;
exports.createTab = createTab;
exports.closeTab = closeTab;
exports.pkgUnit = pkgUnit;
exports.getFirstLetter = getFirstLetter;
exports.converson = converson;
exports.getAuthStr = getAuthStr;
exports.trim = trim;
exports.getElementByAttr = getElementByAttr;
exports.amount_format = amount_format;
exports.toThousands = toThousands;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

var _nodeForge = __webpack_require__("./node_modules/node-forge/lib/index.js");

var _nodeForge2 = _interopRequireDefault(_nodeForge);

var _fileSaver = __webpack_require__("./node_modules/file-saver/FileSaver.js");

var _fileSaver2 = _interopRequireDefault(_fileSaver);

var _security = __webpack_require__("./app/lib/security.js");

var _security2 = _interopRequireDefault(_security);

var _http = __webpack_require__("./app/lib/Api/http.js");

var _http2 = _interopRequireDefault(_http);

var _dictor = __webpack_require__("./app/lib/dictor.js");

var _logger = __webpack_require__("./app/lib/logger.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var common = window.common;
var Util = common.Util;

exports.common = common;
exports.Util = Util;

var Alert = function (_React$Component) {
  _inherits(Alert, _React$Component);

  function Alert(props) {
    _classCallCheck(this, Alert);

    var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

    _this.doEnter = _this.doEnter.bind(_this);
    _this.handleHide = _this.handleHide.bind(_this);
    _this.state = {
      show: true
    };
    return _this;
  }

  _createClass(Alert, [{
    key: 'handleHide',
    value: function handleHide() {
      document.body.removeChild(this.props.container);
    }
  }, {
    key: 'doEnter',
    value: function doEnter() {

      this.setState({ show: false });
      this.props.handleEnter();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Modal,
        { bsSize: 'small', onExiting: this.handleHide, dialogClassName: 'react-dialog', 'aria-labelledby': 'contained-modal-title-sm', show: this.state.show },
        _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          null,
          _react2.default.createElement(
            _reactBootstrap.Modal.Title,
            null,
            '\u64CD\u4F5C\u63D0\u793A'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Body,
          null,
          this.props.txt
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Footer,
          null,
          _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: this.doEnter },
            '\u786E\u8BA4'
          )
        )
      );
    }
  }]);

  return Alert;
}(_react2.default.Component);

var Confirm = function (_React$Component2) {
  _inherits(Confirm, _React$Component2);

  function Confirm(props) {
    _classCallCheck(this, Confirm);

    var _this2 = _possibleConstructorReturn(this, (Confirm.__proto__ || Object.getPrototypeOf(Confirm)).call(this, props));

    _this2.doEnter = _this2.doEnter.bind(_this2);
    _this2.handleHide = _this2.handleHide.bind(_this2);
    _this2.doCancel = _this2.doCancel.bind(_this2);
    _this2.state = {
      show: true
    };
    return _this2;
  }

  _createClass(Confirm, [{
    key: 'handleHide',
    value: function handleHide() {
      document.body.removeChild(this.props.container);
    }
  }, {
    key: 'doCancel',
    value: function doCancel() {
      this.setState({ show: false });
    }
  }, {
    key: 'doEnter',
    value: function doEnter() {
      this.setState({ show: false });
      this.props.handleEnter();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Modal,
        { bsSize: 'small', onExiting: this.handleHide, dialogClassName: 'react-dialog', 'aria-labelledby': 'contained-modal-title-sm', show: this.state.show },
        _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          null,
          _react2.default.createElement(
            _reactBootstrap.Modal.Title,
            null,
            '\u64CD\u4F5C\u63D0\u793A'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Body,
          null,
          this.props.txt
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Footer,
          null,
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'btn btn-primary', onClick: this.doEnter },
            '\u786E\u8BA4'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'btn btn-default', onClick: this.doCancel },
            '\u53D6\u6D88'
          )
        )
      );
    }
  }]);

  return Confirm;
}(_react2.default.Component);

/*
 * 确认弹窗
 * opts: {
 *    content： 内容
 *    success： 确认回调
 * }
 * */


function confirm(content, success) {
  var container = document.createElement('div');
  document.body.appendChild(container);

  _reactDom2.default.render(_react2.default.createElement(Confirm, { txt: content, container: container, handleEnter: function handleEnter() {
      if (typeof success === 'function') success();
    } }), container);
}

/*
 * 确认弹窗
 * content 内容
 * */
function alert(content, callback) {

  var container = document.createElement('div');
  document.body.appendChild(container);

  _reactDom2.default.render(_react2.default.createElement(Alert, { txt: content, container: container, handleEnter: function handleEnter() {
      if (typeof callback === 'function') callback();
    } }), container);
}

/**
* 设置默认日期
*/
function setInitDate() {
  var nowDate = new Date();
  var y = nowDate.getFullYear();
  var m = nowDate.getMonth();
  var d = nowDate.getDate();
  return {
    startTime: y + '-' + m + '-' + d,
    endTime: y + '-' + (m + 1) + '-' + d
  };
}

function addDate(date, days) {
  if (days === undefined || days === '') {
    days = 1;
  }
  date = new Date(date);
  date.setDate(date.getDate() + days);
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return date.getFullYear() + '/' + month + '/' + day;
}

/**
* 获取时间戳
*/
function getTimestamp() {
  if (arguments.length) {
    var dateArr = arguments[0].split('-');
    return new Date(dateArr[0], dateArr[1] - 1, dateArr[2]).getTime();
  } else {
    var nowDate = new Date();
    var y = nowDate.getFullYear();
    var m = nowDate.getMonth();
    var d = nowDate.getDate();
    return {
      startTime: new Date(y, m - 1, d).getTime(),
      endTime: new Date(y, m, d).getTime()
    };
  }
}

/**
* 订单状态转换
* @param num 状态值
*/
function orderStatus(num) {
  var status = '';
  switch (num) {
    case 1:
      status = '待付款';
      break;
    case 2:
      status = '待发货';
      break;
    case 3:
      status = '待收货';
      break;
    case 4:
      status = '已收货';
      break;
    case 5:
      status = '已取消';
      break;
    default:
      status = '已取消';
  }
  return status;
}

var payTypeMap = {
  1: '微信',
  2: '支付宝',
  3: '健管端支付'
};

/**
* 支付方式转换
* @param num 状态值
*/
function payType(num) {
  var type = '';
  switch (num) {
    case 1:
      type = payTypeMap[1];
      break;
    case 2:
      type = payTypeMap[2];
      break;
    case 3:
      type = payTypeMap[3];
      break;
    default:
      type = '未支付';
  }
  return type;
}

exports.payTypeMap = payTypeMap;

/**
* 导出excel
* @param blobData 请求返回的二进制文件
* @param name 文件名
*/

function downloadExcel(blobData, name) {
  var blob = new Blob([blobData]);
  _fileSaver2.default.saveAs(blob, name + '.xlsx');
}

/**
* 时间戳转日期
* @param timeStamp 时间戳
*/
function formatDateTime(timeStamp) {
  if (!timeStamp) {
    return;
  } else {
    var date = new Date();
    date.setTime(timeStamp);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? '0' + d : d;
    var h = date.getHours();
    h = h < 10 ? '0' + h : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
  }
}

// 创建tab
/**
 *  opts: {
 *    uri: 页面地址
 *    key: tab唯一标示
 *    data: {
 *      name: tab名字
 *    }
 *  }
 *
 *
  example:
  var opts = {
    uri: 'seminarList',
    data: {name: '新增研讨会'},
    key: 'seminarList',
    callback: function(){} 回调函数
  }
  common.createTab(opts)
 */
function createTab(args) {
  var url = args.uri;
  if (process.env.NODE_ENV !== 'production') {
    url = url.replace(/\/dist\//, '/dev/');
  }
  args = _extends({}, args, {
    url: url
  });
  common.createTab(args);
}
//关闭tab页签
/*
 * ID: 编号
 * callback： 回调函数
 * defaultOpen： 是否打开新的标签（false：不打开； true：打开）; 默认打开；
 * */
function closeTab(id, callback, defaultOpen) {
  common.tab.close(id, callback, defaultOpen);
}

function pkgUnit(unit) {
  var type = '';
  switch (unit) {
    case 1:
      type = '盒';
      break;
    case 2:
      type = '袋';
      break;
    case 3:
      type = '瓶';
      break;
    case 4:
      type = '罐';
      break;
    case 5:
      type = '听';
      break;

  }
  return type;
}

//获取汉字拼音首字母
function getFirstLetter(str) {
  var pinyin_dict_firstletter = {};
  pinyin_dict_firstletter.all = _dictor.all;
  pinyin_dict_firstletter.polyphone = _dictor.polyphone;
  if (!str || /^ +$/g.test(str)) return '';
  var result = [];
  for (var i = 0; i < str.length; i++) {
    var unicode = str.charCodeAt(i);
    var ch = str.charAt(i);
    if (unicode >= 19968 && unicode <= 40869) {
      ch = pinyin_dict_firstletter.all.charAt(unicode - 19968);
      ch = pinyin_dict_firstletter.polyphone[unicode] || ch;
    }
    result.push(ch);
  }
  return result.join('');
}

//图片地址转换
function converson(imgaddress) {
  var initAddress = _nodeForge2.default.util.encode64(imgaddress);
  var encodeAddress = encodeURI(initAddress);
  var ads = '/hca/web/admin/getfile/' + encodeAddress;
  return ads;
}

//获取认证子串
function getAuthStr() {
  var user_name = localStorage.getItem('__username__'),
      server_tick = localStorage.getItem('__transportKey__');
  return _security2.default.base64.encode(_security2.default.aes.encode({
    target: user_name + _security2.default.now(),
    key: server_tick
  }));
}

//字符串首尾空格去除
function trim(str) {
  return str.replace(/^(\s|\u00A0)+/, '').replace(/(\s|\u00A0)+$/, '');
}

// 通过自定义属性获取元素
function getElementByAttr(tag, attr, value) {
  var aElements = document.getElementsByTagName(tag);
  var aEle = [];
  for (var i = 0; i < aElements.length; i++) {
    if (aElements[i].getAttribute(attr) === value) {
      aEle.push(aElements[i]);
    }
  }
  return aEle;
}

// 到处请求模板
var exportTemplate = exports.exportTemplate = function exportTemplate(apiData) {
  return function (args) {
    return new Promise(function (resolve, reject) {
      (0, _http2.default)(_extends({}, apiData, {
        data: _extends({}, apiData.data, args)
      })).then(function (result) {
        (0, _logger.logger)(result);
        if (result.status === 200) {
          var data = result.data;
          if (data) {
            resolve(data);
          } else {
            reject('导出失败');
          }
        } else {
          reject('导出失败');
          (0, _logger.logger)(result.statusText);
        }
      }).catch(function (err) {
        reject('导出失败');
        (0, _logger.logger)(err);
      });
    });
  };
};

// 请求模板
var fetchTemplate = exports.fetchTemplate = function fetchTemplate(apiData) {
  return function (args) {
    return new Promise(function (resolve, reject) {
      (0, _http2.default)(_extends({}, apiData, {
        data: _extends({}, apiData.data, args)
      })).then(function (result) {
        if (result.status === 200) {
          var data = result.data;
          if (data.ret_code === 1) {
            resolve(data.ret_data);
          } else {
            reject(data.ret_msg);
          }
        } else {
          reject('操作失败');
          (0, _logger.logger)(result.statusText);
        }
      }).catch(function (err) {
        reject('操作失败');
        (0, _logger.logger)(err);
      });
    });
  };
};

function amount_format(amount) {
  return (amount || 0).toFixed(2);
}

/**
 * 千分位化处理
 *
 * @param num 要处理的值(Number或者String)
 * @param len 保留小数位数(Number)
 * @return 金额格式的字符串,如'1,234,567.45'
 */
function toThousands(num, len) {
  len = len > 0 && len <= 20 ? len : 2;
  num = parseFloat((num + "").replace(/[^\d\.-]/g, "")).toFixed(len) + "";
  var l = num.split(".")[0].split("").reverse(),
      r = num.split(".")[1];
  var t = "";
  for (var i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && i + 1 !== l.length ? "," : "");
  }
  return t.split("").reverse().join("") + "." + r;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./app/lib/dictor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _polyphone, _polyphone2;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dict = {
    all: "YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJSDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLZYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNZMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY",
    polyphone: (_polyphone = { "19969": "DZ", "19975": "WM", "19988": "QJ", "20048": "YL", "20056": "SC", "20060": "NM", "20094": "QG", "20127": "QJ", "20167": "QC", "20193": "YG", "20250": "KH", "20256": "ZC", "20282": "SC", "20285": "QJG", "20291": "TD", "20314": "YD", "20340": "NE", "20375": "TD", "20389": "YJ", "20391": "CZ", "20415": "PB", "20446": "YS", "20447": "SQ", "20504": "TC", "20608": "KG", "20854": "QJ", "20857": "ZC", "20911": "PF" }, _defineProperty(_polyphone, "20504", "TC"), _defineProperty(_polyphone, "20608", "KG"), _defineProperty(_polyphone, "20854", "QJ"), _defineProperty(_polyphone, "20857", "ZC"), _defineProperty(_polyphone, "20911", "PF"), _defineProperty(_polyphone, "20985", "AW"), _defineProperty(_polyphone, "21032", "PB"), _defineProperty(_polyphone, "21048", "XQ"), _defineProperty(_polyphone, "21049", "SC"), _defineProperty(_polyphone, "21089", "YS"), _defineProperty(_polyphone, "21119", "JC"), _defineProperty(_polyphone, "21242", "SB"), _defineProperty(_polyphone, "21273", "SC"), _defineProperty(_polyphone, "21305", "YP"), _defineProperty(_polyphone, "21306", "QO"), _defineProperty(_polyphone, "21330", "ZC"), _defineProperty(_polyphone, "21333", "SDC"), _defineProperty(_polyphone, "21345", "QK"), _defineProperty(_polyphone, "21378", "CA"), _defineProperty(_polyphone, "21397", "SC"), _defineProperty(_polyphone, "21414", "XS"), _defineProperty(_polyphone, "21442", "SC"), _defineProperty(_polyphone, "21477", "JG"), _defineProperty(_polyphone, "21480", "TD"), _defineProperty(_polyphone, "21484", "ZS"), _defineProperty(_polyphone, "21494", "YX"), _defineProperty(_polyphone, "21505", "YX"), _defineProperty(_polyphone, "21512", "HG"), _defineProperty(_polyphone, "21523", "XH"), _defineProperty(_polyphone, "21537", "PB"), _defineProperty(_polyphone, "21542", "PF"), _defineProperty(_polyphone, "21549", "KH"), _defineProperty(_polyphone, "21571", "E"), _defineProperty(_polyphone, "21574", "DA"), _defineProperty(_polyphone, "21588", "TD"), _defineProperty(_polyphone, "21589", "O"), _defineProperty(_polyphone, "21618", "ZC"), _defineProperty(_polyphone, "21621", "KHA"), _defineProperty(_polyphone, "21632", "ZJ"), _defineProperty(_polyphone, "21654", "KG"), _defineProperty(_polyphone, "21679", "LKG"), _defineProperty(_polyphone, "21683", "KH"), _defineProperty(_polyphone, "21710", "A"), _defineProperty(_polyphone, "21719", "YH"), _defineProperty(_polyphone, "21734", "WOE"), _defineProperty(_polyphone, "21769", "A"), _defineProperty(_polyphone, "21780", "WN"), _defineProperty(_polyphone, "21804", "XH"), _defineProperty(_polyphone, "21834", "A"), _defineProperty(_polyphone, "21899", "ZD"), _defineProperty(_polyphone, "21903", "RN"), _defineProperty(_polyphone, "21908", "WO"), _defineProperty(_polyphone, "21939", "ZC"), _defineProperty(_polyphone, "21956", "SA"), _defineProperty(_polyphone, "21964", "YA"), _defineProperty(_polyphone, "21970", "TD"), _defineProperty(_polyphone, "22003", "A"), _defineProperty(_polyphone, "22031", "JG"), _defineProperty(_polyphone, "22040", "XS"), _defineProperty(_polyphone, "22060", "ZC"), _defineProperty(_polyphone, "22066", "ZC"), _defineProperty(_polyphone, "22079", "MH"), _defineProperty(_polyphone, "22129", "XJ"), _defineProperty(_polyphone, "22179", "XA"), _defineProperty(_polyphone, "22237", "NJ"), _defineProperty(_polyphone, "22244", "TD"), _defineProperty(_polyphone, "22280", "JQ"), _defineProperty(_polyphone, "22300", "YH"), _defineProperty(_polyphone, "22313", "XW"), _defineProperty(_polyphone, "22331", "YQ"), _defineProperty(_polyphone, "22343", "YJ"), _defineProperty(_polyphone, "22351", "PH"), _defineProperty(_polyphone, "22395", "DC"), _defineProperty(_polyphone, "22412", "TD"), _defineProperty(_polyphone, "22484", "PB"), _defineProperty(_polyphone, "22500", "PB"), _defineProperty(_polyphone, "22534", "ZD"), _defineProperty(_polyphone, "22549", "DH"), _defineProperty(_polyphone, "22561", "PB"), _defineProperty(_polyphone, "22612", "TD"), _defineProperty(_polyphone, "22771", "KQ"), _defineProperty(_polyphone, "22831", "HB"), _defineProperty(_polyphone, "22841", "JG"), _defineProperty(_polyphone, "22855", "QJ"), _defineProperty(_polyphone, "22865", "XQ"), _defineProperty(_polyphone, "23013", "ML"), _defineProperty(_polyphone, "23081", "WM"), _defineProperty(_polyphone, "23487", "SX"), _defineProperty(_polyphone, "23558", "QJ"), _defineProperty(_polyphone, "23561", "YW"), _defineProperty(_polyphone, "23586", "YW"), _defineProperty(_polyphone, "23614", "YW"), _defineProperty(_polyphone, "23615", "SN"), _defineProperty(_polyphone, "23631", "PB"), _defineProperty(_polyphone, "23646", "ZS"), _defineProperty(_polyphone, "23663", "ZT"), _defineProperty(_polyphone, "23673", "YG"), _defineProperty(_polyphone, "23762", "TD"), _defineProperty(_polyphone, "23769", "ZS"), _defineProperty(_polyphone, "23780", "QJ"), _defineProperty(_polyphone, "23884", "QK"), _defineProperty(_polyphone, "24055", "XH"), _defineProperty(_polyphone, "24113", "DC"), _defineProperty(_polyphone, "24162", "ZC"), _defineProperty(_polyphone, "24191", "GA"), _defineProperty(_polyphone, "24273", "QJ"), _defineProperty(_polyphone, "24324", "NL"), _defineProperty(_polyphone, "24377", "TD"), _defineProperty(_polyphone, "24378", "QJ"), _defineProperty(_polyphone, "24439", "PF"), _defineProperty(_polyphone, "24554", "ZS"), _defineProperty(_polyphone, "24683", "TD"), _defineProperty(_polyphone, "24694", "WE"), _defineProperty(_polyphone, "24733", "LK"), _defineProperty(_polyphone, "24925", "TN"), _defineProperty(_polyphone, "25094", "ZG"), _defineProperty(_polyphone, "25100", "XQ"), _defineProperty(_polyphone, "25103", "XH"), _defineProperty(_polyphone, "25153", "PB"), _defineProperty(_polyphone, "25170", "PB"), _defineProperty(_polyphone, "25179", "KG"), _defineProperty(_polyphone, "25203", "PB"), _defineProperty(_polyphone, "25240", "ZS"), _defineProperty(_polyphone, "25282", "FB"), _defineProperty(_polyphone, "25303", "NA"), _defineProperty(_polyphone, "25324", "KG"), _defineProperty(_polyphone, "25341", "ZY"), _defineProperty(_polyphone, "25373", "WZ"), _defineProperty(_polyphone, "25375", "XJ"), _defineProperty(_polyphone, "25384", "A"), _defineProperty(_polyphone, "25457", "A"), _defineProperty(_polyphone, "25528", "SD"), _defineProperty(_polyphone, "25530", "SC"), _defineProperty(_polyphone, "25552", "TD"), _defineProperty(_polyphone, "25774", "ZC"), _defineProperty(_polyphone, "25874", "ZC"), _defineProperty(_polyphone, "26044", "YW"), _defineProperty(_polyphone, "26080", "WM"), _defineProperty(_polyphone, "26292", "PB"), _defineProperty(_polyphone, "26333", "PB"), _defineProperty(_polyphone, "26355", "ZY"), _defineProperty(_polyphone, "26366", "CZ"), _defineProperty(_polyphone, "26397", "ZC"), _defineProperty(_polyphone, "26399", "QJ"), _defineProperty(_polyphone, "26415", "ZS"), _defineProperty(_polyphone, "26451", "SB"), _defineProperty(_polyphone, "26526", "ZC"), _defineProperty(_polyphone, "26552", "JG"), _defineProperty(_polyphone, "26561", "TD"), _defineProperty(_polyphone, "26588", "JG"), _defineProperty(_polyphone, "26597", "CZ"), _defineProperty(_polyphone, "26629", "ZS"), _defineProperty(_polyphone, "26638", "YL"), _defineProperty(_polyphone, "26646", "XQ"), _defineProperty(_polyphone, "26653", "KG"), _defineProperty(_polyphone, "26657", "XJ"), _defineProperty(_polyphone, "26727", "HG"), _defineProperty(_polyphone, "26894", "ZC"), _defineProperty(_polyphone, "26937", "ZS"), _defineProperty(_polyphone, "26946", "ZC"), _defineProperty(_polyphone, "26999", "KJ"), _defineProperty(_polyphone, "27099", "KJ"), _defineProperty(_polyphone, "27449", "YQ"), _defineProperty(_polyphone, "27481", "XS"), _defineProperty(_polyphone, "27542", "ZS"), _defineProperty(_polyphone, "27663", "ZS"), _defineProperty(_polyphone, "27748", "TS"), _defineProperty(_polyphone, "27784", "SC"), _defineProperty(_polyphone, "27788", "ZD"), _defineProperty(_polyphone, "27795", "TD"), _defineProperty(_polyphone, "27812", "O"), _defineProperty(_polyphone, "27850", "PB"), _defineProperty(_polyphone, "27852", "MB"), _defineProperty(_polyphone, "27895", "SL"), _defineProperty(_polyphone, "27898", "PL"), _defineProperty(_polyphone, "27973", "QJ"), _defineProperty(_polyphone, "27981", "KH"), _defineProperty(_polyphone, "27986", "HX"), _defineProperty(_polyphone, "27994", "XJ"), _defineProperty(_polyphone, "28044", "YC"), _defineProperty(_polyphone, "28065", "WG"), _defineProperty(_polyphone, "28177", "SM"), _defineProperty(_polyphone, "28267", "QJ"), _defineProperty(_polyphone, "28291", "KH"), _defineProperty(_polyphone, "28337", "ZQ"), _defineProperty(_polyphone, "28463", "TL"), _defineProperty(_polyphone, "28548", "DC"), _defineProperty(_polyphone, "28601", "TD"), _defineProperty(_polyphone, "28689", "PB"), _defineProperty(_polyphone, "28805", "JG"), _defineProperty(_polyphone, "28820", "QG"), _defineProperty(_polyphone, "28846", "PB"), _defineProperty(_polyphone, "28952", "TD"), _defineProperty(_polyphone, "28975", "ZC"), _defineProperty(_polyphone, "29100", "A"), _defineProperty(_polyphone, "29325", "QJ"), _defineProperty(_polyphone, "29575", "SL"), _defineProperty(_polyphone, "29602", "FB"), _defineProperty(_polyphone, "30010", "TD"), _defineProperty(_polyphone, "30044", "CX"), _defineProperty(_polyphone, "30058", "PF"), _defineProperty(_polyphone, "30091", "YSP"), _defineProperty(_polyphone, "30111", "YN"), _defineProperty(_polyphone, "30229", "XJ"), _defineProperty(_polyphone, "30427", "SC"), _defineProperty(_polyphone, "30465", "SX"), _defineProperty(_polyphone, "30631", "YQ"), _defineProperty(_polyphone, "30655", "QJ"), _defineProperty(_polyphone, "30684", "QJG"), _defineProperty(_polyphone, "30707", "SD"), _defineProperty(_polyphone, "30729", "XH"), _defineProperty(_polyphone, "30796", "LG"), _defineProperty(_polyphone, "30917", "PB"), _defineProperty(_polyphone, "31074", "NM"), _defineProperty(_polyphone, "31085", "JZ"), _defineProperty(_polyphone, "31109", "SC"), _defineProperty(_polyphone, "31181", "ZC"), _defineProperty(_polyphone, "31192", "MLB"), _defineProperty(_polyphone, "31293", "JQ"), _defineProperty(_polyphone, "31400", "YX"), _defineProperty(_polyphone, "31584", "YJ"), _defineProperty(_polyphone, "31896", "ZN"), _defineProperty(_polyphone, "31909", "ZY"), _defineProperty(_polyphone, "31995", "XJ"), _defineProperty(_polyphone, "32321", "PF"), _defineProperty(_polyphone, "32327", "ZY"), _defineProperty(_polyphone, "32418", "HG"), _defineProperty(_polyphone, "32420", "XQ"), _defineProperty(_polyphone, "32421", "HG"), _defineProperty(_polyphone, "32438", "LG"), _defineProperty(_polyphone, "32473", "GJ"), _defineProperty(_polyphone, "32488", "TD"), _defineProperty(_polyphone, "32521", "QJ"), _defineProperty(_polyphone, "32527", "PB"), _defineProperty(_polyphone, "32562", "ZSQ"), _defineProperty(_polyphone, "32564", "JZ"), _defineProperty(_polyphone, "32735", "ZD"), _defineProperty(_polyphone, "32793", "PB"), _defineProperty(_polyphone, "33071", "PF"), _defineProperty(_polyphone, "33098", "XL"), _defineProperty(_polyphone, "33100", "YA"), _defineProperty(_polyphone, "33152", "PB"), _defineProperty(_polyphone, "33261", "CX"), _defineProperty(_polyphone, "33324", "BP"), _defineProperty(_polyphone, "33333", "TD"), _defineProperty(_polyphone, "33406", "YA"), _defineProperty(_polyphone, "33426", "WM"), _defineProperty(_polyphone, "33432", "PB"), _defineProperty(_polyphone, "33445", "JG"), _defineProperty(_polyphone, "33486", "ZN"), _defineProperty(_polyphone, "33493", "TS"), _defineProperty(_polyphone, "33507", "QJ"), _defineProperty(_polyphone, "33540", "QJ"), _defineProperty(_polyphone, "33544", "ZC"), _defineProperty(_polyphone, "33564", "XQ"), _defineProperty(_polyphone, "33617", "YT"), _defineProperty(_polyphone, "33632", "QJ"), _defineProperty(_polyphone, "33636", "XH"), _defineProperty(_polyphone, "33637", "YX"), _defineProperty(_polyphone, "33694", "WG"), _defineProperty(_polyphone, "33705", "PF"), _defineProperty(_polyphone, "33728", "YW"), _defineProperty(_polyphone, "33882", "SR"), _defineProperty(_polyphone, "34067", "WM"), _defineProperty(_polyphone, "34074", "YW"), _defineProperty(_polyphone, "34121", "QJ"), _defineProperty(_polyphone, "34255", "ZC"), _defineProperty(_polyphone, "34259", "XL"), _defineProperty(_polyphone, "34425", "JH"), _defineProperty(_polyphone, "34430", "XH"), _defineProperty(_polyphone, "34485", "KH"), _defineProperty(_polyphone, "34503", "YS"), _defineProperty(_polyphone, "34532", "HG"), _defineProperty(_polyphone, "34552", "XS"), _defineProperty(_polyphone, "34558", "YE"), _defineProperty(_polyphone, "34593", "ZL"), _defineProperty(_polyphone, "34660", "YQ"), _defineProperty(_polyphone, "34892", "XH"), _defineProperty(_polyphone, "34928", "SC"), _defineProperty(_polyphone, "34999", "QJ"), _defineProperty(_polyphone, "35048", "PB"), _defineProperty(_polyphone, "35059", "SC"), _defineProperty(_polyphone, "35098", "ZC"), _defineProperty(_polyphone, "35203", "TQ"), _defineProperty(_polyphone, "35265", "JX"), _defineProperty(_polyphone, "35299", "JX"), _defineProperty(_polyphone, "35782", "SZ"), _defineProperty(_polyphone, "35828", "YS"), _defineProperty(_polyphone, "35830", "E"), _defineProperty(_polyphone, "35843", "TD"), _defineProperty(_polyphone, "35895", "YG"), _defineProperty(_polyphone, "35977", "MH"), _defineProperty(_polyphone, "36158", "JG"), _defineProperty(_polyphone, "36228", "QJ"), _defineProperty(_polyphone, "36426", "XQ"), _defineProperty(_polyphone, "36466", "DC"), _defineProperty(_polyphone, "36710", "JC"), _defineProperty(_polyphone, "36711", "ZYG"), _defineProperty(_polyphone, "36767", "PB"), _defineProperty(_polyphone, "36866", "SK"), _defineProperty(_polyphone, "36951", "YW"), _defineProperty(_polyphone, "37034", "YX"), _defineProperty(_polyphone, "37063", "XH"), _defineProperty(_polyphone, "37218", "ZC"), _defineProperty(_polyphone, "37325", "ZC"), _defineProperty(_polyphone, "38063", "PB"), _defineProperty(_polyphone, "38079", "TD"), _defineProperty(_polyphone, "38085", "QY"), _defineProperty(_polyphone, "38107", "DC"), _defineProperty(_polyphone, "38116", "TD"), _defineProperty(_polyphone, "38123", "YD"), _defineProperty(_polyphone, "38224", "HG"), _defineProperty(_polyphone, "38241", "XTC"), _defineProperty(_polyphone, "38271", "ZC"), _defineProperty(_polyphone, "38415", "YE"), _defineProperty(_polyphone, "38426", "KH"), _defineProperty(_polyphone, "38461", "YD"), _defineProperty(_polyphone, "38463", "AE"), _defineProperty(_polyphone, "38466", "PB"), _defineProperty(_polyphone, "38477", "XJ"), _defineProperty(_polyphone, "38518", "YT"), _defineProperty(_polyphone, "38551", "WK"), _defineProperty(_polyphone, "38585", "ZC"), _defineProperty(_polyphone, "38704", "XS"), _defineProperty(_polyphone, "38739", "LJ"), _defineProperty(_polyphone, "38761", "GJ"), _defineProperty(_polyphone, "38808", "SQ"), _defineProperty(_polyphone, "39048", "JG"), _defineProperty(_polyphone, "39049", "XJ"), _defineProperty(_polyphone, "39052", "HG"), _defineProperty(_polyphone, "39076", "CZ"), _defineProperty(_polyphone, "39271", "XT"), _defineProperty(_polyphone, "39534", "TD"), _defineProperty(_polyphone, "39552", "TD"), _defineProperty(_polyphone, "39584", "PB"), _defineProperty(_polyphone, "39647", "SB"), _defineProperty(_polyphone, "39730", "LG"), _defineProperty(_polyphone, "39748", "TPB"), _defineProperty(_polyphone, "40109", "ZQ"), _defineProperty(_polyphone, "40479", "ND"), _defineProperty(_polyphone, "40516", "HG"), _defineProperty(_polyphone, "40536", "HG"), _defineProperty(_polyphone, "40583", "QJ"), _defineProperty(_polyphone, "40765", "YQ"), _defineProperty(_polyphone, "40784", "QJ"), _defineProperty(_polyphone, "40840", "YK"), _defineProperty(_polyphone, "40863", "QJG"), _polyphone)
};

var all = exports.all = "YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJSDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLZYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNZMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY";
var polyphone = exports.polyphone = (_polyphone2 = { "19969": "DZ", "19975": "WM", "19988": "QJ", "20048": "YL", "20056": "SC", "20060": "NM", "20094": "QG", "20127": "QJ", "20167": "QC", "20193": "YG", "20250": "KH", "20256": "ZC", "20282": "SC", "20285": "QJG", "20291": "TD", "20314": "YD", "20340": "NE", "20375": "TD", "20389": "YJ", "20391": "CZ", "20415": "PB", "20446": "YS", "20447": "SQ", "20504": "TC", "20608": "KG", "20854": "QJ", "20857": "ZC", "20911": "PF" }, _defineProperty(_polyphone2, "20504", "TC"), _defineProperty(_polyphone2, "20608", "KG"), _defineProperty(_polyphone2, "20854", "QJ"), _defineProperty(_polyphone2, "20857", "ZC"), _defineProperty(_polyphone2, "20911", "PF"), _defineProperty(_polyphone2, "20985", "AW"), _defineProperty(_polyphone2, "21032", "PB"), _defineProperty(_polyphone2, "21048", "XQ"), _defineProperty(_polyphone2, "21049", "SC"), _defineProperty(_polyphone2, "21089", "YS"), _defineProperty(_polyphone2, "21119", "JC"), _defineProperty(_polyphone2, "21242", "SB"), _defineProperty(_polyphone2, "21273", "SC"), _defineProperty(_polyphone2, "21305", "YP"), _defineProperty(_polyphone2, "21306", "QO"), _defineProperty(_polyphone2, "21330", "ZC"), _defineProperty(_polyphone2, "21333", "SDC"), _defineProperty(_polyphone2, "21345", "QK"), _defineProperty(_polyphone2, "21378", "CA"), _defineProperty(_polyphone2, "21397", "SC"), _defineProperty(_polyphone2, "21414", "XS"), _defineProperty(_polyphone2, "21442", "SC"), _defineProperty(_polyphone2, "21477", "JG"), _defineProperty(_polyphone2, "21480", "TD"), _defineProperty(_polyphone2, "21484", "ZS"), _defineProperty(_polyphone2, "21494", "YX"), _defineProperty(_polyphone2, "21505", "YX"), _defineProperty(_polyphone2, "21512", "HG"), _defineProperty(_polyphone2, "21523", "XH"), _defineProperty(_polyphone2, "21537", "PB"), _defineProperty(_polyphone2, "21542", "PF"), _defineProperty(_polyphone2, "21549", "KH"), _defineProperty(_polyphone2, "21571", "E"), _defineProperty(_polyphone2, "21574", "DA"), _defineProperty(_polyphone2, "21588", "TD"), _defineProperty(_polyphone2, "21589", "O"), _defineProperty(_polyphone2, "21618", "ZC"), _defineProperty(_polyphone2, "21621", "KHA"), _defineProperty(_polyphone2, "21632", "ZJ"), _defineProperty(_polyphone2, "21654", "KG"), _defineProperty(_polyphone2, "21679", "LKG"), _defineProperty(_polyphone2, "21683", "KH"), _defineProperty(_polyphone2, "21710", "A"), _defineProperty(_polyphone2, "21719", "YH"), _defineProperty(_polyphone2, "21734", "WOE"), _defineProperty(_polyphone2, "21769", "A"), _defineProperty(_polyphone2, "21780", "WN"), _defineProperty(_polyphone2, "21804", "XH"), _defineProperty(_polyphone2, "21834", "A"), _defineProperty(_polyphone2, "21899", "ZD"), _defineProperty(_polyphone2, "21903", "RN"), _defineProperty(_polyphone2, "21908", "WO"), _defineProperty(_polyphone2, "21939", "ZC"), _defineProperty(_polyphone2, "21956", "SA"), _defineProperty(_polyphone2, "21964", "YA"), _defineProperty(_polyphone2, "21970", "TD"), _defineProperty(_polyphone2, "22003", "A"), _defineProperty(_polyphone2, "22031", "JG"), _defineProperty(_polyphone2, "22040", "XS"), _defineProperty(_polyphone2, "22060", "ZC"), _defineProperty(_polyphone2, "22066", "ZC"), _defineProperty(_polyphone2, "22079", "MH"), _defineProperty(_polyphone2, "22129", "XJ"), _defineProperty(_polyphone2, "22179", "XA"), _defineProperty(_polyphone2, "22237", "NJ"), _defineProperty(_polyphone2, "22244", "TD"), _defineProperty(_polyphone2, "22280", "JQ"), _defineProperty(_polyphone2, "22300", "YH"), _defineProperty(_polyphone2, "22313", "XW"), _defineProperty(_polyphone2, "22331", "YQ"), _defineProperty(_polyphone2, "22343", "YJ"), _defineProperty(_polyphone2, "22351", "PH"), _defineProperty(_polyphone2, "22395", "DC"), _defineProperty(_polyphone2, "22412", "TD"), _defineProperty(_polyphone2, "22484", "PB"), _defineProperty(_polyphone2, "22500", "PB"), _defineProperty(_polyphone2, "22534", "ZD"), _defineProperty(_polyphone2, "22549", "DH"), _defineProperty(_polyphone2, "22561", "PB"), _defineProperty(_polyphone2, "22612", "TD"), _defineProperty(_polyphone2, "22771", "KQ"), _defineProperty(_polyphone2, "22831", "HB"), _defineProperty(_polyphone2, "22841", "JG"), _defineProperty(_polyphone2, "22855", "QJ"), _defineProperty(_polyphone2, "22865", "XQ"), _defineProperty(_polyphone2, "23013", "ML"), _defineProperty(_polyphone2, "23081", "WM"), _defineProperty(_polyphone2, "23487", "SX"), _defineProperty(_polyphone2, "23558", "QJ"), _defineProperty(_polyphone2, "23561", "YW"), _defineProperty(_polyphone2, "23586", "YW"), _defineProperty(_polyphone2, "23614", "YW"), _defineProperty(_polyphone2, "23615", "SN"), _defineProperty(_polyphone2, "23631", "PB"), _defineProperty(_polyphone2, "23646", "ZS"), _defineProperty(_polyphone2, "23663", "ZT"), _defineProperty(_polyphone2, "23673", "YG"), _defineProperty(_polyphone2, "23762", "TD"), _defineProperty(_polyphone2, "23769", "ZS"), _defineProperty(_polyphone2, "23780", "QJ"), _defineProperty(_polyphone2, "23884", "QK"), _defineProperty(_polyphone2, "24055", "XH"), _defineProperty(_polyphone2, "24113", "DC"), _defineProperty(_polyphone2, "24162", "ZC"), _defineProperty(_polyphone2, "24191", "GA"), _defineProperty(_polyphone2, "24273", "QJ"), _defineProperty(_polyphone2, "24324", "NL"), _defineProperty(_polyphone2, "24377", "TD"), _defineProperty(_polyphone2, "24378", "QJ"), _defineProperty(_polyphone2, "24439", "PF"), _defineProperty(_polyphone2, "24554", "ZS"), _defineProperty(_polyphone2, "24683", "TD"), _defineProperty(_polyphone2, "24694", "WE"), _defineProperty(_polyphone2, "24733", "LK"), _defineProperty(_polyphone2, "24925", "TN"), _defineProperty(_polyphone2, "25094", "ZG"), _defineProperty(_polyphone2, "25100", "XQ"), _defineProperty(_polyphone2, "25103", "XH"), _defineProperty(_polyphone2, "25153", "PB"), _defineProperty(_polyphone2, "25170", "PB"), _defineProperty(_polyphone2, "25179", "KG"), _defineProperty(_polyphone2, "25203", "PB"), _defineProperty(_polyphone2, "25240", "ZS"), _defineProperty(_polyphone2, "25282", "FB"), _defineProperty(_polyphone2, "25303", "NA"), _defineProperty(_polyphone2, "25324", "KG"), _defineProperty(_polyphone2, "25341", "ZY"), _defineProperty(_polyphone2, "25373", "WZ"), _defineProperty(_polyphone2, "25375", "XJ"), _defineProperty(_polyphone2, "25384", "A"), _defineProperty(_polyphone2, "25457", "A"), _defineProperty(_polyphone2, "25528", "SD"), _defineProperty(_polyphone2, "25530", "SC"), _defineProperty(_polyphone2, "25552", "TD"), _defineProperty(_polyphone2, "25774", "ZC"), _defineProperty(_polyphone2, "25874", "ZC"), _defineProperty(_polyphone2, "26044", "YW"), _defineProperty(_polyphone2, "26080", "WM"), _defineProperty(_polyphone2, "26292", "PB"), _defineProperty(_polyphone2, "26333", "PB"), _defineProperty(_polyphone2, "26355", "ZY"), _defineProperty(_polyphone2, "26366", "CZ"), _defineProperty(_polyphone2, "26397", "ZC"), _defineProperty(_polyphone2, "26399", "QJ"), _defineProperty(_polyphone2, "26415", "ZS"), _defineProperty(_polyphone2, "26451", "SB"), _defineProperty(_polyphone2, "26526", "ZC"), _defineProperty(_polyphone2, "26552", "JG"), _defineProperty(_polyphone2, "26561", "TD"), _defineProperty(_polyphone2, "26588", "JG"), _defineProperty(_polyphone2, "26597", "CZ"), _defineProperty(_polyphone2, "26629", "ZS"), _defineProperty(_polyphone2, "26638", "YL"), _defineProperty(_polyphone2, "26646", "XQ"), _defineProperty(_polyphone2, "26653", "KG"), _defineProperty(_polyphone2, "26657", "XJ"), _defineProperty(_polyphone2, "26727", "HG"), _defineProperty(_polyphone2, "26894", "ZC"), _defineProperty(_polyphone2, "26937", "ZS"), _defineProperty(_polyphone2, "26946", "ZC"), _defineProperty(_polyphone2, "26999", "KJ"), _defineProperty(_polyphone2, "27099", "KJ"), _defineProperty(_polyphone2, "27449", "YQ"), _defineProperty(_polyphone2, "27481", "XS"), _defineProperty(_polyphone2, "27542", "ZS"), _defineProperty(_polyphone2, "27663", "ZS"), _defineProperty(_polyphone2, "27748", "TS"), _defineProperty(_polyphone2, "27784", "SC"), _defineProperty(_polyphone2, "27788", "ZD"), _defineProperty(_polyphone2, "27795", "TD"), _defineProperty(_polyphone2, "27812", "O"), _defineProperty(_polyphone2, "27850", "PB"), _defineProperty(_polyphone2, "27852", "MB"), _defineProperty(_polyphone2, "27895", "SL"), _defineProperty(_polyphone2, "27898", "PL"), _defineProperty(_polyphone2, "27973", "QJ"), _defineProperty(_polyphone2, "27981", "KH"), _defineProperty(_polyphone2, "27986", "HX"), _defineProperty(_polyphone2, "27994", "XJ"), _defineProperty(_polyphone2, "28044", "YC"), _defineProperty(_polyphone2, "28065", "WG"), _defineProperty(_polyphone2, "28177", "SM"), _defineProperty(_polyphone2, "28267", "QJ"), _defineProperty(_polyphone2, "28291", "KH"), _defineProperty(_polyphone2, "28337", "ZQ"), _defineProperty(_polyphone2, "28463", "TL"), _defineProperty(_polyphone2, "28548", "DC"), _defineProperty(_polyphone2, "28601", "TD"), _defineProperty(_polyphone2, "28689", "PB"), _defineProperty(_polyphone2, "28805", "JG"), _defineProperty(_polyphone2, "28820", "QG"), _defineProperty(_polyphone2, "28846", "PB"), _defineProperty(_polyphone2, "28952", "TD"), _defineProperty(_polyphone2, "28975", "ZC"), _defineProperty(_polyphone2, "29100", "A"), _defineProperty(_polyphone2, "29325", "QJ"), _defineProperty(_polyphone2, "29575", "SL"), _defineProperty(_polyphone2, "29602", "FB"), _defineProperty(_polyphone2, "30010", "TD"), _defineProperty(_polyphone2, "30044", "CX"), _defineProperty(_polyphone2, "30058", "PF"), _defineProperty(_polyphone2, "30091", "YSP"), _defineProperty(_polyphone2, "30111", "YN"), _defineProperty(_polyphone2, "30229", "XJ"), _defineProperty(_polyphone2, "30427", "SC"), _defineProperty(_polyphone2, "30465", "SX"), _defineProperty(_polyphone2, "30631", "YQ"), _defineProperty(_polyphone2, "30655", "QJ"), _defineProperty(_polyphone2, "30684", "QJG"), _defineProperty(_polyphone2, "30707", "SD"), _defineProperty(_polyphone2, "30729", "XH"), _defineProperty(_polyphone2, "30796", "LG"), _defineProperty(_polyphone2, "30917", "PB"), _defineProperty(_polyphone2, "31074", "NM"), _defineProperty(_polyphone2, "31085", "JZ"), _defineProperty(_polyphone2, "31109", "SC"), _defineProperty(_polyphone2, "31181", "ZC"), _defineProperty(_polyphone2, "31192", "MLB"), _defineProperty(_polyphone2, "31293", "JQ"), _defineProperty(_polyphone2, "31400", "YX"), _defineProperty(_polyphone2, "31584", "YJ"), _defineProperty(_polyphone2, "31896", "ZN"), _defineProperty(_polyphone2, "31909", "ZY"), _defineProperty(_polyphone2, "31995", "XJ"), _defineProperty(_polyphone2, "32321", "PF"), _defineProperty(_polyphone2, "32327", "ZY"), _defineProperty(_polyphone2, "32418", "HG"), _defineProperty(_polyphone2, "32420", "XQ"), _defineProperty(_polyphone2, "32421", "HG"), _defineProperty(_polyphone2, "32438", "LG"), _defineProperty(_polyphone2, "32473", "GJ"), _defineProperty(_polyphone2, "32488", "TD"), _defineProperty(_polyphone2, "32521", "QJ"), _defineProperty(_polyphone2, "32527", "PB"), _defineProperty(_polyphone2, "32562", "ZSQ"), _defineProperty(_polyphone2, "32564", "JZ"), _defineProperty(_polyphone2, "32735", "ZD"), _defineProperty(_polyphone2, "32793", "PB"), _defineProperty(_polyphone2, "33071", "PF"), _defineProperty(_polyphone2, "33098", "XL"), _defineProperty(_polyphone2, "33100", "YA"), _defineProperty(_polyphone2, "33152", "PB"), _defineProperty(_polyphone2, "33261", "CX"), _defineProperty(_polyphone2, "33324", "BP"), _defineProperty(_polyphone2, "33333", "TD"), _defineProperty(_polyphone2, "33406", "YA"), _defineProperty(_polyphone2, "33426", "WM"), _defineProperty(_polyphone2, "33432", "PB"), _defineProperty(_polyphone2, "33445", "JG"), _defineProperty(_polyphone2, "33486", "ZN"), _defineProperty(_polyphone2, "33493", "TS"), _defineProperty(_polyphone2, "33507", "QJ"), _defineProperty(_polyphone2, "33540", "QJ"), _defineProperty(_polyphone2, "33544", "ZC"), _defineProperty(_polyphone2, "33564", "XQ"), _defineProperty(_polyphone2, "33617", "YT"), _defineProperty(_polyphone2, "33632", "QJ"), _defineProperty(_polyphone2, "33636", "XH"), _defineProperty(_polyphone2, "33637", "YX"), _defineProperty(_polyphone2, "33694", "WG"), _defineProperty(_polyphone2, "33705", "PF"), _defineProperty(_polyphone2, "33728", "YW"), _defineProperty(_polyphone2, "33882", "SR"), _defineProperty(_polyphone2, "34067", "WM"), _defineProperty(_polyphone2, "34074", "YW"), _defineProperty(_polyphone2, "34121", "QJ"), _defineProperty(_polyphone2, "34255", "ZC"), _defineProperty(_polyphone2, "34259", "XL"), _defineProperty(_polyphone2, "34425", "JH"), _defineProperty(_polyphone2, "34430", "XH"), _defineProperty(_polyphone2, "34485", "KH"), _defineProperty(_polyphone2, "34503", "YS"), _defineProperty(_polyphone2, "34532", "HG"), _defineProperty(_polyphone2, "34552", "XS"), _defineProperty(_polyphone2, "34558", "YE"), _defineProperty(_polyphone2, "34593", "ZL"), _defineProperty(_polyphone2, "34660", "YQ"), _defineProperty(_polyphone2, "34892", "XH"), _defineProperty(_polyphone2, "34928", "SC"), _defineProperty(_polyphone2, "34999", "QJ"), _defineProperty(_polyphone2, "35048", "PB"), _defineProperty(_polyphone2, "35059", "SC"), _defineProperty(_polyphone2, "35098", "ZC"), _defineProperty(_polyphone2, "35203", "TQ"), _defineProperty(_polyphone2, "35265", "JX"), _defineProperty(_polyphone2, "35299", "JX"), _defineProperty(_polyphone2, "35782", "SZ"), _defineProperty(_polyphone2, "35828", "YS"), _defineProperty(_polyphone2, "35830", "E"), _defineProperty(_polyphone2, "35843", "TD"), _defineProperty(_polyphone2, "35895", "YG"), _defineProperty(_polyphone2, "35977", "MH"), _defineProperty(_polyphone2, "36158", "JG"), _defineProperty(_polyphone2, "36228", "QJ"), _defineProperty(_polyphone2, "36426", "XQ"), _defineProperty(_polyphone2, "36466", "DC"), _defineProperty(_polyphone2, "36710", "JC"), _defineProperty(_polyphone2, "36711", "ZYG"), _defineProperty(_polyphone2, "36767", "PB"), _defineProperty(_polyphone2, "36866", "SK"), _defineProperty(_polyphone2, "36951", "YW"), _defineProperty(_polyphone2, "37034", "YX"), _defineProperty(_polyphone2, "37063", "XH"), _defineProperty(_polyphone2, "37218", "ZC"), _defineProperty(_polyphone2, "37325", "ZC"), _defineProperty(_polyphone2, "38063", "PB"), _defineProperty(_polyphone2, "38079", "TD"), _defineProperty(_polyphone2, "38085", "QY"), _defineProperty(_polyphone2, "38107", "DC"), _defineProperty(_polyphone2, "38116", "TD"), _defineProperty(_polyphone2, "38123", "YD"), _defineProperty(_polyphone2, "38224", "HG"), _defineProperty(_polyphone2, "38241", "XTC"), _defineProperty(_polyphone2, "38271", "ZC"), _defineProperty(_polyphone2, "38415", "YE"), _defineProperty(_polyphone2, "38426", "KH"), _defineProperty(_polyphone2, "38461", "YD"), _defineProperty(_polyphone2, "38463", "AE"), _defineProperty(_polyphone2, "38466", "PB"), _defineProperty(_polyphone2, "38477", "XJ"), _defineProperty(_polyphone2, "38518", "YT"), _defineProperty(_polyphone2, "38551", "WK"), _defineProperty(_polyphone2, "38585", "ZC"), _defineProperty(_polyphone2, "38704", "XS"), _defineProperty(_polyphone2, "38739", "LJ"), _defineProperty(_polyphone2, "38761", "GJ"), _defineProperty(_polyphone2, "38808", "SQ"), _defineProperty(_polyphone2, "39048", "JG"), _defineProperty(_polyphone2, "39049", "XJ"), _defineProperty(_polyphone2, "39052", "HG"), _defineProperty(_polyphone2, "39076", "CZ"), _defineProperty(_polyphone2, "39271", "XT"), _defineProperty(_polyphone2, "39534", "TD"), _defineProperty(_polyphone2, "39552", "TD"), _defineProperty(_polyphone2, "39584", "PB"), _defineProperty(_polyphone2, "39647", "SB"), _defineProperty(_polyphone2, "39730", "LG"), _defineProperty(_polyphone2, "39748", "TPB"), _defineProperty(_polyphone2, "40109", "ZQ"), _defineProperty(_polyphone2, "40479", "ND"), _defineProperty(_polyphone2, "40516", "HG"), _defineProperty(_polyphone2, "40536", "HG"), _defineProperty(_polyphone2, "40583", "QJ"), _defineProperty(_polyphone2, "40765", "YQ"), _defineProperty(_polyphone2, "40784", "QJ"), _defineProperty(_polyphone2, "40840", "YK"), _defineProperty(_polyphone2, "40863", "QJG"), _polyphone2);
// export {all, polyphone};

/***/ }),

/***/ "./app/lib/logger.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = logger;
function logger() {
  var _console;

  console.log('///////////////////');
  (_console = console).log.apply(_console, arguments);
  console.log('///////////////////');
}

/***/ }),

/***/ "./app/lib/security.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nodeForge = __webpack_require__("./node_modules/node-forge/lib/index.js");

var _nodeForge2 = _interopRequireDefault(_nodeForge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Security = {};
var defaultSettings = {
    prefix: '8!9HA3D6GB2A4mb2', // 前缀
    suffix: '9Cx8BB@A41B59658', // 后缀
    iv: '7O0(B7#2T7F04f4p', // aes iv
    key: '9FA0EC4F37A4437cA65F4C4D4BEE56D3', // aes key
    aes_type: "AES-CFB"
};
Security.forge = _nodeForge2.default;
// AES 加密/解密
Security.aes = {
    /**
     * 加密
     * @param opts
     *  opts{
    	 *    target: 被加密字符串
    	 *    key： aes key
    	 *    iv: aes iv
    	 *  }
     * @returns {*}
     */
    encode: function encode(opts) {
        var target = opts.target || "",
            key = opts.key || defaultSettings.key,
            iv = opts.iv || defaultSettings.iv,
            cipher = _nodeForge2.default.cipher.createCipher(defaultSettings.aes_type, key);
        cipher.start({ iv: iv });
        cipher.update(_nodeForge2.default.util.createBuffer(target));
        cipher.finish();
        // console.log(forge.util.binary.base64.encode(cipher.output.bytes(), 2))
        return cipher.output.getBytes();
    },
    /**
     * 解密
     * opts{
    *    target: 被解密字符串
    *    key： aes key
    *    iv: aes iv
    *  }
     * @param opts
     */
    decode: function decode(opts) {
        var target = opts.target || "",
            key = opts.key || defaultSettings.key,
            iv = opts.iv || defaultSettings.iv,
            bytes = _nodeForge2.default.util.hexToBytes(target),
            buffer = _nodeForge2.default.util.createBuffer(bytes),
            decipher = _nodeForge2.default.cipher.createDecipher(defaultSettings.aes_type, key);
        decipher.start({ iv: iv });
        decipher.update(buffer);
        decipher.finish();
        return decipher.output.getBytes();
    }
};

// md5
Security.md5 = {
    encode: function encode(str) {
        str = str || "";
        var md = _nodeForge2.default.md.md5.create();
        md.update(str);
        return md.digest().toHex().toUpperCase();
    }
};

//Base64
Security.base64 = {
    encode: function encode(str) {
        str = str || "";
        return _nodeForge2.default.util.encode64(str);
    },
    decode: function decode(hex) {
        hex = hex || "";
        return _nodeForge2.default.util.decode64(hex);
    }
};

// 获得当前时间 格式：yyyyMMddhhmmss
Security.now = function () {
    var arr = [],
        date = new Date();
    arr[0] = date.getFullYear();
    arr[1] = date.getMonth() + 1;
    arr[2] = date.getDate();
    arr[3] = date.getHours();
    arr[4] = date.getMinutes();
    arr[5] = date.getSeconds();

    var i = 0;
    while (i < arr.length) {
        if (arr[i] < 10) {
            arr[i] = "0" + arr[i];
        }
        i++;
    }
    return arr.join("");
};

// 32Byte随机密钥
Security.random = function (size) {
    size = size || 16;
    var bytes = _nodeForge2.default.random.getBytesSync(size);
    return _nodeForge2.default.util.bytesToHex(bytes).toUpperCase();
};

/**
 * 变换后的密码
 * @param pwd
 * @returns {*}
 */
Security.convertedPassword = function (pwd) {
    pwd = pwd || "";
    var arr = [];
    arr[0] = defaultSettings.prefix;
    arr[1] = pwd;
    arr[2] = defaultSettings.suffix;
    return Security.md5.encode(arr.join(""));
};

/**
 * 传输密码
 * @param pwd
 * @returns {null}
 */
Security.transferPassword = function (pwd) {
    pwd = pwd || "";
    var convertedPassword = Security.convertedPassword(pwd);
    var aesStr = Security.aes.encode({ target: convertedPassword });

    var base64Str = Security.base64.encode(aesStr);
    return base64Str;
};

/**
 * 认证字符串
 * @param opts
 *  opts{
	 *    randomCode: 32Byte随机密钥
	 *    username: 登录名
	 *    passowrd: 变换后的密码
	 *    date		: 当前日期
	 *  }
 * @returns {string}
 */
Security.authStr = function (opts) {
    var arr = [];
    arr[0] = opts.randomCode || Security.random();
    arr[1] = opts.username || "";
    arr[2] = opts.date || Security.now();
    var aesStr = Security.aes.encode({
        target: arr.join(""),
        key: opts.passowrd || ""
    });
    var base64Str = Security.base64.encode(aesStr);
    return base64Str;
};

/**
 * 解密认证结果
 * @param opts
 * opts{
	 *  target: 认证结果,
	 *  key: aes key
	 * }
 * @returns [randomCode(32Byte传输密钥), username(登录名), date(时间)]
 */
Security.deAuthResultStr = function (opts) {
    var target = opts.target || "",
        key = opts.key || defaultSettings.key;
    var deBase64Str = _nodeForge2.default.util.bytesToHex(Security.base64.decode(target));
    var deAesStr = Security.aes.decode({
        target: deBase64Str,
        key: key
    });
    var randomCode = deAesStr.slice(0, 32);
    var date = deAesStr.slice(-14);
    var username = deAesStr.replace(randomCode, "").replace(date, "");
    return [randomCode, username, date];
};

/**
 * 通信认证字串
 * @param opts
 * {
	 *  username: 登录名,
	 *  key: 32Byte传输密钥
	 * }
 * @returns {*}
 */
Security.communicationCertification = function (opts) {
    var username = opts.username || "",
        date = Security.now(),
        key = opts.key || Security.random();
    var aesStr = Security.aes.encode({
        target: username + date,
        key: key
    });
    var base64Str = Security.base64.encode(aesStr);
    return base64Str;
};
exports.default = Security;

/***/ }),

/***/ "./app/page/prodManage/Add.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__("./node_modules/lodash/lodash.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _reactBootstrap = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ApiMap = __webpack_require__("./app/lib/Api/ApiMap.js");

var _ApiMap2 = _interopRequireDefault(_ApiMap);

var _http = __webpack_require__("./app/lib/Api/http.js");

var _http2 = _interopRequireDefault(_http);

var _logger = __webpack_require__("./app/lib/logger.js");

var _Table = __webpack_require__("./app/component/table/Table.js");

var _Table2 = _interopRequireDefault(_Table);

var _Condition = __webpack_require__("./app/component/condition/Condition.js");

var _Condition2 = _interopRequireDefault(_Condition);

var _Util = __webpack_require__("./app/lib/Util.js");

var _ConditionForm = __webpack_require__("./app/page/prodManage/ConditionForm.js");

var _ConditionForm2 = _interopRequireDefault(_ConditionForm);

var _pageNation = __webpack_require__("./app/component/pageNation/pageNation.js");

var _pageNation2 = _interopRequireDefault(_pageNation);

__webpack_require__("./app/page/prodManage/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Add = function (_Component) {
  _inherits(Add, _Component);

  function Add(props) {
    _classCallCheck(this, Add);

    var _this = _possibleConstructorReturn(this, (Add.__proto__ || Object.getPrototypeOf(Add)).call(this, props));

    _this.columns = [{
      title: '',
      width: 25,
      dataIndex: 'prod_id',
      key: 'prod_id',
      render: function render(value, row) {
        var checkedState = _lodash2.default.findIndex(_this.props.addProdIds, function (item) {
          return item === row.prod_id;
        }) >= 0;
        return _react2.default.createElement('input', { type: 'checkbox', onChange: function onChange(e) {
            return _this.handleCheck(e, row);
          }, checked: checkedState });
      }
    }, {
      title: '商品编号',
      width: 70,
      dataIndex: 'prod_no',
      key: 'prod_no'
    }, {
      title: '商品名称',
      width: 70,
      dataIndex: 'prod_name',
      key: 'prod_name'
    }, {
      title: '商品产地',
      width: 100,
      dataIndex: 'prod_src',
      key: 'prod_src'
    }, {
      title: '商品规格',
      width: 70,
      dataIndex: 'prod_spec',
      key: 'prod_spec'
    }, {
      title: '商品分类',
      width: 70,
      dataIndex: 'prod_cat.cat_text',
      key: 'prod_cat_text'
    }, {
      title: '商品标签',
      key: 'prod_tags_txt',
      width: 50,
      render: function render(value, row) {
        var tagStr = _lodash2.default.map(row.prod_tags, function (tag) {
          return tag['tag_text'];
        }).join('/');
        return _react2.default.createElement(
          'div',
          null,
          tagStr
        );
      }
    }, {
      title: '适用人群',
      width: 70,
      dataIndex: 'prod_crowds.crowd_text',
      key: 'prod_crowds_txt',
      render: function render(value, row) {
        var crowdStr = _lodash2.default.map(row.prod_crowds, function (crowd) {
          return crowd['crowd_text'];
        }).join('、');
        return _react2.default.createElement(
          'div',
          null,
          crowdStr
        );
      }
    }, {
      title: '助记码',
      width: 50,
      dataIndex: 'prod_assist_code',
      key: 'prod_assist_code'
    }];
    _this.handleSearch = _this.handleSearch.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleSelectChange = _this.handleSelectChange.bind(_this);
    _this.handleCheckboxChange = _this.handleCheckboxChange.bind(_this);
    _this.handlePage = _this.handlePage.bind(_this);
    _this.doCancel = _this.doCancel.bind(_this);
    _this.handleCheck = _this.handleCheck.bind(_this);
    _this.handleAllChange = _this.handleAllChange.bind(_this);
    _this.addProd = _this.addProd.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  _createClass(Add, [{
    key: 'closeModal',
    value: function closeModal() {
      this.props.closeModal();
    }
  }, {
    key: 'handleAllChange',
    value: function handleAllChange(e) {
      this.props.handleAllOnChange(e);
    }
  }, {
    key: 'handleCheck',
    value: function handleCheck(e, data) {
      this.props.handleOnCheck(e, data);
    }
  }, {
    key: 'handleSearch',
    value: function handleSearch() {
      this.props.handleSearch();
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(name, value) {
      this.props.handleInputChange(name, value);
    }
  }, {
    key: 'handleSelectChange',
    value: function handleSelectChange(name, value) {
      this.props.handleSelectChange(name, value);
    }
  }, {
    key: 'handleCheckboxChange',
    value: function handleCheckboxChange(name, value) {
      this.props.handleCheckboxChange(name, value);
    }
  }, {
    key: 'addProd',
    value: function addProd() {
      this.props.handleAddProds();
    }
  }, {
    key: 'doCancel',
    value: function doCancel() {
      this.props.hideAddModal();
    }
  }, {
    key: 'handlePage',
    value: function handlePage(args) {
      this.props.handlePage(args);
    }
  }, {
    key: 'fetchList',
    value: function fetchList(condition) {
      return new Promise(function (resolve, reject) {
        var params = _ApiMap2.default.shopProdList;
        (0, _http2.default)({
          url: params.url,
          method: params.method,
          data: _extends({}, params.data, condition)
        }).then(function (result) {
          var data = result.data;
          if (data.ret_code === 1) {
            resolve(data.ret_data);
          } else {
            reject(data.ret_msg);
          }
        }).catch(function (err) {
          reject('请求数据失败');
          (0, _logger.logger)(err);
        });
      });
    }
  }, {
    key: 'searchList',
    value: function searchList() {
      var _this2 = this;

      var params = this.refs.conditionForm.getData();
      this.fetchList(_extends({
        begin: this.state.begin,
        count: this.state.count
      }, params)).then(function (data) {
        (0, _logger.logger)(data);
        _this2.setState({ data: data });
      }).catch(function (err) {
        (0, _Util.alert)(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Modal,
        { className: 'prodManage-modal', show: this.props.show },
        _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          { closeButton: true, onHide: this.closeModal },
          _react2.default.createElement(
            _reactBootstrap.Modal.Title,
            null,
            '\u65B0\u589E'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Body,
          null,
          _react2.default.createElement(
            _reactBootstrap.Grid,
            { className: 'modalbody-container' },
            _react2.default.createElement(
              _reactBootstrap.Row,
              { className: 'show-grid padding-align' },
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12, md: 12 },
                _react2.default.createElement(
                  _Condition2.default,
                  null,
                  _react2.default.createElement(_ConditionForm2.default, { modal: true, tags: this.props.tags, crowds: this.props.crowds, cats: this.props.cats, handleConditionSearch: this.props.handleSearch, handleCheckboxChange: this.props.handleCheckboxChange, handleSelectChange: this.props.handleSelectChange, handleInputChange: this.props.handleInputChange, prod_assist_code: this.props.prod_assist_code, prod_name: this.props.prod_name, prod_src: this.props.prod_src, prod_cats: this.props.prod_cats, prod_tags: this.props.prod_tags, prod_crowds: this.props.prod_crowds, station_in_sale: this.props.station_in_sale })
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Row,
              { className: 'show-grid' },
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12, md: 12 },
                _react2.default.createElement('input', { type: 'checkbox', className: 'prodmanageadd_allcheck', onChange: this.handleAllChange, checked: this.props.allCheckState }),
                _react2.default.createElement(_Table2.default, { rowKey: 'prod_id', columns: this.columns, data: this.props.gridData }),
                _react2.default.createElement(_pageNation2.default, { pageCount: this.props.pageCount, getPage: this.handlePage, currentPage: this.props.currentPage, pageNumber: this.props.pageNumber })
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Footer,
          null,
          _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: this.doCancel },
            '\u53D6\u6D88'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'btn btn-main', onClick: this.addProd },
            '\u786E\u8BA4'
          )
        )
      );
    }
  }]);

  return Add;
}(_react.Component);

Add.propTypes = {
  tags: _propTypes2.default.array.isRequired,
  crowds: _propTypes2.default.array.isRequired,
  cats: _propTypes2.default.array.isRequired,
  handleSearch: _propTypes2.default.func.isRequired,
  handleCheckboxChange: _propTypes2.default.func.isRequired,
  handleSelectChange: _propTypes2.default.func.isRequired,
  handleInputChange: _propTypes2.default.func.isRequired,
  handleOnCheck: _propTypes2.default.func.isRequired,
  handleAllOnChange: _propTypes2.default.func.isRequired,
  prod_assist_code: _propTypes2.default.string.isRequired,
  handleAddProds: _propTypes2.default.func.isRequired,
  prod_name: _propTypes2.default.string.isRequired,
  prod_src: _propTypes2.default.string.isRequired,
  prod_cats: _propTypes2.default.array.isRequired,
  prod_tags: _propTypes2.default.array.isRequired,
  prod_crowds: _propTypes2.default.array.isRequired,
  addProdIds: _propTypes2.default.array.isRequired,
  station_in_sale: _propTypes2.default.number,
  hideAddModal: _propTypes2.default.func.isRequired,
  handlePage: _propTypes2.default.func.isRequired,
  pageNumber: _propTypes2.default.number.isRequired,
  show: _propTypes2.default.bool.isRequired,
  gridData: _propTypes2.default.array.isRequired,
  begin: _propTypes2.default.number.isRequired,
  // prod_display: PropTypes.number.isRequired,
  allCheckState: _propTypes2.default.bool.isRequired,
  closeModal: _propTypes2.default.func.isRequired
};

exports.default = Add;

/***/ }),

/***/ "./app/page/prodManage/ConditionForm.js":
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

var _reactBootstrap = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Condition = function (_Component) {
  _inherits(Condition, _Component);

  function Condition(props) {
    _classCallCheck(this, Condition);

    var _this = _possibleConstructorReturn(this, (Condition.__proto__ || Object.getPrototypeOf(Condition)).call(this, props));

    _this.state = {
      prod_assist_code: '',
      prod_name: '',
      prod_src: '',
      prod_cats: [],
      prod_tags: [],
      prod_crowds: [],
      station_in_sale: 1
    };
    _this.handleSearch = _this.handleSearch.bind(_this);
    _this.handleInputChange = _this.handleInputChange.bind(_this);
    _this.handleSelectChange = _this.handleSelectChange.bind(_this);
    _this.handleCheckboxChange = _this.handleCheckboxChange.bind(_this);
    _this.checkProdCategory = _this.checkProdCategory.bind(_this);
    return _this;
  }

  _createClass(Condition, [{
    key: 'handleSearch',
    value: function handleSearch() {
      this.props.handleConditionSearch();
      // this.props.handleSearch(this.state);
    }
  }, {
    key: 'getData',
    value: function getData() {
      return this.state;
    }
  }, {
    key: 'handleCheckboxChange',
    value: function handleCheckboxChange(event) {
      var target = event.target;
      var name = target.name;
      var value = parseInt(target.value) || 0;
      this.props.handleCheckboxChange(name, value);
    }
  }, {
    key: 'handleSelectChange',
    value: function handleSelectChange(event) {
      var target = event.target;
      var name = target.name;
      var value = parseInt(target.value) || 0;
      this.props.handleSelectChange(name, value);
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      var target = event.target;
      var name = target.name;
      var value = target.value.trim();
      this.props.handleInputChange(name, value);
    }
  }, {
    key: 'checkProdCategory',
    value: function checkProdCategory(e) {
      var categories = this.refs.categorys.querySelectorAll('.js-prod-category');
      var category_info = this.refs.category_infos.querySelectorAll('.js-category-info');
      var target = e.currentTarget;
      var target_id = target.dataset['id'];
      categories.forEach(function (item) {
        if (target === item) {
          target.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
      category_info.forEach(function (item) {
        var id = item.dataset['id'];
        if (target_id === id) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          tags = _props.tags,
          crowds = _props.crowds,
          cats = _props.cats;
      //inputRef={ref => {this.prod_assist_code = ref.value;}}

      var station_in_sale_view = _react2.default.createElement(
        _reactBootstrap.FormGroup,
        { controlId: 'station_in_sale' },
        _react2.default.createElement(
          _reactBootstrap.ControlLabel,
          null,
          '\u662F\u5426\u4E0A\u67B6'
        ),
        ' ',
        _react2.default.createElement(
          _reactBootstrap.FormControl,
          { componentClass: 'select', value: this.props.station_in_sale, onChange: this.handleSelectChange, name: 'station_in_sale', placeholder: '\u662F\u5426\u4E0A\u67B6' },
          _react2.default.createElement(
            'option',
            { value: true },
            '\u8BF7\u9009\u62E9'
          ),
          _react2.default.createElement(
            'option',
            { value: '2' },
            '\u672A\u4E0A\u67B6'
          ),
          _react2.default.createElement(
            'option',
            { value: '1' },
            '\u4E0A\u67B6'
          )
        )
      );
      if (this.props.modal) {
        station_in_sale_view = null;
      }
      return _react2.default.createElement(
        _reactBootstrap.Form,
        { inline: true },
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          { controlId: 'prod_assist_code' },
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            '\u52A9\u8BB0\u7801'
          ),
          ' ',
          _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', name: 'prod_assist_code', onChange: this.handleInputChange, value: this.props.prod_assist_code, placeholder: '\u52A9\u8BB0\u7801' })
        ),
        ' ',
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          { controlId: 'prod_name' },
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            '\u5546\u54C1\u540D\u79F0'
          ),
          ' ',
          _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', name: 'prod_name', onChange: this.handleInputChange, value: this.props.prod_name, placeholder: '\u5546\u54C1\u540D\u79F0' })
        ),
        ' ',
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          { controlId: 'prod_src' },
          _react2.default.createElement(
            _reactBootstrap.ControlLabel,
            null,
            '\u5546\u54C1\u4EA7\u5730'
          ),
          ' ',
          _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', name: 'prod_src', onChange: this.handleInputChange, value: this.props.prod_src, placeholder: '\u5546\u54C1\u4EA7\u5730' })
        ),
        ' ',
        station_in_sale_view,
        ' ',
        this.props.modal ? null : _react2.default.createElement(
          _reactBootstrap.FormGroup,
          { controlId: 'button' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsClass: 'btn btn-main', onClick: this.handleSearch, type: 'button' },
            '\u67E5\u8BE2'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'mul-container' },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u5546\u54C1\u6807\u7B7E'
            ),
            _react2.default.createElement(
              'div',
              { className: 'mul-check' },
              tags.map(function (tag) {
                var state = _this2.props['prod_tags'].findIndex(function (item) {
                  return item === tag.tag_id;
                });
                var checked = state > -1 ? 'checked' : false;
                return _react2.default.createElement(
                  _reactBootstrap.Checkbox,
                  { title: tag.tag_text, key: tag.tag_id, name: 'prod_tags', onChange: _this2.handleCheckboxChange, value: tag.tag_id, checked: checked, inline: true },
                  tag.tag_text
                );
              })
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u9002\u7528\u4EBA\u7FA4'
            ),
            _react2.default.createElement(
              'div',
              { className: 'mul-check' },
              crowds.map(function (crowd) {
                var state = _this2.props['prod_crowds'].findIndex(function (item) {
                  return item === crowd.crowd_id;
                });
                var checked = state > -1 ? 'checked' : false;
                return _react2.default.createElement(
                  _reactBootstrap.Checkbox,
                  { title: crowd.crowd_text, name: 'prod_crowds', onChange: _this2.handleCheckboxChange, key: crowd.crowd_id, value: crowd.crowd_id, checked: checked, inline: true },
                  crowd.crowd_text
                );
              })
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                _reactBootstrap.ControlLabel,
                null,
                '\u5546\u54C1\u5206\u7C7B'
              )
            ),
            _react2.default.createElement(
              'div',
              { ref: 'categorys' },
              cats.map(function (cat, index) {
                var isActive = index === 0 ? 'active' : '';
                return _react2.default.createElement(
                  'span',
                  { onClick: _this2.checkProdCategory, 'data-id': cat.cat_id, className: isActive + ' prod-category js-prod-category', key: cat.cat_id },
                  cat.cat_text
                );
              })
            ),
            _react2.default.createElement(
              'div',
              { ref: 'category_infos' },
              cats.map(function (cat, index) {
                var sub_cats = cat.sub_cats.map(function (sub_cat) {
                  var state = _this2.props['prod_cats'].findIndex(function (item) {
                    return item === sub_cat.cat_id;
                  });
                  var checked = state > -1 ? 'checked' : false;
                  return _react2.default.createElement(
                    _reactBootstrap.Checkbox,
                    { title: sub_cat.cat_text, key: sub_cat.cat_id, checked: checked, name: 'prod_cats', onChange: _this2.handleCheckboxChange, inline: true, value: sub_cat.cat_id },
                    sub_cat.cat_text
                  );
                });
                var isHidden = index !== 0 ? 'hide' : '';
                return _react2.default.createElement(
                  'div',
                  { className: isHidden + ' js-category-info', 'data-id': cat.cat_id, key: cat.cat_id },
                  sub_cats
                );
              })
            )
          ),
          this.props.modal ? _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { className: 'text-right', controlId: 'button' },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsClass: 'btn btn-main', onClick: this.handleSearch, type: 'button' },
              '\u67E5\u8BE2'
            )
          ) : null
        )
      );
    }
  }]);

  return Condition;
}(_react.Component);

Condition.propTypes = {
  tags: _propTypes2.default.array.isRequired,
  crowds: _propTypes2.default.array.isRequired,
  cats: _propTypes2.default.array.isRequired,
  handleConditionSearch: _propTypes2.default.func.isRequired,
  handleCheckboxChange: _propTypes2.default.func.isRequired,
  handleSelectChange: _propTypes2.default.func.isRequired,
  handleInputChange: _propTypes2.default.func.isRequired,
  prod_assist_code: _propTypes2.default.string.isRequired,
  prod_name: _propTypes2.default.string.isRequired,
  prod_src: _propTypes2.default.string.isRequired,
  prod_cats: _propTypes2.default.array.isRequired,
  prod_tags: _propTypes2.default.array.isRequired,
  prod_crowds: _propTypes2.default.array.isRequired,
  station_in_sale: _propTypes2.default.number
};

exports.default = Condition;

/***/ }),

/***/ "./app/page/prodManage/DB.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiMap = __webpack_require__("./app/lib/Api/ApiMap.js");

var _ApiMap2 = _interopRequireDefault(_ApiMap);

var _Util = __webpack_require__("./app/lib/Util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DB = {
  fetchProdList: (0, _Util.fetchTemplate)(_ApiMap2.default.shopProdList),
  fetchShopProdmeta: (0, _Util.fetchTemplate)(_ApiMap2.default.shopProdmeta),
  fetchStationProdList: (0, _Util.fetchTemplate)(_ApiMap2.default.shopStationProdList),
  updateStationProd: (0, _Util.fetchTemplate)(_ApiMap2.default.stationProdUpdate),
  deleteStationProd: (0, _Util.fetchTemplate)(_ApiMap2.default.stationProdDelete),
  stationProdCreate: (0, _Util.fetchTemplate)(_ApiMap2.default.stationProdCreate),
  shopProdInfo: (0, _Util.fetchTemplate)(_ApiMap2.default.shopProdInfo),
  exportData: (0, _Util.exportTemplate)(_ApiMap2.default.stationProdExport)
};
exports.default = DB;

/***/ }),

/***/ "./app/page/prodManage/List.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lodash = __webpack_require__("./node_modules/lodash/lodash.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _reactBootstrap = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

var _Table = __webpack_require__("./app/component/table/Table.js");

var _Table2 = _interopRequireDefault(_Table);

var _Container = __webpack_require__("./app/component/container/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _Condition = __webpack_require__("./app/component/condition/Condition.js");

var _Condition2 = _interopRequireDefault(_Condition);

var _pageNation = __webpack_require__("./app/component/pageNation/pageNation.js");

var _pageNation2 = _interopRequireDefault(_pageNation);

var _Util = __webpack_require__("./app/lib/Util.js");

var _logger = __webpack_require__("./app/lib/logger.js");

var _ConditionForm = __webpack_require__("./app/page/prodManage/ConditionForm.js");

var _ConditionForm2 = _interopRequireDefault(_ConditionForm);

var _ModifyProd = __webpack_require__("./app/page/prodManage/ModifyProd.js");

var _ModifyProd2 = _interopRequireDefault(_ModifyProd);

var _DB = __webpack_require__("./app/page/prodManage/DB.js");

var _DB2 = _interopRequireDefault(_DB);

var _Add = __webpack_require__("./app/page/prodManage/Add.js");

var _Add2 = _interopRequireDefault(_Add);

__webpack_require__("./app/page/prodManage/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var common = window.common;

var ProdManage = function (_Component) {
  _inherits(ProdManage, _Component);

  function ProdManage(props) {
    _classCallCheck(this, ProdManage);

    // table 列参数
    var _this = _possibleConstructorReturn(this, (ProdManage.__proto__ || Object.getPrototypeOf(ProdManage)).call(this, props));

    _this.columns = [{
      title: '商品编号',
      key: 'prod_no',
      dataIndex: 'prod_no'
    }, {
      title: '商品名称',
      key: 'prod_name',
      dataIndex: 'prod_name'
    }, {
      title: '商品产地',
      key: 'prod_src',
      dataIndex: 'prod_src'
    }, {
      title: '商品规格',
      key: 'prod_spec',
      dataIndex: 'prod_spec'
    }, {
      title: '商品分类',
      key: 'prod_cat_text',
      dataIndex: 'prod_cat.cat_text'
    }, {
      title: '商品标签',
      key: 'prod_tags_txt',
      render: function render(value, row) {
        var tagStr = _lodash2.default.map(row.prod_tags, function (tag) {
          return tag['tag_text'];
        }).join('/');
        return _react2.default.createElement(
          'div',
          null,
          tagStr
        );
      }
    }, {
      title: '适用人群',
      key: 'prod_crowd_txt',
      render: function render(value, row) {
        var crowdStr = _lodash2.default.map(row.prod_crowds, function (crowd) {
          return crowd['crowd_text'];
        }).join('、');
        return _react2.default.createElement(
          'div',
          null,
          crowdStr
        );
      }
    }, {
      title: '助记码',
      key: 'prod_assist_code',
      dataIndex: 'prod_assist_code'
    }, {
      title: '是否在售',
      key: 'prod_in_sale',
      dataIndex: 'prod_in_sale',
      render: function render(value, row) {
        if (row.prod_in_sale === 1) {
          return '在售';
        }
        if (row.prod_in_sale === 2) {
          return '停售';
        }
        return ' ';
      }
    }, {
      title: '是否上架',
      key: 'station_in_sale',
      dataIndex: 'station_in_sale',
      render: function render(value, row) {
        if (row.station_in_sale === 1) {
          return '上架';
        }
        if (row.station_in_sale === 2) {
          return _react2.default.createElement(
            'a',
            { style: { color: 'red' } },
            '\u672A\u4E0A\u67B6'
          );
        }
        return ' ';
      }
    }, {
      key: 'Operations',
      title: '操作',
      render: function render(value, row) {
        return _react2.default.createElement(
          'div',
          { className: 'optCol' },
          _react2.default.createElement(
            'a',
            { href: '#', onClick: function onClick(e) {
                _this.showUpdateCommodityModal(e, row);
              } },
            '\u4FEE\u6539'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', onClick: function onClick(e) {
                _this.showCommodityInfo(e, row);
              } },
            '\u8BE6\u60C5'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', onClick: function onClick(e) {
                return _this.deleteProd(e, row);
              } },
            '\u5220\u9664'
          )
        );
      }
    }];
    _this.handleGetPage = _this.handleGetPage.bind(_this);
    _this.showUpdateCommodityModal = _this.showUpdateCommodityModal.bind(_this);

    _this.handleupdateProd = _this.handleupdateProd.bind(_this);
    _this.showCommodityInfo = _this.showCommodityInfo.bind(_this);
    _this.deleteProd = _this.deleteProd.bind(_this);
    _this.doExport = _this.doExport.bind(_this);

    /*查询试图事件*/
    _this.handleIndexSearch = _this.handleIndexSearch.bind(_this);
    _this.handleIndexCheckboxChange = _this.handleIndexCheckboxChange.bind(_this);
    _this.handleIndexSelectChange = _this.handleIndexSelectChange.bind(_this);
    _this.handleIndexInputChange = _this.handleIndexInputChange.bind(_this);

    /*新增页面事件*/
    _this.handleShowAddProd = _this.handleShowAddProd.bind(_this);
    _this.hideAddModal = _this.hideAddModal.bind(_this);
    _this.handleAddSearch = _this.handleAddSearch.bind(_this);
    _this.handleAddCheckboxChange = _this.handleAddCheckboxChange.bind(_this);
    _this.handleAddSelectChange = _this.handleAddSelectChange.bind(_this);
    _this.handleAddInputChange = _this.handleAddInputChange.bind(_this);
    _this.handleAddPage = _this.handleAddPage.bind(_this);
    _this.handleAddOnCheck = _this.handleAddOnCheck.bind(_this);
    _this.handleAddAllOnChange = _this.handleAddAllOnChange.bind(_this);
    _this.handleAddProds = _this.handleAddProds.bind(_this);
    _this.handleCloseAddModal = _this.handleCloseAddModal.bind(_this);

    /*修改商品*/
    _this.updateProd = _this.updateProd.bind(_this);
    _this.hideModifyProd = _this.hideModifyProd.bind(_this);
    _this.modifyProdSelectChange = _this.modifyProdSelectChange.bind(_this);
    _this.handleCloseModifyModal = _this.handleCloseModifyModal.bind(_this);

    _this.indexViewData = {
      girdData: [],
      pageNumber: 1,
      currentPage: 1,
      total: 0,
      search_data: {
        begin: 0,
        count: 20,
        prod_assist_code: '',
        prod_name: '',
        prod_src: '',
        prod_cats: [],
        prod_tags: [],
        prod_crowds: [],
        station_in_sale: undefined
      }
    };
    _this.addViewData = {
      show: false,
      allCheckState: false,
      gridData: [],
      currentPage: 1,
      pageNumber: 1,
      addProdIds: [],
      total: 0,
      search_data: {
        begin: 0,
        count: 20,
        prod_display: undefined,
        prod_assist_code: '',
        prod_in_sale: 1,
        prod_name: '',
        prod_src: '',
        prod_cats: [],
        prod_tags: [],
        prod_crowds: [],
        exclude_station_product: 1
      }
    };
    _this.modifyProd = {
      show: false,
      prod_data: {
        prod_id: '',
        prod_no: '',
        prod_name: '',
        prod_src: '',
        prod_spec: '',
        station_in_sale: 0
      }
    };

    _this.state = {
      cats: [],
      crowds: [],
      tags: [],
      modifyProd: _extends({}, _this.modifyProd),
      indexViewData: _extends({}, _this.indexViewData),
      addViewData: _extends({}, _this.addViewData)
    };
    return _this;
  }
  //导出


  _createClass(ProdManage, [{
    key: 'doExport',
    value: function doExport() {
      var search_data = this.state.indexViewData.search_data;
      _DB2.default.exportData(search_data).then(function (result) {
        (0, _Util.downloadExcel)(result, '站点商品');
      });
    }

    // 删除数据

  }, {
    key: 'deleteProd',
    value: function deleteProd(e, data) {
      var _this2 = this;

      e.preventDefault();
      (0, _Util.confirm)('确认要删除？', function () {
        (0, _logger.logger)(data);
        _DB2.default.deleteStationProd({ prod_id: data.prod_id }).then(function (result) {
          (0, _logger.logger)(result);
          (0, _Util.alert)('删除成功');
          _this2.handleIndexSearch();
        }).catch(function (err) {
          (0, _Util.alert)(err);
        });
      });
    }
  }, {
    key: 'handleCloseModifyModal',
    value: function handleCloseModifyModal() {
      this.setState({
        modifyProd: _extends({}, this.state.modifyProd, {
          show: false
        })
      });
    }

    // 显示商品详情

  }, {
    key: 'showCommodityInfo',
    value: function showCommodityInfo(e, data) {
      (0, _Util.createTab)({
        uri: 'app/dist/prodManage/Info.html',
        data: {
          name: '站点商品详情'
        },
        key: 'prodManageInfo'
      });
      common.Util.data('prodManage/Info', data.prod_id);
    }

    // 修改商品

  }, {
    key: 'handleupdateProd',
    value: function handleupdateProd(result) {
      var _this3 = this;

      if (result.ret_code === 1) {
        (0, _Util.alert)('修改成功');
        _DB2.default.fetchProdList(this.state.indexViewData.search_data).then(function (data) {
          var pageNumber = Math.ceil(data.total / _this3.state.count) || 1;
          _this3.setState({ girdData: data.prod_list, total: data.total, pageNumber: pageNumber });
        }).catch(function (err) {
          (0, _Util.alert)(err);
        });
      } else {
        (0, _Util.alert)('修改失败');
      }
    }

    // 显示修改商品modal

  }, {
    key: 'showUpdateCommodityModal',
    value: function showUpdateCommodityModal(e, data) {
      /*
      modifyProd: {
        show: false,
        prod_data: {
          prod_id: '',
          prod_no: '',
          prod_name: '',
          prod_src: '',
          prod_spec: '',
          station_in_sale: 1
        }
      }
      */
      e.preventDefault();
      var modifyProdData = _lodash2.default.pick(data, ['prod_id', 'prod_no', 'prod_name', 'prod_src', 'prod_spec', 'station_in_sale']);
      this.setState({
        modifyProd: _extends({}, this.state.modifyProd, {
          show: true,
          prod_data: _extends({}, this.state.modifyProd.prod_data, modifyProdData)
        })
      });
    }

    // 翻页查询

  }, {
    key: 'handleGetPage',
    value: function handleGetPage(_ref) {
      var _this4 = this;

      var currentPage = _ref.currentPage;

      debugger;
      var indexViewData = this.state.indexViewData;
      var search_data = _extends({}, indexViewData.search_data, {
        begin: (currentPage - 1) * indexViewData.search_data.count
      });
      _DB2.default.fetchStationProdList(search_data).then(function (result) {
        var pageNumber = Math.ceil(result.total / search_data.count) || 1;
        _this4.setState({
          indexViewData: _extends({}, _this4.state.indexViewData, {
            girdData: result.prod_list,
            total: result.total,
            currentPage: currentPage,
            pageNumber: pageNumber,
            search_data: search_data
          })
        });
      }).catch(function (err) {
        (0, _Util.alert)(err);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this5 = this;

      var indexViewData = this.state.indexViewData;
      var search_data = indexViewData.search_data;
      var fetchStationProdList = _DB2.default.fetchStationProdList(search_data);
      var fetchShopProdmeta = _DB2.default.fetchShopProdmeta();
      var fetchData = Promise.all([fetchStationProdList, fetchShopProdmeta]);
      fetchData.then(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2),
            ProdData = _ref3[0],
            ProdMeta = _ref3[1];

        debugger;
        var pageNumber = Math.ceil(ProdData.total / search_data.count) || 1;
        _this5.setState({
          indexViewData: _extends({}, indexViewData, {
            girdData: ProdData.prod_list,
            total: ProdData.total,
            pageNumber: pageNumber
          }),
          cats: ProdMeta.cats, crowds: ProdMeta.crowds, tags: ProdMeta.tags
        });
      }).catch(function (err) {
        (0, _Util.alert)(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var addViewData = this.state.addViewData;
      var addViewProps = {
        tags: this.state.tags,
        crowds: this.state.crowds,
        cats: this.state.cats,
        addProdIds: addViewData.addProdIds,
        hideAddModal: this.hideAddModal,
        handleSearch: this.handleAddSearch,
        handleCheckboxChange: this.handleAddCheckboxChange,
        handleSelectChange: this.handleAddSelectChange,
        handleInputChange: this.handleAddInputChange,
        handlePage: this.handleAddPage,
        handleOnCheck: this.handleAddOnCheck,
        handleAllOnChange: this.handleAddAllOnChange,
        handleAddProds: this.handleAddProds,
        closeModal: this.handleCloseAddModal,
        show: addViewData.show,
        allCheckState: addViewData.allCheckState,
        currentPage: addViewData.currentPage,
        pageCount: addViewData.total,
        pageNumber: addViewData.pageNumber,
        gridData: addViewData.gridData,
        prod_assist_code: addViewData.search_data.prod_assist_code,
        prod_name: addViewData.search_data.prod_name,
        prod_src: addViewData.search_data.prod_src,
        prod_cats: addViewData.search_data.prod_cats,
        prod_tags: addViewData.search_data.prod_tags,
        prod_crowds: addViewData.search_data.prod_crowds,
        station_in_sale: addViewData.search_data.station_in_sale,
        prod_display: addViewData.search_data.prod_display,
        begin: addViewData.search_data.begin
      };

      var indexViewData = this.state.indexViewData;
      var indexConFormView = {
        tags: this.state.tags,
        crowds: this.state.crowds,
        cats: this.state.cats,
        handleConditionSearch: this.handleIndexSearch,
        handleCheckboxChange: this.handleIndexCheckboxChange,
        handleSelectChange: this.handleIndexSelectChange,
        handleInputChange: this.handleIndexInputChange,
        prod_assist_code: indexViewData.search_data.prod_assist_code,
        prod_name: indexViewData.search_data.prod_name,
        prod_src: indexViewData.search_data.prod_src,
        prod_cats: indexViewData.search_data.prod_cats,
        prod_tags: indexViewData.search_data.prod_tags,
        prod_crowds: indexViewData.search_data.prod_crowds,
        station_in_sale: indexViewData.search_data.station_in_sale
      };
      return _react2.default.createElement(
        _Container2.default,
        { className: 'p20', title: '站点商品管理' },
        _react2.default.createElement(
          _Condition2.default,
          null,
          _react2.default.createElement(
            'div',
            { className: 'pull-left' },
            _react2.default.createElement(_ConditionForm2.default, indexConFormView)
          ),
          _react2.default.createElement(
            'div',
            { className: 'pull-right' },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.handleShowAddProd, className: 'btn btn-main' },
              '\u65B0\u589E'
            ),
            ' ',
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.doExport, className: 'btn btn-main' },
              '\u5BFC\u51FA'
            )
          )
        ),
        _react2.default.createElement(_Table2.default, { rowKey: 'prod_id', columns: this.columns, data: this.state.indexViewData.girdData }),
        _react2.default.createElement(_pageNation2.default, { pageCount: this.state.indexViewData.total, getPage: this.handleGetPage, currentPage: this.state.indexViewData.currentPage, pageNumber: this.state.indexViewData.pageNumber }),
        _react2.default.createElement(_ModifyProd2.default, _extends({ updateProd: this.updateProd, handleSelectChange: this.modifyProdSelectChange, handleHideModal: this.hideModifyProd, closeModal: this.handleCloseModifyModal
        }, this.state.modifyProd.prod_data, { show: this.state.modifyProd.show })),
        _react2.default.createElement(_Add2.default, addViewProps)
      );
    }

    /*修改商品  */
    /*
    modifyProd: {
      show: false,
      prod_data: {
        prod_id: '',
        prod_no: '',
        prod_name: '',
        prod_src: '',
        prod_spec: '',
        station_in_sale: 1
      }
    }
    */

  }, {
    key: 'updateProd',
    value: function updateProd() {
      var _this6 = this;

      _DB2.default.updateStationProd({ station_in_sale: this.state.modifyProd.prod_data.station_in_sale, prod_id: this.state.modifyProd.prod_data.prod_id }).then(function (result) {
        _this6.hideModifyProd();
        _this6.handleIndexSearch();
        (0, _logger.logger)(result);
      }).catch(function (err) {
        (0, _Util.alert)(err);
      });
    }
    // 隐藏修改商品modal

  }, {
    key: 'hideModifyProd',
    value: function hideModifyProd() {
      this.setState({
        modifyProd: _extends({}, this.state.modifyProd, {
          show: false
        })
      });
    }
  }, {
    key: 'modifyProdSelectChange',
    value: function modifyProdSelectChange(data) {
      this.setState({
        modifyProd: _extends({}, this.state.modifyProd, {
          prod_data: _extends({}, this.state.modifyProd.prod_data, data)
        })
      });
    }
    /*查询试图事件*/
    /*
    indexViewData: {
      girdData: [],
      pageNumber: 1,
      total: 0,
      search_data: {
        begin: 0,
        count: 5,
        prod_assist_code: '',
        prod_name: '',
        prod_src: '',
        prod_cats: [],
        prod_tags: [],
        prod_crowds: [],
        station_in_sale: 1
      }
    }*/

  }, {
    key: 'handleIndexSearch',
    value: function handleIndexSearch() {
      var _this7 = this;

      var indexViewData = this.state.indexViewData;
      var search_data = _extends({}, indexViewData.search_data, {
        begin: 0
      });
      _DB2.default.fetchStationProdList(search_data).then(function (result) {
        var pageNumber = Math.ceil(result.total / search_data.count) || 1;
        _this7.setState({
          indexViewData: _extends({}, indexViewData, {
            girdData: result.prod_list,
            total: result.total,
            pageNumber: pageNumber,
            currentPage: 1,
            search_data: search_data
          })
        });
      }).catch(function (err) {
        (0, _Util.alert)(err);
      });
    }
  }, {
    key: 'handleIndexCheckboxChange',
    value: function handleIndexCheckboxChange(name, value) {
      var arr = this.state.indexViewData.search_data[name];
      var index = arr.findIndex(function (item) {
        return item === value;
      });
      if (index < 0) {
        arr.push(value);
      } else {
        arr.splice(index, 1);
      }
      this.setState({
        indexViewData: _extends({}, this.state.indexViewData, {
          search_data: _extends({}, this.state.indexViewData.search_data, _defineProperty({}, name, arr))
        })
      });
    }
  }, {
    key: 'handleIndexSelectChange',
    value: function handleIndexSelectChange(name, value) {
      this.setState({
        indexViewData: _extends({}, this.state.indexViewData, {
          search_data: _extends({}, this.state.indexViewData.search_data, _defineProperty({}, name, value))
        })
      });
    }
  }, {
    key: 'handleIndexInputChange',
    value: function handleIndexInputChange(name, value) {
      this.setState({
        indexViewData: _extends({}, this.state.indexViewData, {
          search_data: _extends({}, this.state.indexViewData.search_data, _defineProperty({}, name, value))
        })
      });
    }

    // 新增页面操作
    /*
    addViewData: {
      show: false,
      gridData: [],
      pageNumber: 1,
      addProdIds: [],
      search_data: {
        begin: 0,
        count: 5,
        prod_display: 1,
        prod_assist_code: '',
        prod_name: '',
        prod_src: '',
        prod_cats: [],
        prod_tags: [],
        prod_crowds: [],
        station_in_sale: 1
      }
    }
    }
    */

  }, {
    key: 'handleCloseAddModal',
    value: function handleCloseAddModal() {
      this.setState({
        addViewData: _extends({}, this.state.addViewData, {
          show: false
        })
      });
    }
  }, {
    key: 'handleAddProds',
    value: function handleAddProds() {
      var _this8 = this;

      _DB2.default.stationProdCreate({ prod_id_list: this.state.addViewData.addProdIds }).then(function () {
        _this8.hideAddModal();
        _this8.handleIndexSearch();
      }).catch(function (err) {
        (0, _Util.alert)(err);
      });
    }
  }, {
    key: 'handleAddOnCheck',
    value: function handleAddOnCheck(e, data) {
      var checkedState = e.target.checked;
      var prodId = data.prod_id;
      var prodIds = this.state.addViewData.addProdIds;
      var index = prodIds.findIndex(function (item) {
        return item === prodId;
      });
      // if (index < 0) {
      //   arr.push(value);
      // } else {
      //   arr.splice(index, 1);
      // }
      if (checkedState) {
        if (index < 0) {
          prodIds.push(prodId);
        }
      } else {
        prodIds.splice(index, 1);
      }
      this.setState({
        addViewData: _extends({}, this.state.addViewData, {
          addProdIds: prodIds
        })
      });
    }
  }, {
    key: 'handleAddAllOnChange',
    value: function handleAddAllOnChange(e) {
      var checkedState = e.target.checked;
      if (checkedState) {
        var prodIds = this.state.addViewData.gridData.map(function (item) {
          return item.prod_id;
        });
        this.setState({
          addViewData: _extends({}, this.state.addViewData, {
            addProdIds: prodIds,
            allCheckState: true
          })
        });
      } else {
        this.setState({
          addViewData: _extends({}, this.state.addViewData, {
            addProdIds: [],
            allCheckState: false
          })
        });
      }
    }
  }, {
    key: 'handleAddCheckboxChange',
    value: function handleAddCheckboxChange(name, value) {
      var arr = this.state.addViewData.search_data[name];
      var index = arr.findIndex(function (item) {
        return item === value;
      });
      if (index < 0) {
        arr.push(value);
      } else {
        arr.splice(index, 1);
      }
      this.setState({
        addViewData: _extends({}, this.state.addViewData, {
          search_data: _extends({}, this.state.addViewData.search_data, _defineProperty({}, name, arr))
        })
      });
    }
  }, {
    key: 'handleAddSelectChange',
    value: function handleAddSelectChange(name, value) {
      this.setState({
        addViewData: _extends({}, this.state.addViewData, {
          search_data: _extends({}, this.state.addViewData.search_data, _defineProperty({}, name, value))
        })
      });
    }
  }, {
    key: 'handleAddInputChange',
    value: function handleAddInputChange(name, value) {
      this.setState({
        addViewData: _extends({}, this.state.addViewData, {
          search_data: _extends({}, this.state.addViewData.search_data, _defineProperty({}, name, value))
        })
      });
    }
  }, {
    key: 'hideAddModal',
    value: function hideAddModal() {
      this.setState({
        addViewData: _extends({}, this.addViewData, {
          show: false
        })
      });
    }
  }, {
    key: 'handleShowAddProd',
    value: function handleShowAddProd() {
      var _this9 = this;

      var addViewData = this.state.addViewData;
      var search_data = addViewData.search_data;
      _DB2.default.fetchProdList(search_data).then(function (result) {
        var pageNumber = Math.ceil(result.total / search_data.count) || 1;
        _this9.setState({
          addViewData: _extends({}, addViewData, {
            show: true,
            total: result.total,
            gridData: result.prod_list,
            pageNumber: pageNumber,
            addProdIds: []
          })
        });
      });
    }
  }, {
    key: 'handleAddSearch',
    value: function handleAddSearch() {
      var _this10 = this;

      var addViewData = this.state.addViewData;
      var search_data = _extends({}, addViewData.search_data, {
        begin: 0
      });
      _DB2.default.fetchProdList(search_data).then(function (result) {
        var pageNumber = Math.ceil(result.total / search_data.count) || 1;
        _this10.setState({
          addViewData: _extends({}, addViewData, {
            gridData: result.prod_list,
            pageNumber: pageNumber,
            currentPage: 1,
            search_data: search_data
          })
        });
      });
    }
  }, {
    key: 'handleAddPage',
    value: function handleAddPage(_ref4) {
      var _this11 = this;

      var currentPage = _ref4.currentPage;

      // const begin = currentPage - 1;
      var addViewData = this.state.addViewData;
      var search_data = _extends({}, addViewData.search_data, {
        begin: (currentPage - 1) * addViewData.search_data.count
      });
      _DB2.default.fetchProdList(search_data).then(function (result) {
        var pageNumber = Math.ceil(result.total / search_data.count) || 1;
        _this11.setState({
          addViewData: _extends({}, addViewData, {
            gridData: result.prod_list,
            currentPage: currentPage,
            pageNumber: pageNumber,
            search_data: search_data
          })
        });
      });
    }
  }]);

  return ProdManage;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(ProdManage, null), document.getElementById('__prodManage/List__'));

/***/ }),

/***/ "./app/page/prodManage/ModifyProd.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ApiMap = __webpack_require__("./app/lib/Api/ApiMap.js");

var _ApiMap2 = _interopRequireDefault(_ApiMap);

var _http = __webpack_require__("./app/lib/Api/http.js");

var _http2 = _interopRequireDefault(_http);

var _logger = __webpack_require__("./app/lib/logger.js");

var _Util = __webpack_require__("./app/lib/Util.js");

var _reactBootstrap = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModifyProd = function (_Component) {
  _inherits(ModifyProd, _Component);

  function ModifyProd(props) {
    _classCallCheck(this, ModifyProd);

    var _this = _possibleConstructorReturn(this, (ModifyProd.__proto__ || Object.getPrototypeOf(ModifyProd)).call(this, props));

    _this.handleSelectChange = _this.handleSelectChange.bind(_this);
    _this.hideModal = _this.hideModal.bind(_this);
    _this.updateProd = _this.updateProd.bind(_this);
    _this.doEntry = _this.doEntry.bind(_this);
    _this.closeModal = _this.closeModal.bind(_this);
    return _this;
  }

  _createClass(ModifyProd, [{
    key: 'closeModal',
    value: function closeModal() {
      this.props.closeModal();
    }
  }, {
    key: 'doEntry',
    value: function doEntry() {
      this.props.updateProd();
    }
  }, {
    key: 'updateProd',
    value: function updateProd() {
      var _this2 = this;

      this.update({
        station_in_sale: this.props.station_in_sale,
        prod_id: this.props.prod_id
      }).then(function (result) {
        _this2.props.handleupdateProd(result);
        (0, _logger.logger)(result);
      }).catch(function (err) {
        (0, _Util.alert)(err);
      });
    }

    // 请求标签数据

  }, {
    key: 'update',
    value: function update(condition) {
      return new Promise(function (resolve, reject) {
        var params = _ApiMap2.default.stationProdUpdate;
        (0, _http2.default)({
          url: params.url,
          method: params.method,
          data: _extends({}, params.data, condition)
        }).then(function (result) {
          var data = result.data;
          if (data.ret_code === 1) {
            resolve(data.ret_data);
          } else {
            reject(data.ret_msg);
          }
        }).catch(function (err) {
          reject('请求数据失败');
          (0, _logger.logger)(err);
        });
      });
    }
  }, {
    key: 'handleSelectChange',
    value: function handleSelectChange(event) {
      var target = event.target;
      var value = parseInt(target.value);
      this.props.handleSelectChange({
        station_in_sale: value
      });
    }
  }, {
    key: 'hideModal',
    value: function hideModal() {
      this.props.handleHideModal();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          prod_no = _props.prod_no,
          prod_name = _props.prod_name,
          prod_src = _props.prod_src,
          prod_spec = _props.prod_spec,
          show = _props.show;

      return _react2.default.createElement(
        _reactBootstrap.Modal,
        { show: show },
        _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          { closeButton: true, onHide: this.closeModal },
          _react2.default.createElement(
            _reactBootstrap.Modal.Title,
            null,
            '\u4FEE\u6539'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Body,
          null,
          _react2.default.createElement(
            _reactBootstrap.Grid,
            { className: 'modalbody-container' },
            _react2.default.createElement(
              _reactBootstrap.Row,
              { className: 'show-grid' },
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 6, md: 6 },
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'prod_no' },
                  _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    '\u5546\u54C1\u7F16\u53F7'
                  ),
                  ' ',
                  _react2.default.createElement(_reactBootstrap.FormControl, { className: 'input-value', readOnly: true, type: 'text', placeholder: '\u5546\u54C1\u7F16\u53F7', value: prod_no })
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 6, md: 6 },
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'prod_name' },
                  _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    '\u5546\u54C1\u540D\u79F0'
                  ),
                  ' ',
                  _react2.default.createElement(_reactBootstrap.FormControl, { readOnly: true, className: 'input-value', type: 'text', placeholder: '\u5546\u54C1\u540D\u79F0', value: prod_name })
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Row,
              { className: 'show-grid' },
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 6, md: 6 },
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'prod_src' },
                  _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    '\u5546\u54C1\u4EA7\u5730'
                  ),
                  ' ',
                  _react2.default.createElement(_reactBootstrap.FormControl, { readOnly: true, className: 'input-value', type: 'text', placeholder: '\u5546\u54C1\u4EA7\u5730', value: prod_src })
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 6, md: 6 },
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'prod_spec' },
                  _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    '\u5546\u54C1\u89C4\u683C'
                  ),
                  ' ',
                  _react2.default.createElement(_reactBootstrap.FormControl, { readOnly: true, className: 'input-value', type: 'text', placeholder: '\u5546\u54C1\u89C4\u683C', value: prod_spec })
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Row,
              { className: 'show-grid' },
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 6 },
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  { controlId: 'prod_spec' },
                  _react2.default.createElement(
                    _reactBootstrap.ControlLabel,
                    null,
                    '\u662F\u5426\u4E0A\u67B6'
                  ),
                  ' ',
                  _react2.default.createElement(
                    _reactBootstrap.FormControl,
                    { componentClass: 'select', value: this.props.station_in_sale, onChange: this.handleSelectChange, name: 'station_in_sale', placeholder: '\u662F\u5426\u4E0A\u67B6' },
                    _react2.default.createElement(
                      'option',
                      { value: 2 },
                      '\u672A\u4E0A\u67B6'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 1 },
                      '\u4E0A\u67B6'
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Footer,
          null,
          _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: this.hideModal },
            '\u53D6\u6D88'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'btn btn-main', onClick: this.doEntry },
            '\u786E\u8BA4'
          )
        )
      );
    }
  }]);

  return ModifyProd;
}(_react.Component);

ModifyProd.propTypes = {
  station_in_sale: _propTypes2.default.number.isRequired,
  prod_no: _propTypes2.default.string.isRequired,
  prod_name: _propTypes2.default.string.isRequired,
  prod_src: _propTypes2.default.string.isRequired,
  prod_spec: _propTypes2.default.string.isRequired,
  show: _propTypes2.default.bool.isRequired,
  handleSelectChange: _propTypes2.default.func.isRequired,
  handleHideModal: _propTypes2.default.func.isRequired,
  updateProd: _propTypes2.default.func.isRequired,
  closeModal: _propTypes2.default.func.isRequired
};

exports.default = ModifyProd;

/***/ }),

/***/ "./app/page/prodManage/style.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/page/prodManage/style.css");
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
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/lib/index.js!./style.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/lib/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/component/pageNation/pagenation.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".pd20{padding:20px 0}.pageNation{margin:0;padding:0;font-size:12px;float:right}.pageNation input[type=text].pageInput{width:40px!important;padding:4px;text-align:center;margin:0}.pageNation a,.pageNation input{display:inline-block;width:60px;height:27px;text-align:center;line-height:27px;border:1px solid #333;color:#333;border-radius:3px;margin-right:5px;text-decoration:none;vertical-align:middle}.pageNation span{display:inline-block;padding:4px}.pageNation a:last-child{margin-right:0}.pageNation a.active{border:1px solid #999;color:#999;cursor:default}.pageNation a.btn-main{color:#fff}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/page/prodManage/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".prodmanageadd_allcheck{position:absolute;left:24px;z-index:1;top:15px}.mul-container .form-group{display:block}", ""]);

// exports


/***/ }),

/***/ "./node_modules/file-saver/FileSaver.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if (("function" !== "undefined" && __webpack_require__("./node_modules/webpack/buildin/amd-define.js") !== null) && (__webpack_require__("./node_modules/webpack/buildin/amd-options.js") !== null)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
    return saveAs;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ })

},["./app/page/prodManage/List.js"]);