webpackJsonp([4],{

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

/***/ "./app/page/jurisdictionOutsideAddrAdmin/Form.js":
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

var OperateForm = function (_Component) {
  _inherits(OperateForm, _Component);

  function OperateForm(props) {
    _classCallCheck(this, OperateForm);

    var _this = _possibleConstructorReturn(this, (OperateForm.__proto__ || Object.getPrototypeOf(OperateForm)).call(this, props));

    _this.state = {};

    _this.toggleHecadre = _this.toggleHecadre.bind(_this);
    _this.toggleInhabitant = _this.toggleInhabitant.bind(_this);
    return _this;
  }

  _createClass(OperateForm, [{
    key: 'toggleHecadre',
    value: function toggleHecadre(e) {
      this.props.selectHecadre(e.target.value);
    }
  }, {
    key: 'toggleInhabitant',
    value: function toggleInhabitant(e) {
      this.props.selectInhabitant(e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          healthManagerModal = _props.healthManagerModal,
          patchDelete = _props.patchDelete,
          handleClickSearch = _props.handleClickSearch,
          allHecadreList = _props.allHecadreList;

      return _react2.default.createElement(
        _reactBootstrap.Form,
        { inline: true, className: 'clearfix' },
        _react2.default.createElement(
          'div',
          { className: 'pull-left' },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u7BA1\u8F96\u8005'
            ),
            ' ',
            _react2.default.createElement(
              _reactBootstrap.FormControl,
              {
                componentClass: 'select',
                value: this.state.station_in_sale,
                name: 'station_in_sale',
                placeholder: '\u7BA1\u8F96\u8005',
                onChange: this.toggleHecadre },
              _react2.default.createElement(
                'option',
                { value: '' },
                '\u8BF7\u9009\u62E9\u5065\u7BA1\u5E08'
              ),
              allHecadreList.map(function (item, index) {
                return _react2.default.createElement(
                  'option',
                  { value: item.hecadre_uid, key: index },
                  item.hecadre_name
                );
              })
            )
          ),
          ' ',
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { controlId: 'station_in_sale' },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u5C45\u6C11\u6570\u91CF'
            ),
            ' ',
            _react2.default.createElement(
              _reactBootstrap.FormControl,
              {
                componentClass: 'select',
                value: this.state.station_in_sale,
                name: 'station_in_sale',
                placeholder: '\u5C45\u6C11\u6570\u91CF',
                onChange: this.toggleInhabitant },
              _react2.default.createElement(
                'option',
                { value: '0' },
                '\u8BF7\u9009\u62E9\u5C45\u6C11\u7C7B\u578B'
              ),
              _react2.default.createElement(
                'option',
                { value: '2' },
                '\u65E0\u5C45\u6C11'
              ),
              _react2.default.createElement(
                'option',
                { value: '1' },
                '\u6709\u5C45\u6C11'
              )
            )
          ),
          ' ',
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { controlId: 'station_in_sale' },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsClass: 'btn btn-main', type: 'button', onClick: handleClickSearch },
              '\u67E5\u8BE2'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'pull-right' },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            { controlId: 'station_in_sale' },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { bsClass: 'btn btn-main', type: 'button', onClick: healthManagerModal },
              '\u91CD\u65B0\u5206\u914D\u7BA1\u7406\u5E08'
            )
          ),
          ' '
        )
      );
    }
  }]);

  return OperateForm;
}(_react.Component);

OperateForm.propTypes = {};

exports.default = OperateForm;

/***/ }),

/***/ "./app/page/jurisdictionOutsideAddrAdmin/Modal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComfirmModifyModal = exports.AddrModifyModal = exports.HealthManagerModal = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _http = __webpack_require__("./app/lib/Api/http.js");

var _http2 = _interopRequireDefault(_http);

var _ApiMap = __webpack_require__("./app/lib/Api/ApiMap.js");

var _ApiMap2 = _interopRequireDefault(_ApiMap);

var _reactBootstrap = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HealthManagerModal = exports.HealthManagerModal = function (_Component) {
  _inherits(HealthManagerModal, _Component);

  function HealthManagerModal(props) {
    _classCallCheck(this, HealthManagerModal);

    var _this = _possibleConstructorReturn(this, (HealthManagerModal.__proto__ || Object.getPrototypeOf(HealthManagerModal)).call(this, props));

    _this.state = {
      hecadreUid: ""
    };
    _this.comfirmModify = _this.comfirmModify.bind(_this);
    _this.selectHecadre = _this.selectHecadre.bind(_this);
    return _this;
  }

  _createClass(HealthManagerModal, [{
    key: 'comfirmModify',
    value: function comfirmModify() {
      var _this2 = this;

      var detailList = [];
      this.props.tableData.forEach(function (item) {
        if (item.isChecked) {
          detailList.push(item.detail_id);
        }
        // item.isChecked && detailList.push(item.detail_id);
      });

      console.log(detailList);

      var hecadreUid = this.state.hecadreUid;

      console.log(detailList, hecadreUid);

      var parms = _extends({}, _ApiMap2.default.commonData, {
        detail_list: detailList,
        hecadre_uid: hecadreUid
      });

      (0, _http2.default)({
        url: _ApiMap2.default.stationNongridAssign.url,
        method: _ApiMap2.default.stationNongridAssign.method,
        data: JSON.stringify(parms)
      }).then(function (res) {
        if (res.data.ret_code === 1) {
          _this2.props.getAddrList();
        } else {
          common.alert(res.data.ret_msg);
        }
      }, function (error) {
        common.alert(error);
      });

      this.props.hide();
    }
  }, {
    key: 'selectHecadre',
    value: function selectHecadre(e) {
      var _this3 = this;

      this.setState({
        hecadreUid: parseInt(e.target.value)
      }, function () {
        console.log(_this3.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isShow = _props.isShow,
          hide = _props.hide,
          allHecadreList = _props.allHecadreList;

      return _react2.default.createElement(
        _reactBootstrap.Modal,
        { show: isShow, onHide: hide },
        _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          { closeButton: true },
          _react2.default.createElement(
            _reactBootstrap.Modal.Title,
            null,
            '\u5206\u914D\u5065\u7BA1\u5E08'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Body,
          null,
          _react2.default.createElement(
            _reactBootstrap.Form,
            { inline: true, className: 'pdtb health-manager' },
            _react2.default.createElement(
              _reactBootstrap.FormGroup,
              { controlId: 'station_in_sale' },
              _react2.default.createElement(
                _reactBootstrap.FormControl,
                {
                  componentClass: 'select',
                  name: 'station_in_sale',
                  placeholder: '\u8BF7\u9009\u62E9\u5065\u5EB7\u7BA1\u7406\u5E08',
                  onChange: this.selectHecadre },
                _react2.default.createElement(
                  'option',
                  { value: '' },
                  '\u8BF7\u9009\u62E9\u5065\u7BA1\u5E08'
                ),
                allHecadreList.map(function (item, index) {
                  return _react2.default.createElement(
                    'option',
                    { value: item.hecadre_uid, key: index },
                    item.hecadre_name
                  );
                })
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Footer,
          null,
          _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: hide },
            '\u53D6\u6D88'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'primary', onClick: this.comfirmModify },
            '\u786E\u5B9A'
          )
        )
      );
    }
  }]);

  return HealthManagerModal;
}(_react.Component);

var AddrModifyModal = exports.AddrModifyModal = function (_Component2) {
  _inherits(AddrModifyModal, _Component2);

  function AddrModifyModal(props) {
    _classCallCheck(this, AddrModifyModal);

    var _this4 = _possibleConstructorReturn(this, (AddrModifyModal.__proto__ || Object.getPrototypeOf(AddrModifyModal)).call(this, props));

    _this4.state = {
      checkedProvince: "",
      checkedCity: "",
      checkedArea: "",
      checkedStreet: "",
      checkedCommittee: "",
      buildingName: "",
      buildingNo: "",
      buildingUnit: "",
      householdNo: "",
      provinceList: [],
      cityList: [],
      areaList: [],
      streetList: [],
      committeeList: []
    };

    _this4.comfirmModify = _this4.comfirmModify.bind(_this4);
    _this4.getPCAList = _this4.getPCAList.bind(_this4);
    _this4.changeProvince = _this4.changeProvince.bind(_this4);
    _this4.changeCity = _this4.changeCity.bind(_this4);
    _this4.changeArea = _this4.changeArea.bind(_this4);
    _this4.changeStreet = _this4.changeStreet.bind(_this4);
    _this4.changeCommittee = _this4.changeCommittee.bind(_this4);
    _this4.changebuildingName = _this4.changebuildingName.bind(_this4);
    _this4.changebuildingNo = _this4.changebuildingNo.bind(_this4);
    _this4.changebuildingUnit = _this4.changebuildingUnit.bind(_this4);
    _this4.changehouseholdNo = _this4.changehouseholdNo.bind(_this4);

    return _this4;
  }

  _createClass(AddrModifyModal, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log(this.state);

      this.getPCAList('provinceList');
    }

    // 确认修改地址

  }, {
    key: 'comfirmModify',
    value: function comfirmModify() {
      var _this5 = this;

      var _state = this.state,
          checkedProvince = _state.checkedProvince,
          checkedCity = _state.checkedCity,
          checkedArea = _state.checkedArea,
          checkedStreet = _state.checkedStreet,
          checkedCommittee = _state.checkedCommittee,
          buildingName = _state.buildingName,
          buildingNo = _state.buildingNo,
          buildingUnit = _state.buildingUnit,
          householdNo = _state.householdNo;


      console.log(buildingUnit);

      var parms = _extends({}, _ApiMap2.default.commonData, {
        detail_id: common.Util.data('parms').detailId, // 辖区外住户detail id
        province_code: checkedProvince, //省份code
        city_code: checkedCity, //市code
        district_code: checkedArea, //区code
        street_code: checkedStreet, //街道code
        village_code: checkedCommittee, //村/居委会code
        building_name: buildingName, //小区/建筑名
        building_no: buildingNo, //楼栋, eg: A栋
        buidling_unit: buildingUnit, //单元, eg: 1单元
        household_no: householdNo //房号, eg: 301
      });

      (0, _http2.default)({
        url: _ApiMap2.default.stationNongridUpdate.url,
        method: _ApiMap2.default.stationNongridUpdate.method,
        data: JSON.stringify(parms)
      }).then(function (res) {
        if (res.data.ret_code === 1) {
          common.alert(res.data.ret_msg);
          _this5.props.hide();
          _this5.props.getAddrList();
        } else {
          common.alert(res.data.ret_msg);
        }
      }, function (error) {
        common.alert(error);
      });

      this.props.hide();
    }

    // 获取省级列表

  }, {
    key: 'getPCAList',
    value: function getPCAList(grade, areaIdHigher) {
      var _this6 = this;

      var parms = _extends({}, _ApiMap2.default.commonData);

      if (grade === "cityList" || grade === "areaList" || grade === "streetList" || grade === "committeeList") {
        parms.area_id_higher = areaIdHigher;
      }

      (0, _http2.default)({
        url: _ApiMap2.default.getAreaList.url,
        method: _ApiMap2.default.getAreaList.method,
        data: JSON.stringify(parms)
      }).then(function (res) {
        if (res.data.ret_code === 1) {
          var resData = res.data.ret_data;
          _this6.setState(_defineProperty({}, grade, resData));
        } else {
          common.alert(res.data.ret_msg);
          //console.log(res.data.ret_msg);
        }
      }, function (error) {
        common.alert(error);
      });
    }
  }, {
    key: 'changeProvince',
    value: function changeProvince(e) {
      var id = parseInt(e.target.value);
      var provinceList = this.state.provinceList;
      var code = '';

      for (var i = 0; i < provinceList.length; i++) {
        if (provinceList[i].area_id = id) {
          code = provinceList[i].area_code;
        }
      }

      this.setState({
        checkedProvince: code,
        checkedCity: "",
        checkedArea: "",
        checkedStreet: "",
        checkedCommittee: ""
      });

      this.getPCAList('cityList', id);
    }
  }, {
    key: 'changeCity',
    value: function changeCity(e) {
      var id = parseInt(e.target.value);
      var cityList = this.state.cityList;
      var code = '';

      for (var i = 0; i < cityList.length; i++) {
        if (cityList[i].area_id = id) {
          code = cityList[i].area_code;
        }
      }
      this.setState({
        checkedCity: code,
        checkedArea: "",
        checkedStreet: "",
        checkedCommittee: ""
      });

      this.getPCAList('areaList', id);
    }
  }, {
    key: 'changeArea',
    value: function changeArea(e) {
      var id = parseInt(e.target.value);
      var areaList = this.state.areaList;
      var code = '';

      for (var i = 0; i < areaList.length; i++) {
        if (areaList[i].area_id = id) {
          code = areaList[i].area_code;
        }
      }

      this.setState({
        checkedArea: code,
        checkedStreet: "",
        checkedCommittee: ""
      });

      this.getPCAList('streetList', id);
    }
  }, {
    key: 'changeStreet',
    value: function changeStreet(e) {
      var id = parseInt(e.target.value);
      var streetList = this.state.streetList;
      var code = '';

      for (var i = 0; i < streetList.length; i++) {
        if (streetList[i].area_id = id) {
          code = streetList[i].area_code;
        }
      }

      this.setState({
        checkedStreet: code,
        checkedCommittee: ""
      });

      this.getPCAList('committeeList', id);
    }
  }, {
    key: 'changeCommittee',
    value: function changeCommittee(e) {
      var id = parseInt(e.target.value);
      var committeeList = this.state.committeeList;
      var code = '';

      for (var i = 0; i < committeeList.length; i++) {
        if (committeeList[i].area_id = id) {
          code = committeeList[i].area_code;
        }
      }

      this.setState({
        checkedCommittee: code
      });
    }
  }, {
    key: 'changebuildingName',
    value: function changebuildingName(e) {
      var code = e.target.value;
      this.setState({
        buildingName: code
      });
    }
  }, {
    key: 'changebuildingNo',
    value: function changebuildingNo(e) {
      var code = e.target.value;
      this.setState({
        buildingNo: code
      });
    }
  }, {
    key: 'changebuildingUnit',
    value: function changebuildingUnit(e) {
      var _this7 = this;

      var code = e.target.value;
      this.setState({
        buildingUnit: code
      }, function () {
        console.log(_this7.state);
      });
    }
  }, {
    key: 'changehouseholdNo',
    value: function changehouseholdNo(e) {
      var code = e.target.value;
      this.setState({
        householdNo: code
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          isShow = _props2.isShow,
          hide = _props2.hide;
      var _state2 = this.state,
          provinceList = _state2.provinceList,
          cityList = _state2.cityList,
          areaList = _state2.areaList,
          streetList = _state2.streetList,
          committeeList = _state2.committeeList;

      return _react2.default.createElement(
        _reactBootstrap.Modal,
        { show: isShow, onHide: hide },
        _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          { closeButton: true },
          _react2.default.createElement(
            _reactBootstrap.Modal.Title,
            null,
            '\u4FEE\u6539\u5730\u5740'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Body,
          null,
          _react2.default.createElement(
            'div',
            { style: { paddingBottom: '20px' } },
            _react2.default.createElement(
              'div',
              { className: 'form-group clearfix modal-from' },
              _react2.default.createElement(
                'div',
                { className: 'col-sm-2 control-label' },
                '\u7701\u5E02\u533A:'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-9' },
                _react2.default.createElement(
                  _reactBootstrap.FormControl,
                  {
                    componentClass: 'select',
                    name: 'station_in_sale',
                    placeholder: '\u7701',
                    style: { marginLeft: 0 },
                    onChange: this.changeProvince },
                  _react2.default.createElement(
                    'option',
                    { value: '' },
                    '\u8BF7\u9009\u62E9\u7701'
                  ),
                  provinceList.map(function (item, index) {
                    return _react2.default.createElement(
                      'option',
                      { value: item.area_id, key: index },
                      item.area_name
                    );
                  })
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormControl,
                  {
                    componentClass: 'select',
                    name: 'station_in_sale',
                    placeholder: '\u5E02',
                    onChange: this.changeCity },
                  _react2.default.createElement(
                    'option',
                    { value: '' },
                    '\u8BF7\u9009\u62E9\u5E02'
                  ),
                  cityList.map(function (item, index) {
                    return _react2.default.createElement(
                      'option',
                      { value: item.area_id, key: index },
                      item.area_name
                    );
                  })
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormControl,
                  {
                    componentClass: 'select',
                    name: 'station_in_sale',
                    placeholder: '\u533A',
                    onChange: this.changeArea },
                  _react2.default.createElement(
                    'option',
                    { value: '' },
                    '\u8BF7\u9009\u62E9\u533A'
                  ),
                  areaList.map(function (item, index) {
                    return _react2.default.createElement(
                      'option',
                      { value: item.area_id, key: index },
                      item.area_name
                    );
                  })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group clearfix modal-from' },
              _react2.default.createElement(
                'div',
                { className: 'col-sm-2 control-label' },
                '\u8857\u9053:'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-7' },
                _react2.default.createElement(
                  _reactBootstrap.FormControl,
                  {
                    componentClass: 'select',
                    name: 'station_in_sale',
                    placeholder: '\u7701',
                    style: { marginLeft: 0 },
                    onChange: this.changeStreet },
                  _react2.default.createElement(
                    'option',
                    { value: '' },
                    '\u8BF7\u9009\u62E9\u8857\u9053'
                  ),
                  streetList.map(function (item, index) {
                    return _react2.default.createElement(
                      'option',
                      { value: item.area_id, key: index },
                      item.area_name
                    );
                  })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group clearfix modal-from' },
              _react2.default.createElement(
                'div',
                { className: 'col-sm-2 control-label' },
                '\u5C45\u59D4\u4F1A:'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-7' },
                _react2.default.createElement(
                  _reactBootstrap.FormControl,
                  {
                    componentClass: 'select',
                    name: 'station_in_sale',
                    placeholder: '\u7701',
                    style: { marginLeft: 0 },
                    onChange: this.changeCommittee },
                  _react2.default.createElement(
                    'option',
                    { value: '' },
                    '\u8BF7\u9009\u62E9\u5C45\u59D4\u4F1A'
                  ),
                  committeeList.map(function (item, index) {
                    return _react2.default.createElement(
                      'option',
                      { value: item.area_id, key: index },
                      item.area_name
                    );
                  })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group clearfix modal-from' },
              _react2.default.createElement(
                'div',
                { className: 'col-sm-2 control-label' },
                '\u5C0F\u533A:'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-7' },
                _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', placeholder: '\u5C0F\u533A', onChange: this.changebuildingName })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group clearfix modal-from' },
              _react2.default.createElement(
                'div',
                { className: 'col-sm-2 control-label' },
                '\u697C\u680B:'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-7' },
                _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', placeholder: '\u697C\u680B', onChange: this.changebuildingNo })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group clearfix modal-from' },
              _react2.default.createElement(
                'div',
                { className: 'col-sm-2 control-label' },
                '\u5355\u5143:'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-7' },
                _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', placeholder: '\u5355\u5143', onChange: this.changebuildingUnit })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group clearfix modal-from' },
              _react2.default.createElement(
                'div',
                { className: 'col-sm-2 control-label' },
                '\u95E8\u724C\u53F7:'
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-sm-7' },
                _react2.default.createElement(_reactBootstrap.FormControl, { type: 'text', placeholder: '\u95E8\u724C\u53F7', onChange: this.changehouseholdNo })
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Footer,
          null,
          _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: hide },
            '\u53D6\u6D88'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'primary', onClick: this.comfirmModify },
            '\u786E\u5B9A'
          )
        )
      );
    }
  }]);

  return AddrModifyModal;
}(_react.Component);

// 确认删除Modal


var ComfirmModifyModal = exports.ComfirmModifyModal = function (_Component3) {
  _inherits(ComfirmModifyModal, _Component3);

  function ComfirmModifyModal(props) {
    _classCallCheck(this, ComfirmModifyModal);

    var _this8 = _possibleConstructorReturn(this, (ComfirmModifyModal.__proto__ || Object.getPrototypeOf(ComfirmModifyModal)).call(this, props));

    _this8.state = {};

    _this8.comfirmDelete = _this8.comfirmDelete.bind(_this8);
    return _this8;
  }

  _createClass(ComfirmModifyModal, [{
    key: 'comfirmDelete',
    value: function comfirmDelete() {
      var _this9 = this;

      var parms = _extends({}, _ApiMap2.default.commonData, {
        detail_id: common.Util.data('parms').detailId // 辖区外住户detail id
      });

      (0, _http2.default)({
        url: _ApiMap2.default.stationNongridDelete.url,
        method: _ApiMap2.default.stationNongridDelete.method,
        data: JSON.stringify(parms)
      }).then(function (res) {
        if (res.data.ret_code === 1) {
          _this9.props.hide();
          _this9.props.getAddrList();
        } else {
          common.alert(res.data.ret_msg);
        }
      }, function (error) {
        common.alert(error);
      });

      this.props.hide();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          isShow = _props3.isShow,
          hide = _props3.hide;

      return _react2.default.createElement(
        _reactBootstrap.Modal,
        { show: isShow, onHide: hide },
        _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          { closeButton: true },
          _react2.default.createElement(
            _reactBootstrap.Modal.Title,
            null,
            '\u786E\u8BA4\u5220\u9664'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Body,
          null,
          _react2.default.createElement(
            'p',
            { style: { textAlign: 'center', marginBottom: 0, padding: '15px 0' } },
            '\u662F\u5426\u786E\u8BA4\u5220\u9664\uFF1F'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Footer,
          null,
          _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: hide },
            '\u53D6\u6D88'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { bsStyle: 'primary', onClick: this.comfirmDelete },
            '\u786E\u5B9A'
          )
        )
      );
    }
  }]);

  return ComfirmModifyModal;
}(_react.Component);

/***/ }),

/***/ "./app/page/jurisdictionOutsideAddrAdmin/addrAdmin.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

var _Form = __webpack_require__("./app/page/jurisdictionOutsideAddrAdmin/Form.js");

var _Form2 = _interopRequireDefault(_Form);

var _Modal = __webpack_require__("./app/page/jurisdictionOutsideAddrAdmin/Modal.js");

var _Table = __webpack_require__("./app/component/table/Table.js");

var _Table2 = _interopRequireDefault(_Table);

var _pageNation = __webpack_require__("./app/component/pageNation/pageNation.js");

var _pageNation2 = _interopRequireDefault(_pageNation);

var _http = __webpack_require__("./app/lib/Api/http.js");

var _http2 = _interopRequireDefault(_http);

var _ApiMap = __webpack_require__("./app/lib/Api/ApiMap.js");

var _ApiMap2 = _interopRequireDefault(_ApiMap);

__webpack_require__("./app/page/jurisdictionOutsideAddrAdmin/style.css");

var _assert = __webpack_require__("./node_modules/assert/assert.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import {setInitDate, getTimestamp, downloadExcel} from '../../lib/Util';


var AddrAdmin = function (_Component) {
    _inherits(AddrAdmin, _Component);

    function AddrAdmin(props) {
        _classCallCheck(this, AddrAdmin);

        var _this = _possibleConstructorReturn(this, (AddrAdmin.__proto__ || Object.getPrototypeOf(AddrAdmin)).call(this, props));

        _this.state = {
            needModifyItem: {},
            isAllChecked: false,
            showHealthManagerModal: false,
            showAddrModifyModal: false,
            showComfirmModifyModal: false,
            pageNum: 0,
            currentPage: 1,
            beginNum: 0,
            pageCount: 10,
            allHecadreList: [],
            queryHecadreList: [8000000005],
            hasResident: 0,
            tableData: []
        };

        _this.handleHealthManagerModal = _this.handleHealthManagerModal.bind(_this);
        _this.handleAddrModifyModal = _this.handleAddrModifyModal.bind(_this);
        _this.closeHealthManagerModal = _this.closeHealthManagerModal.bind(_this);
        _this.closeAddrModifyModal = _this.closeAddrModifyModal.bind(_this);
        _this.patchDelete = _this.patchDelete.bind(_this);
        _this.handleComfirmModifyModal = _this.handleComfirmModifyModal.bind(_this);
        _this.closeComfirmModifyModal = _this.closeComfirmModifyModal.bind(_this);
        _this.handleTogglePage = _this.handleTogglePage.bind(_this);
        _this.handleClickSearch = _this.handleClickSearch.bind(_this);
        _this.getAddrList = _this.getAddrList.bind(_this);
        return _this;
    }

    _createClass(AddrAdmin, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            var self = this;
            console.log(this.state);
            this.columns = [{
                className: 'my-col-class',
                title: '',
                dataIndex: 'prod_num',
                key: 'g',
                render: function render(text, record) {
                    return _react2.default.createElement(_reactBootstrap.Checkbox, { checked: record.isChecked, onChange: function onChange(e) {
                            return self.toggleIsChecked(e, record);
                        } });
                }
            }, {
                className: 'my-col-class',
                title: '辖区外地址',
                dataIndex: 'nongrid_address',
                key: 'a'
            }, {
                className: 'my-col-class',
                id: '123',
                title: '居民数量',
                dataIndex: 'resident_count',
                key: 'b'
            }, {
                className: 'my-col-class',
                title: '管辖者',
                dataIndex: 'nongrid_owner',
                key: 'c'
            }, {
                className: 'my-col-class',
                title: '创建者',
                dataIndex: 'nongrid_creator',
                key: 'd'
            }, {
                className: 'my-col-class',
                title: '创建时间',
                dataIndex: 'create_date',
                key: 'e'
            }, {
                className: 'my-col-class',
                title: '操作',
                dataIndex: 'prod_num',
                key: 'f',
                render: function render(text, record) {
                    return _react2.default.createElement(
                        'div',
                        null,
                        _react2.default.createElement(
                            'a',
                            { onClick: function onClick(e) {
                                    return _this2.handleAddrModifyModal(record);
                                }, href: 'javascript:;' },
                            '\u4FEE\u6539\u5730\u5740'
                        ),
                        record.resident_count ? null : _react2.default.createElement(
                            'a',
                            { onClick: function onClick(e) {
                                    return _this2.handleComfirmModifyModal(record);
                                }, href: 'javascript:;' },
                            '\u5220\u9664'
                        )
                    );
                }
            }];

            this.getstationHecadreListbyperm();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'handleHealthManagerModal',
        value: function handleHealthManagerModal() {
            var checkedLen = this.state.tableData.filter(function (item) {
                return item.isChecked;
            }).length;
            console.log(checkedLen);
            if (checkedLen) {
                this.setState({
                    showHealthManagerModal: true
                });
            } else {
                this.setState({
                    showHealthManagerModal: false
                });
            }
        }
    }, {
        key: 'closeHealthManagerModal',
        value: function closeHealthManagerModal() {
            this.setState({
                showHealthManagerModal: false
            });
        }
    }, {
        key: 'handleAddrModifyModal',
        value: function handleAddrModifyModal(item) {
            this.setState({
                showAddrModifyModal: true
            });

            common.Util.data('parms', {
                detailId: item.detail_id
            });
        }
    }, {
        key: 'closeAddrModifyModal',
        value: function closeAddrModifyModal() {
            this.setState({
                showAddrModifyModal: false
            });
        }

        // 批量删除

    }, {
        key: 'patchDelete',
        value: function patchDelete() {
            var checkedLen = this.state.tableData.filter(function (item) {
                return item.isChecked;
            }).length;
            console.log(checkedLen);
            if (checkedLen) {
                this.setState({
                    showComfirmModifyModal: true
                });
            } else {
                this.setState({
                    showComfirmModifyModal: false
                });
            }
        }
    }, {
        key: 'handleComfirmModifyModal',
        value: function handleComfirmModifyModal(item) {
            this.setState({
                showComfirmModifyModal: true
            });

            common.Util.data('parms', {
                detailId: item.detail_id
            });
        }
    }, {
        key: 'closeComfirmModifyModal',
        value: function closeComfirmModifyModal() {
            this.setState({
                showComfirmModifyModal: false
            });
        }

        // 切换是否选中

    }, {
        key: 'toggleIsChecked',
        value: function toggleIsChecked(e, item) {
            var _this3 = this;

            this.state.tableData[item.key].isChecked = e.target.checked;
            this.setState({
                tableData: this.state.tableData
            }, function () {
                console.log(_this3.state);
            });
            this.checkAll();
        }

        // 切换是否全选

    }, {
        key: 'toggleIsAllChecked',
        value: function toggleIsAllChecked(e) {
            var _this4 = this;

            //修改里面每个任务的状态
            this.state.tableData.forEach(function (item) {
                item.isChecked = e.target.checked;
            });

            //修改isAllChecked里面的值
            this.setState({
                tableData: this.state.tableData,
                isAllChecked: e.target.checked
            }, function () {
                console.log(_this4.state);
            });
        }

        // 检查是否全选

    }, {
        key: 'checkAll',
        value: function checkAll() {
            if (this.state.tableData.every(function (item) {
                return item.isChecked;
            })) {
                this.setState({
                    isAllChecked: true
                });
            } else {
                this.setState({
                    isAllChecked: false
                });
            }
        }

        // 获取地址列表

    }, {
        key: 'getAddrList',
        value: function getAddrList() {
            var _this5 = this;

            var _state = this.state,
                pageCount = _state.pageCount,
                beginNum = _state.beginNum,
                hasResident = _state.hasResident,
                queryHecadreList = _state.queryHecadreList;

            var parms = _extends({}, _ApiMap2.default.commonData, {
                hecadre_list: queryHecadreList,
                has_resident: parseInt(hasResident),
                begin: beginNum,
                count: pageCount
            });

            if (hasResident == 0) {
                delete parms.has_resident;
            }

            (0, _http2.default)({
                url: _ApiMap2.default.stationNongridList.url,
                method: _ApiMap2.default.stationNongridList.method,
                data: JSON.stringify(parms)
            }).then(function (res) {
                if (res.data.ret_code === 1) {
                    var resData = res.data.ret_data;
                    _this5.setState({
                        pageNum: Math.ceil(resData.total / pageCount),
                        tableData: resData.nongrid_list.map(function (item, index) {
                            item.nongrid_owner = item.nongrid_owner.hecadre_name;
                            item.nongrid_creator = item.nongrid_creator.hecadre_name;
                            item.isChecked = false;
                            item.key = index;
                            return item;
                        })
                    });
                } else {
                    common.alert(res.data.ret_msg);
                }
            }, function (error) {
                common.alert(error);
            });
        }

        // 获取健管师列表

    }, {
        key: 'getstationHecadreListbyperm',
        value: function getstationHecadreListbyperm() {
            var _this6 = this;

            // const {pageCount, currentPage, beginNum, hasResident, queryHecadreList} = this.state;
            var parms = _extends({}, _ApiMap2.default.commonData);

            (0, _http2.default)({
                url: _ApiMap2.default.stationHecadreListbyperm.url,
                method: _ApiMap2.default.stationHecadreListbyperm.method,
                data: JSON.stringify(parms)
            }).then(function (res) {
                if (res.data.ret_code === 1) {
                    var resData = res.data.ret_data;
                    _this6.setState({
                        allHecadreList: resData
                    });
                } else {
                    common.alert(res.data.ret_msg);
                }
            }, function (error) {
                common.alert(error);
            });
        }

        // 点击查询

    }, {
        key: 'handleClickSearch',
        value: function handleClickSearch() {
            var _this7 = this;

            this.setState({
                currentPage: 1
            }, function () {
                _this7.setState({
                    beginNum: (_this7.state.currentPage - 1) * _this7.state.pageCount
                }, function () {
                    _this7.getAddrList();
                });
            });
        }
    }, {
        key: 'handleTogglePage',
        value: function handleTogglePage(ev) {
            var _this8 = this;

            console.log(this.state.currentPage);
            console.log(ev);
            this.setState({
                currentPage: ev.currentPage
            }, function () {
                _this8.setState({
                    beginNum: (_this8.state.currentPage - 1) * _this8.state.pageCount
                }, function () {
                    _this8.getAddrList();
                });
            });
        }

        // 选取管辖者

    }, {
        key: 'selectHecadre',
        value: function selectHecadre(h) {
            var _this9 = this;

            this.state.queryHecadreList.length = 0;
            this.state.queryHecadreList.push(parseInt(h));

            this.setState({
                queryHecadreList: this.state.queryHecadreList
            }, function () {
                console.log(_this9.state);
            });
        }

        // 选取居民数量

    }, {
        key: 'selectInhabitant',
        value: function selectInhabitant(h) {
            var _this10 = this;

            this.setState({
                hasResident: h
            }, function () {
                console.log(_this10.state);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this11 = this;

            var _state2 = this.state,
                pageNum = _state2.pageNum,
                currentPage = _state2.currentPage,
                tableData = _state2.tableData,
                showHealthManagerModal = _state2.showHealthManagerModal,
                showAddrModifyModal = _state2.showAddrModifyModal,
                showComfirmModifyModal = _state2.showComfirmModifyModal,
                needModifyItem = _state2.needModifyItem,
                allHecadreList = _state2.allHecadreList;

            var columns = this.columns;
            return _react2.default.createElement(
                'div',
                { className: 'wrap hospital' },
                _react2.default.createElement(
                    'div',
                    { className: 'tb-head' },
                    '\u8F96\u533A\u5916\u5730\u5740\u7BA1\u7406'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'tb-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'tb-wrap' },
                        _react2.default.createElement(
                            'div',
                            { className: 'clearfix pdtb' },
                            _react2.default.createElement(_Form2.default, {
                                selectHecadre: this.selectHecadre.bind(this),
                                selectInhabitant: this.selectInhabitant.bind(this),
                                allHecadreList: allHecadreList,
                                healthManagerModal: this.handleHealthManagerModal,
                                patchDelete: this.patchDelete,
                                handleClickSearch: this.handleClickSearch })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'table-box' },
                            _react2.default.createElement(_reactBootstrap.Checkbox, { className: 'all-checkbox', checked: this.state.isAllChecked, onChange: function onChange(e) {
                                    return _this11.toggleIsAllChecked(e);
                                } }),
                            _react2.default.createElement(_Table2.default, {
                                rowClassName: 'my-row-class',
                                columns: columns,
                                data: tableData
                            })
                        ),
                        _react2.default.createElement(_pageNation2.default, {
                            pageNumber: pageNum,
                            currentPage: currentPage,
                            getPage: this.handleTogglePage
                        })
                    )
                ),
                _react2.default.createElement(_Modal.HealthManagerModal, {
                    allHecadreList: allHecadreList,
                    tableData: tableData,
                    getAddrList: this.getAddrList,
                    isShow: showHealthManagerModal,
                    hide: this.closeHealthManagerModal }),
                _react2.default.createElement(_Modal.AddrModifyModal, {
                    getAddrList: this.getAddrList,
                    isShow: showAddrModifyModal,
                    hide: this.closeAddrModifyModal }),
                _react2.default.createElement(_Modal.ComfirmModifyModal, {
                    getAddrList: this.getAddrList,
                    isShow: showComfirmModifyModal,
                    hide: this.closeComfirmModifyModal })
            );
        }
    }]);

    return AddrAdmin;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(AddrAdmin, null), document.getElementById('__jurisdictionOutsideAddrAdmin/addrAdmin__'));

/***/ }),

/***/ "./app/page/jurisdictionOutsideAddrAdmin/style.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/page/jurisdictionOutsideAddrAdmin/style.css");
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

/***/ "./node_modules/assert/assert.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__("./node_modules/util/util.js");
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/component/pageNation/pagenation.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".pd20{padding:20px 0}.pageNation{margin:0;padding:0;font-size:12px;float:right}.pageNation a{display:inline-block;padding:4px 15px;border:1px solid #333;color:#333;border-radius:3px;margin-right:5px;text-decoration:none;vertical-align:middle}.pageNation a:last-child{margin-right:0}.pageNation a.active{border:1px solid #999;color:#999;cursor:default}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/page/jurisdictionOutsideAddrAdmin/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".pdtb{padding:20px 0}.form-group{margin-right:20px}select{margin-left:10px;width:150px!important}.health-manager{text-align:center}.health-manager .form-group{margin:0;display:inline-block}.health-manager .form-group select{width:200px;margin:0}.table-box{position:relative}.all-checkbox{position:absolute;left:8px;top:0;z-index:1}.modal-from .form-control{display:inline-block}.modal-form .control-label{vertical-align:middle}", ""]);

// exports


/***/ }),

/***/ "./node_modules/util/node_modules/inherits/inherits_browser.js":
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/util/support/isBufferBrowser.js":
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/util/util.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__("./node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__("./node_modules/util/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/process/browser.js")))

/***/ })

},["./app/page/jurisdictionOutsideAddrAdmin/addrAdmin.js"]);