import ApiMap from '../../lib/Api/ApiMap';
import http from '../../lib/Api/http';
import {logger} from '../../lib/logger';
//1.3.14	(Web)订货意向列表
export function shopGuestorderList(args) {
  return new Promise((resolve, reject) => {
    const params = ApiMap.shopGuestorderList;
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

// 获取行政区域
export function fetchArealist(condition) {
  return new Promise((resolve, reject) => {
    http({
      url: ApiMap.getArealist.url,
      method: ApiMap.getArealist.method,
      data: {
        ...ApiMap.getArealist.data,
        ...condition
      }
    }).then(result => {
      logger(result);
      const data = result.data;
      if (data.ret_code === 1) {
        resolve(data.ret_data);
      } else {
        reject(data.ret_msg);
      }
    }).catch(err => {
      reject('获取健管师失败');
      logger(err);
    });
  });
}

//1.3.15	(Web)根据区域获取健管师列表
export function fetchListbyareastation(condition) {
  const listbyareastation = ApiMap.listbyareastation;
  return new Promise((resolve, reject) => {
    http({
      url: listbyareastation.url,
      method: listbyareastation.method,
      data: {
        ...listbyareastation.data,
        ...condition
      }
    }).then(result => {
      logger(result);
      const data = result.data;
      if (data.ret_code === 1) {
        resolve(data.ret_data);
      } else {
        reject(data.ret_msg);
      }
    }).catch(err => {
      reject('获取健管师失败');
      logger(err);
    });
  });
}

//1.1.25	(Web)门店商品新增
export function shopGuestorderAssign(condition) {
  const shopGuestorderAssignData = ApiMap.shopGuestorderAssign;
  return new Promise((resolve, reject) => {
    http({
      url: shopGuestorderAssignData.url,
      method: shopGuestorderAssignData.method,
      data: {
        ...shopGuestorderAssignData.data,
        ...condition
      }
    }).then(result => {
      logger(result);
      const data = result.data;
      if (data.ret_code === 1) {
        resolve(data.ret_data);
      } else {
        reject(data.ret_msg);
      }
    }).catch(err => {
      reject('门店商品新增失败');
      logger(err);
    });
  });
}

//1.3.17	(Web)订货意向 - 详情
export function shopGuestorder(condition) {
  const shopGuestorderData = ApiMap.shopGuestorder;
  return new Promise((resolve, reject) => {
    http({
      url: shopGuestorderData.url,
      method: shopGuestorderData.method,
      data: {
        ...shopGuestorderData.data,
        ...condition
      }
    }).then(result => {
      logger(result);
      const data = result.data;
      if (data.ret_code === 1) {
        resolve(data.ret_data);
      } else {
        reject(data.ret_msg);
      }
    }).catch(err => {
      reject('门店商品新增失败');
      logger(err);
    });
  });
}

//1.3.18	(Web)订货意向导出
export function shopGuestorderExport(condition) {
  const shopGuestorderExportData = ApiMap.shopGuestorderExport;
  return new Promise((resolve, reject) => {
    http({
      url: shopGuestorderExportData.url,
      method: shopGuestorderExportData.method,
      data: {
        ...shopGuestorderExportData.data,
        ...condition
      }
    }).then(result => {
      logger(result);
      const data = result.data;
      if (data.ret_code === 1) {
        resolve(data.ret_data);
      } else {
        reject(data.ret_msg);
      }
    }).catch(err => {
      reject('订货意向导出');
      logger(err);
    });
  });
}




let DB = {
  shopGuestorderList,
  fetchArealist,
  fetchListbyareastation,
  shopGuestorderAssign,
  shopGuestorder
};
export default DB;
