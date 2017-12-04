webpackJsonp([6],{

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

/***/ "./app/component/salesData/SalesData.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SalesData;

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__("./app/component/salesData/style/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export default class SalesData extends Component {
//   render() {
//     return (
//         <div className="sales-data">
//             <div className="item">
//                 <p>{this.props.totalAmount}<span>元</span></p>
//                 <span>订单总额</span>
//             </div>
//             <div className="item">
//                 <p>{this.props.totalGoods}</p>
//                 <span>商品总数</span>
//             </div>
//             <div className="item">
//                 <p>{this.props.totalPerson}</p>
//                 <span>购买总人次</span>
//             </div>
//         </div>
//     );
//   }
// }

function SalesData(props) {
    return _react2.default.createElement(
        'div',
        { className: 'sales-data' },
        _react2.default.createElement(
            'div',
            { className: 'item' },
            _react2.default.createElement(
                'p',
                null,
                props.totalAmount,
                _react2.default.createElement(
                    'span',
                    null,
                    '\u5143'
                )
            ),
            _react2.default.createElement(
                'span',
                null,
                '\u8BA2\u5355\u603B\u989D'
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'item' },
            _react2.default.createElement(
                'p',
                null,
                props.totalGoods
            ),
            _react2.default.createElement(
                'span',
                null,
                '\u5546\u54C1\u603B\u6570'
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'item' },
            _react2.default.createElement(
                'p',
                null,
                props.totalPerson
            ),
            _react2.default.createElement(
                'span',
                null,
                '\u8D2D\u4E70\u603B\u4EBA\u6B21'
            )
        )
    );
}

SalesData.defaultProps = {
    totalAmount: 0,
    totalGoods: 0,
    totalPerson: 0
};
SalesData.propTypes = {
    totalAmount: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    totalGoods: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    totalPerson: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};

/***/ }),

/***/ "./app/component/salesData/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SalesData = __webpack_require__("./app/component/salesData/SalesData.js");

var _SalesData2 = _interopRequireDefault(_SalesData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _SalesData2.default;

/***/ }),

/***/ "./app/component/salesData/style/index.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/component/salesData/style/index.css");
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
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!./index.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/postcss-loader/lib/index.js!./index.css");
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

/***/ "./app/lib/styles/index.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/lib/styles/index.css");
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
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/lib/index.js!./index.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/postcss-loader/lib/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./app/page/userOrders/userOrders.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _salesData = __webpack_require__("./app/component/salesData/index.js");

var _salesData2 = _interopRequireDefault(_salesData);

var _Table = __webpack_require__("./app/component/table/Table.js");

var _Table2 = _interopRequireDefault(_Table);

var _pageNation = __webpack_require__("./app/component/pageNation/pageNation.js");

var _pageNation2 = _interopRequireDefault(_pageNation);

var _reactBootstrapDatePicker = __webpack_require__("./node_modules/react-bootstrap-date-picker/lib/index.js");

var _reactBootstrapDatePicker2 = _interopRequireDefault(_reactBootstrapDatePicker);

var _http = __webpack_require__("./app/lib/Api/http.js");

var _http2 = _interopRequireDefault(_http);

var _ApiMap = __webpack_require__("./app/lib/Api/ApiMap.js");

var _ApiMap2 = _interopRequireDefault(_ApiMap);

var _Util = __webpack_require__("./app/lib/Util.js");

__webpack_require__("./app/lib/styles/index.css");

var _reactBootstrap = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserOrders = function (_Component) {
    _inherits(UserOrders, _Component);

    function UserOrders(props) {
        _classCallCheck(this, UserOrders);

        var _this = _possibleConstructorReturn(this, (UserOrders.__proto__ || Object.getPrototypeOf(UserOrders)).call(this, props));

        _this.columns = [{
            className: 'my-col-class',
            title: '订单编号',
            dataIndex: 'order_no',
            key: 'a'
        }, {
            className: 'my-col-class',
            title: '订单时间',
            dataIndex: 'create_date',
            key: 'b'
        }, {
            className: 'my-col-class',
            title: '订单金额',
            dataIndex: 'order_amount',
            key: 'c'
        }, {
            className: 'my-col-class',
            title: '支付方式',
            dataIndex: 'pay_type',
            key: 'd'
        }, {
            className: 'my-col-class',
            title: '实付金额',
            dataIndex: 'pay_amount',
            key: 'e'
        }, {
            className: 'my-col-class',
            title: '商品数量',
            dataIndex: 'prod_num',
            key: 'f'
        }, {
            className: 'my-col-class',
            title: '推荐人',
            dataIndex: 'create_hecadre',
            key: 'g'
        }, {
            className: 'my-col-class',
            title: '送货人',
            dataIndex: 'ship_hecadre',
            key: 'h'
        }, {
            className: 'my-col-class',
            title: '操作',
            dataIndex: 'oper',
            key: 'i',
            render: function render(text, record) {
                return _react2.default.createElement(
                    'a',
                    { onClick: function onClick(e) {
                            return _this.viewDetails(record.order_id, e);
                        }, href: 'javascript:;' },
                    '\u64CD\u4F5C'
                );
            }
        }];
        _this.state = {
            totalSale: 0,
            totalProdNum: 0,
            totalOrderNum: 0,
            pageNum: 0,
            pageCount: 10,
            currentPage: 1,
            beginNum: 0,
            startTime: (0, _Util.setInitDate)().startTime,
            endTime: (0, _Util.setInitDate)().endTime,
            format: "YYYY/MM/DD",
            residentUid: "",
            orderNo: "",
            showModal: false,
            details: {
                "prod_list": []
            },
            tableData: []
        };

        _this.handleStartTimeChange = _this.handleStartTimeChange.bind(_this);
        _this.handleEndTimeChange = _this.handleEndTimeChange.bind(_this);
        _this.handleChangeOrderNo = _this.handleChangeOrderNo.bind(_this);
        _this.handleClickExport = _this.handleClickExport.bind(_this);
        _this.handleClickSearch = _this.handleClickSearch.bind(_this);
        _this.handleTogglePage = _this.handleTogglePage.bind(_this);
        _this.close = _this.close.bind(_this);
        return _this;
    }

    _createClass(UserOrders, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            console.log(common.Util.data('parms'));
            this.setState({
                residentUid: common.Util.data('parms').residentUid
            }, function () {
                console.log(_this2.state);
                _this2.getShopInhabitantOrderList();
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {}

        // 获取居民订单列表

    }, {
        key: 'getShopInhabitantOrderList',
        value: function getShopInhabitantOrderList() {
            var _this3 = this;

            var _state = this.state,
                startTime = _state.startTime,
                endTime = _state.endTime,
                pageCount = _state.pageCount,
                currentPage = _state.currentPage,
                beginNum = _state.beginNum,
                orderNo = _state.orderNo,
                residentUid = _state.residentUid;

            var parms = _extends({}, _ApiMap2.default.commonData, {
                resident_uid: residentUid,
                order_no: orderNo,
                stat_start: (0, _Util.getTimestamp)(startTime),
                stat_end: (0, _Util.getTimestamp)(endTime),
                begin: beginNum,
                count: pageCount
            });

            (0, _http2.default)({
                url: _ApiMap2.default.getShopInhabitantOrderList.url,
                method: _ApiMap2.default.getShopInhabitantOrderList.method,
                data: JSON.stringify(parms)
            }).then(function (res) {
                if (res.data.ret_code === 1) {
                    var resData = res.data.ret_data;
                    _this3.setState({
                        pageNum: Math.ceil(resData.total / pageCount),
                        tableData: resData.order_list.map(function (item, index) {
                            item.key = (currentPage - 1) * pageCount + index + 1;
                            item.create_date = (0, _Util.formatDateTime)(item.create_date);
                            item.pay_type = (0, _Util.payType)(item.pay_type);
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
        key: 'handleChangeOrderNo',
        value: function handleChangeOrderNo(ev) {
            this.setState({
                orderNo: ev.target.value
            });
        }
    }, {
        key: 'handleStartTimeChange',
        value: function handleStartTimeChange(value, formattedValue) {
            this.setState({
                startTime: formattedValue
            });
        }
    }, {
        key: 'handleEndTimeChange',
        value: function handleEndTimeChange(value, formattedValue) {
            this.setState({
                endTime: formattedValue
            });
        }
    }, {
        key: 'handleClickSearch',
        value: function handleClickSearch() {
            var _this4 = this;

            this.setState({
                currentPage: 1
            }, function () {
                _this4.setState({
                    beginNum: (_this4.state.currentPage - 1) * _this4.state.pageCount
                }, function () {
                    _this4.getShopInhabitantOrderList();
                });
            });
        }

        // 导出居民订单列表

    }, {
        key: 'handleClickExport',
        value: function handleClickExport() {
            var _state2 = this.state,
                startTime = _state2.startTime,
                endTime = _state2.endTime;

            var parms = _extends({}, _ApiMap2.default.commonData, {
                resident_uid: 0,
                order_no: "xx",
                stat_start: (0, _Util.getTimestamp)(startTime),
                stat_end: (0, _Util.getTimestamp)(endTime)
            });
            (0, _http2.default)({
                url: _ApiMap2.default.shopInhabitantOrderExport.url,
                method: _ApiMap2.default.shopInhabitantOrderExport.method,
                data: JSON.stringify(parms),
                responseType: 'blob'
            }).then(function (res) {
                (0, _Util.downloadExcel)(res, '居民订单列表');
            }, function (error) {
                common.alert(error);
            });
        }
    }, {
        key: 'handleTogglePage',
        value: function handleTogglePage(ev) {
            var _this5 = this;

            console.log(this.state.currentPage);
            console.log(ev);
            this.setState({
                currentPage: ev.currentPage
            }, function () {
                _this5.setState({
                    beginNum: (_this5.state.currentPage - 1) * _this5.state.pageCount
                }, function () {
                    _this5.getShopInhabitantOrderList();
                });
            });
        }
    }, {
        key: 'close',
        value: function close() {
            this.setState({
                showModal: false
            });
        }

        // 查看详情

    }, {
        key: 'viewDetails',
        value: function viewDetails(num, e) {
            var _this6 = this;

            //console.log(Math.random(), num);
            var parms = _extends({}, _ApiMap2.default.commonData, {
                order_id: num
            });

            (0, _http2.default)({
                url: _ApiMap2.default.getShopOrder.url,
                method: _ApiMap2.default.getShopOrder.method,
                data: JSON.stringify(parms)
            }).then(function (res) {
                if (res.data.ret_code === 1) {
                    var resData = res.data.ret_data;
                    _this6.setState({
                        showModal: true,
                        details: resData
                    });
                } else {
                    common.alert(res.data.ret_msg);
                }
            }, function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state3 = this.state,
                startTime = _state3.startTime,
                endTime = _state3.endTime,
                format = _state3.format,
                pageNum = _state3.pageNum,
                currentPage = _state3.currentPage,
                tableData = _state3.tableData,
                showModal = _state3.showModal,
                details = _state3.details,
                orderNo = _state3.orderNo;

            var columns = this.columns;
            var start = startTime && new Date((0, _Util.addDate)(startTime)).toISOString();
            var end = endTime && new Date((0, _Util.addDate)(endTime)).toISOString();
            return _react2.default.createElement(
                'div',
                { className: 'wrap hospital' },
                _react2.default.createElement(
                    'div',
                    { className: 'tb-head' },
                    '\u7528\u6237\u8BA2\u5355'
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
                            _react2.default.createElement(
                                'div',
                                { className: 'pull-left' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'clearfix', style: { display: 'inline-block', verticalAlign: 'middle', height: '34px', marginRight: '20px' } },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'pull-left', style: { lineHeight: '34px', marginRight: '6px' } },
                                        '\u8BA2\u5355\u7F16\u53F7'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control pull-left', style: { width: '180px' }, value: orderNo, onChange: this.handleChangeOrderNo })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'date-wrap' },
                                    _react2.default.createElement(_reactBootstrapDatePicker2.default, {
                                        value: start,
                                        dateFormat: format,
                                        onChange: this.handleStartTimeChange
                                    })
                                ),
                                '\xA0\xA0\xA0\xA0-\xA0\xA0\xA0\xA0',
                                _react2.default.createElement(
                                    'div',
                                    { className: 'date-wrap' },
                                    _react2.default.createElement(_reactBootstrapDatePicker2.default, {
                                        value: end,
                                        dateFormat: format,
                                        onChange: this.handleEndTimeChange
                                    })
                                ),
                                '\xA0\xA0\xA0\xA0\xA0\xA0',
                                _react2.default.createElement(
                                    'button',
                                    { type: 'button', className: 'btn btn-main', id: 'js-search', onClick: this.handleClickSearch },
                                    '\u67E5\u8BE2'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'pull-right' },
                                _react2.default.createElement(
                                    'button',
                                    { type: 'button', className: 'btn btn-main', id: 'btn-export', onClick: this.handleClickExport },
                                    '\u5BFC\u51FA'
                                )
                            )
                        ),
                        _react2.default.createElement(_Table2.default, {
                            rowClassName: 'my-row-class',
                            columns: columns,
                            data: tableData
                        }),
                        _react2.default.createElement(_pageNation2.default, {
                            pageNumber: pageNum,
                            currentPage: currentPage,
                            getPage: this.handleTogglePage
                        })
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Modal,
                    { show: showModal, onHide: this.close },
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Header,
                        { closeButton: true },
                        _react2.default.createElement(
                            _reactBootstrap.Modal.Title,
                            null,
                            '\u8BE6\u60C5'
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
                                { className: 'clearfix', style: { padding: '15px', borderBottom: '1px solid #e5e5e5' } },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'pull-left' },
                                    _react2.default.createElement(
                                        'h5',
                                        { style: { margin: 0, paddingTop: '10px', fontSize: '16px' } },
                                        '\u57FA\u672C\u4FE1\u606F'
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'pull-right', style: { verticalAlign: 'middle' } },
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'button', className: 'btn btn-main' },
                                        (0, _Util.orderStatus)(details.order_status)
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group clearfix' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-3 control-label' },
                                    '\u8BA2\u5355\u7F16\u53F7:'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-7' },
                                    details.order_no
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group clearfix' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-3 control-label' },
                                    '\u8BA2\u5355\u65F6\u95F4:'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-7' },
                                    details.create_date
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group clearfix' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-3 control-label' },
                                    '\u8BA2\u5355\u91D1\u989D\uFF08\u5143\uFF09:'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-7' },
                                    details.order_amount
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group clearfix' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-3 control-label' },
                                    '\u5546\u54C1\u6570\u91CF:'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-7' },
                                    details.prod_num
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group clearfix' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-3 control-label' },
                                    '\u7528\u6237\u59D3\u540D:'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-7' },
                                    details.receipt_name
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group clearfix' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-3 control-label' },
                                    '\u8054\u7CFB\u7535\u8BDD:'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-7' },
                                    details.receipt_contact
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group clearfix' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-3 control-label' },
                                    '\u5730\u5740:'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-7' },
                                    details.receipt_address
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group clearfix' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-3 control-label' },
                                    '\u63A8\u8350\u4EBA:'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-7' },
                                    details.create_hecadre
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'form-group clearfix' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-3 control-label' },
                                    '\u9001\u8D27\u4EBA:'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'col-sm-7' },
                                    details.ship_hecadre
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: { padding: '15px', borderBottom: '1px solid #e5e5e5' } },
                                _react2.default.createElement(
                                    'h5',
                                    { style: { margin: 0, paddingTop: '10px', fontSize: '16px' } },
                                    '\u8BA2\u5355\u5546\u54C1'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    { className: 'list-title clearfix' },
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        '\u5546\u54C1\u540D\u79F0'
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        '\u5546\u54C1\u6570\u91CF'
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        '\u5546\u54C1\u91D1\u989D'
                                    )
                                ),
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'prod-list' },
                                    details.prod_list.map(function (item) {
                                        return _react2.default.createElement(
                                            'li',
                                            { key: item.prod_id, className: 'clearfix' },
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'prod-col tal clearfix' },
                                                _react2.default.createElement('img', { className: 'pull-left', src: item.prod_imgs[0] }),
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: 'pull-left' },
                                                    _react2.default.createElement(
                                                        'p',
                                                        { title: item.prod_name },
                                                        item.prod_name
                                                    ),
                                                    _react2.default.createElement(
                                                        'span',
                                                        null,
                                                        item.prod_price
                                                    )
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'prod-col lh60' },
                                                item.prod_num
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'prod-col lh60' },
                                                item.prod_num * item.prod_price
                                            )
                                        );
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'list-total clearfix' },
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        details.order_amount
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        details.prod_num
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(_reactBootstrap.Modal.Footer, null)
                )
            );
        }
    }]);

    return UserOrders;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(UserOrders, null), document.getElementById('__userOrders/userOrders__'));

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/component/pageNation/pagenation.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".pd20{padding:20px 0}.pageNation{margin:0;padding:0;font-size:12px;float:right}.pageNation a{display:inline-block;padding:4px 15px;border:1px solid #333;color:#333;border-radius:3px;margin-right:5px;text-decoration:none;vertical-align:middle}.pageNation a:last-child{margin-right:0}.pageNation a.active{border:1px solid #999;color:#999;cursor:default}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/component/salesData/style/index.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".sales-data{width:100%;border:1px solid #eee;padding:20px 0;margin-bottom:30px}.sales-data:after{content:\" \";display:table;clear:both}.sales-data .item{width:33.333333%;float:left;text-align:center}.sales-data .item p{font-size:30px;font-weight:700;color:#c00}.sales-data .item span,.sales-data .item sub{font-size:12px}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/lib/index.js!./app/lib/styles/index.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".pdtb{padding:20px 0}.date-wrap{display:inline-block;vertical-align:middle;width:220px}.date-wrap>div{position:relative}.date-wrap>div .bootstrap-datetimepicker-widget{z-index:1}.date-wrap>div .bootstrap-datetimepicker-widget .switch{text-align:center}.form-group{margin:0;padding:10px 0;border-bottom:1px solid #e5e5e5}.prod-list{margin:0;padding:0}.prod-list li{border-bottom:1px solid #e5e5e5}.list-title,.list-total,.prod-list li{padding:10px 0}.list-title span,.prod-col{width:33.333333%;float:left;text-align:center}.prod-col.tal{text-align:left;padding-left:10px}.prod-col.tal div{display:inline-block;width:170px;margin-left:8px}.prod-col.tal div p{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:20px}.prod-col img{width:60px;height:60px;display:inline-block}.list-total span{width:33.333333%;float:right;text-align:center}.lh60{line-height:60px}@media (min-width:768px){.modal-dialog{width:750px}}", ""]);

// exports


/***/ })

},["./app/page/userOrders/userOrders.js"]);