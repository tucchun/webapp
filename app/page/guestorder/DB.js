import ApiMap from '../../lib/Api/ApiMap';
import http from '../../lib/Api/http';
import {logger} from '../../lib/logger';
import {fetchTemplate} from '../../lib/Util';

export const exportData = (args) => {
  const shopGuestorderExport = ApiMap.shopGuestorderExport;
  return new Promise((resolve, reject) => {
    http({
      ...shopGuestorderExport,
      data: {
        ...shopGuestorderExport.data,
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
  shopGuestorderList: fetchTemplate(ApiMap.shopGuestorderList),
  fetchArealist: fetchTemplate(ApiMap.getArealist),
  fetchListbyareastation: fetchTemplate(ApiMap.listbyareastation),
  shopGuestorderAssign: fetchTemplate(ApiMap.shopGuestorderAssign),
  shopGuestorder: fetchTemplate(ApiMap.shopGuestorder),
  exportData
};
export default DB;
