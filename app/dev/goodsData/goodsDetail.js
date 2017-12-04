webpackJsonp([20],{

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

/***/ "./app/page/goodsData/goodsDetail.js":
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

var _reactBootstrap = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

var _http = __webpack_require__("./app/lib/Api/http.js");

var _http2 = _interopRequireDefault(_http);

var _ApiMap = __webpack_require__("./app/lib/Api/ApiMap.js");

var _ApiMap2 = _interopRequireDefault(_ApiMap);

var _goodsTagDialog = __webpack_require__("./app/page/goodsData/goodsTagDialog.js");

var _goodsTagDialog2 = _interopRequireDefault(_goodsTagDialog);

__webpack_require__("./app/page/goodsData/newGoods.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoodsDetail = function (_Component) {
    _inherits(GoodsDetail, _Component);

    function GoodsDetail(props) {
        _classCallCheck(this, GoodsDetail);

        var _this = _possibleConstructorReturn(this, (GoodsDetail.__proto__ || Object.getPrototypeOf(GoodsDetail)).call(this, props));

        _this.state = {
            //提交使用的
            goodsMsg: {
                prod_no: '',
                prod_name: '',
                prod_src: '',
                prod_spec: '',
                prod_apprv_no: '',
                prod_valid_month: 1,
                prod_pkg_unit: 1,
                prod_assist_code: '',
                prod_price: 0.0,
                prod_original_price: 1.0,
                prod_cat: 1,
                prod_country_flag: 1,
                prod_in_sale: 1,
                prod_allow_sale: 1,
                prod_display: 1,
                prod_tags: [],
                prod_crowds: [],
                prod_ingreds: '',
                prod_memo: '',
                prod_imgs: [],
                prod_intro: ''
            },
            //页面状态
            goods_cat: [],
            lgShow: false,
            tagList: [],
            tagsText: '',
            crowText: '',
            dialogName: '商品标签',
            dataKey: 'prod_tags',
            showImg: []
        };
        _this.editor = {};
        _this.tags = {};
        _this.imgData = [];
        return _this;
    }

    _createClass(GoodsDetail, [{
        key: 'getGoodsDetail',
        value: function getGoodsDetail(prodId) {
            var _this2 = this;

            (0, _http2.default)(_extends({}, _ApiMap2.default.goodsPriceDetail, {
                data: _extends({}, _ApiMap2.default.commonData, {
                    prod_id: prodId
                })
            })).then(function (response) {
                var data = response.data,
                    prod_tags = [],
                    prod_crowds = [],
                    prod_imgs = [],
                    crowText = '',
                    tagsText = '';
                console.log(data);
                if (data.ret_code === 1) {
                    prod_tags = data.ret_data.prod_tags.map(function (tag) {
                        return parseInt(tag.tag_id);
                    });
                    prod_crowds = data.ret_data.prod_crowds.map(function (crows) {
                        return parseInt(crows.crowd_id);
                    });
                    prod_imgs = data.ret_data.prod_imgs;
                    tagsText = data.ret_data.prod_tags.map(function (tag) {
                        return tag.tag_text;
                    }).join(',');
                    crowText = data.ret_data.prod_crowds.map(function (crows) {
                        return crows.crowd_text;
                    }).join(',');
                    _this2.setState({
                        goodsMsg: _extends({}, data.ret_data, {
                            prod_tags: prod_tags,
                            prod_crowds: prod_crowds,
                            prod_imgs: prod_imgs,
                            prod_cat: data.ret_data.prod_cat
                        }),
                        crowText: crowText,
                        tagsText: tagsText,
                        showImg: prod_imgs
                    });
                }
            }).catch(function (err) {
                console.log(err);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log(this.props.goodsId);
            this.getGoodsDetail(this.props.goodsId.prod_id);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                _Container2.default,
                { className: 'p20', title: '\u5546\u54C1\u8D44\u6599\u8BE6\u60C5' },
                _react2.default.createElement(
                    'div',
                    { className: 'newGoodsData' },
                    _react2.default.createElement(
                        _reactBootstrap.Form,
                        { bsClass: 'form', horizontal: true },
                        _react2.default.createElement(
                            _reactBootstrap.FormGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { className: 'text-right', sm: 2 },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    null,
                                    '\u5546\u54C1\u7F16\u53F7\uFF1A'
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 10 },
                                _react2.default.createElement(
                                    _reactBootstrap.FormControl.Static,
                                    { name: 'prod_name', componentClass: 'label', className: 'normalLable' },
                                    this.state.goodsMsg.prod_no
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.FormGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { className: 'text-right', sm: 2 },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    null,
                                    '\u5546\u54C1\u540D\u79F0\uFF1A'
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 10 },
                                _react2.default.createElement(
                                    _reactBootstrap.FormControl.Static,
                                    { name: 'prod_name', componentClass: 'label', className: 'normalLable' },
                                    this.state.goodsMsg.prod_name
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.FormGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { className: 'text-right', sm: 2 },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    null,
                                    '\u5546\u54C1\u4EA7\u5730\uFF1A'
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 4 },
                                _react2.default.createElement(
                                    _reactBootstrap.FormControl.Static,
                                    { name: 'prod_src', componentClass: 'label', className: 'normalLable' },
                                    this.state.goodsMsg.prod_src
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { className: 'text-right', sm: 2 },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    null,
                                    '\u5546\u54C1\u89C4\u683C\uFF1A'
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 4 },
                                _react2.default.createElement(
                                    _reactBootstrap.FormControl.Static,
                                    { name: 'prod_spec', componentClass: 'label', className: 'normalLable' },
                                    this.state.goodsMsg.prod_spec
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.FormGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { className: 'text-right', sm: 2 },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    null,
                                    '\u6279\u51C6\u6587\u53F7\uFF1A'
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 4 },
                                _react2.default.createElement(
                                    _reactBootstrap.FormControl.Static,
                                    { name: 'prod_apprv_no', componentClass: 'label', className: 'normalLable' },
                                    this.state.goodsMsg.prod_apprv_no
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { className: 'text-right', sm: 2 },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    null,
                                    '\u6709\u6548\u671F\uFF08\u6708\uFF09\uFF1A'
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 4 },
                                _react2.default.createElement(
                                    _reactBootstrap.FormControl.Static,
                                    { name: 'prod_valid_month', componentClass: 'label', className: 'normalLable' },
                                    this.state.goodsMsg.prod_valid_month
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.FormGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { className: 'text-right', sm: 2 },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    null,
                                    '\u5305\u88C5\u5355\u4F4D\uFF1A'
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 4 },
                                _react2.default.createElement(
                                    _reactBootstrap.FormControl.Static,
                                    { name: 'prod_pkg_unit', componentClass: 'label', className: 'normalLable' },
                                    GoodsDetail.getPackUnit(this.state.goodsMsg.prod_pkg_unit)
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { className: 'text-right', sm: 2 },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    null,
                                    '\u52A9\u8BB0\u7801\uFF1A'
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 4 },
                                _react2.default.createElement(
                                    _reactBootstrap.FormControl.Static,
                                    { name: 'prod_assist_code', componentClass: 'label', className: 'normalLable' },
                                    this.state.goodsMsg.prod_assist_code
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.FormGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { className: 'text-right', sm: 2 },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    null,
                                    '\u552E\u4EF7\uFF08\u5143\uFF09\uFF1A'
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 4 },
                                _react2.default.createElement(
                                    _reactBootstrap.FormControl.Static,
                                    { name: 'prod_price', componentClass: 'label', className: 'normalLable' },
                                    this.state.goodsMsg.prod_price + '元'
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { className: 'text-right', sm: 2 },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    null,
                                    '\u539F\u4EF7\uFF08\u5143\uFF09\uFF1A'
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 4 },
                                _react2.default.createElement(
                                    _reactBootstrap.FormControl.Static,
                                    { name: 'prod_original_price', componentClass: 'label', className: 'normalLable' },
                                    this.state.goodsMsg.prod_original_price + '元'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.FormGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { className: 'text-right', sm: 2 },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    null,
                                    '\u5546\u54C1\u5206\u7C7B\uFF1A'
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 4 },
                                _react2.default.createElement(
                                    _reactBootstrap.FormControl.Static,
                                    { name: 'prod_cat', componentClass: 'label', className: 'normalLable' },
                                    this.state.goodsMsg.prod_cat.cat_text
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { className: 'text-right', sm: 2 },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    null,
                                    '\u56FD\u4EA7/\u8FDB\u53E3\uFF1A'
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 4 },
                                _react2.default.createElement(
                                    _reactBootstrap.FormControl.Static,
                                    { name: 'prod_country_flag', componentClass: 'label', className: 'normalLable' },
                                    this.state.goodsMsg.prod_country_flag === 1 ? '进口' : '国产'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.FormGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { className: 'text-right', sm: 2 },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    null,
                                    '\u662F\u5426\u5728\u552E\uFF1A'
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 4 },
                                _react2.default.createElement(
                                    _reactBootstrap.FormControl.Static,
                                    { name: 'prod_in_sale', componentClass: 'label', className: 'normalLable' },
                                    this.state.goodsMsg.prod_in_sale === 1 ? '在售' : '停售'
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { className: 'text-right', sm: 2 },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    null,
                                    '\u662F\u5426\u53EF\u552E\uFF1A'
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 4 },
                                _react2.default.createElement(
                                    _reactBootstrap.FormControl.Static,
                                    { name: 'prod_allow_sale', componentClass: 'label', className: 'normalLable' },
                                    this.state.goodsMsg.prod_allow_sale === 1 ? '可售' : '不可售'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.FormGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { className: 'text-right', sm: 2 },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    null,
                                    '\u9ED8\u8BA4\u663E\u793A\uFF1A'
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 10 },
                                _react2.default.createElement(
                                    _reactBootstrap.FormControl.Static,
                                    { name: 'prod_display', componentClass: 'label', className: 'normalLable' },
                                    this.state.goodsMsg.prod_display === 1 ? '是' : '否'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.FormGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { className: 'text-right', sm: 2 },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    null,
                                    '\u5546\u54C1\u6807\u7B7E\uFF1A'
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 10 },
                                _react2.default.createElement(
                                    _reactBootstrap.FormControl.Static,
                                    { name: 'prod_tags', componentClass: 'label', className: 'normalLable' },
                                    this.state.tagsText
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.FormGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { className: 'text-right', sm: 2 },
                                _react2.default.createElement(
                                    _reactBootstrap.ControlLabel,
                                    null,
                                    '\u9002\u7528\u4EBA\u7FA4\uFF1A'
                                )
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 10 },
                                _react2.default.createElement(
                                    _reactBootstrap.FormControl.Static,
                                    { name: 'prod_crowds', componentClass: 'label', className: 'normalLable' },
                                    this.state.crowText
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.FormGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { componentClass: _reactBootstrap.ControlLabel, className: 'text-right', sm: 2 },
                                '\u4E3B\u8981\u6210\u5206\uFF1A'
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 10 },
                                _react2.default.createElement(
                                    _reactBootstrap.FormControl.Static,
                                    { name: 'prod_ingreds', componentClass: 'label', className: 'normalLable' },
                                    this.state.goodsMsg.prod_ingreds
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.FormGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { componentClass: _reactBootstrap.ControlLabel, className: 'text-right', sm: 2 },
                                '\u5907\u6CE8\uFF1A'
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 10 },
                                _react2.default.createElement(
                                    _reactBootstrap.FormControl.Static,
                                    { name: 'prod_memo', componentClass: 'label', className: 'normalLable' },
                                    this.state.goodsMsg.prod_memo
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.FormGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { componentClass: _reactBootstrap.ControlLabel, className: 'text-right', sm: 2 },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    '*'
                                ),
                                '\u5546\u54C1\u56FE\u7247\uFF1A'
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 10 },
                                _react2.default.createElement(
                                    _reactBootstrap.Clearfix,
                                    null,
                                    this.state.showImg.map(function (img) {
                                        return _react2.default.createElement('img', { src: img, key: img, className: 'uploadImg', alt: '\u5546\u54C1\u56FE\u7247' });
                                    })
                                )
                            )
                        ),
                        _react2.default.createElement(
                            _reactBootstrap.FormGroup,
                            null,
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { componentClass: _reactBootstrap.ControlLabel, className: 'text-right', sm: 2 },
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    '*'
                                ),
                                '\u5546\u54C1\u4ECB\u7ECD\uFF1A'
                            ),
                            _react2.default.createElement(
                                _reactBootstrap.Col,
                                { sm: 10 },
                                _react2.default.createElement(
                                    _reactBootstrap.FormControl.Static,
                                    { name: 'prod_intro', componentClass: 'div', className: 'normalLable' },
                                    this.state.goodsMsg.prod_intro
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(_goodsTagDialog2.default, { lgShow: this.state.lgShow, tagList: this.state.tagList,
                    dialogName: this.state.dialogName, getData: function getData(data) {
                        _this3.getDialogData(data);
                    }, dataKey: this.state.dataKey })
            );
        }
    }], [{
        key: 'getPackUnit',
        value: function getPackUnit(code) {
            var str_code = '';
            switch (code) {
                case 1:
                    str_code = '盒';
                    break;
                case 2:
                    str_code = '袋';
                    break;
                case 3:
                    str_code = '瓶';
                    break;
                case 4:
                    str_code = '灌';
                    break;
                case 5:
                    str_code = '听';
                    break;
            }
            return str_code;
        }
    }]);

    return GoodsDetail;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(GoodsDetail, { goodsId: common.Util.data('goodsData/goodsDetail') }), document.getElementById('__goodsData/goodsDetail__'));

/***/ }),

/***/ "./app/page/goodsData/goodsTagDialog.js":
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoodsDialog = function (_Component) {
    _inherits(GoodsDialog, _Component);

    function GoodsDialog(props) {
        _classCallCheck(this, GoodsDialog);

        var _this = _possibleConstructorReturn(this, (GoodsDialog.__proto__ || Object.getPrototypeOf(GoodsDialog)).call(this, props));

        _this.state = {
            lgShow: false,
            tagList: [],
            name: '商品标签',
            dataKey: 'prod_tags'
        };
        _this.getData = _this.getData.bind(_this);
        return _this;
    }

    //收到props，还未重新渲染的的状态(生命周期函数)


    _createClass(GoodsDialog, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({
                lgShow: nextProps.lgShow,
                name: nextProps.dialogName,
                tagList: nextProps.tagList,
                dataKey: nextProps.dataKey
            });
        }
    }, {
        key: 'getData',
        value: function getData() {
            var elements = [].concat(_toConsumableArray(this.form.elements)),
                datas = [],
                key = elements[0].name,
                data = {},
                text = [];
            for (var i = 0; i < elements.length; i++) {
                if (elements[i].type === 'checkbox' && elements[i].checked) {
                    datas.push(elements[i].value);
                    text.push(elements[i].parentElement.textContent);
                }
            }
            data[key] = datas;
            data.text = text.join(',');
            this.props.getData(data);
            this.setState({ lgShow: false });
            /*let datas = elements.map(element => {
                if(element.type === 'checkbox' && element.checked){
                    return element.value
                }
            });*/
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var lgClose = function lgClose() {
                _this2.setState({ lgShow: false });
            };
            return _react2.default.createElement(
                _reactBootstrap.Modal,
                { show: this.state.lgShow, onHide: lgClose, bsSize: 'large', 'aria-labelledby': 'contained-modal-title-lg' },
                _react2.default.createElement(
                    _reactBootstrap.Modal.Header,
                    { closeButton: true },
                    this.state.name
                ),
                _react2.default.createElement(
                    _reactBootstrap.Modal.Body,
                    null,
                    _react2.default.createElement(
                        'form',
                        { className: 'p20', ref: function ref(_ref) {
                                return _this2.form = _ref;
                            } },
                        this.state.tagList.map(function (tag) {
                            return _react2.default.createElement(
                                _reactBootstrap.Checkbox,
                                { key: tag.crowd_id || tag.tag_id, name: _this2.state.dataKey, inline: true,
                                    defaultValue: tag.crowd_id || tag.tag_id },
                                tag.crowd_text || tag.tag_text
                            );
                        })
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Modal.Footer,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { onClick: lgClose },
                        '\u53D6\u6D88'
                    ),
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { onClick: function onClick() {
                                _this2.getData();
                            }, bsStyle: 'primary' },
                        '\u786E\u5B9A'
                    )
                )
            );
        }
    }]);

    return GoodsDialog;
}(_react.Component);

GoodsDialog.propTypes = {
    lgShow: _propTypes2.default.bool.isRequired,
    tagList: _propTypes2.default.array.isRequired
};
exports.default = GoodsDialog;

/***/ }),

/***/ "./app/page/goodsData/newGoods.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/page/goodsData/newGoods.css");
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
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/lib/index.js!./newGoods.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/lib/index.js!./newGoods.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/page/goodsData/newGoods.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".newGoodsData{width:800px;padding:40px 0}.newGoodsData .col-sm-1,.newGoodsData .col-sm-2,.newGoodsData .col-sm-3,.newGoodsData .col-sm-4,.newGoodsData .col-sm-5,.newGoodsData .col-sm-6,.newGoodsData .col-sm-7,.newGoodsData .col-sm-8,.newGoodsData .col-sm-9,.newGoodsData .col-sm-10,.newGoodsData .col-sm-11,.newGoodsData .col-sm-12,.newGoodsData .ke-statusbar{position:static}.p20{padding:20px}.btn-main{margin:0 10px}.uploadImg{vertical-align:middle;text-align:center;width:40px;height:40px;border:1px solid #e5e5e5;font-size:18px;margin:5px;border-radius:3px;cursor:pointer}.tips,.uploadImg{display:inline-block}.tips{font-size:12px;color:gray;line-height:1.4}.control-label span{color:#ff0505}.icon.icon-add{width:25px;padding:0;position:absolute;right:25px;top:5px}.form-control-static{min-height:0}.form-group{position:relative}.normalLable{font-weight:400}", ""]);

// exports


/***/ })

},["./app/page/goodsData/goodsDetail.js"]);