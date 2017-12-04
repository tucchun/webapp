import React from 'react';
import ReactDOM from 'react-dom';
import {Modal, Button} from 'react-bootstrap';
//import axios from 'axios';
//import http from './Api/http';
const common = window.common;
const Util = common.Util;

export {
  common,
  Util
};
class Alert extends React.Component {

  constructor(props) {
    super(props);
    this.doEnter = this.doEnter.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.state = {
      show: true
    };
  }

  handleHide() {
    document.body.removeChild(this.props.container);
  }

  doEnter() {

    this.setState({show: false});
    this.props.handleEnter();
  }

  render() {
    return (
      <Modal bsSize="small" onExiting={this.handleHide} dialogClassName='react-dialog' aria-labelledby="contained-modal-title-sm" show={this.state.show}>
        <Modal.Header>
          <Modal.Title>操作提示</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.txt}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.doEnter}>确认</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

class Confirm extends React.Component {

  constructor(props) {
    super(props);
    this.doEnter = this.doEnter.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.doCancel = this.doCancel.bind(this);
    this.state = {
      show: true
    };
  }

  handleHide() {
    document.body.removeChild(this.props.container);
  }

  doCancel() {
    this.setState({show: false});
  }

  doEnter() {
    this.setState({show: false});
    this.props.handleEnter();
  }

  render() {
    return (
      <Modal bsSize="small" onExiting={this.handleHide} dialogClassName='react-dialog' aria-labelledby="contained-modal-title-sm" show={this.state.show}>
        <Modal.Header>
          <Modal.Title>操作提示</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.txt}
        </Modal.Body>
        <Modal.Footer>
          <Button className='btn btn-primary' onClick={this.doEnter}>确认</Button>
          <Button className='btn btn-default' onClick={this.doCancel}>取消</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

/*
 * 确认弹窗
 * opts: {
 *    content： 内容
 *    success： 确认回调
 * }
 * */
export function confirm(content, success) {
  const container = document.createElement('div');
  document.body.appendChild(container);

  ReactDOM.render(
    <Confirm txt={content} container={container} handleEnter={() => {
    if (typeof success === 'function')
      success();
    }}/>, container);
}

/*
 * 确认弹窗
 * content 内容
 * */
export function alert(content, callback) {

  const container = document.createElement('div');
  document.body.appendChild(container);

  ReactDOM.render(
    <Alert txt={content} container={container} handleEnter={() => {
    if (typeof callback === 'function')
      callback();
    }}/>, container);

}


/**
* 设置默认日期
*/
export function setInitDate() {
  let nowDate = new Date();
  let y = nowDate.getFullYear();
  let m = nowDate.getMonth();
  let d = nowDate.getDate();
  return {
      startTime: y + '/' + m + '/' + d,
      endTime: y + '/' + (m + 1) + '/' + d,
  };
}

/**
* 获取时间戳
*/
export function getTimestamp() {
  if (arguments.length) {
      const dateArr = arguments[0].split('/');
      return new Date(dateArr[0], dateArr[1] - 1, dateArr[2]).getTime();
  } else {
      let nowDate = new Date();
      let y = nowDate.getFullYear();
      let m = nowDate.getMonth();
      let d = nowDate.getDate();
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
export function orderStatus(num) {
  let status = '';
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
export function payType(num) {
  let type = '';
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
export function downloadExcel(response, name) {
  const content = response.data;
  const elink = document.createElement('a');
  elink.download = name + '.xlsx';
  elink.style.display = 'none';
  const blob = new Blob([content]);
  elink.href = URL.createObjectURL(blob);
  document.body.appendChild(elink);
  elink.click();
  document.body.removeChild(elink);
}

/**
* 时间戳转日期
* @param timeStamp 时间戳
*/
export function formatDateTime(timeStamp) {
  var date = new Date();
  date.setTime(timeStamp);
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  m = m < 10 ? ('0' + m) : m;
  var d = date.getDate();
  d = d < 10 ? ('0' + d) : d;
  var h = date.getHours();
  h = h < 10 ? ('0' + h) : h;
  var minute = date.getMinutes();
  var second = date.getSeconds();
  minute = minute < 10 ? ('0' + minute) : minute;
  second = second < 10 ? ('0' + second) : second;
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
export function createTab(args){
  let url = args.uri;
  if (process.env.NODE_ENV !== 'production') {
    url = url.replace(/\/dist\//, '/dev/');
  }
  args = {
    ...args,
    url
  };
  common.createTab(args);
}
