import ApiMap from '../../lib/Api/ApiMap';
import http from '../../lib/Api/http';
import {logger} from '../../lib/logger';


//1.3.18	(Web)订货意向导出
export function shopOrderList(condition) {
  const shopOrderListData = ApiMap.shopOrderList;
  return new Promise((resolve, reject) => {
    http({
      url: shopOrderListData.url,
      method: shopOrderListData.method,
      data: {
        ...shopOrderListData.data,
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
  shopOrderList
};
export default DB;
