import ApiMap from '../../lib/Api/ApiMap';
import http from '../../lib/Api/http';
import {logger} from '../../lib/logger';
import {fetchTemplate} from '../../lib/Util';


export const exportData = (args) => {
  const shopOrderExport = ApiMap.shopOrderExport;
  return new Promise((resolve, reject) => {
    http({
      ...shopOrderExport,
      data: {
        ...shopOrderExport.data,
        ...args
      }
    }).then(result => {
      debugger
      const data = result.data;
      if (data) {
        resolve(data);
      } else {
        reject('导出失败');
      }
    }).catch(err => {
      reject('导出失败');
      logger(err);
    });
  });
};


let DB = {
  shopOrderList: fetchTemplate(ApiMap.shopOrderList),
  exportData
};
export default DB;
