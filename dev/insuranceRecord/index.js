webpackJsonp([15],{

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

        // this.state = props;
        var _this = _possibleConstructorReturn(this, (PageNation.__proto__ || Object.getPrototypeOf(PageNation)).call(this, props));

        _this.state = _extends({}, props, {
            pageCodes: 0
        });
        return _this;
    }

    _createClass(PageNation, [{
        key: 'getPageNumber',
        value: function getPageNumber(ev) {
            var pageCodes = parseInt(ev.target.value);
            this.setState({
                pageCodes: pageCodes
            });
        }
    }, {
        key: 'goPage',
        value: function goPage(ev) {
            ev.preventDefault();
            var p = this.state.pageCodes ? this.state.pageCodes : this.state.currentPage;
            this.props.getPage({
                pageCode: p,
                currentPage: p
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
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"modules\":false}!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\"}!./app/component/pageNation/pagenation.css");
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
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/lib/index.js??postcss!./pagenation.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/lib/index.js??postcss!./pagenation.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

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
  },

  //1.1.32	(Web)商品筛选人群列表
  shopCrowd: {
    url: '/hca/web/admin/shop/prod/crowd/list',
    method: 'POST'
  },

  //1.1.31	(Web)商品筛选人群新增
  newShopCrowd: {
    url: '/hca/web/admin/shop/prod/crowd/create',
    method: 'POST'
  },

  //1.1.33	(Web)商品筛选人群删除
  delShopCrowd: {
    url: '/hca/web/admin/shop/prod/crowd/delete',
    method: 'POST'
  },

  //1.1.34	(Web)商品筛选人群修改
  updateShopCrowd: {
    url: '/hca/web/admin/shop/prod/crowd/update',
    method: 'POST'
  },

  //1.3.1	(Web)理赔列表
  adminOpinsReimList: {
    url: '/hca/web/admin/opins/reim/list',
    method: 'POST',
    data: commonData
  },

  //1.3.1	(Web)理赔列表
  reimDetail: {
    url: '/hca/web/admin/opins/reim',
    method: 'POST',
    data: commonData
  },
  //理赔列表导出
  reimExport: {
    url: '/hca/web/admin/opins/reim/export',
    method: 'POST',
    data: commonData,
    responseType: 'blob'
  },

  // 1.1.1(Web)保单导入
  policyImport: {
    url: '/hca/web/admin/opins/policy/import/<uid>/<authstr>',
    method: 'PUT'
  },

  // 1.1.2(Web)保单列表
  getPolicyList: {
    url: '/hca/web/admin/opins/policy/list',
    method: 'POST',
    data: commonData
  },

  // 1.1.3(Web)保单详情
  getPolicyDetails: {
    url: '/hca/web/admin/opins/policy',
    method: 'POST',
    data: commonData
  },

  // 1.1.4(Web)保单删除
  policyDelete: {
    url: '/hca/web/admin/opins/policy/delete',
    method: 'POST',
    data: commonData
  },

  // 1.1.6(Web)保单导出
  policyExport: {
    url: '/hca/web/admin/opins/policy/export',
    method: 'POST',
    data: commonData
  },
  //理赔规则
  reimSetting: {
    url: '/hca/web/admin/opins/reim/setting',
    method: 'POST',
    data: commonData
  },
  //理赔规则更新设置
  reimSettingUpdate: {
    url: '/hca/web/admin/opins/reim/setting/update',
    method: 'POST',
    data: commonData
  },

  //1.3.2	理赔计算接口
  claimCalculation: {
    url: '/hca/p3/his/opins/reim/calc',
    method: 'POST'
  },

  //1.3.4	退费计算接口
  claimCalculationRefund: {
    url: '/hca/p3/his/opins/reim/refund',
    method: 'POST'
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
  if (!config.data.auth_str) {
    config.data = data;
  }
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
    return (0, _axios2.default)('./app/rss/' + key + '.json');
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
exports.insuredCredTypeMap = exports.ownerInsuredRelMap = exports.policyTypeMap = exports.sexTypeMap = exports.fetchTemplate = exports.exportTemplate = exports.payTypeMap = exports.Util = exports.common = undefined;

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
* @param isHMS 是否需要时分秒，默认：true
*/
function formatDateTime(timeStamp) {
  var isHMS = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

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
    return isHMS ? y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second : y + '-' + m + '-' + d;
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

function amount_format(amount, showZero) {
  if (showZero && amount == 0) {
    return '0.00';
  }
  if (amount && typeof amount === 'number') {
    return amount.toFixed(2);
  }
  return '';
  // return (amount || 0).toFixed(2);
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
  num = num || 0;
  num = parseFloat((num + "").replace(/[^\d\.-]/g, "")).toFixed(len) + "";
  var l = num.split(".")[0].split("").reverse(),
      r = num.split(".")[1];
  var t = "";
  for (var i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 === 0 && i + 1 !== l.length ? "," : "");
  }
  return t.split("").reverse().join("") + "." + r;
}

var sexTypeMap = exports.sexTypeMap = {
  1: '男',
  2: '女'
};
var policyTypeMap = exports.policyTypeMap = {
  1: '首保',
  2: '续保'
};

var ownerInsuredRelMap = exports.ownerInsuredRelMap = {
  1: '本人',
  2: '夫妻',
  3: '父母',
  4: '子女',
  5: '雇佣',
  6: '其他具有抚养或赡养关系的家庭成员或近亲属'
};

var insuredCredTypeMap = exports.insuredCredTypeMap = {
  1: '居民身份证',
  2: '居民户口薄',
  3: '驾驶证',
  4: '军官证',
  5: '士兵证',
  6: '军官离退休证',
  7: '异常身份证',
  8: '港澳台胞证',
  9: '回乡证',
  10: '组织机构代码证',
  11: '税务登记证',
  12: '营业执照',
  13: '护照',
  14: '外国护照',
  15: '旅行证',
  16: '居留证件',
  17: '出生证明',
  18: '其他证件',
  19: '外国人永久居留证'
};
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

/***/ "./app/page/insuranceRecord/Form.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

var _http = __webpack_require__("./app/lib/Api/http.js");

var _http2 = _interopRequireDefault(_http);

var _ApiMap = __webpack_require__("./app/lib/Api/ApiMap.js");

var _ApiMap2 = _interopRequireDefault(_ApiMap);

var _Util = __webpack_require__("./app/lib/Util.js");

__webpack_require__("./app/page/insuranceRecord/style.css");

__webpack_require__("./static/assets/jquery.mloading-master/src/jquery.mloading.js");

__webpack_require__("./static/assets/jquery.mloading-master/src/jquery.mloading.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import {Upload} from 'rc-upload';
// import FileUpload from 'react-fileupload';


var IRForm = function (_Component) {
    _inherits(IRForm, _Component);

    function IRForm(props) {
        _classCallCheck(this, IRForm);

        var _this = _possibleConstructorReturn(this, (IRForm.__proto__ || Object.getPrototypeOf(IRForm)).call(this, props));

        _this.state = {};

        _this.handleClickSearch = _this.handleClickSearch.bind(_this);
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.handleClickExport = _this.handleClickExport.bind(_this);
        _this.handleClickImport = _this.handleClickImport.bind(_this);
        return _this;
    }

    // 点击查询


    _createClass(IRForm, [{
        key: 'handleClickSearch',
        value: function handleClickSearch() {
            this.props.clickSearchReset();
            this.props.getPolicyList();
        }

        // 导入投保记录

    }, {
        key: 'handleClickImport',
        value: function handleClickImport(e) {
            var _$$ajax;

            var self = this;
            var formData = new FormData();
            var file = e.target.files[0];
            formData.append("file", file);
            e.target.value = '';
            $(document.body).mLoading({ mask: false });
            $.ajax((_$$ajax = {
                url: '/hca/web/admin/opins/policy/import/' + _ApiMap2.default.commonData.user_id + '/' + encodeURIComponent((0, _Util.getAuthStr)()),
                type: "POST",
                contentType: 'multipart/form-data',
                data: formData,
                async: true,
                cache: false,
                processData: false
            }, _defineProperty(_$$ajax, 'contentType', false), _defineProperty(_$$ajax, 'success', function success(meg) {
                console.log(typeof meg === 'undefined' ? 'undefined' : _typeof(meg));
                var json = JSON.parse(meg);
                $(document.body).mLoading("hide");
                if (json.ret_code === 1) {
                    common.alert('导入成功');
                    self.props.getPolicyList();
                } else {
                    common.alert(json.ret_msg);
                }
            }), _defineProperty(_$$ajax, 'error', function error(err) {
                $(document.body).mLoading("hide");
                common.alert(err);
            }), _$$ajax));
        }

        // 导出投保记录

    }, {
        key: 'handleClickExport',
        value: function handleClickExport() {
            var _props = this.props,
                policyNo = _props.policyNo,
                insuredName = _props.insuredName,
                insuredCredNo = _props.insuredCredNo,
                ownerName = _props.ownerName;

            var parms = _extends({}, _ApiMap2.default.commonData, {
                policy_no: policyNo,
                insured_name: insuredName,
                insured_cred_no: insuredCredNo,
                owner_name: ownerName
            });

            if (!policyNo) delete parms.policy_no;
            if (!insuredName) delete parms.insured_name;
            if (!insuredCredNo) delete parms.insured_cred_no;
            if (!ownerName) delete parms.owner_name;

            (0, _http2.default)({
                url: _ApiMap2.default.policyExport.url,
                method: _ApiMap2.default.policyExport.method,
                data: parms,
                responseType: 'blob'
            }).then(function (res) {
                (0, _Util.downloadExcel)(res.data, '投保记录');
            }, function (error) {
                common.alert(error);
            });
        }
    }, {
        key: 'handleInputChange',
        value: function handleInputChange(e) {
            var el = e.target,
                name = el.name,
                value = (0, _Util.trim)(el.value);
            this.props.handleChangeInputValue(name, value);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                policyNo = _props2.policyNo,
                insuredName = _props2.insuredName,
                insuredCredNo = _props2.insuredCredNo,
                ownerName = _props2.ownerName;

            return _react2.default.createElement(
                'div',
                { className: 'ir-form-wrap' },
                _react2.default.createElement(
                    _reactBootstrap.Form,
                    { inline: true },
                    _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { controlId: 'policy_no' },
                        _react2.default.createElement(
                            _reactBootstrap.ControlLabel,
                            { className: 'text-right' },
                            '\u4FDD\u5355\u7F16\u53F7'
                        ),
                        '\xA0\xA0\xA0\xA0',
                        _react2.default.createElement(_reactBootstrap.FormControl, {
                            type: 'text',
                            name: 'policyNo',
                            onChange: this.handleInputChange,
                            value: policyNo,
                            placeholder: '\u4FDD\u5355\u7F16\u53F7' })
                    ),
                    '\xA0\xA0\xA0\xA0\xA0\xA0',
                    _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { controlId: 'insured_name' },
                        _react2.default.createElement(
                            _reactBootstrap.ControlLabel,
                            { className: 'text-right' },
                            '\u88AB\u4FDD\u4EBA\u59D3\u540D'
                        ),
                        ' ',
                        _react2.default.createElement(_reactBootstrap.FormControl, {
                            type: 'text',
                            name: 'insuredName',
                            onChange: this.handleInputChange,
                            value: insuredName,
                            placeholder: '\u88AB\u4FDD\u4EBA\u59D3\u540D' })
                    ),
                    '\xA0\xA0\xA0\xA0\xA0\xA0',
                    _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.ControlLabel,
                            { className: 'text-right' },
                            '\u88AB\u4FDD\u4EBA\u8BC1\u4EF6\u53F7\u7801'
                        ),
                        ' ',
                        _react2.default.createElement(_reactBootstrap.FormControl, {
                            type: 'text',
                            name: 'insuredCredNo',
                            onChange: this.handleInputChange,
                            value: insuredCredNo,
                            placeholder: '\u88AB\u4FDD\u4EBA\u8BC1\u4EF6\u53F7\u7801' })
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Form,
                    { inline: true, style: { marginTop: '15px' } },
                    _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        null,
                        _react2.default.createElement(
                            _reactBootstrap.ControlLabel,
                            { className: 'text-right' },
                            '\u6295\u4FDD\u4EBA\u59D3\u540D'
                        ),
                        ' ',
                        _react2.default.createElement(_reactBootstrap.FormControl, {
                            type: 'text',
                            name: 'ownerName',
                            onChange: this.handleInputChange,
                            value: ownerName,
                            placeholder: '\u6295\u4FDD\u4EBA\u59D3\u540D' })
                    ),
                    '\xA0\xA0\xA0\xA0\xA0\xA0',
                    _react2.default.createElement(
                        _reactBootstrap.FormGroup,
                        { controlId: 'station_in_sale' },
                        _react2.default.createElement(
                            _reactBootstrap.Button,
                            { bsClass: 'btn btn-main', type: 'button', onClick: this.handleClickSearch },
                            '\u67E5\u8BE2'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'clearfix' },
                    _react2.default.createElement(
                        'div',
                        { className: 'pull-right' },
                        _react2.default.createElement(
                            'a',
                            { href: 'javascript:;', className: 'upload-btn btn btn-main' },
                            _react2.default.createElement(
                                'span',
                                null,
                                '\u5BFC\u5165'
                            ),
                            _react2.default.createElement('input', {
                                type: 'file',
                                name: 'file',
                                id: 'file',
                                accept: 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                                onChange: this.handleClickImport })
                        ),
                        _react2.default.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-main', id: 'btn-export', onClick: this.handleClickExport },
                            '\u5BFC\u51FA'
                        )
                    )
                )
            );
        }
    }]);

    return IRForm;
}(_react.Component);

exports.default = IRForm;

/***/ }),

/***/ "./app/page/insuranceRecord/Modal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ComfirmDeleteModal = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _http = __webpack_require__("./app/lib/Api/http.js");

var _http2 = _interopRequireDefault(_http);

var _ApiMap = __webpack_require__("./app/lib/Api/ApiMap.js");

var _ApiMap2 = _interopRequireDefault(_ApiMap);

var _reactBootstrap = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 确认删除Modal
var ComfirmDeleteModal = exports.ComfirmDeleteModal = function (_Component) {
    _inherits(ComfirmDeleteModal, _Component);

    function ComfirmDeleteModal(props) {
        _classCallCheck(this, ComfirmDeleteModal);

        var _this = _possibleConstructorReturn(this, (ComfirmDeleteModal.__proto__ || Object.getPrototypeOf(ComfirmDeleteModal)).call(this, props));

        _this.state = {};
        _this.comfirmDelete = _this.comfirmDelete.bind(_this);
        return _this;
    }

    _createClass(ComfirmDeleteModal, [{
        key: 'comfirmDelete',
        value: function comfirmDelete() {
            var _this2 = this;

            var parms = _extends({}, _ApiMap2.default.commonData, {
                policy_id: common.Util.data('insuranceRecord').policyId // 辖区外住户detail id
            });

            (0, _http2.default)({
                url: _ApiMap2.default.policyDelete.url,
                method: _ApiMap2.default.policyDelete.method,
                data: parms
            }).then(function (res) {
                if (res.data.ret_code === 1) {
                    _this2.props.hide();
                    _this2.props.getPolicyList();
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
            var _props = this.props,
                isShow = _props.isShow,
                hide = _props.hide;

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

    return ComfirmDeleteModal;
}(_react.Component);

/***/ }),

/***/ "./app/page/insuranceRecord/Table.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _Table = __webpack_require__("./app/component/table/Table.js");

var _Table2 = _interopRequireDefault(_Table);

var _pageNation = __webpack_require__("./app/component/pageNation/pageNation.js");

var _pageNation2 = _interopRequireDefault(_pageNation);

var _http = __webpack_require__("./app/lib/Api/http.js");

var _http2 = _interopRequireDefault(_http);

var _ApiMap = __webpack_require__("./app/lib/Api/ApiMap.js");

var _ApiMap2 = _interopRequireDefault(_ApiMap);

var _Util = __webpack_require__("./app/lib/Util.js");

var _Modal = __webpack_require__("./app/page/insuranceRecord/Modal.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IRTable = function (_Component) {
    _inherits(IRTable, _Component);

    function IRTable(props) {
        _classCallCheck(this, IRTable);

        var _this = _possibleConstructorReturn(this, (IRTable.__proto__ || Object.getPrototypeOf(IRTable)).call(this, props));

        _this.state = {
            showComfirmDeleteModal: false
        };

        _this.columns = [{
            className: 'my-col-class',
            title: '保单编号',
            dataIndex: 'policy_no',
            key: 'a'
        }, {
            className: 'my-col-class',
            title: '被保人姓名',
            dataIndex: 'insured_name',
            key: 'b'
        }, {
            className: 'my-col-class',
            title: '被保人联系电话',
            dataIndex: 'insured_phone',
            key: 'c'
        }, {
            className: 'my-col-class',
            title: '被保人证件类型',
            dataIndex: 'insured_cred_type',
            key: 'd'
        }, {
            className: 'my-col-class',
            title: '被保人证件号码',
            dataIndex: 'insured_cred_no',
            key: 'e'
        }, {
            className: 'my-col-class',
            title: '被保人出生年月',
            dataIndex: 'insured_birth',
            key: 'f'
        }, {
            className: 'my-col-class',
            title: '被保人性别',
            dataIndex: 'insured_sex',
            key: 'g'
        }, {
            className: 'my-col-class',
            title: '投保人姓名',
            dataIndex: 'owner_name',
            key: 'h'
        }, {
            className: 'my-col-class',
            title: '投保人联系电话',
            dataIndex: 'owner_phone',
            key: 'i'
        }, {
            className: 'my-col-class',
            title: '投保人与被保人关系',
            dataIndex: 'owner_insured_rel',
            key: 'j'
        }, {
            className: 'my-col-class',
            title: '操作',
            dataIndex: '',
            key: 'k',
            render: function render(text, record) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'a',
                        { onClick: function onClick(e) {
                                return _this.createTab(record.policy_id, e);
                            }, href: 'javascript:;' },
                        '\u8BE6\u60C5'
                    ),
                    _react2.default.createElement(
                        'a',
                        { onClick: function onClick(e) {
                                return _this.handleComfirmDeleteModal(record.policy_id, e);
                            }, href: 'javascript:;' },
                        '\u5220\u9664'
                    )
                );
            }
        }];

        _this.handleComfirmDeleteModal = _this.handleComfirmDeleteModal.bind(_this);
        _this.closeComfirmDeleteModal = _this.closeComfirmDeleteModal.bind(_this);
        return _this;
    }

    _createClass(IRTable, [{
        key: 'handleComfirmDeleteModal',
        value: function handleComfirmDeleteModal(id) {
            this.setState({
                showComfirmDeleteModal: true
            });

            common.Util.data('insuranceRecord', {
                policyId: id
            });
        }
    }, {
        key: 'closeComfirmDeleteModal',
        value: function closeComfirmDeleteModal() {
            this.setState({
                showComfirmDeleteModal: false
            });
        }
    }, {
        key: 'createTab',
        value: function createTab(id, e) {
            console.log(id);

            common.createTab({
                uri: 'app/dist/insuranceRecord/Details.html',
                data: {
                    name: '投保详情'
                },
                key: 'insuranceRecord-Details'
            });

            common.Util.data('insuranceRecord', {
                policyId: id
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var columns = this.columns;
            var showComfirmDeleteModal = this.state.showComfirmDeleteModal;
            var _props = this.props,
                total = _props.total,
                pageNum = _props.pageNum,
                currentPage = _props.currentPage,
                tableData = _props.tableData,
                handleTogglePage = _props.handleTogglePage,
                getPolicyList = _props.getPolicyList;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Table2.default, {
                    rowClassName: 'my-row-class',
                    columns: columns,
                    data: tableData
                }),
                tableData.length !== 0 ? _react2.default.createElement(_pageNation2.default, {
                    pageCount: total,
                    pageNumber: pageNum,
                    currentPage: currentPage,
                    getPage: handleTogglePage
                }) : null,
                _react2.default.createElement(_Modal.ComfirmDeleteModal, {
                    getPolicyList: getPolicyList,
                    isShow: showComfirmDeleteModal,
                    hide: this.closeComfirmDeleteModal })
            );
        }
    }]);

    return IRTable;
}(_react.Component);

exports.default = IRTable;

/***/ }),

/***/ "./app/page/insuranceRecord/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Table = __webpack_require__("./app/page/insuranceRecord/Table.js");

var _Table2 = _interopRequireDefault(_Table);

var _Form = __webpack_require__("./app/page/insuranceRecord/Form.js");

var _Form2 = _interopRequireDefault(_Form);

var _http = __webpack_require__("./app/lib/Api/http.js");

var _http2 = _interopRequireDefault(_http);

var _ApiMap = __webpack_require__("./app/lib/Api/ApiMap.js");

var _ApiMap2 = _interopRequireDefault(_ApiMap);

var _Util = __webpack_require__("./app/lib/Util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InsuranceRecord = function (_Component) {
    _inherits(InsuranceRecord, _Component);

    function InsuranceRecord(props) {
        _classCallCheck(this, InsuranceRecord);

        var _this = _possibleConstructorReturn(this, (InsuranceRecord.__proto__ || Object.getPrototypeOf(InsuranceRecord)).call(this, props));

        _this.state = {
            total: 0,
            pageNum: 0,
            currentPage: 1,
            beginNum: 0,
            pageCount: 10,
            policyNo: '',
            insuredName: '',
            insuredCredNo: '',
            ownerName: '',
            tableData: []
        };

        _this.getPolicyList = _this.getPolicyList.bind(_this);
        _this.handleTogglePage = _this.handleTogglePage.bind(_this);
        _this.clickSearchReset = _this.clickSearchReset.bind(_this);
        _this.handleChangeInputValue = _this.handleChangeInputValue.bind(_this);
        return _this;
    }

    _createClass(InsuranceRecord, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.getPolicyList();
        }
    }, {
        key: 'getPolicyList',
        value: function getPolicyList() {
            var _this2 = this;

            var _state = this.state,
                pageCount = _state.pageCount,
                currentPage = _state.currentPage,
                beginNum = _state.beginNum,
                policyNo = _state.policyNo,
                insuredName = _state.insuredName,
                insuredCredNo = _state.insuredCredNo,
                ownerName = _state.ownerName;

            var parms = _extends({}, _ApiMap2.default.commonData, {
                policy_no: policyNo,
                insured_name: insuredName,
                insured_cred_no: insuredCredNo,
                owner_name: ownerName,
                begin: beginNum,
                count: pageCount
            });

            if (!policyNo) delete parms.policy_no;
            if (!insuredName) delete parms.insured_name;
            if (!insuredCredNo) delete parms.insured_cred_no;
            if (!ownerName) delete parms.owner_name;

            (0, _http2.default)({
                url: _ApiMap2.default.getPolicyList.url,
                method: _ApiMap2.default.getPolicyList.method,
                data: parms
            }).then(function (res) {
                if (res.data.ret_code === 1) {
                    var resData = res.data.ret_data;
                    console.log(resData);
                    _this2.setState({
                        pageNum: Math.ceil(resData.total / pageCount),
                        total: resData.total,
                        tableData: resData.policy_list.map(function (item, index) {
                            item.key = (currentPage - 1) * pageCount + index + 1;
                            item.insured_cred_type = _Util.insuredCredTypeMap[item.insured_cred_type];
                            item.insured_birth = (0, _Util.formatDateTime)(item.insured_birth, false);
                            item.insured_sex = _Util.sexTypeMap[item.insured_sex];
                            item.owner_insured_rel = _Util.ownerInsuredRelMap[item.owner_insured_rel];
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
    }, {
        key: 'handleTogglePage',
        value: function handleTogglePage(ev) {
            var _this3 = this;

            console.log(this.state.currentPage);
            console.log(ev);
            this.setState({
                currentPage: ev.currentPage
            }, function () {
                _this3.setState({
                    beginNum: (_this3.state.currentPage - 1) * _this3.state.pageCount
                }, function () {
                    _this3.getPolicyList();
                });
            });
        }
    }, {
        key: 'clickSearchReset',
        value: function clickSearchReset() {
            this.setState({
                currentPage: 1,
                beginNum: 0
            });
        }
    }, {
        key: 'handleChangeInputValue',
        value: function handleChangeInputValue(key, value) {
            var _this4 = this;

            this.setState(_defineProperty({}, key, value), function () {
                console.log(_this4.state);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state2 = this.state,
                total = _state2.total,
                pageNum = _state2.pageNum,
                currentPage = _state2.currentPage,
                tableData = _state2.tableData,
                policyNo = _state2.policyNo,
                insuredName = _state2.insuredName,
                insuredCredNo = _state2.insuredCredNo,
                ownerName = _state2.ownerName;

            return _react2.default.createElement(
                'div',
                { className: 'wrap hospital' },
                _react2.default.createElement(
                    'div',
                    { className: 'tb-head' },
                    '\u6295\u4FDD\u8BB0\u5F55'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'tb-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'tb-wrap' },
                        _react2.default.createElement(_Form2.default, {
                            policyNo: policyNo,
                            insuredName: insuredName,
                            insuredCredNo: insuredCredNo,
                            ownerName: ownerName,
                            clickSearchReset: this.clickSearchReset,
                            getPolicyList: this.getPolicyList,
                            handleChangeInputValue: this.handleChangeInputValue }),
                        _react2.default.createElement(_Table2.default, {
                            total: total,
                            pageNum: pageNum,
                            currentPage: currentPage,
                            tableData: tableData,
                            getPolicyList: this.getPolicyList,
                            handleTogglePage: this.handleTogglePage })
                    )
                )
            );
        }
    }]);

    return InsuranceRecord;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(InsuranceRecord, null), document.getElementById('__insuranceRecord/index__'));

/***/ }),

/***/ "./app/page/insuranceRecord/style.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"modules\":false}!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null]}!./app/page/insuranceRecord/style.css");
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
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/lib/index.js??postcss!./style.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--2-1!../../../node_modules/postcss-loader/lib/index.js??postcss!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/axios/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference dll_11"))(1453);

/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"modules\":false}!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null]}!./app/page/insuranceRecord/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".ir-form-wrap {\r\n    padding: 20px 0;\r\n}\r\n.ir-title {\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    padding-bottom: 10px;\r\n    border-bottom: 1px solid #eee;\r\n}\r\n.upload-btn {\r\n    position: relative;\r\n    margin-right: 15px;\r\n    overflow: hidden;\r\n}\r\n.upload-btn span{\r\n    cursor: pointer;\r\n}\r\n.upload-btn #file {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    opacity: 0;\r\n    filter: alpha(opacity=0);\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"modules\":false}!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\"}!./app/component/pageNation/pagenation.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".pd20{\r\n    padding:20px 0;\r\n}\r\n.pageNation{\r\n    margin:0;padding:0;\r\n    font-size:12px;\r\n    float:right;\r\n}\r\n.pageNation input[type=text].pageInput{\r\n    width:40px !important;\r\n    padding: 4px;\r\n    text-align: center;\r\n    margin:0;\r\n}\r\n.pageNation a,.pageNation input{\r\n    display:inline-block;\r\n    padding:4px 10px;\r\n    text-align:center;\r\n    border:1px solid #333;\r\n    color:#333;\r\n    border-radius:3px;\r\n    margin-right:5px;\r\n    text-decoration: none;\r\n    vertical-align: middle;\r\n}\r\n.pageNation span{\r\n    display:inline-block;\r\n    padding:4px;\r\n}\r\n.pageNation a:last-child{\r\n    margin-right:0;\r\n}\r\n.pageNation a.active{\r\n    border:1px solid #999;\r\n    color:#999;\r\n    cursor:default;\r\n}\r\n.pageNation a.btn-main{\r\n    color:#fff;\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?{\"modules\":false}!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\"}!./static/assets/jquery.mloading-master/src/jquery.mloading.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "/* Author：mingyuhisoft@163.com\r\n * Github:https://github.com/imingyu/jquery.mloading\r\n * Npm:npm install jquery.mloading.js\r\n * Date：2016-7-4\r\n */\r\n.mloading-container {\r\n  position: relative;\r\n  min-height: 70px;\r\n  -webkit-transition: height 0.6s ease-in-out;\r\n  -o-transition: height 0.6s ease-in-out;\r\n  transition: height 0.6s ease-in-out;\r\n}\r\n.mloading {\r\n  position: absolute;\r\n  background: #E9E9E8;\r\n  font: normal 12px/22px \"Microsoft Yahei\", \"\\5FAE\\8F6F\\96C5\\9ED1\", \"\\5B8B\\4F53\";\r\n  display: none;\r\n  z-index: 1600;\r\n  background: rgba(233, 233, 232, 0);\r\n}\r\n.mloading.active {\r\n  display: block;\r\n}\r\n.mloading.mloading-mask {\r\n  background: rgba(233, 233, 232, 0.75);\r\n  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=75);\r\n}\r\n.mloading-full {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.mloading-container > .mloading {\r\n  top: 0px;\r\n  left: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.mloading-body {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n.mloading-bar {\r\n  width: 250px;\r\n  min-height: 22px;\r\n  text-align: center;\r\n  background: #fff;\r\n  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.27);\r\n          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.27);\r\n  border-radius: 7px;\r\n  padding: 20px 15px;\r\n  font-size: 14px;\r\n  color: #999;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  margin-left: -140px;\r\n  margin-top: -30px;\r\n  word-break: break-all;\r\n}\r\n@media (max-width: 300px) {\r\n  .mloading-bar {\r\n    width: 62px;\r\n    height: 56px;\r\n    margin-left: -30px !important;\r\n    margin-top: -30px !important;\r\n    padding: 0;\r\n    line-height: 56px;\r\n  }\r\n  .mloading-bar > .mloading-text {\r\n    display: none;\r\n  }\r\n}\r\n.mloading-bar-sm {\r\n  width: 62px;\r\n  height: 56px;\r\n  margin-left: -30px !important;\r\n  margin-top: -30px !important;\r\n  padding: 0;\r\n  line-height: 56px;\r\n}\r\n.mloading-bar-sm > .mloading-text {\r\n  display: none;\r\n}\r\n.mloading-icon {\r\n  width: 16px;\r\n  height: 16px;\r\n  vertical-align: middle;\r\n}\r\n.mloading-text {\r\n  margin-left: 10px;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference dll_11"))(1472);

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

/***/ "./node_modules/jquery/dist/jquery.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference dll_11"))(1452);

/***/ }),

/***/ "./node_modules/node-forge/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference dll_11"))(1341);

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference dll_11"))(19);

/***/ }),

/***/ "./node_modules/process/browser.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference dll_11"))(7);

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference dll_11"))(5);

/***/ }),

/***/ "./node_modules/react-bootstrap/es/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference dll_11"))(1355);

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference dll_11"))(13);

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__("dll-reference dll_11"))(1223);

/***/ }),

/***/ "./static/assets/jquery.mloading-master/src/jquery.mloading.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js?{\"modules\":false}!./node_modules/postcss-loader/lib/index.js?{\"ident\":\"postcss\"}!./static/assets/jquery.mloading-master/src/jquery.mloading.css");
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
		module.hot.accept("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/postcss-loader/lib/index.js??postcss!./jquery.mloading.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js??ref--2-1!../../../../node_modules/postcss-loader/lib/index.js??postcss!./jquery.mloading.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./static/assets/jquery.mloading-master/src/jquery.mloading.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* Author：mingyuhisoft@163.com
 * Github:https://github.com/imingyu/jquery.mloading
 * Npm:npm install jquery.mloading.js
 * Date：2016-7-4
 */

;(function (root, factory) {
    'use strict';

    if (typeof module === 'object' && typeof module.exports === 'object') {
        factory(__webpack_require__("./node_modules/jquery/dist/jquery.js"),root);
    } if(true){
        if(__webpack_require__("./node_modules/webpack/buildin/amd-define.js").cmd){
            !(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module){
                var $ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
                factory($,root);
            }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }else{
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = function($){
                factory($,root);
            }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }
    }else {
        factory(root.jQuery,root);
    }
} (typeof window !=="undefined" ? window : this, function ($, root, undefined) {
    'use strict';
    if(!$){
        $ = root.jQuery || null;
    }
    if(!$){
        throw new TypeError("必须引入jquery库方可正常使用！");
    }

    var arraySlice = Array.prototype.slice,
        comparison=function (obj1,obj2) {
            var result=true;
            for(var pro in obj1){
                if(obj1[pro] !== obj2[obj1]){
                    result=true;
                    break;
                }
            }
            return result;
        }

    function MLoading(dom,options) {
        options=options||{};
        this.dom=dom;
        this.options=$.extend(true,{},MLoading.defaultOptions,options);
        this.curtain=null;
        this.render().show();
    }
    MLoading.prototype={
        constructor:MLoading,
        initElement:function () {
            var dom=this.dom,
                ops=this.options;
            var curtainElement=dom.children(".mloading"),
                bodyElement = curtainElement.children('.mloading-body'),
                barElement = bodyElement.children('.mloading-bar'),
                iconElement = barElement.children('.mloading-icon'),
                textElement = barElement.find(".mloading-text");
            if (curtainElement.length == 0) {
                curtainElement = $('<div class="mloading"></div>');
                dom.append(curtainElement);
            }
            if (bodyElement.length == 0) {
                bodyElement = $('<div class="mloading-body"></div>');
                curtainElement.append(bodyElement);
            }
            if (barElement.length == 0) {
                barElement = $('<div class="mloading-bar"></div>');
                bodyElement.append(barElement);
            }
            if (iconElement.length == 0) {
                var _iconElement=document.createElement(ops.iconTag);
                iconElement = $(_iconElement);
                iconElement.addClass("mloading-icon");
                barElement.append(iconElement);
            }
            if (textElement.length == 0) {
                textElement = $('<span class="mloading-text"></span>');
                barElement.append(textElement);
            }
            
            this.curtainElement=curtainElement;
            this.bodyElement = bodyElement;
            this.barElement = barElement;
            this.iconElement = iconElement;
            this.textElement = textElement;
            return this;
        },
        render:function () {
            var dom=this.dom,
                ops=this.options;
            this.initElement();
            if(dom.is("html") || dom.is("body")){
                this.curtainElement.addClass("mloading-full");
            }else{
                this.curtainElement.removeClass("mloading-full");

                if(!dom.hasClass("mloading-container")){
                    dom.addClass("mloading-container");
                }
            }
            if(ops.mask){
                this.curtainElement.addClass("mloading-mask");
            }else{
                this.curtainElement.removeClass("mloading-mask");
            }
            if(ops.content!="" && typeof ops.content!="undefined"){
                if(ops.html){
                    this.bodyElement.html(ops.content);
                }else{
                    this.bodyElement.text(ops.content);
                }
            }else{
                this.iconElement.attr("src",ops.icon);
                if(ops.html){
                    this.textElement.html(ops.text);
                }else{
                    this.textElement.text(ops.text);
                }
            }

            return this;
        },
        setOptions:function (options) {
            options=options||{};
            var oldOptions = this.options;
            this.options = $.extend(true,{},this.options,options);
            if(!comparison(oldOptions,this.options)) this.render();
        },
        show:function () {
            var dom=this.dom,
                ops=this.options,
                barElement=this.barElement;
            this.curtainElement.addClass("active");
            barElement.css({
                "marginTop":"-"+barElement.outerHeight()/2+"px",
                "marginLeft":"-"+barElement.outerWidth()/2+"px"
            });

            return this;
        },
        hide:function () {
            var dom=this.dom,
                ops=this.options;
            this.curtainElement.removeClass("active");
            if(!dom.is("html") && !dom.is("body")){
                dom.removeClass("mloading-container");
            }
            return this;
        },
        destroy:function () {
            var dom=this.dom,
                ops=this.options;
            this.curtainElement.remove();
            if(!dom.is("html") && !dom.is("body")){
                dom.removeClass("mloading-container");
            }
            dom.removeData(MLoading.dataKey);
            return this;
        }
    };
    MLoading.dataKey="MLoading";
    MLoading.defaultOptions = {
        text:"加载中...",
        iconTag:"img",
        icon:"data:image/gif;base64,R0lGODlhDwAPAKUAAEQ+PKSmpHx6fNTW1FxaXOzu7ExOTIyOjGRmZMTCxPz6/ERGROTi5Pz29JyanGxubMzKzIyKjGReXPT29FxWVGxmZExGROzq7ERCRLy6vISChNze3FxeXPTy9FROTJSSlMTGxPz+/OTm5JyenNTOzGxqbExKTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBgAhACwAAAAADwAPAAAGd8CQcEgsChuTZMNIDFgsC1Nn9GEwDwDAoqMBWEDFiweA2YoiZevwA9BkDAUhW0MkADYhiEJYwJj2QhYGTBwAE0MUGGp5IR1+RBEAEUMVDg4AAkQMJhgfFyEIWRgDRSALABKgWQ+HRQwaCCEVC7R0TEITHbmtt0xBACH5BAkGACYALAAAAAAPAA8AhUQ+PKSmpHRydNTW1FxWVOzu7MTCxIyKjExKTOTi5LSytHx+fPz6/ERGROTe3GxqbNTS1JyWlFRSVKympNze3FxeXPT29MzKzFROTOzq7ISGhERCRHx6fNza3FxaXPTy9MTGxJSSlExOTOTm5LS2tISChPz+/ExGRJyenKyqrAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZ6QJNQeIkUhsjkp+EhMZLITKgBAGigQgiiCtiAKJdkBgNYgDYLhmDjQIbKwgfF9C4hPYC5KSMsbBBIJyJYFQAWQwQbI0J8Jh8nDUgHAAcmDA+LKAAcSAkIEhYTAAEoGxsdSSAKIyJcGyRYJiQbVRwDsVkPXrhDDCQBSUEAIfkECQYAEAAsAAAAAA8ADwCFRD48pKKkdHZ01NLUXFpc7OrsTE5MlJKU9Pb03N7cREZExMbEhIKEbGpsXFZUVFZU/P78tLa0fH583NrcZGJk9PL0VE5MnJ6c/Pb05ObkTEZEREJErKqsfHp81NbUXF5c7O7slJaU5OLkzMrMjIaEdG5sVFJU/Pr8TEpMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABndAiHA4DICISCIllBQWQgSNY6NJJAcoAMCw0XaQBQtAYj0ANgcE0SwZlgSe04hI2FiFAyEFRdQYmh8AakIOJhgQHhVCFQoaRAsVGSQWihAXAF9EHFkNEBUXGxsTSBxaGx9dGxFJGKgKAAoSEydNIwoFg01DF7oQQQAh+QQJBgAYACwAAAAADwAPAIVEPjykoqR0cnTU0tRUUlSMiozs6uxMSkx8fnzc3txcXlyUlpT09vRcWlxMRkS0trR8enzc2txcVlSUkpRUTkyMhoTk5uScnpz8/vxEQkR8dnTU1tRUVlSMjoz08vRMTkyEgoTk4uRkYmSclpT8+vy8urwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGc0CMcEgsGo9Gw6LhkHRCmICFODgAAJ8M4FDJTIUGCgCRwIQKV+9wMiaWtIAvRqOACiMKwucjJzFIJEN+gEQiHAQcJUMeBROCBFcLRBcAEESQAB0GGB4XGRkbghwCnxkiWhkPRRMMCSAfABkIoUhCDLW4Q0EAIfkECQYAGQAsAAAAAA8ADwCFRD48pKKkdHJ01NLU7OrsXFZUjIqMvLq8TEpM3N7c9Pb0lJaUxMbErK6sfH58bGpsVFJUTEZE3Nrc9PL0XF5clJKUxMLEVE5M5Obk/P78nJ6ctLa0hIaEREJE1NbU7O7sXFpcjI6MvL68TE5M5OLk/Pr8nJqczM7MtLK0hIKEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABnPAjHBILBqPRsICFCmESMcBAgAYdQAIi9HzSCUyJEOnAx0GBqUSsQJwYFAZyTiFGZZEgHGlJKACQBIZEwJXVR8iYwANE0MTAVMNGSISHAAhRSUYC2pCJFMhH4IaEAdGDGMdFFcdG0cJKSNYDoFIQgqctblBADs=",
        html:false,
        content:"",//设置content后，text和icon设置将无效
        mask:true//是否显示遮罩（半透明背景）
    };

    $.fn.mLoading=function (options) {
        var ops={},
            funName="",
            funArgs=[];
        if(typeof options==="object"){
            ops = options;
        }else if(typeof options ==="string"){
            funName=options;
            funArgs = arraySlice.call(arguments).splice(0,1);
        }
        return this.each(function (i,element) {
            var dom = $(element),
                plsInc=dom.data(MLoading.dataKey);
            if(!plsInc){
                plsInc=new MLoading(dom,ops);
            }

            if(funName){
                var fun = plsInc[funName];
                if(typeof fun==="function"){
                    fun.apply(plsInc,funArgs);
                }
            }
        });
    }
}));

/***/ })

},["./app/page/insuranceRecord/index.js"]);