require('es6-promise').polyfill();
import axios from 'axios';
import objectAssign from 'object-assign';
import _ from 'lodash';
import ApiMap from './ApiMap';
import '../../../static/assets/jquery.mloading-master/src/jquery.mloading.js';
import '../../../static/assets/jquery.mloading-master/src/jquery.mloading.css';

const baseUrl = "";
let $ = window.$;

let demo = true;
if (process.env.NODE_ENV === 'production') {
  demo = false;
}

axios.interceptors.request.use(config => {
  console.log('===============请求接口开始===============\n');
  console.log('请求接口：' + config.url + '\n');
  console.log('参数：' + config.data + '\n');
  $(document.body).mLoading({mask: false}); //显示loading组件
  return config;
}, error => {
  return Promise.reject(error)
});

axios.interceptors.response.use(response => {
  console.log("响应数据：" + JSON.stringify(response) + "\n");
  console.log("===============请求接口结束===============\n");
  $(document.body).mLoading("hide"); //隐藏loading组件
  return response;
}, error => {
  console.log("响应失败：" + error + "\n");
  console.log("===============请求接口结束===============\n");
  $(document.body).mLoading("hide"); //隐藏loading组件
  return Promise.resolve(error.response);
});

let settings = {
  baseURL: baseUrl,
  timeout: 10000
};

const httpServer = function() {
  let url,
    data,
    config;
  switch (arguments.length) {
    case 1:
      url = arguments[0].url;
      data = arguments[0].data;
      config = _.omit(arguments[0], 'url', 'data');
      break;
    case 2:
      url = arguments[0];
      data = arguments[1].data;
      config = _.omit(arguments[1], 'data');
      break;
    case 3:
      url = arguments[0];
      data = arguments[1];
      config = arguments[2];
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
  return axios(url, data, config);
};

// const httpServer = (opts, data) => {
//
//   //公共参数
//   let Public = {}
//
//   //http默认配置
//   let httpDefaultOpts = {
//     method: opts.method,
//     baseURL: baseUrl,
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

export default httpServer;
