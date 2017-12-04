import ApiMap from '../../lib/Api/ApiMap';
import http from '../../lib/Api/http';
import {logger} from '../../lib/logger';

export function fetchProdList(args) {
  return new Promise((resolve, reject) => {
    const params = ApiMap.shopProdList;
    http({
      url: params.url,
      method: params.method,
      data: {
        ...params.data,
        ...args
      }
    }).then(result => {
      const data = result.data;
      if (data.ret_code === 1) {
        resolve(data.ret_data);
      } else {
        reject(data.ret_msg);
      }
    }).catch(err => {
      reject('请求数据失败');
      logger(err);
    });
  });
}

export function fetchStationProdList(args) {
  return new Promise((resolve, reject) => {
    const params = ApiMap.shopStationProdList;
    http({
      url: params.url,
      method: params.method,
      data: {
        ...params.data,
        ...args
      }
    }).then(result => {
      const data = result.data;
      if (data.ret_code === 1) {
        resolve(data.ret_data);
      } else {
        reject(data.ret_msg);
      }
    }).catch(err => {
      reject('请求数据失败');
      logger(err);
    });
  });
}

// 更新站点商品是否上架
export function updateStationProd(args) {
  return new Promise((resolve, reject) => {
    const params = ApiMap.stationProdUpdate;
    http({
      url: params.url,
      method: params.method,
      data: {
        ...params.data,
        ...args
      }
    }).then(result => {
      const data = result.data;
      if (data.ret_code === 1) {
        resolve(data.ret_data);
      } else {
        reject(data.ret_msg);
      }
    }).catch(err => {
      reject('请求数据失败');
      logger(err);
    });
  });
}

//1.1.28	(Web)门店商品删除
export function deleteStationProd(args) {
  return new Promise((resolve, reject) => {
    const params = ApiMap.stationProdDelete;
    http({
      url: params.url,
      method: params.method,
      data: {
        ...params.data,
        ...args
      }
    }).then(result => {
      const data = result.data;
      if (data.ret_code === 1) {
        resolve(data.ret_data);
      } else {
        reject(data.ret_msg);
      }
    }).catch(err => {
      reject('删除失败');
      logger(err);
    });
  });
}

export function stationProdCreate(args){
  return new Promise((resolve, reject) => {
    const params = ApiMap.stationProdCreate;
    http({
      url: params.url,
      method: params.method,
      data: {
        ...params.data,
        ...args
      }
    }).then(result => {
      const data = result.data;
      if (data.ret_code === 1) {
        resolve(data.ret_data);
      } else {
        reject(data.ret_msg);
      }
    }).catch(err => {
      reject('删除失败');
      logger(err);
    });
  });
}

let DB = {
  fetchProdList,
  fetchStationProdList,
  updateStationProd,
  deleteStationProd,
  stationProdCreate
};
export default DB;
