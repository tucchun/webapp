import React, {Component} from 'react';
import PropTypes from 'prop-types';
import http from '../../lib/Api/http';
import ApiMap from '../../lib/Api/ApiMap';
import {
    Modal,
    Button,
    Form,
    FormGroup,
    ControlLabel,
    FormControl,
} from 'react-bootstrap';

export class HealthManagerModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hecadreUid: ""
    };
    this.comfirmModify = this.comfirmModify.bind(this);
    this.selectHecadre = this.selectHecadre.bind(this);
  }

  comfirmModify() {
    let detailList = [];
    this.props.tableData.forEach((item) => {
      if (item.isChecked) {
        detailList.push(item.detail_id);
      }
      // item.isChecked && detailList.push(item.detail_id);
    });

    console.log(detailList);

    const {hecadreUid} = this.state;
    console.log(detailList, hecadreUid);

    const parms = {
        ...ApiMap.commonData,
        detail_list: detailList,
        hecadre_uid: hecadreUid,
    };

    http({
        url: ApiMap.stationNongridAssign.url,
        method: ApiMap.stationNongridAssign.method,
        data: JSON.stringify(parms)
    })
    .then((res) => {
        if (res.data.ret_code === 1) {
            this.props.getAddrList();
        } else {
          common.alert(res.data.ret_msg);
        }
    }, (error) => {
      common.alert(error);
    });

    this.props.hide();
  }

  selectHecadre(e) {
    this.setState({
      hecadreUid: parseInt(e.target.value)
    }, () => {
      console.log(this.state);
    });
  }

  render() {
    const {isShow, hide, allHecadreList} = this.props;
    return (
      <Modal show={isShow} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>分配健管师</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form inline className="pdtb health-manager">
              <FormGroup controlId="station_in_sale">
                  <FormControl
                      componentClass="select"
                      name='station_in_sale'
                      placeholder="请选择健康管理师"
                      onChange={this.selectHecadre}>
                      <option value="">请选择健管师</option>
                      {allHecadreList.map((item, index) =>
                        <option value={item.hecadre_uid} key={index}>{item.hecadre_name}</option>
                      )}
                  </FormControl>
              </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hide}>取消</Button>
          <Button bsStyle="primary" onClick={this.comfirmModify}>确定</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}


export class AddrModifyModal extends Component {

    constructor(props) {
      super(props);
      this.state = {
        checkedProvince: "",
        checkedCity: "",
        checkedArea: "",
        checkedStreet: "",
        checkedCommittee: "",
        buildingName: "",
        buildingNo: "",
        buildingUnit: "",
        householdNo: "",
        provinceList: [],
        cityList: [],
        areaList: [],
        streetList: [],
        committeeList: []
      };

      this.comfirmModify = this.comfirmModify.bind(this);
      this.getPCAList = this.getPCAList.bind(this);
      this.changeProvince = this.changeProvince.bind(this);
      this.changeCity = this.changeCity.bind(this);
      this.changeArea = this.changeArea.bind(this);
      this.changeStreet = this.changeStreet.bind(this);
      this.changeCommittee = this.changeCommittee.bind(this);
      this.changebuildingName = this.changebuildingName.bind(this);
      this.changebuildingNo = this.changebuildingNo.bind(this);
      this.changebuildingUnit = this.changebuildingUnit.bind(this);
      this.changehouseholdNo = this.changehouseholdNo.bind(this);

    }

    componentWillMount() {
      console.log(this.state);

      this.getPCAList('provinceList');
    }
  
    // 确认修改地址
    comfirmModify() {

      const {checkedProvince, checkedCity, checkedArea, checkedStreet, checkedCommittee, buildingName, buildingNo, buildingUnit, householdNo} = this.state;

      console.log(buildingUnit);

      const parms = {
        ...ApiMap.commonData,
        detail_id: common.Util.data('parms').detailId, // 辖区外住户detail id
        province_code: checkedProvince, //省份code
        city_code: checkedCity, //市code
        district_code: checkedArea, //区code
        street_code: checkedStreet, //街道code
        village_code: checkedCommittee, //村/居委会code
        building_name: buildingName, //小区/建筑名
        building_no: buildingNo, //楼栋, eg: A栋
        buidling_unit: buildingUnit, //单元, eg: 1单元
        household_no: householdNo //房号, eg: 301
      };

      http({
        url: ApiMap.stationNongridUpdate.url,
        method: ApiMap.stationNongridUpdate.method,
        data: JSON.stringify(parms)
      })
      .then((res) => {
          if (res.data.ret_code === 1) {
              common.alert(res.data.ret_msg);
              this.props.hide();
              this.props.getAddrList();
          } else {
            common.alert(res.data.ret_msg);
          }
      }, (error) => {
        common.alert(error);
      });

      this.props.hide();
    }

    // 获取省级列表
    getPCAList(grade, areaIdHigher) {
      var parms = {
        ...ApiMap.commonData,
      };

      if (grade === "cityList" || grade === "areaList" || grade === "streetList" || grade === "committeeList") {
        parms.area_id_higher = areaIdHigher;
      }

      http({
          url: ApiMap.getAreaList.url,
          method: ApiMap.getAreaList.method,
          data: JSON.stringify(parms)
      })
      .then((res) => {
          if (res.data.ret_code === 1) {
            const resData = res.data.ret_data;
              this.setState({
                [grade]: resData
              });
          } else {
              common.alert(res.data.ret_msg);
              //console.log(res.data.ret_msg);
          }
      }, (error) => {
        common.alert(error);
      });
    }

    changeProvince(e) {
      const id = parseInt(e.target.value);
      let provinceList = this.state.provinceList;
      let code = '';

      for (let i = 0; i < provinceList.length; i++) {
        if (provinceList[i].area_id = id) {
          code = provinceList[i].area_code;
        }
      }

      this.setState({
        checkedProvince: code,
        checkedCity: "",
        checkedArea: "",
        checkedStreet: "",
        checkedCommittee: ""
      });

      this.getPCAList('cityList', id);
    }

    changeCity(e) {
      const id = parseInt(e.target.value);
      let cityList = this.state.cityList;
      let code = '';

      for (let i = 0; i < cityList.length; i++) {
        if (cityList[i].area_id = id) {
          code = cityList[i].area_code;
        }
      }
      this.setState({
        checkedCity: code,
        checkedArea: "",
        checkedStreet: "",
        checkedCommittee: ""
      })

      this.getPCAList('areaList', id);
    }

    changeArea(e) {
      const id = parseInt(e.target.value);
      let areaList = this.state.areaList;
      let code = '';

      for (let i = 0; i < areaList.length; i++) {
        if (areaList[i].area_id = id) {
          code = areaList[i].area_code;
        }
      }

      this.setState({
        checkedArea: code,
        checkedStreet: "",
        checkedCommittee: ""
      });

      this.getPCAList('streetList', id);
    }

    changeStreet(e) {
      const id = parseInt(e.target.value);
      let streetList = this.state.streetList;
      let code = '';

      for (let i = 0; i < streetList.length; i++) {
        if (streetList[i].area_id = id) {
          code = streetList[i].area_code;
        }
      }

      this.setState({
        checkedStreet: code,
        checkedCommittee: ""
      });

      this.getPCAList('committeeList', id);
    }

    changeCommittee(e) {
      const id = parseInt(e.target.value);
      let committeeList = this.state.committeeList;
      let code = '';

      for (let i = 0; i < committeeList.length; i++) {
        if (committeeList[i].area_id = id) {
          code = committeeList[i].area_code;
        }
      }

      this.setState({
        checkedCommittee: code
      });
    }

    changebuildingName(e) {
      const code = e.target.value;
      this.setState({
        buildingName: code
      })
    }

    changebuildingNo(e) {
      const code = e.target.value;
      this.setState({
        buildingNo: code
      });
    }

    changebuildingUnit(e) {
      const code = e.target.value;
      this.setState({
        buildingUnit: code
      }, () => {
        console.log(this.state);
      });
    }

    changehouseholdNo(e) {
      const code = e.target.value;
      this.setState({
        householdNo: code
      });
    }

  
    render() {
      const {isShow, hide} = this.props;
      const {provinceList, cityList, areaList, streetList, committeeList} = this.state;
      return (
        <Modal show={isShow} onHide={hide}>
          <Modal.Header closeButton>
            <Modal.Title>修改地址</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{paddingBottom: '20px'}}>
                <div className="form-group clearfix modal-from">
                    <div className="col-sm-2 control-label">省市区:</div>
                    <div className="col-sm-9">
                      <FormControl
                          componentClass="select"
                          name='station_in_sale'
                          placeholder="省"
                          style={{marginLeft: 0}}
                          onChange={this.changeProvince}>
                          <option value="">请选择省</option>
                          {provinceList.map((item, index) =>
                            <option value={item.area_id} key={index}>{item.area_name}</option>
                          )}
                      </FormControl>
                      <FormControl
                          componentClass="select"
                          name='station_in_sale'
                          placeholder="市"
                          onChange={this.changeCity}>
                          <option value="">请选择市</option>
                          {cityList.map((item, index) =>
                            <option value={item.area_id} key={index}>{item.area_name}</option>
                          )}
                      </FormControl>
                      <FormControl
                          componentClass="select"
                          name='station_in_sale'
                          placeholder="区"
                          onChange={this.changeArea}>
                          <option value="">请选择区</option>
                          {areaList.map((item, index) =>
                            <option value={item.area_id} key={index}>{item.area_name}</option>
                          )}
                      </FormControl>
                    </div>
                </div>
                <div className="form-group clearfix modal-from">
                    <div className="col-sm-2 control-label">街道:</div>
                    <div className="col-sm-7">
                      <FormControl
                          componentClass="select"
                          name='station_in_sale'
                          placeholder="省"
                          style={{marginLeft: 0}}
                          onChange={this.changeStreet}>
                          <option value="">请选择街道</option>
                          {streetList.map((item, index) =>
                            <option value={item.area_id} key={index}>{item.area_name}</option>
                          )}
                      </FormControl>
                    </div>
                </div>
                <div className="form-group clearfix modal-from">
                    <div className="col-sm-2 control-label">居委会:</div>
                    <div className="col-sm-7">
                      <FormControl
                          componentClass="select"
                          name='station_in_sale'
                          placeholder="省"
                          style={{marginLeft: 0}}
                          onChange={this.changeCommittee}>
                          <option value="">请选择居委会</option>
                          {committeeList.map((item, index) =>
                            <option value={item.area_id} key={index}>{item.area_name}</option>
                          )}
                      </FormControl>
                    </div>
                </div>
                <div className="form-group clearfix modal-from">
                    <div className="col-sm-2 control-label">小区:</div>
                    <div className="col-sm-7">
                      <FormControl type="text" placeholder="小区" onChange={this.changebuildingName} />
                    </div>
                </div>
                <div className="form-group clearfix modal-from">
                    <div className="col-sm-2 control-label">楼栋:</div>
                    <div className="col-sm-7">
                      <FormControl type="text" placeholder="楼栋" onChange={this.changebuildingNo} />
                    </div>
                </div>
                <div className="form-group clearfix modal-from">
                    <div className="col-sm-2 control-label">单元:</div>
                    <div className="col-sm-7">
                      <FormControl type="text" placeholder="单元" onChange={this.changebuildingUnit} />
                    </div>
                </div>
                <div className="form-group clearfix modal-from">
                    <div className="col-sm-2 control-label">门牌号:</div>
                    <div className="col-sm-7">
                      <FormControl type="text" placeholder="门牌号" onChange={this.changehouseholdNo} />
                    </div>
                </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={hide}>取消</Button>
            <Button bsStyle="primary" onClick={this.comfirmModify}>确定</Button>
          </Modal.Footer>
        </Modal>
      );
    }
}

// 确认删除Modal
export class ComfirmModifyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    this.comfirmDelete = this.comfirmDelete.bind(this);
  }

  comfirmDelete() {
    const parms = {
      ...ApiMap.commonData,
      detail_id: common.Util.data('parms').detailId, // 辖区外住户detail id
    }

    http({
      url: ApiMap.stationNongridDelete.url,
      method: ApiMap.stationNongridDelete.method,
      data: JSON.stringify(parms)
    })
    .then((res) => {
        if (res.data.ret_code === 1) {
            this.props.hide();
            this.props.getAddrList();
        } else {
          common.alert(res.data.ret_msg);
        }
    }, (error) => {
      common.alert(error);
    });

    this.props.hide();
  }

  render() {
    const {isShow, hide} = this.props;
    return (
      <Modal show={isShow} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>确认删除</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{textAlign: 'center', marginBottom: 0, padding: '15px 0'}}>是否确认删除？</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hide}>取消</Button>
          <Button bsStyle="primary" onClick={this.comfirmDelete}>确定</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
