import ApiMap from '../../lib/Api/ApiMap';
import {fetchTemplate} from '../../lib/Util';
import {logger} from '../../lib/logger';
import http from '../../lib/Api/http';
export const exportData = (args) => {
  const goodsExport = ApiMap.goodsExport;
  return new Promise((resolve, reject) => {
    http({
      ...goodsExport,
      data: {
        ...goodsExport.data,
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
  fetchProdList: fetchTemplate(ApiMap.shopProdList),
  fetchStationProdList: fetchTemplate(ApiMap.shopStationProdList),
  updateStationProd: fetchTemplate(ApiMap.stationProdUpdate),
  deleteStationProd: fetchTemplate(ApiMap.stationProdDelete),
  stationProdCreate: fetchTemplate(ApiMap.stationProdCreate),
  shopProdInfo: fetchTemplate(ApiMap.shopProdInfo),
  goodsExport: fetchTemplate(ApiMap.goodsExport),
  exportData
};
export default DB;
