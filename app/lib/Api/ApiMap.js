const ApiMap = {
  // 商品销售统计
  getShopProdSaleStat: {
    url: '/hca/web/admin/shop/prod/sale/stat',
    method: 'post'
  },

  // 商品销售统计导出
  shopProdSaleStatExport: {
    url: '/hca/web/admin/shop/prod/sale/stat/export',
    method: 'post'
  },

  // 销售统计
  getShopSaleStat: {
    url: '/hca/web/admin/shop/sale/stat',
    method: 'post'
  },

  // 销售统计导出
  shopSaleStatExport: {
    url: '/hca/web/admin/shop/sale/stat/export',
    method: 'post'
  },

  // 健管师销售统计
  getShopHecadreSaleStat: {
    url: '/hca/web/admin/shop/sale/stat',
    method: 'post'
  },

  // 健管师销售统计
  shopHecadreSaleStatExport: {
    url: '/hca/web/admin/shop/sale/stat/export',
    method: 'post'
  },

  // 居民统计
  getShopInhabitantStat: {
    url: '/hca/web/admin/shop/inhabitant/stat',
    method: 'post'
  },

  // 居民统计导出
  shopInhabitantStat: {
    url: '/hca/web/admin/shop/inhabitant/stat/export',
    method: 'post'
  },

  // 居民订单列表
  getShopInhabitantOrderList: {
    url: '/hca/web/admin/shop/inhabitant/order/list',
    method: 'post'
  },

  // 居民订单导出
  shopInhabitantOrderExport: {
    url: '/hca/web/admin/shop/inhabitant/order/export',
    method: 'post'
  },

  // 1.1.23	(Web)门店商品列表
  shopStationProdList: {
    url: '/hca/web/admin/shop/station/prod/list',
    method: 'POST'
  },

  //1.1.5	(Web)商品标签列表
  goodTagList: {
    url: '/hca/web/admin/shop/prodtag/list',
    method: 'POST'
  },

  //1.1.2	(Web)商品标签新增
  goodTagCreate: {
    url: '/hca/web/admin/shop/prodtag/create',
    method: 'POST'
  },

  //1.1.3	(Web)商品标签修改
  goodTagUpdate: {
    url: '/hca/web/admin/shop/prodtag/update',
    method: 'POST'
  },

  //1.1.4	(Web)商品标签删除
  goodTagDelete: {
    url: '/hca/web/admin/shop/prodtag/delete',
    method: 'POST'
  },

  //1.1.20	(Web)商品列表
  goodsList: {
    url: '/hca/web/admin/shop/prod/list',
    method: 'POST'
  },

  //1.1.8	(Web)商品资料新增
  goodsCreate: {
    url: '/hca/web/admin/shop/prod/create',
    method: 'POST'
  },

  //1.1.9	(Web)商品资料修改
  goodsUpdate: {
    url: '/hca/web/admin/shop/prod/update',
    method: 'POST'
  },

  //1.1.10	(Web)商品资料删除
  goodsDelete: {
    url: '/hca/web/admin/shop/prod/delete',
    method: 'POST'
  },

  //1.1.21	(Web)商品列表导出
  goodsExport: {
    url: '/hca/web/admin/shop/prod/export',
    method: 'POST'
  },

  //1.1.12	(Web)商品价格调整列表
  goodsPriceList: {
    url: '/hca/web/admin/shop/prodprice/adjust/list',
    method: 'POST'
  },

  //1.1.11	(Web)商品价格调整申请
  goodsPriceCreate: {
    url: '/hca/web/admin/shop/prodprice/adjust/create',
    method: 'POST'
  },

  //1.1.13	(Web)商品价格调整详情
  goodsPriceAdjust: {
    url: '/hca/web/admin/shop/prodprice/adjust',
    method: 'POST'
  },

  //1.1.14	 (Web)商品调价审核
  goodsPriceAudit: {
    url: '/hca/web/admin/shop/prodprice/audit',
    method: 'POST'
  },

  //1.1.15	(Web)商品详情
  goodsPriceDetail: {
    url: '/hca/web/admin/shop/prod',
    method: 'POST'
  },

  //1.1.7	(Web)商品分类/标签/适用人群
  shopProdmeta: {
    url: '/hca/web/admin/shop/prodmeta',
    method: 'POST'
  }
};

export default ApiMap;
