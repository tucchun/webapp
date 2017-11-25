import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Gird from '../../component/table/Table';
import Container from '../../component/container/Container';
import Condition from '../../component/condition/Condition';
import PageNation from '../../component/pageNation/pageNation';
import ApiMap from '../../lib/Api/ApiMap';
import http from '../../lib/Api/http';
import ConditionForm from './form';
import './style.css';

class CommodityManagement extends Component {

  constructor(props) {
    super(props);
    this.handleGetPage = this.handleGetPage.bind(this);
    this.columns = [
      {
        title: '商品编号',
        key: 'prod_no',
        dataIndex: 'prod_no'
      }, {
        title: '商品名称',
        key: 'prod_name',
        dataIndex: 'prod_name'
      }, {
        title: '商品产地',
        key: 'prod_src',
        dataIndex: 'prod_src'
      }, {
        title: '商品规格',
        key: 'prod_spec',
        dataIndex: 'prod_spec'
      }, {
        title: '商品分类',
        key: 'prod_cat_text',
        dataIndex: 'prod_cat.cat_text'
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
        key: 'prod_crowd_txt',
        render(value, row) {
          let crowdStr = _.map(row.prod_crowds, function(crowd) {
            return crowd['crowd_text'];
          }).join('/');
          return (
            <div>
              {crowdStr}
            </div>
          );
        }
      }, {
        title: '助记码',
        key: 'prod_assist_code',
        dataIndex: 'prod_assist_code'
      }, {
        title: '是否在售',
        key: 'prod_in_sale',
        dataIndex: 'prod_in_sale',
        render(value, row) {
          if (row.prod_in_sale === 1) {
            return '在售';
          }
          if (row.prod_in_sale === 0) {
            return '停售';
          }
          return ' ';
        }
      }, {
        title: '是否上架',
        key: 'station_in_sale',
        dataIndex: 'station_in_sale',
        render(value, row) {
          if (row.station_in_sale === 1) {
            return '上架';
          }
          if (row.station_in_sale === 0) {
            return '未上架';
          }
          return ' ';
        }
      }, {
        key: 'Operations',
        title: '操作',
        render() {
          return (
            <div className='optCol'>
              <a href="#">修改</a>
              <a href="#">详情</a>
              <a href="#">删除</a>
            </div>
          );
        }
      }
    ];
    this.state = {
      girdData: [],
      currentPage: 1,
      pageCount: 10,
      pageNumber: 1,
      total: 0,
      cats: [],
      crowds: [],
      tags: []
    };
  }

  fetchCommodityData() {
    return http({url: ApiMap.shopStationProdList.url}).then((response) => {
      return response.data;
    });
  }

  fetchShopProdmeta() {
    return http({url: ApiMap.shopProdmeta.url}).then((response) => {
      return response.data;
    });
  }

  handleGetPage() {}

  componentWillMount() {}

  componentDidMount() {
    this.fetchCommodityData().then(data => {
      if (data.ret_code === 1) {
        let pageNumber = Math.ceil(data.ret_data.total / this.state.pageCount);
        this.setState({girdData: data.ret_data.prod_list, total: data.total, pageNumber: pageNumber});
      } else {
        // alert(data.ret_msg);
      }
    }).catch(() => {
      // console.log(err);
    });

    this.fetchShopProdmeta().then(data => {
      if (data.ret_code === 1) {
        this.setState({cats: data.ret_data.cats, crowds: data.ret_data.crowds, tags: data.ret_data.tags});
      } else {
        // alert(data.ret_msg);
      }
    }).catch(() => {
      // console.log(err);
    });
  }

  componentWillUnmount() {}

  componentWillReceiveProps() {}

  shouldComponentUpdate() {
    return true;
  }

  componentWillUpdate() {}

  componentDidUpdate() {}

  componentDidCatch() {}

  render() {
    return (
      <Container title={'商品管理'}>
        <Condition>
          <ConditionForm cats={this.state.cats} crowds={this.state.crowds} tags={this.state.tags} />
        </Condition>
        <Gird rowKey='prod_id' columns={this.columns} data={this.state.girdData}/>
        <PageNation getPage={this.handleGetPage} currentPage={this.state.currentPage} pageNumber={this.state.pageNumber}/>
      </Container>
    );
  }
}

ReactDOM.render(< CommodityManagement />, document.getElementById('__commodityManagement/commodityManagement__'));
