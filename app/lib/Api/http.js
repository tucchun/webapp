require('es6-promise').polyfill();
import axios from 'axios';
import objectAssign from 'object-assign';
import _ from 'lodash';
import ApiMap from './ApiMap';
import {logger} from '../logger';
import '../../../static/assets/jquery.mloading-master/src/jquery.mloading.js';
import '../../../static/assets/jquery.mloading-master/src/jquery.mloading.css';

let baseURL = "";
let $ = window.$;

let demo = false;
if (process.env.NODE_ENV === 'production') {
  baseURL = "/";
} else {
  baseURL = "http://localhost:8081";
}

axios.interceptors.request.use(config => {
  logger('===============请求接口开始===============\n');
  logger('请求接口：' + config.url + '\n');
  logger('参数：' + JSON.stringify(config.data) + '\n');
  $(document.body).mLoading({mask: false}); //显示loading组件
  return config;
}, error => {
  return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  logger("响应数据：" + JSON.stringify(response) + "\n");
  logger("===============请求接口结束===============\n");
  $(document.body).mLoading("hide"); //隐藏loading组件
  return response;
}, error => {
  logger("响应失败：" + error + "\n");
  logger("===============请求接口结束===============\n");
  $(document.body).mLoading("hide"); //隐藏loading组件
  return Promise.resolve(error.response);
});

let settings = {
  baseURL: baseURL,
  timeout: 10000,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  responseType: 'json'
};

const httpServer = function() {
  let url,
    config;
  switch (arguments.length) {
    case 1:
      url = arguments[0].url;
      config = _.omit(arguments[0], 'url');
      break;
    case 2:
      url = arguments[0];
      config = arguments[1];
      break;
  }
  if (demo) {
    let key = _.findKey(ApiMap, {'url': url});
    return axios('./rss/' + key + '.json');
  }
  if (url.indexOf("?") > 0) {
    url += ('&_=' + (+new Date()));
  } else {
    url += ('?_=' + (+new Date()));
  }
  config = objectAssign({}, settings, config);
  // 去除值为空的参数
  // let data = config.data;
  // if (typeof data === 'string') {
  //   data = JSON.parse(data);
  // }
  // data = _.pickBy(data, function(item) {
  //   return item;
  // });
  // config.data = data;
  return axios(url, config);
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
export {baseURL};
export default httpServer;
