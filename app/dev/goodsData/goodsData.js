webpackJsonp([15],{

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

/***/ "./app/page/goodsData/goodsData.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Container = __webpack_require__("./app/component/container/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _Condition = __webpack_require__("./app/component/condition/Condition.js");

var _Condition2 = _interopRequireDefault(_Condition);

var _Table = __webpack_require__("./app/component/table/Table.js");

var _Table2 = _interopRequireDefault(_Table);

var _http = __webpack_require__("./app/lib/Api/http.js");

var _http2 = _interopRequireDefault(_http);

var _Util = __webpack_require__("./app/lib/Util.js");

var _pageNation = __webpack_require__("./app/component/pageNation/pageNation.js");

var _pageNation2 = _interopRequireDefault(_pageNation);

var _ApiMap = __webpack_require__("./app/lib/Api/ApiMap.js");

var _ApiMap2 = _interopRequireDefault(_ApiMap);

var _queryForm = __webpack_require__("./app/page/goodsData/queryForm.js");

var _queryForm2 = _interopRequireDefault(_queryForm);

__webpack_require__("./app/page/goodsData/goodslist.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoodsData = function (_React$Component) {
    _inherits(GoodsData, _React$Component);

    function GoodsData(props) {
        _classCallCheck(this, GoodsData);

        var _this = _possibleConstructorReturn(this, (GoodsData.__proto__ || Object.getPrototypeOf(GoodsData)).call(this, props));

        _this.state = {
            pageNumber: 1,
            pageCode: 1,
            currentPage: 1,
            count: 10,
            gridData: [],
            cats: [],
            crowds: [],
            tags: []
        };
        _this.getPage = _this.getPage.bind(_this);
        _this.submitHandle = _this.submitHandle.bind(_this);
        _this.columns = _this.initTableCol();
        _this.delGoods = _this.delGoods.bind(_this);
        return _this;
    }

    _createClass(GoodsData, [{
        key: 'initTableCol',
        value: function initTableCol() {
            var that = this;
            return [{
                title: '商品编号',
                key: 'prod_no',
                dataIndex: 'prod_no',
                width: 74,
                align: 'center'
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
                dataIndex: 'prod_spec',
                align: 'center'
            }, {
                title: '商品分类',
                key: 'prod_cat.cat_text',
                dataIndex: 'prod_cat.cat_text'
            }, {
                title: '商品标签',
                key: 'prod_tags.tag_text',
                render: function render(value) {
                    var tags = [],
                        prod_tag = value.prod_tags;
                    for (var i = 0; i < prod_tag.length; i++) {
                        tags.push(prod_tag[i].tag_text);
                    }
                    return _react2.default.createElement(
                        'div',
                        null,
                        tags.join('/')
                    );
                }
            }, {
                title: '适用人群',
                key: 'prod_crowds',
                render: function render(value) {
                    var tags = [],
                        prod_tag = value.prod_crowds;
                    for (var i = 0; i < prod_tag.length; i++) {
                        tags.push(prod_tag[i].crowd_text);
                    }
                    return _react2.default.createElement(
                        'div',
                        null,
                        tags.join('/')
                    );
                }
            }, {
                title: '助记码',
                key: 'prod_assist_code',
                dataIndex: 'prod_assist_code',
                align: 'center'
            }, {
                title: '是否在售',
                key: 'prod_in_sale',
                width: 74,
                align: 'center',
                render: function render(value) {
                    return value.prod_in_sale ? _react2.default.createElement(
                        'span',
                        { className: 'onSale' },
                        '\u5728\u552E'
                    ) : _react2.default.createElement(
                        'span',
                        { className: 'stopSale' },
                        '\u505C\u552E'
                    );
                }
            }, {
                title: '是否可售',
                key: 'prod_allow_sale',
                width: 74,
                align: 'center',
                render: function render(value) {
                    return value.prod_allow_sale ? _react2.default.createElement(
                        'span',
                        { className: 'onSale' },
                        '\u53EF\u552E'
                    ) : _react2.default.createElement(
                        'span',
                        { className: 'stopSale' },
                        '\u4E0D\u53EF\u552E'
                    );
                }
            }, {
                title: '默认显示',
                key: 'prod_display',
                width: 74,
                align: 'center',
                render: function render(value) {
                    return value.prod_display ? _react2.default.createElement(
                        'span',
                        { className: 'onSale' },
                        '\u663E\u793A'
                    ) : _react2.default.createElement(
                        'span',
                        { className: 'stopSale' },
                        '\u4E0D\u663E\u793A'
                    );
                }
            }, {
                title: '操作',
                key: 'tag_operation',
                align: 'center',
                width: 180,
                render: function render(value) {
                    return _react2.default.createElement(
                        'div',
                        { className: 'optCol' },
                        _react2.default.createElement(
                            'a',
                            { href: '#', onClick: function onClick() {
                                    GoodsData.newTab('update', value.prod_id);
                                } },
                            '\u4FEE\u6539'
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '#', onClick: function onClick() {
                                    GoodsData.newTab('detail', value.prod_id);
                                } },
                            '\u8BE6\u60C5'
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '#', onClick: function onClick() {
                                    that.delGoods(value);
                                } },
                            '\u5220\u9664'
                        )
                    );
                }
            }];
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var data = this.refs.QueryFrom.getData();
            var condition = _extends({}, data);
            (0, _http2.default)(_extends({
                data: _ApiMap2.default.commonData
            }, _ApiMap2.default.shopProdmeta)).then(function (response) {
                var data = response.data;
                if (data.ret_code === 1) {
                    _this2.setState({ cats: data.ret_data.cats, crowds: data.ret_data.crowds, tags: data.ret_data.tags });
                }
            }).catch(function (err) {
                console.log(err);
            });
            this.submitHandle(condition);
        }

        //表单提交处理

    }, {
        key: 'submitHandle',
        value: function submitHandle(ev) {
            var count = this.state.count,
                begin = ev.begin || 0;
            var condition = { begin: begin, count: count };
            var intKey = ['prod_valid_month', 'prod_pkg_unit', 'prod_cat', 'prod_country_flag', 'prod_in_sale', 'prod_allow_sale', 'prod_display'];
            var floatKey = ['prod_price', 'prod_original_price'];
            for (var key in ev) {
                if (ev[key]) {
                    if (key === 'prod_cats' || key === 'prod_tags' || key === 'prod_crowds') {
                        condition[key] = ev[key].split(',');
                        for (var i in condition[key]) {
                            condition[key][i] = parseInt(condition[key][i]) || 0;
                        }
                    } else {
                        if (intKey.indexOf(key) !== -1) {
                            condition[key] = parseInt(ev[key]);
                        } else {
                            condition[key] = ev[key];
                        }
                    }
                }
            }
            this.getGridData(condition);
        }
    }, {
        key: 'getGridData',
        value: function getGridData(condition) {
            var _this3 = this;

            var data = _extends({}, _ApiMap2.default.commonData, condition);
            (0, _http2.default)(_extends({
                data: data
            }, _ApiMap2.default.goodsList)).then(function (response) {
                var data = response.data,
                    pageNumber = 0,
                    currentPage = condition.currentPage || 1,
                    gridData = [];
                if (data.ret_code === 1) {
                    pageNumber = Math.ceil(data.ret_data.total / 10);
                    gridData = data.ret_data.prod_list;
                    _this3.setState({ pageNumber: pageNumber, gridData: gridData });
                }
            }).catch(function (err) {
                console.log(err);
            });
        }

        //新增页面

    }, {
        key: 'delGoods',


        //删除商品资料
        value: function delGoods(value) {
            var _this4 = this;

            console.log(value);
            (0, _http2.default)(_extends({}, _ApiMap2.default.goodsDelete, {
                data: _extends({}, _ApiMap2.default.commonData, {
                    prod_id: value.prod_id
                })
            })).then(function (response) {
                var delData = response.data;
                if (delData.ret_code === 1) {
                    var data = _this4.refs.QueryFrom.getData();
                    _this4.submitHandle(_extends({
                        begin: 0,
                        count: _this4.state.count
                    }, data));
                    _this4.setState({ currentPage: 1 });
                    (0, _Util.alert)('删除成功');
                } else {
                    (0, _Util.alert)(delData.ret_msg);
                }
            }).catch(function (err) {
                console(err);
            });
        }

        //导出商品资料

    }, {
        key: 'exportExcel',
        value: function exportExcel() {
            var data = this.refs.QueryFrom.getData();
            for (var item in data) {
                data[item] = parseInt(data[item]) || data[item];
            }
            (0, _http2.default)(_extends({}, _ApiMap2.default.goodsExport, {
                data: _extends({}, _ApiMap2.default.commonData, data)
            })).then(function (response) {
                console.log(response);
                (0, _Util.downloadExcel)(response, '商品资料');
            }).catch(function (err) {
                console.log(err);
            });
        }

        //分页回调

    }, {
        key: 'getPage',
        value: function getPage(ev) {
            var data = this.refs.QueryFrom.getData();
            this.submitHandle(_extends({
                begin: ev.currentPage === 1 ? 0 : (ev.pageCode - 1) * this.state.count,
                count: this.state.count
            }, data));
            this.setState({
                currentPage: ev.currentPage,
                pageCode: ev.pageCode
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            return _react2.default.createElement(
                _Container2.default,
                { className: 'p20', title: '商品资料管理' },
                _react2.default.createElement(
                    'div',
                    { className: 'goodsDataList' },
                    _react2.default.createElement(
                        _Condition2.default,
                        null,
                        _react2.default.createElement(_queryForm2.default, { cats: this.state.cats, crowds: this.state.crowds, tags: this.state.tags,
                            submitHandle: this.submitHandle, ref: 'QueryFrom' }),
                        _react2.default.createElement(
                            'div',
                            { className: 'options clearfix' },
                            _react2.default.createElement(
                                'div',
                                { className: 'pull-right' },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'btn btn-main', onClick: function onClick() {
                                            _this5.exportExcel();
                                        } },
                                    '\u5BFC\u51FA'
                                ),
                                _react2.default.createElement(
                                    'button',
                                    { className: 'btn btn-main', onClick: function onClick() {
                                            GoodsData.newTab('new');
                                        } },
                                    '\u65B0\u589E'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(_Table2.default, { rowKey: 'prod_id', columns: this.columns, data: this.state.gridData }),
                    _react2.default.createElement(_pageNation2.default, { getPage: this.getPage, pageNumber: this.state.pageNumber, currentPage: this.state.currentPage })
                )
            );
        }
    }], [{
        key: 'newTab',
        value: function newTab(type, goodsId) {
            var NEW = 'new',
                UPDATE = 'update',
                DETAIL = 'detail';
            var data = { prod_id: goodsId };
            switch (type) {
                default:
                case NEW:
                    (0, _Util.createTab)({
                        uri: 'app/dist/goodsData/newGoodsData.html',
                        key: 'newGoodsData',
                        data: { name: '新增商品' }
                    });
                    break;
                case UPDATE:
                    (0, _Util.createTab)({
                        uri: 'app/dist/goodsData/goodsUpdate.html',
                        key: 'goodsUpdate',
                        data: { name: '商品资料修改' }
                    });
                    common.Util.data('goodsData/goodsUpdate', data);
                    break;
                case DETAIL:
                    (0, _Util.createTab)({
                        uri: 'app/dist/goodsData/goodsDetail.html',
                        key: 'goodsDetail',
                        data: { name: '商品资料详情' }
                    });
                    common.Util.data('goodsData/goodsDetail', data);
                    break;
            }
        }
    }]);

    return GoodsData;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(GoodsData, null), document.getElementById('__goodsData/goodsData__'));

/***/ }),

/***/ "./app/page/goodsData/goodslist.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/page/goodsData/goodslist.css");
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
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/lib/index.js!./goodslist.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/lib/index.js!./goodslist.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./app/page/goodsData/queryForm.js":
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

var QueryForm = function (_Component) {
    _inherits(QueryForm, _Component);

    function QueryForm(props) {
        _classCallCheck(this, QueryForm);

        var _this = _possibleConstructorReturn(this, (QueryForm.__proto__ || Object.getPrototypeOf(QueryForm)).call(this, props));

        _this.state = {
            fromData: {
                prod_assist_code: '',
                prod_name: '',
                prod_src: '',
                prod_cats: '',
                prod_tags: '',
                prod_crowds: '',
                prod_in_sale: 1,
                prod_allow_sale: 1,
                prod_display: 1
            }
        };
        _this.getFormData = _this.getFormData.bind(_this);
        _this.handleCheckbox = _this.handleCheckbox.bind(_this);
        return _this;
    }

    _createClass(QueryForm, [{
        key: 'getMouseOver',
        value: function getMouseOver(cat) {
            this.setState({
                pCatId: cat.cat_id
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var formEle = document.getElementById('from-query');
            var arr = this.handleFormData(formEle);
            this.setState({
                fromData: arr
            });
        }

        //处理表单数据

    }, {
        key: 'handleFormData',
        value: function handleFormData(form) {
            var formEle = form,
                arr = {};
            for (var i = 0; i < formEle.elements.length; i++) {
                var feled = formEle.elements[i];
                switch (feled.type) {
                    case undefined:
                    case 'button':
                    case 'file':
                    case 'reset':
                    case 'submit':
                        break;
                    case 'checkbox':
                    case 'radio':
                        if (!feled.checked) {
                            break;
                        }
                    default:
                        if (arr[feled.name]) {
                            arr[feled.name] = arr[feled.name] + ',' + feled.value;
                        } else {
                            arr[feled.name] = feled.value;
                        }
                }
            }
            return arr;
        }

        //处理选中checkbox

    }, {
        key: 'handleCheckbox',
        value: function handleCheckbox() {
            var arr = this.handleFormData(document.getElementById('from-query'));
            this.setState({ fromData: arr });
            this.props.submitHandle(arr);
        }

        //提交时触发方法

    }, {
        key: 'getFormData',
        value: function getFormData(ev) {
            ev.preventDefault();
            var arr = this.handleFormData(document.getElementById('from-query'));
            this.setState({ fromData: arr });
            this.props.submitHandle(arr);
        }
    }, {
        key: 'getData',
        value: function getData() {
            return this.state.fromData;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                tags = _props.tags,
                crowds = _props.crowds,
                cats = _props.cats;

            return _react2.default.createElement(
                _reactBootstrap.Form,
                { bsClass: 'form', onSubmit: function onSubmit(ev) {
                        return _this2.getFormData(ev);
                    }, id: 'from-query', inline: true },
                _react2.default.createElement(
                    'table',
                    null,
                    _react2.default.createElement(
                        'tbody',
                        null,
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    '\xA0\xA0\xA0\u52A9\u8BB0\u7801'
                                ),
                                _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'prod_assist_code' })
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    '\u5546\u54C1\u540D\u79F0'
                                ),
                                _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'prod_name' })
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    '\u5546\u54C1\u4EA7\u5730'
                                ),
                                _react2.default.createElement('input', { type: 'text', className: 'form-control', name: 'prod_src' })
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    '\u662F\u5426\u5728\u552E'
                                ),
                                _react2.default.createElement(
                                    'select',
                                    { className: 'form-control', name: 'prod_in_sale', id: '' },
                                    _react2.default.createElement(
                                        'option',
                                        { value: 1 },
                                        '\u5728\u552E'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: 2 },
                                        '\u505C\u552E'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    '\u662F\u5426\u53EF\u552E'
                                ),
                                _react2.default.createElement(
                                    'select',
                                    { className: 'form-control', name: 'prod_allow_sale', id: '' },
                                    _react2.default.createElement(
                                        'option',
                                        { value: 1 },
                                        '\u53EF\u552E'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: 2 },
                                        '\u4E0D\u53EF\u552E'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'tr',
                            null,
                            _react2.default.createElement(
                                'td',
                                null,
                                _react2.default.createElement(
                                    'label',
                                    null,
                                    '\u9ED8\u8BA4\u663E\u793A'
                                ),
                                _react2.default.createElement(
                                    'select',
                                    { className: 'form-control', name: 'prod_display', id: '' },
                                    _react2.default.createElement(
                                        'option',
                                        { value: 1 },
                                        '\u5C55\u793A'
                                    ),
                                    _react2.default.createElement(
                                        'option',
                                        { value: 2 },
                                        '\u4E0D\u5C55\u793A'
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'td',
                                null,
                                _react2.default.createElement(
                                    'button',
                                    { className: 'btn btn-main', type: 'submit' },
                                    '\u67E5\u8BE2'
                                )
                            ),
                            _react2.default.createElement(
                                'td',
                                { colSpan: 3 },
                                ''
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'tagList' },
                    _react2.default.createElement(
                        'div',
                        { className: 'tagLabel' },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: '' },
                            '\u5546\u54C1\u6807\u7B7E'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'queryMeta' },
                            tags.map(function (tag) {
                                return _react2.default.createElement(
                                    'label',
                                    { key: tag.tag_id },
                                    _react2.default.createElement('input', { type: 'checkbox', onChange: function onChange(ev) {
                                            return _this2.handleCheckbox();
                                        }
                                        // this.handleCheckbox()
                                        , value: tag.tag_id, name: 'prod_tags' }),
                                    tag.tag_text
                                );
                            })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'tagLabel' },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: '' },
                            '\u4EBA\u7FA4\u5206\u7C7B'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'queryMeta' },
                            crowds.map(function (crow) {
                                return _react2.default.createElement(
                                    'label',
                                    { key: crow.crowd_id },
                                    _react2.default.createElement('input', { type: 'checkbox', onChange: function onChange(ev) {
                                            return _this2.handleCheckbox();
                                        }, value: crow.crowd_id, name: 'prod_crowds' }),
                                    crow.crowd_text
                                );
                            })
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'tagLabel' },
                        _react2.default.createElement(
                            'label',
                            { htmlFor: '' },
                            '\u5546\u54C1\u5206\u7C7B'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'queryMeta clearfix' },
                            cats.map(function (cat) {
                                return _react2.default.createElement(
                                    'div',
                                    { className: 'pull-left', onMouseOver: function onMouseOver(ev) {
                                            return _this2.getMouseOver(cat);
                                        }, key: cat.cat_id },
                                    cat.cat_text
                                );
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'sub_cat queryMeta' },
                            cats.map(function (cat) {
                                var sub_cat = cat.sub_cats.map(function (subCat) {
                                    return _react2.default.createElement(
                                        'label',
                                        { key: subCat.cat_id },
                                        _react2.default.createElement('input', { type: 'checkbox', onChange: function onChange(ev) {
                                                return _this2.handleCheckbox();
                                            }, value: subCat.cat_id, name: 'prod_cats' }),
                                        subCat.cat_text
                                    );
                                });
                                return _react2.default.createElement(
                                    'div',
                                    { key: cat.cat_id, id: 'sub_cat_' + cat.cat_id, className: _this2.state.pCatId === cat.cat_id ? 'show' : 'none' },
                                    sub_cat
                                );
                            })
                        )
                    )
                )
            );
        }
    }]);

    return QueryForm;
}(_react.Component);

QueryForm.propTypes = {
    cats: _propTypes2.default.array.isRequired,
    crowds: _propTypes2.default.array.isRequired,
    tags: _propTypes2.default.array.isRequired,
    submitHandle: _propTypes2.default.func.isRequired
};
exports.default = QueryForm;

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/component/pageNation/pagenation.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".pd20{padding:20px 0}.pageNation{margin:0;padding:0;font-size:12px;float:right}.pageNation a{display:inline-block;padding:4px 15px;border:1px solid #333;color:#333;border-radius:3px;margin-right:5px;text-decoration:none;vertical-align:middle}.pageNation a:last-child{margin-right:0}.pageNation a.active{border:1px solid #999;color:#999;cursor:default}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/page/goodsData/goodslist.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".content{min-width:1128px}.onSale{color:#3155f9}.stopSale{color:#cf0d01}.goodsDataList input[type=text],.goodsDataList select{margin-left:15px;width:150px!important}.goodsDataList .form-inline button,.goodsDataList .form-inline label{margin-left:15px}.goodsDataList .queryMeta{padding-left:20px}.goodsDataList .queryMeta input[type=checkbox]{margin-right:5px}.goodsDataList .queryMeta .pull-left{border:1px solid #ddd;padding:5px;margin:0 5px;cursor:pointer}.goodsDataList .queryMeta div[id^=sub_cat_]{display:none}.goodsDataList .tagList,.goodsDataList .tagList .tagLabel{margin-top:10px}.goodsDataList .rc-table,.goodsDataList .rc-table-content{position:static}.goodsDataList .sub_cat{border-bottom:1px solid #e5e5e5;padding:5px 0}.goodsDataList .options{margin:5px 0}.goodsDataList .options .btn{margin:0 5px}", ""]);

// exports


/***/ })

},["./app/page/goodsData/goodsData.js"]);