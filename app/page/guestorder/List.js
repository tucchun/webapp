import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Gird from '../../component/table/Table';
import Container from '../../component/container/Container';
import Condition from '../../component/condition/Condition';
import PageNation from '../../component/pageNation/pageNation';
import HecadreListbyarea from './hecadreListbyarea/HecadreListbyarea';
import {alert, downloadExcel, createTab, Util} from '../../lib/Util';
import ConditionForm from './ConditionForm';
// import {logger} from '../../lib/logger';
import DB from './DB';
import './style.css';

class GuestorderList extends Component {

  constructor(props) {
    super(props);
    // list 列参数
    this.columns = [
      {
        title: '意向单号',
        key: 'guest_order_no',
        dataIndex: 'guest_order_no'
      }, {
        title: '提交时间',
        key: 'create_date',
        dataIndex: 'create_date',
        render: (value) => {
          return Util.formatDate(value);
        }
      }, {
        title: '金额总计',
        key: 'guest_order_amount',
        dataIndex: 'guest_order_amount'
      }, {
        title: '商品数量',
        key: 'prod_num',
        dataIndex: 'prod_num'
      }, {
        title: '收货人',
        key: 'receipt_name',
        dataIndex: 'receipt_name'
      }, {
        title: '联系电话',
        key: 'receipt_contact',
        dataIndex: 'receipt_contact'
      }, {
        title: '地址',
        key: 'receipt_address',
        dataIndex: 'receipt_address'
      }, {
        title: '指定健管师',
        key: 'hecadre_assigned',
        dataIndex: 'hecadre_assigned'
      }, {
        title: '状态',
        key: 'guest_order_status',
        dataIndex: 'guest_order_status',
        render(value, row) {
          if (row.guest_order_status === 1) {
            return '待指定';
          }
          if (row.guest_order_status === 2) {
            return '待处理';
          }
          if (row.guest_order_status === 3) {
            return '已处理';
          }
          if (row.guest_order_status === 4) {
            return '已取消';
          }
          if (row.guest_order_status === 5) {
            return '已拒绝';
          }
          return ' ';
        }
      }, {
        key: 'Operations',
        title: '操作',
        render: (value, row) => {
          let status = null;
          if (row.guest_order_status === 1) {
            status = <a onClick={(e) => {
              this.guestorderAssign(e, row);
            }} href='#'>指定健管师</a>;
          }
          return (
            <div className='optCol'>
              {status}
              <a href="#" onClick={(e) => {
                this.showGuestorderInfo(e, row);
              }}>详情</a>
            </div>
          );
        }
      }
    ];

    this.handleGetPage = this.handleGetPage.bind(this);
    this.guestorderAssign = this.guestorderAssign.bind(this);
    this.showGuestorderInfo = this.showGuestorderInfo.bind(this);
    this.handleExport = this.handleExport.bind(this);

    // 列表查询事件
    this.handleIndexSearch = this.handleIndexSearch.bind(this);
    this.handleIndexCreateStart = this.handleIndexCreateStart.bind(this);
    this.handleIndexCreateEnd = this.handleIndexCreateEnd.bind(this);
    this.handleIndexSelectChange = this.handleIndexSelectChange.bind(this);
    this.handleIndexInputChange = this.handleIndexInputChange.bind(this);

    // 指派健管师
    this.handleHecadreSearch = this.handleHecadreSearch.bind(this);
    this.handleHecadreSelectChange = this.handleHecadreSelectChange.bind(this);
    this.handleHecadreHideModal = this.handleHecadreHideModal.bind(this);
    this.handleHecadreGetPage = this.handleHecadreGetPage.bind(this);
    this.handleassignHecadre = this.handleassignHecadre.bind(this);

    this.province = {};
    this.city = {};
    this.district = {};
    this.street = {};

    this.state = {
      indexViewData: {
        girdData: [],
        pageNumber: 1,
        total: 0,
        currentPage: 1,
        search_data: {
          create_start: null,
          create_end: null,
          guest_order_no: '',
          receipt_name: '',
          receipt_contact: '',
          guest_order_status: 0,
          begin: 0,
          count: 5
        }
      },
      HecadreViewData: {
        show: false,
        guest_order_id: 0,
        province: [],
        city: [],
        district: [],
        street: [],
        station: [],
        girdData: [],
        pageNumber: 1,
        currentPage: 1,
        total: 0,
        search_data: {
          province_area_id: 0,
          city_area_id: 0,
          district_area_id: 0,
          street_area_id: 0,
          station_id: 0,
          begin: 0,
          count: 5
        }
      }
    };
  }

  // 显示商品详情
  showGuestorderInfo(e, data) {
    createTab({
      uri: 'app/dist/guestorder/Info.html',
      data: {
        name: '订货意向详情'
      },
      key: 'GuestorderInfo'
    });
    Util.data('guestorder/Info', data);
  }

  // 翻页查询
  handleGetPage({currentPage}) {
    const indexViewData = this.state.indexViewData;
    const search_data = {
      ...indexViewData.search_data,
      begin: (currentPage - 1) * indexViewData.search_data.count
    };

    DB.shopGuestorderList(search_data).then((result) => {
      let pageNumber = Math.ceil(result.total / search_data.count);
      this.setState({
        indexViewData: {
          ...indexViewData,
          girdData: result.guest_order_list,
          total: result.total,
          currentPage,
          pageNumber,
          search_data: search_data
        }
      });
    }).catch(err => {
      alert(err);
    });

  }

  fetchArea(province_area_id, city_area_id, district_area_id) {
    const fetchProvince = new Promise((resolve, reject) => {
      let province = this.province;
      if (_.isEmpty(province)) {
        DB.fetchArealist().then(result => {
          province = result;
          resolve(province);
        }).catch(err => {
          reject(err);
        });
      } else {
        resolve(province);
      }
    });

    const fetchCity = new Promise((resolve, reject) => {
      let city = this.city;
      if (!province_area_id) {
        resolve([]);
      }
      if (_.isEmpty(city) || _.isEmpty(city[province_area_id])) {
        DB.fetchArealist({area_id_higher: province_area_id}).then(result => {
          city[province_area_id] = result;
          resolve(result);
        }).catch(err => {
          reject(err);
        });
      } else {
        resolve(city[province_area_id]);
      }
    });

    const fetchDistrict = new Promise((resolve, reject) => {
      let district = this.district;
      if (!city_area_id) {
        resolve([]);
      }
      if (_.isEmpty(district) || _.isEmpty(district[city_area_id])) {
        DB.fetchArealist({area_id_higher: city_area_id}).then(result => {
          district[city_area_id] = result;
          resolve(result);
        }).catch(err => {
          reject(err);
        });
      } else {
        resolve(district[city_area_id]);
      }
    });

    const fetchStreet = new Promise((resolve, reject) => {
      let street = this.street;
      if (!district_area_id) {
        resolve([]);
      }
      if (_.isEmpty(street) || _.isEmpty(street[district_area_id])) {
        DB.fetchArealist({area_id_higher: district_area_id}).then(result => {
          street[district_area_id] = result;
          resolve(result);
        }).catch(err => {
          reject(err);
        });
      } else {
        resolve(street[district_area_id]);
      }
    });

    return Promise.all([fetchProvince, fetchCity, fetchDistrict, fetchStreet]);
  }

  // 显示指派健管师弹出框
  guestorderAssign(e, row) {
    e.preventDefault();
    const province_area_id = row.province_area_id,
      city_area_id = row.city_area_id,
      district_area_id = row.district_area_id,
      street_area_id = row.street_area_id;

    this.fetchArea(province_area_id, city_area_id, district_area_id).then(([province, city, district, street]) => {
      const HecadreViewData = this.state.HecadreViewData;
      const args = {
        ...HecadreViewData.search_data,
        province_area_id: province_area_id,
        city_area_id: city_area_id,
        district_area_id: district_area_id,
        street_area_id: street_area_id,
        station_id: undefined
      };
      DB.fetchListbyareastation(args).then(result => {
        let pageNumber = Math.ceil(result.total / this.state.indexViewData.search_data.count);
        this.setState({
          HecadreViewData: {
            ...HecadreViewData,
            show: true,
            province: province,
            city: city,
            district: district,
            street: street,
            guest_order_id: row.guest_order_id,
            station: result.station_list,
            girdData: result.hecadre_list,
            pageNumber: pageNumber,
            total: result.total,
            search_data: {
              ...args
            }
          }
        });
      }).catch(err => {
        alert(err);
      });
    });

  }

  componentDidMount() {
    this.handleIndexSearch();
  }

  render() {
    const state_HecadreViewData = this.state.HecadreViewData;
    const HecadreViewData = {
      show: state_HecadreViewData.show,
      guest_order_id: state_HecadreViewData.guest_order_id,
      begin: state_HecadreViewData.search_data.begin,
      currentPage: state_HecadreViewData.currentPage,
      pageNumber: state_HecadreViewData.pageNumber,
      province_area_id: state_HecadreViewData.search_data.province_area_id,
      city_area_id: state_HecadreViewData.search_data.city_area_id,
      district_area_id: state_HecadreViewData.search_data.district_area_id,
      street_area_id: state_HecadreViewData.search_data.street_area_id,
      station_id: state_HecadreViewData.search_data.station_id,
      province: state_HecadreViewData.province,
      city: state_HecadreViewData.city,
      district: state_HecadreViewData.district,
      street: state_HecadreViewData.street,
      station: state_HecadreViewData.station,
      girdData: state_HecadreViewData.girdData,
      handleSearch: this.handleHecadreSearch,
      assignHecadre: this.handleassignHecadre,
      handleSelectChange: this.handleHecadreSelectChange,
      hideHecadreModal: this.handleHecadreHideModal,
      handleGetPage: this.handleHecadreGetPage
    };

    const conditonViewProps = {
      ...this.state.indexViewData.search_data,
      handleSearch: this.handleIndexSearch,
      handleCreateStart: this.handleIndexCreateStart,
      handleCreateEnd: this.handleIndexCreateEnd,
      handleSelectChange: this.handleIndexSelectChange,
      handleInputChange: this.handleIndexInputChange
    };
    return (
      <Container className='p20' title={'订货意向管理'}>
        <Condition>
          <div className='pull-left'>
            <ConditionForm {...conditonViewProps}/>
          </div>
          <div className='pull-right'>
            <button className='btn btn-main' onClick={this.handleExport}>导出</button>
          </div>
        </Condition>
        <Gird rowKey='guest_order_id' columns={this.columns} data={this.state.indexViewData.girdData}/>
        <PageNation getPage={this.handleGetPage} currentPage={this.state.indexViewData.currentPage} pageNumber={this.state.indexViewData.pageNumber}/>
        <HecadreListbyarea {...HecadreViewData}/>
      </Container>
    );
  }

  handleExport() {
    // downloadExcel
    /*
    indexViewData: {
      girdData: [],
      pageNumber: 1,
      total: 0,
      search_data: {
        create_start: null,
        create_end: null,
        guest_order_no: '',
        receipt_name: '',
        receipt_contact: '',
        guest_order_status: 0,
        begin: 0,
        count: 5
      }
    }
    */
    // DB.shopGuestorderExport({
    //
    // }).then().catch();
  }

  // 指派健管师
  handleassignHecadre(args) {
    DB.shopGuestorderAssign({guest_order_id: args.guest_order_id, hecadre_uid: args.hecadre_uid}).then(() => {
      this.handleIndexSearch();
      this.handleHecadreHideModal();
    }).catch(err => {
      alert(err);
    });
  }
  handleHecadreSearch() {
    const HecadreViewData = this.state.HecadreViewData;
    const search_data = HecadreViewData.search_data;
    DB.fetchListbyareastation(search_data).then((result) => {
      let pageNumber = Math.ceil(result.total / search_data.count);
      this.setState({
        HecadreViewData: {
          ...this.state.HecadreViewData,
          girdData: result.hecadre_list || [],
          // station: result.station_list || [],
          total: result.total,
          pageNumber,
          currentPage: 1,
          search_data: {
            ...search_data,
            begin: 0
          }
        }
      });
    }).catch(err => {
      alert(err);
    });
  }
  handleHecadreSelectChange(selectData) {
    debugger;
    const HecadreViewData = this.state.HecadreViewData;
    const search_data = {
      ...HecadreViewData.search_data,
      ...selectData
    };
    // 把当前区域下面区的置空
    const areaArr = ['province_area_id', 'city_area_id', 'district_area_id', 'street_area_id', 'station_id'];
    const area = _.keys(selectData)[0];
    const index = _.findIndex(areaArr, item => {
      return item === area;
    });
    if (index > -1) {
      for (let i = index + 1; i < areaArr.length; i++) {
        search_data[areaArr[i]] = 0;
      }
    }

    this.fetchArea(search_data.province_area_id, search_data.city_area_id, search_data.district_area_id).then(([province, city, district, street]) => {
      this.setState({
        HecadreViewData: {
          ...HecadreViewData,
          show: true,
          province: province,
          city: city,
          district: district,
          street: street,
          // currentPage: 1,
          station: [],
          // girdData: result.hecadre_list || [],
          // pageNumber: pageNumber,
          // total: result.total,
          search_data: {
            ...search_data
          }
        }
      });

      // DB.fetchListbyareastation(search_data).then(result => {
      //   let pageNumber = Math.ceil(result.total / this.state.indexViewData.search_data.count);
      //   this.setState({
      //     HecadreViewData: {
      //       ...HecadreViewData,
      //       show: true,
      //       province: province,
      //       city: city,
      //       district: district,
      //       street: street,
      //       currentPage: 1,
      //       station: result.station_list || [],
      //       girdData: result.hecadre_list || [],
      //       pageNumber: pageNumber,
      //       total: result.total,
      //       search_data: {
      //         ...search_data
      //       }
      //     }
      //   });
      // }).catch(err => {
      //   alert(err);
      // });
    });
    // this.setState({
    //   HecadreViewData: {
    //     ...HecadreViewData,
    //     search_data: {
    //       ...HecadreViewData.search_data,
    //       ...selectData
    //     }
    //   }
    // });
  }
  handleHecadreHideModal() {
    this.setState({
      HecadreViewData: {
        ...this.state.HecadreViewData,
        show: false
      }
    });
  }
  handleHecadreGetPage({currentPage}) {
    const HecadreViewData = this.state.HecadreViewData;
    const search_data = {
      ...HecadreViewData.search_data,
      begin: (currentPage - 1) * HecadreViewData.search_data.count
    };
    DB.fetchListbyareastation(search_data).then((result) => {
      let pageNumber = Math.ceil(result.total / search_data.count);
      this.setState({
        HecadreViewData: {
          ...this.state.HecadreViewData,
          girdData: result.hecadre_list,
          // station: result.station_list,
          total: result.total,
          currentPage,
          pageNumber,
          pageCode: pageNumber,
          search_data
        }
      });
    }).catch(err => {
      alert(err);
    });
  }

  // 列表查询事件
  handleIndexSearch() {
    // const condition = this.state.indexViewData.search_data;
    const indexViewData = this.state.indexViewData;
    const search_data = indexViewData.search_data;
    DB.shopGuestorderList(search_data).then((result) => {
      let pageNumber = Math.ceil(result.total / search_data.count);
      this.setState({
        indexViewData: {
          ...indexViewData,
          girdData: result.guest_order_list,
          total: result.total,
          pageNumber,
          currentPage: 1,
          search_data: {
            ...search_data,
            begin: 0
          }
        }
      });
    }).catch(err => {
      alert(err);
    });
  }
  handleIndexCreateStart(value, formattedValue) {
    this.setState({
      indexViewData: {
        ...this.state.indexViewData,
        search_data: {
          ...this.state.indexViewData.search_data,
          create_start: (+ new Date(formattedValue)) || null
        }
      }
    });
  }
  handleIndexCreateEnd(value, formattedValue) {
    this.setState({
      indexViewData: {
        ...this.state.indexViewData,
        search_data: {
          ...this.state.indexViewData.search_data,
          create_end: (+ new Date(formattedValue)) || null
        }
      }
    });
  }
  handleIndexSelectChange(selectData) {
    this.setState({
      indexViewData: {
        ...this.state.indexViewData,
        search_data: {
          ...this.state.indexViewData.search_data,
          ...selectData
        }
      }
    });
  }
  handleIndexInputChange(selectData) {
    this.setState({
      indexViewData: {
        ...this.state.indexViewData,
        search_data: {
          ...this.state.indexViewData.search_data,
          ...selectData
        }
      }
    });
  }
}

ReactDOM.render(< GuestorderList />, document.getElementById('__guestorder/List__'));
