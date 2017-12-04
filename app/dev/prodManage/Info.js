webpackJsonp([21],{

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

/***/ "./app/page/prodManage/Info.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/react.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBootstrap = __webpack_require__("./node_modules/react-bootstrap/es/index.js");

var _Container = __webpack_require__("./app/component/container/Container.js");

var _Container2 = _interopRequireDefault(_Container);

var _Util = __webpack_require__("./app/lib/Util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProdInfo = function (_Component) {
  _inherits(ProdInfo, _Component);

  function ProdInfo(props) {
    _classCallCheck(this, ProdInfo);

    var _this = _possibleConstructorReturn(this, (ProdInfo.__proto__ || Object.getPrototypeOf(ProdInfo)).call(this, props));

    _this.hideModal = _this.hideModal.bind(_this);
    _this.state = {
      show: _this.props.show
    };
    return _this;
  }

  _createClass(ProdInfo, [{
    key: 'hideModal',
    value: function hideModal() {
      this.props.handleHideModal();
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.props.data;
      // "prod_country_flag": 2 // 1国产2进口
      var prod_country = '';
      if (data.prod_country_flag === 1) {
        prod_country = '国产';
      }
      if (data.prod_country_flag === 2) {
        prod_country = '进口';
      }

      //"prod_in_sale": 2 // 是否在售 2停售 1在售
      var prod_in = '';
      if (data.prod_in_sale === 1) {
        prod_in = '在售';
      }
      if (data.prod_in_sale === 2) {
        prod_in = '停售';
      }
      //"prod_allow_sale": 2 // 是否可售 2不可售1可售
      var prod_allow = '';
      if (data.prod_allow_sale === 1) {
        prod_allow = '可售';
      }
      if (data.prod_allow_sale === 2) {
        prod_allow = '不可售';
      }
      //"prod_display": 2 // 是否默认显示 2不显示1显示
      var prod_display = '';
      if (data.prod_display === 1) {
        prod_display = '可售';
      }
      if (data.prod_display === 2) {
        prod_display = '不可售';
      }
      //"station_in_sale": 2 站点上架状态2未上架1上架
      var station_in_sale = '';
      if (data.station_in_sale === 1) {
        station_in_sale = '上架';
      }
      if (data.station_in_sale === 2) {
        station_in_sale = '未上架';
      }

      return _react2.default.createElement(
        _Container2.default,
        { className: 'flex-auto gird-align', title: '站点商品管理>>详情' },
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u5546\u54C1\u7F16\u53F7'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            data.prod_no
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u5546\u54C1\u540D\u79F0'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            data.prod_name
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u5546\u54C1\u4EA7\u5730'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            data.prod_src
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u5546\u54C1\u89C4\u683C'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            data.prod_src
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u6279\u51C6\u6587\u53F7'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            data.prod_apprv_no
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u6709\u6548\u671F\uFF08\u6708\uFF09'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            _Util.Util.formatDate(data.prod_valid_month)
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u5305\u88C5\u5355\u4F4D'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            data.prod_pkg_unit
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u52A9\u8BB0\u7801'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            data.prod_assist_code
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u552E\u4EF7\uFF08\u5143\uFF09'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            data.prod_price
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u539F\u4EF7\uFF08\u5143\uFF09'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            data.prod_original_price
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u5546\u54C1\u5206\u7C7B'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            data.prod_cat.cat_text
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u56FD\u4EA7/\u8FDB\u53E3'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            prod_country
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u662F\u5426\u5728\u552E'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            prod_in
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u662F\u5426\u53EF\u552E'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            prod_allow
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u9ED8\u8BA4\u663E\u793A'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            prod_display
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u662F\u5426\u4E0A\u67B6'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 4 },
            station_in_sale
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u5546\u54C1\u6807\u7B7E'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 10 },
            data.prod_tags.map(function (tag) {
              return tag.tag_text;
            }).join('、')
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u9002\u7528\u4EBA\u7FA4'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 10 },
            data.prod_crowds.crowd_text
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u4E3B\u8981\u6210\u5206'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 10 },
            data.prod_ingreds
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u5907\u6CE8'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 10 },
            data.prod_memo
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u5546\u54C1\u56FE\u7247'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 10 },
            data.prod_imgs.map(function (imgSrc, index) {
              return _react2.default.createElement('img', { key: index, src: imgSrc });
            })
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Row,
          { className: 'gird-align' },
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 2 },
            _react2.default.createElement(
              _reactBootstrap.ControlLabel,
              null,
              '\u5546\u54C1\u4ECB\u7ECD'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Col,
            { sm: 10 },
            data.prod_intro
          )
        )
      );
    }
  }]);

  return ProdInfo;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(ProdInfo, { data: _Util.Util.data('prodManage/Info') }), document.getElementById('__prodManage/Info__'));

/***/ })

},["./app/page/prodManage/Info.js"]);