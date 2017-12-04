webpackJsonp([16],{

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

/***/ "./app/page/guestorder/DB.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.shopGuestorderList = shopGuestorderList;
exports.fetchArealist = fetchArealist;
exports.fetchListbyareastation = fetchListbyareastation;
exports.shopGuestorderAssign = shopGuestorderAssign;
exports.shopGuestorder = shopGuestorder;
exports.shopGuestorderExport = shopGuestorderExport;

var _ApiMap = __webpack_require__("./app/lib/Api/ApiMap.js");

var _ApiMap2 = _interopRequireDefault(_ApiMap);

var _http = __webpack_require__("./app/lib/Api/http.js");

var _http2 = _interopRequireDefault(_http);

var _logger = __webpack_require__("./app/lib/logger.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//1.3.14	(Web)订货意向列表
function shopGuestorderList(args) {
  return new Promise(function (resolve, reject) {
    var params = _ApiMap2.default.shopGuestorderList;
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

// 获取行政区域
function fetchArealist(condition) {
  return new Promise(function (resolve, reject) {
    (0, _http2.default)({
      url: _ApiMap2.default.getArealist.url,
      method: _ApiMap2.default.getArealist.method,
      data: _extends({}, _ApiMap2.default.getArealist.data, condition)
    }).then(function (result) {
      (0, _logger.logger)(result);
      var data = result.data;
      if (data.ret_code === 1) {
        resolve(data.ret_data);
      } else {
        reject(data.ret_msg);
      }
    }).catch(function (err) {
      reject('获取健管师失败');
      (0, _logger.logger)(err);
    });
  });
}

//1.3.15	(Web)根据区域获取健管师列表
function fetchListbyareastation(condition) {
  var listbyareastation = _ApiMap2.default.listbyareastation;
  return new Promise(function (resolve, reject) {
    (0, _http2.default)({
      url: listbyareastation.url,
      method: listbyareastation.method,
      data: _extends({}, listbyareastation.data, condition)
    }).then(function (result) {
      (0, _logger.logger)(result);
      var data = result.data;
      if (data.ret_code === 1) {
        resolve(data.ret_data);
      } else {
        reject(data.ret_msg);
      }
    }).catch(function (err) {
      reject('获取健管师失败');
      (0, _logger.logger)(err);
    });
  });
}

//1.1.25	(Web)门店商品新增
function shopGuestorderAssign(condition) {
  var shopGuestorderAssignData = _ApiMap2.default.shopGuestorderAssign;
  return new Promise(function (resolve, reject) {
    (0, _http2.default)({
      url: shopGuestorderAssignData.url,
      method: shopGuestorderAssignData.method,
      data: _extends({}, shopGuestorderAssignData.data, condition)
    }).then(function (result) {
      (0, _logger.logger)(result);
      var data = result.data;
      if (data.ret_code === 1) {
        resolve(data.ret_data);
      } else {
        reject(data.ret_msg);
      }
    }).catch(function (err) {
      reject('门店商品新增失败');
      (0, _logger.logger)(err);
    });
  });
}

//1.3.17	(Web)订货意向 - 详情
function shopGuestorder(condition) {
  var shopGuestorderData = _ApiMap2.default.shopGuestorder;
  return new Promise(function (resolve, reject) {
    (0, _http2.default)({
      url: shopGuestorderData.url,
      method: shopGuestorderData.method,
      data: _extends({}, shopGuestorderData.data, condition)
    }).then(function (result) {
      (0, _logger.logger)(result);
      var data = result.data;
      if (data.ret_code === 1) {
        resolve(data.ret_data);
      } else {
        reject(data.ret_msg);
      }
    }).catch(function (err) {
      reject('门店商品新增失败');
      (0, _logger.logger)(err);
    });
  });
}

//1.3.18	(Web)订货意向导出
function shopGuestorderExport(condition) {
  var shopGuestorderExportData = _ApiMap2.default.shopGuestorderExport;
  return new Promise(function (resolve, reject) {
    (0, _http2.default)({
      url: shopGuestorderExportData.url,
      method: shopGuestorderExportData.method,
      data: _extends({}, shopGuestorderExportData.data, condition)
    }).then(function (result) {
      (0, _logger.logger)(result);
      var data = result.data;
      if (data.ret_code === 1) {
        resolve(data.ret_data);
      } else {
        reject(data.ret_msg);
      }
    }).catch(function (err) {
      reject('订货意向导出');
      (0, _logger.logger)(err);
    });
  });
}

var DB = {
  shopGuestorderList: shopGuestorderList,
  fetchArealist: fetchArealist,
  fetchListbyareastation: fetchListbyareastation,
  shopGuestorderAssign: shopGuestorderAssign,
  shopGuestorder: shopGuestorder
};
exports.default = DB;

/***/ }),

/***/ "./app/page/guestorder/Info.js":
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

var _Container = __webpack_require__("./app/component/container/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _Prod = __webpack_require__("./app/page/prod/Prod.js");

var _Prod2 = _interopRequireDefault(_Prod);

var _DB = __webpack_require__("./app/page/guestorder/DB.js");

var _DB2 = _interopRequireDefault(_DB);

var _Util = __webpack_require__("./app/lib/Util.js");

var _reactBootstrap = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

__webpack_require__("./app/page/guestorder/style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import logger from '../../lib/logger';


var common = window.common;

var GuestorderInfo = function (_Component) {
  _inherits(GuestorderInfo, _Component);

  function GuestorderInfo(props) {
    _classCallCheck(this, GuestorderInfo);

    var _this = _possibleConstructorReturn(this, (GuestorderInfo.__proto__ || Object.getPrototypeOf(GuestorderInfo)).call(this, props));

    _this.state = {
      prod_list: []
    };
    return _this;
  }

  _createClass(GuestorderInfo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var data = common.Util.data('guestorder/Info');
      _DB2.default.shopGuestorder({
        guest_order_id: data.guest_order_id
      }).then(function (result) {
        var ret_data = result;
        _this2.setState(_extends({}, ret_data));
      }).catch(function (err) {
        (0, _Util.alert)(err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.state;
      return _react2.default.createElement(
        _Container2.default,
        { className: 'flex-auto gird-align', title: '站点商品管理>>详情' },
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'border-bottom gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 12 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u57FA\u672C\u4FE1\u606F'
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            '\u610F\u5411\u5355\u53F7'
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            data.guest_order_no
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            '\u63D0\u4EA4\u65F6\u95F4'
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            common.Util.formatDate(data.create_date)
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            '\u91D1\u989D\u603B\u8BA1'
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            data.guest_order_amount
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            '\u5546\u54C1\u6570\u91CF'
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            data.prod_num
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            '\u6536\u8D27\u4EBA'
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            data.receipt_name
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            '\u8054\u7CFB\u7535\u8BDD'
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            data.receipt_contact
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            '\u5730\u5740'
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            data.receipt_address
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            '\u6307\u5B9A\u5065\u5EB7\u7BA1\u7406\u5E08'
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            data.hecadre_assigned
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            '\u64CD\u4F5C\u4EBA'
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            data.assign_by
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            '\u64CD\u4F5C\u65F6\u95F4'
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            common.Util.formatDate(data.assign_date)
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'border-bottom gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 12 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u610F\u5411\u5546\u54C1'
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'text-center' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            '\u5546\u54C1\u540D\u79F0'
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            '\u5546\u54C1\u6570\u91CF'
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            '\u91D1\u989D'
          )
        ),
        data.prod_list.map(function (prod) {
          var prod_imgs = prod.prod_imgs || [];
          var prod_imgs_src = prod_imgs.length > 0 ? prod_imgs[0] : undefined;
          return _react2.default.createElement(
            _reactBootstrap.Row,
            { key: prod.prod_id, className: 'border-bottom' },
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 4 },
              _react2.default.createElement(_Prod2.default, { prod_imgs_src: prod_imgs_src, prod_price: prod.prod_price, prod_name: prod.prod_name })
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 4, className: 'guestorder-prod text-center' },
              'x',
              prod.prod_num
            ),
            _react2.default.createElement(
              _reactBootstrap.Col,
              { sm: 4, className: 'guestorder-prod text-center' },
              '¥',
              _react2.default.createElement(
                'span',
                { className: 'price_color' },
                prod.prod_price
              )
            )
          );
        }),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'text-center' },
          _react2.default.createElement(_reactBootstrap.Col, { sm: 4 }),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            '共',
            _react2.default.createElement(
              'span',
              { className: 'price_color' },
              _lodash2.default.reduce(_lodash2.default.map(data.prod_list, function (prod) {
                return prod.prod_num;
              }), function (sum, item) {
                return sum + item;
              })
            ),
            '件商品'
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            '合计¥',
            _react2.default.createElement(
              'span',
              { className: 'price_color' },
              _lodash2.default.reduce(_lodash2.default.map(data.prod_list, function (prod) {
                return prod.prod_price;
              }), function (sum, item) {
                return sum + item;
              })
            )
          )
        )
      );
    }
  }]);

  return GuestorderInfo;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(GuestorderInfo, { data: common.Util.data('guestorder/Info') }), document.getElementById('__guestorder/Info__'));

/***/ }),

/***/ "./app/page/guestorder/style.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/page/guestorder/style.css");
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

/***/ "./app/page/prod/Prod.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

var _http = __webpack_require__("./app/lib/Api/http.js");

__webpack_require__("./app/page/prod/prod.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Prod = function (_React$Component) {
  _inherits(Prod, _React$Component);

  function Prod() {
    _classCallCheck(this, Prod);

    return _possibleConstructorReturn(this, (Prod.__proto__ || Object.getPrototypeOf(Prod)).apply(this, arguments));
  }

  _createClass(Prod, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          prod_imgs_src = _props.prod_imgs_src,
          prod_price = _props.prod_price,
          prod_name = _props.prod_name;

      var imgSrc = _http.baseURL + prod_imgs_src;
      return _react2.default.createElement(
        'div',
        { className: 'prod' },
        _react2.default.createElement(
          _reactBootstrap.Col,
          { sm: 4, className: 'prod-img' },
          _react2.default.createElement('img', { src: imgSrc })
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { sm: 8, className: 'prod-instr' },
          _react2.default.createElement(
            'div',
            { className: 'prod-instr-txt' },
            prod_name
          ),
          _react2.default.createElement(
            'div',
            null,
            '\xA5',
            _react2.default.createElement(
              'span',
              { className: 'prod-price' },
              prod_price
            )
          )
        )
      );
    }
  }]);

  return Prod;
}(_react2.default.Component);

exports.default = Prod;

/***/ }),

/***/ "./app/page/prod/prod.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/page/prod/prod.css");
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
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/lib/index.js!./prod.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/lib/index.js!./prod.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/page/guestorder/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".guestorder-prod{height:100px;line-height:100px}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/page/prod/prod.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".prod-img{overflow:hidden}.prod-img>img{width:100%;height:auto;vertical-align:middle}.prod-instr-txt{height:40px}.prod-price{color:red}", ""]);

// exports


/***/ })

},["./app/page/guestorder/Info.js"]);