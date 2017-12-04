import React, {Component} from 'react';
import _ from 'lodash';
import {Modal, Button, Col, Grid, Row} from 'react-bootstrap';
import PropTypes from 'prop-types';
import ApiMap from '../../lib/Api/ApiMap';
import http from '../../lib/Api/http';
import {logger} from '../../lib/logger';
import Gird from '../../component/table/Table';
import {alert} from '../../lib/Util';
import ConditionForm from './ConditionForm';
import PageNation from '../../component/pageNation/pageNation';
import './style.css';

class Add extends Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: '',
        dataIndex: 'prod_id',
        key: 'prod_id',
        render: (value, row) => {
          let checkedState = _.findIndex(this.props.addProdIds, function(item) {
            return item === row.prod_id;
          }) >= 0;
          return (<input type='checkbox' onChange={(e) => this.handleCheck(e, row)} checked={checkedState}/>);
        }
      }, {
        title: '商品编号',
        dataIndex: 'prod_no',
        key: 'prod_no'
      }, {
        title: '商品名称',
        dataIndex: 'prod_name',
        key: 'prod_name'
      }, {
        title: '商品产地',
        dataIndex: 'prod_src',
        key: 'prod_src'
      }, {
        title: '商品规格',
        dataIndex: 'prod_spec',
        key: 'prod_spec'
      }, {
        title: '商品分类',
        dataIndex: 'prod_cat.cat_text',
        key: 'prod_cat_text'
      }, {
        title: '商品标签',
        key: 'prod_tags_txt',
        render(value, row) {
          let tagStr = _.map(row.prod_tags, function(tag) {
            return tag['tag_text'];
          }).join('/');
          return (
            <div>
              {tagStr}
            </div>
          );
        }
      }, {
        title: '适用人群',
        dataIndex: 'prod_crowds.crowd_text',
        key: 'prod_crowds_txt'
      }, {
        title: '助记码',
        dataIndex: 'prod_assist_code',
        key: 'prod_assist_code'
      }
    ];
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handlePage = this.handlePage.bind(this);
    this.doCancel = this.doCancel.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleAllChange = this.handleAllChange.bind(this);
    this.addProd = this.addProd.bind(this);
  }
  handleAllChange(e) {
    this.props.handleAllOnChange(e);
  }
  handleCheck(e, data) {
    this.props.handleOnCheck(e, data);
  }
  handleSearch() {
    this.props.handleSearch();
  }
  handleInputChange(name, value) {
    this.props.handleInputChange(name, value);
  }
  handleSelectChange(name, value) {
    this.props.handleSelectChange(name, value);
  }
  handleCheckboxChange(name, value) {
    this.props.handleCheckboxChange(name, value);
  }
  addProd(){
    this.props.handleAddProds();
  }

  doCancel() {
    this.props.hideAddModal();
  }

  handlePage(args) {
    this.props.handlePage(args);
  }

  fetchList(condition) {
    return new Promise((resolve, reject) => {
      const params = ApiMap.shopProdList;
      http({
        url: params.url,
        method: params.method,
        data: {
          ...params.data,
          ...condition
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

  searchList() {
    const params = this.refs.conditionForm.getData();
    this.fetchList({
      begin: this.state.begin,
      count: this.state.count,
      prod_display: 1,
      ...params
    }).then(data => {
      logger(data);
      this.setState({data: data});
    }).catch(err => {
      alert(err);
    });
  }

  componentDidMount() {
    // debugger;
    // this.searchList();
    // this.searchList();
  }

  componentDidUpdate() {}

  render() {
    return (
      <Modal bsSize='large' show={this.props.show}>
        <Modal.Header>
          <Modal.Title>新增</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid className={'modalbody-container'}>
            <Row className="show-grid padding-align">
              <Col xs={12} md={12}>
                <ConditionForm tags={this.props.tags} crowds={this.props.crowds} cats={this.props.cats} handleConditionSearch={this.props.handleSearch} handleCheckboxChange={this.props.handleCheckboxChange} handleSelectChange={this.props.handleSelectChange} handleInputChange={this.props.handleInputChange} prod_assist_code={this.props.prod_assist_code} prod_name={this.props.prod_name} prod_src={this.props.prod_src} prod_cats={this.props.prod_cats} prod_tags={this.props.prod_tags} prod_crowds={this.props.prod_crowds} station_in_sale={this.props.station_in_sale}/>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <input type='checkbox' className='prodmanageadd_allcheck' onChange={this.handleAllChange} checked={this.props.allCheckState}/>
                <Gird rowKey='prod_id' columns={this.columns} data={this.props.gridData}/>
                <PageNation getPage={this.handlePage} currentPage={this.props.currentPage} pageNumber={this.props.pageNumber}/>
              </Col>
            </Row>
          </Grid>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.doCancel}>取消</Button>
          <Button className='btn btn-main' onClick={this.addProd}>确认</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

Add.propTypes = {
  tags: PropTypes.array.isRequired,
  crowds: PropTypes.array.isRequired,
  cats: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleOnCheck: PropTypes.func.isRequired,
  handleAllOnChange: PropTypes.func.isRequired,
  prod_assist_code: PropTypes.string.isRequired,
  handleAddProds: PropTypes.func.isRequired,
  prod_name: PropTypes.string.isRequired,
  prod_src: PropTypes.string.isRequired,
  prod_cats: PropTypes.array.isRequired,
  prod_tags: PropTypes.array.isRequired,
  prod_crowds: PropTypes.array.isRequired,
  addProdIds: PropTypes.array.isRequired,
  station_in_sale: PropTypes.number,
  hideAddModal: PropTypes.func.isRequired,
  handlePage: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  gridData: PropTypes.array.isRequired,
  begin: PropTypes.number.isRequired,
  prod_display: PropTypes.number.isRequired,
  allCheckState: PropTypes.bool.isRequired
};

export default Add;