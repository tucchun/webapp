webpackJsonp([3],{

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
        { className: "opt clearfix" },
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
        key: 'getLinkList',
        value: function getLinkList() {
            var _this2 = this;

            var list = [_react2.default.createElement(_link2.default, { key: 'firstpage', pageArgument: {
                    page: '首页',
                    pageCode: 1,
                    currentPage: this.props.currentPage
                }, onLink: function onLink(ev) {
                    return _this2.props.getPage(ev);
                } }), _react2.default.createElement(_link2.default, { key: 'prePage', pageArgument: {
                    page: '上一页',
                    pageCode: this.props.currentPage - 1 === 0 ? 1 : this.props.currentPage - 1,
                    currentPage: this.props.currentPage
                }, onLink: function onLink(ev) {
                    return _this2.props.getPage(ev);
                } })];
            for (var i = 0; i < this.props.pageNumber; i++) {
                list.push(_react2.default.createElement(_link2.default, { key: "page" + i, pageArgument: {
                        page: (i + 1).toString(),
                        pageCode: i + 1,
                        currentPage: this.props.currentPage
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
                } })]);
            return list;
        }
    }, {
        key: 'render',
        value: function render() {
            var style = { clear: 'both' };
            return _react2.default.createElement(
                'div',
                { className: 'pd20' },
                _react2.default.createElement(
                    'div',
                    { className: 'pageNation' },
                    this.getLinkList()
                ),
                _react2.default.createElement(
                    'div',
                    { style: style },
                    ''
                )
            );
        }
    }]);

    return PageNation;
}(_react2.default.Component);

PageNation.propTypes = {
    getPage: _propTypes2.default.func.isRequired, //回调函数，用来获取数据
    pageNumber: _propTypes2.default.number.isRequired,
    currentPage: _propTypes2.default.number.isRequired
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
var user_id = document.getElementById('__user__').value;
var auth_str = document.getElementById('__auth__').value;

var commonData = {
  src_type: 'Web Admin',
  pf_type: 'Web',
  user_id: parseInt(user_id),
  auth_str: auth_str
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
    method: 'POST'
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
    method: 'POST'
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

var _axios = __webpack_require__("./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _objectAssign = __webpack_require__("./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _lodash = __webpack_require__("./node_modules/lodash/lodash.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _ApiMap = __webpack_require__("./app/lib/Api/ApiMap.js");

var _ApiMap2 = _interopRequireDefault(_ApiMap);

var _logger = __webpack_require__("./app/lib/logger.js");

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
}

_axios2.default.interceptors.request.use(function (config) {
  (0, _logger.logger)('===============请求接口开始===============\n');
  (0, _logger.logger)('请求接口：' + config.url + '\n');
  (0, _logger.logger)('参数：' + JSON.stringify(config.data) + '\n');
  $(document.body).mLoading({ mask: false }); //显示loading组件
  return config;
}, function (error) {
  return Promise.reject(error);
});

_axios2.default.interceptors.response.use(function (response) {
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

// const httpServer = (opts, data) => {
//
//   //公共参数
//   let Public = {}
//
//   //http默认配置
//   let httpDefaultOpts = {
//     method: opts.method,
//     baseURL: baseURL,
//     url: opts.url,
//     timeout: 10000,
//     params: objectAssign(Public, data),
//     data: objectAssign(Public, data),
//     headers: opts.method == 'get'
//       ? {
//         'X-Requested-With': 'XMLHttpRequest',
//         "Accept": "application/json",
//         "Content-Type": "application/json; charset=UTF-8"
//       }
//       : {
//         'X-Requested-With': 'XMLHttpRequest',
//         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
//       }
//   }
//
//   if (opts.method == 'get') {
//     delete httpDefaultOpts.data
//   } else {
//     delete httpDefaultOpts.params
//   }
//
//   let promise = new Promise(function(resolve, reject) {
//     axios(httpDefaultOpts).then((response) => {
//       successState(response)
//       resolve(response)
//     }).catch((response) => {
//       errorState(response)
//       reject(response)
//     })
//
//   })
//   return axios(httpDefaultOpts);
// }
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
exports.Util = exports.common = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.confirm = confirm;
exports.alert = alert;
exports.setInitDate = setInitDate;
exports.getTimestamp = getTimestamp;
exports.orderStatus = orderStatus;
exports.payType = payType;
exports.downloadExcel = downloadExcel;
exports.formatDateTime = formatDateTime;
exports.createTab = createTab;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import axios from 'axios';
//import http from './Api/http';
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
    startTime: y + '/' + m + '/' + d,
    endTime: y + '/' + (m + 1) + '/' + d
  };
}

/**
* 获取时间戳
*/
function getTimestamp() {
  if (arguments.length) {
    var dateArr = arguments[0].split('/');
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

/**
* 支付方式转换
* @param num 状态值
*/
function payType(num) {
  var type = '';
  switch (num) {
    case 1:
      type = '微信支付';
      break;
    case 2:
      type = '支付宝支付';
      break;
    case 3:
      type = '专干端支付';
      break;
    default:
      type = '未支付';
  }
  return type;
}

/**
* 导出excel
* @param response 请求返回值
* @param name 文件名
*/
function downloadExcel(response, name) {
  var content = response.data;
  var elink = document.createElement('a');
  elink.download = name + '.xlsx';
  elink.style.display = 'none';
  var blob = new Blob([content]);
  elink.href = URL.createObjectURL(blob);
  document.body.appendChild(elink);
  elink.click();
  document.body.removeChild(elink);
}

/**
* 时间戳转日期
* @param timeStamp 时间戳
*/
function formatDateTime(timeStamp) {
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

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
      dataIndex: 'prod_no',
      key: 'prod_no'
    }, {
      title: '商品名称',
      dataIndex: 'prod_name',
      key: 'prod_name'
    }, {
      title: '商品产地',
      dataIndex: 'prod_src',
      key: 'prod_src'
    }, {
      title: '商品规格',
      dataIndex: 'prod_spec',
      key: 'prod_spec'
    }, {
      title: '商品分类',
      dataIndex: 'prod_cat.cat_text',
      key: 'prod_cat_text'
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
      dataIndex: 'prod_crowds.crowd_text',
      key: 'prod_crowds_txt'
    }, {
      title: '助记码',
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
    return _this;
  }

  _createClass(Add, [{
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
        count: this.state.count,
        prod_display: 1
      }, params)).then(function (data) {
        (0, _logger.logger)(data);
        _this2.setState({ data: data });
      }).catch(function (err) {
        (0, _Util.alert)(err);
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // debugger;
      // this.searchList();
      // this.searchList();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Modal,
        { bsSize: 'large', show: this.props.show },
        _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          null,
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
                _react2.default.createElement(_ConditionForm2.default, { tags: this.props.tags, crowds: this.props.crowds, cats: this.props.cats, handleConditionSearch: this.props.handleSearch, handleCheckboxChange: this.props.handleCheckboxChange, handleSelectChange: this.props.handleSelectChange, handleInputChange: this.props.handleInputChange, prod_assist_code: this.props.prod_assist_code, prod_name: this.props.prod_name, prod_src: this.props.prod_src, prod_cats: this.props.prod_cats, prod_tags: this.props.prod_tags, prod_crowds: this.props.prod_crowds, station_in_sale: this.props.station_in_sale })
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
                _react2.default.createElement(_pageNation2.default, { getPage: this.handlePage, currentPage: this.props.currentPage, pageNumber: this.props.pageNumber })
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
  prod_display: _propTypes2.default.number.isRequired,
  allCheckState: _propTypes2.default.bool.isRequired
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
      var value = target.value;
      this.props.handleInputChange(name, value);
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
        _react2.default.createElement(
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
              { value: '2' },
              '\u672A\u4E0A\u67B6'
            ),
            _react2.default.createElement(
              'option',
              { value: '1' },
              '\u4E0A\u67B6'
            )
          )
        ),
        ' ',
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          { controlId: 'station_in_sale' },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsClass: 'btn btn-main', onClick: this.handleSearch, type: 'button' },
            '\u67E5\u8BE2'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'commodityManagement-cats' },
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
              { className: 'commodityManagement-cats commodityManagement-pl20' },
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                null,
                tags.map(function (tag) {
                  var state = _this2.props['prod_tags'].findIndex(function (item) {
                    return item === tag.tag_id;
                  });
                  var checked = state > -1 ? 'checked' : false;
                  return _react2.default.createElement(
                    _reactBootstrap.Checkbox,
                    { key: tag.tag_id, name: 'prod_tags', onChange: _this2.handleCheckboxChange, value: tag.tag_id, checked: checked, inline: true },
                    tag.tag_text
                  );
                })
              )
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
              { className: 'commodityManagement-cats commodityManagement-pl20' },
              _react2.default.createElement(
                _reactBootstrap.FormGroup,
                null,
                crowds.map(function (crowd) {
                  var state = _this2.props['prod_crowds'].findIndex(function (item) {
                    return item === crowd.crowd_id;
                  });
                  var checked = state > -1 ? 'checked' : false;
                  return _react2.default.createElement(
                    _reactBootstrap.Checkbox,
                    { name: 'prod_crowds', onChange: _this2.handleCheckboxChange, key: crowd.crowd_id, value: crowd.crowd_id, checked: checked, inline: true },
                    crowd.crowd_text
                  );
                })
              )
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
            cats.map(function (cat) {
              var sub_cats = cat.sub_cats.map(function (sub_cat) {
                var state = _this2.props['prod_cats'].findIndex(function (item) {
                  return item === sub_cat.cat_id;
                });
                var checked = state > -1 ? 'checked' : false;

                return _react2.default.createElement(
                  _reactBootstrap.Checkbox,
                  { key: sub_cat.cat_id, checked: checked, name: 'prod_cats', onChange: _this2.handleCheckboxChange, inline: true, value: sub_cat.cat_id },
                  sub_cat.cat_text
                );
              });
              return _react2.default.createElement(
                'span',
                { key: cat.cat_id, className: 'commodityManagement-cats commodityManagement-pl20' },
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  cat.cat_text,
                  _react2.default.createElement(
                    'div',
                    { className: 'commodityManagement-pl20' },
                    sub_cats
                  )
                )
              );
            })
          )
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.fetchProdList = fetchProdList;
exports.fetchStationProdList = fetchStationProdList;
exports.updateStationProd = updateStationProd;
exports.deleteStationProd = deleteStationProd;
exports.stationProdCreate = stationProdCreate;

var _ApiMap = __webpack_require__("./app/lib/Api/ApiMap.js");

var _ApiMap2 = _interopRequireDefault(_ApiMap);

var _http = __webpack_require__("./app/lib/Api/http.js");

var _http2 = _interopRequireDefault(_http);

var _logger = __webpack_require__("./app/lib/logger.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchProdList(args) {
  return new Promise(function (resolve, reject) {
    var params = _ApiMap2.default.shopProdList;
    (0, _http2.default)({
      url: params.url,
      method: params.method,
      data: _extends({}, params.data, args)
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

function fetchStationProdList(args) {
  return new Promise(function (resolve, reject) {
    var params = _ApiMap2.default.shopStationProdList;
    (0, _http2.default)({
      url: params.url,
      method: params.method,
      data: _extends({}, params.data, args)
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

// 更新站点商品是否上架
function updateStationProd(args) {
  return new Promise(function (resolve, reject) {
    var params = _ApiMap2.default.stationProdUpdate;
    (0, _http2.default)({
      url: params.url,
      method: params.method,
      data: _extends({}, params.data, args)
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

//1.1.28	(Web)门店商品删除
function deleteStationProd(args) {
  return new Promise(function (resolve, reject) {
    var params = _ApiMap2.default.stationProdDelete;
    (0, _http2.default)({
      url: params.url,
      method: params.method,
      data: _extends({}, params.data, args)
    }).then(function (result) {
      var data = result.data;
      if (data.ret_code === 1) {
        resolve(data.ret_data);
      } else {
        reject(data.ret_msg);
      }
    }).catch(function (err) {
      reject('删除失败');
      (0, _logger.logger)(err);
    });
  });
}

function stationProdCreate(args) {
  return new Promise(function (resolve, reject) {
    var params = _ApiMap2.default.stationProdCreate;
    (0, _http2.default)({
      url: params.url,
      method: params.method,
      data: _extends({}, params.data, args)
    }).then(function (result) {
      var data = result.data;
      if (data.ret_code === 1) {
        resolve(data.ret_data);
      } else {
        reject(data.ret_msg);
      }
    }).catch(function (err) {
      reject('删除失败');
      (0, _logger.logger)(err);
    });
  });
}

var DB = {
  fetchProdList: fetchProdList,
  fetchStationProdList: fetchStationProdList,
  updateStationProd: updateStationProd,
  deleteStationProd: deleteStationProd,
  stationProdCreate: stationProdCreate
};
exports.default = DB;

/***/ }),

/***/ "./app/page/prodManage/List.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _ApiMap = __webpack_require__("./app/lib/Api/ApiMap.js");

var _ApiMap2 = _interopRequireDefault(_ApiMap);

var _http = __webpack_require__("./app/lib/Api/http.js");

var _http2 = _interopRequireDefault(_http);

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
        }).join('/');
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
        if (row.prod_in_sale === 0) {
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
        if (row.station_in_sale === 0) {
          return '未上架';
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
    _this.handleShowAddProd = _this.handleShowAddProd.bind(_this);

    /*查询试图事件*/
    _this.handleIndexSearch = _this.handleIndexSearch.bind(_this);
    _this.handleIndexCheckboxChange = _this.handleIndexCheckboxChange.bind(_this);
    _this.handleIndexSelectChange = _this.handleIndexSelectChange.bind(_this);
    _this.handleIndexInputChange = _this.handleIndexInputChange.bind(_this);

    /*新增页面事件*/
    _this.hideAddModal = _this.hideAddModal.bind(_this);
    _this.handleAddSearch = _this.handleAddSearch.bind(_this);
    _this.handleAddCheckboxChange = _this.handleAddCheckboxChange.bind(_this);
    _this.handleAddSelectChange = _this.handleAddSelectChange.bind(_this);
    _this.handleAddInputChange = _this.handleAddInputChange.bind(_this);
    _this.handleAddPage = _this.handleAddPage.bind(_this);
    _this.handleAddOnCheck = _this.handleAddOnCheck.bind(_this);
    _this.handleAddAllOnChange = _this.handleAddAllOnChange.bind(_this);
    _this.handleAddProds = _this.handleAddProds.bind(_this);

    /*修改商品*/
    _this.updateProd = _this.updateProd.bind(_this);
    _this.hideModifyProd = _this.hideModifyProd.bind(_this);
    _this.modifyProdSelectChange = _this.modifyProdSelectChange.bind(_this);
    /*
    tags: this.state.tags,
    crowds: this.state.crowds,
    cats: this.state.cats,
    hideAddModal: this.hideAddModal,
    handleConditionSearch: this.handleIndexSearch,
    handleCheckboxChange: this.handleIndexCheckboxChange,
    handleSelectChange: this.handleIndexSelectChange,
    handleInputChange: this.handleIndexInputChange,
    prod_assist_code: this.state.prod_assist_code,
    prod_name: this.state.prod_name,
    prod_src: this.state.prod_src,
    prod_cats: this.state.prod_cats,
    prod_tags: this.state.prod_tags,
    prod_crowds: this.state.prod_crowds,
    station_in_sale: this.state.station_in_sale
    */
    _this.state = {
      cats: [],
      crowds: [],
      tags: [],
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
      },
      indexViewData: {
        girdData: [],
        pageNumber: 1,
        currentPage: 1,
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
      },
      addViewData: {
        show: false,
        allCheckState: false,
        gridData: [],
        currentPage: 1,
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
    };
    return _this;
  }

  // 删除数据


  _createClass(ProdManage, [{
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
      common.Util.data('prodManage/Info', data);
    }

    // 修改商品

  }, {
    key: 'handleupdateProd',
    value: function handleupdateProd(result) {
      if (result.ret_code === 1) {
        (0, _Util.alert)('修改成功');
        this.serchList();
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
      var _this3 = this;

      var currentPage = _ref.currentPage;

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
      }
      */
      var indexViewData = this.state.indexViewData;
      var search_data = _extends({}, indexViewData.search_data, {
        begin: (currentPage - 1) * indexViewData.search_data.count
      });
      _DB2.default.fetchStationProdList(search_data).then(function (result) {
        var pageNumber = Math.ceil(result.total / _this3.state.indexViewData.search_data.count);
        _this3.setState({
          indexViewData: _extends({}, _this3.state.indexViewData, {
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
      // this.serchList({
      //   begin: currentPage - 1
      // });
    }

    // 查询订单意向分页数据

  }, {
    key: 'serchList',
    value: function serchList(condition) {
      var _this4 = this;

      // let data = this.refs.conditionForm.getData();

      var params = _extends({}, this.state.indexViewData.search_data, condition);
      return this.fetchList(params).then(function (result) {
        var pageNumber = Math.ceil(result.total / _this4.state.count);
        _this4.setState({ girdData: result.prod_list, total: result.total, pageNumber: pageNumber, begin: params.begin });
      }).catch(function (err) {
        (0, _Util.alert)(err);
      });
    }
  }, {
    key: 'fetchList',
    value: function fetchList(condition) {
      return new Promise(function (resolve, reject) {
        var params = _ApiMap2.default.shopStationProdList;
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

    // 请求标签数据

  }, {
    key: 'fetchShopProdmeta',
    value: function fetchShopProdmeta(condition) {
      return new Promise(function (resolve, reject) {
        var params = _ApiMap2.default.shopProdmeta;
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
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this5 = this;

      this.fetchList(this.state.indexViewData.search_data).then(function (result) {
        var pageNumber = Math.ceil(result.total / _this5.state.indexViewData.search_data.count);
        _this5.setState({
          indexViewData: _extends({}, _this5.state.indexViewData, {
            girdData: result.prod_list,
            total: result.total,
            pageNumber: pageNumber
          })
        });
      }).catch(function (err) {
        (0, _Util.alert)(err);
      });
      this.fetchShopProdmeta().then(function (result) {
        _this5.setState({ cats: result.cats, crowds: result.crowds, tags: result.tags });
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
        show: addViewData.show,
        allCheckState: addViewData.allCheckState,
        currentPage: addViewData.currentPage,
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
            )
          )
        ),
        _react2.default.createElement(_Table2.default, { rowKey: 'prod_id', columns: this.columns, data: this.state.indexViewData.girdData }),
        _react2.default.createElement(_pageNation2.default, { getPage: this.handleGetPage, currentPage: this.state.indexViewData.currentPage, pageNumber: this.state.indexViewData.pageNumber }),
        _react2.default.createElement(_ModifyProd2.default, _extends({ updateProd: this.updateProd, handleSelectChange: this.modifyProdSelectChange, handleHideModal: this.hideModifyProd }, this.state.modifyProd.prod_data, { show: this.state.modifyProd.show })),
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
      var search_data = indexViewData.search_data;
      this.fetchList(search_data).then(function (result) {
        var pageNumber = Math.ceil(result.total / search_data.count);
        _this7.setState({
          indexViewData: _extends({}, indexViewData, {
            girdData: result.prod_list,
            total: result.total,
            pageNumber: pageNumber,
            currentPage: 1,
            search_data: _extends({}, search_data, {
              begin: 0
            })
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
    key: 'handleAddProds',
    value: function handleAddProds() {
      var _this8 = this;

      debugger;
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
      debugger;
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
        addViewData: _extends({}, this.state.addViewData, {
          show: false
        })
      });
    }
  }, {
    key: 'handleShowAddProd',
    value: function handleShowAddProd() {
      var _this9 = this;

      _DB2.default.fetchProdList(_extends({}, this.state.addViewData.search_data)).then(function (result) {
        var pageNumber = Math.ceil(result.total / _this9.state.addViewData.search_data.count);
        _this9.setState({
          addViewData: _extends({}, _this9.state.addViewData, {
            show: true,
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
      var search_data = addViewData.search_data;
      _DB2.default.fetchProdList(search_data).then(function (result) {
        var pageNumber = Math.ceil(result.total / search_data.count);
        _this10.setState({
          addViewData: _extends({}, addViewData, {
            gridData: result.prod_list,
            pageNumber: pageNumber,
            currentPage: 1,
            search_data: _extends({}, search_data, {
              begin: 0
            })
          })
        });
      });
    }
  }, {
    key: 'handleAddPage',
    value: function handleAddPage(_ref2) {
      var _this11 = this;

      var currentPage = _ref2.currentPage;

      // const begin = currentPage - 1;
      var addViewData = this.state.addViewData;
      var search_data = _extends({}, addViewData.search_data, {
        begin: (currentPage - 1) * addViewData.search_data.count
      });
      _DB2.default.fetchProdList(search_data).then(function (result) {
        var pageNumber = Math.ceil(result.total / _this11.state.addViewData.search_data.count);
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
    return _this;
  }

  _createClass(ModifyProd, [{
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
          null,
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
                  _react2.default.createElement(_reactBootstrap.FormControl, { disabled: true, type: 'text', placeholder: '\u5546\u54C1\u7F16\u53F7', value: prod_no })
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
                  _react2.default.createElement(_reactBootstrap.FormControl, { disabled: true, type: 'text', placeholder: '\u5546\u54C1\u540D\u79F0', value: prod_name })
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
                  _react2.default.createElement(_reactBootstrap.FormControl, { disabled: true, type: 'text', placeholder: '\u5546\u54C1\u4EA7\u5730', value: prod_src })
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
                  _react2.default.createElement(_reactBootstrap.FormControl, { disabled: true, type: 'text', placeholder: '\u5546\u54C1\u89C4\u683C', value: prod_spec })
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
  updateProd: _propTypes2.default.func.isRequired
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
exports.push([module.i, ".pd20{padding:20px 0}.pageNation{margin:0;padding:0;font-size:12px;float:right}.pageNation a{display:inline-block;padding:4px 15px;border:1px solid #333;color:#333;border-radius:3px;margin-right:5px;text-decoration:none;vertical-align:middle}.pageNation a:last-child{margin-right:0}.pageNation a.active{border:1px solid #999;color:#999;cursor:default}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/page/prodManage/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".commodityManagement-cats{margin:10px 0}.commodityManagement-pl20{padding-left:20px}.commodityManagement-cats .form-group{vertical-align:top;padding-right:10px}.prodmanageadd_allcheck{position:absolute;left:24px;z-index:1;top:26px}", ""]);

// exports


/***/ })

},["./app/page/prodManage/List.js"]);