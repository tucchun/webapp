import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Container from '../../component/container/Container';
import Prod from '../prod/Prod';
import DB from './DB';
import {alert, formatDateTime, amount_format} from '../../lib/Util';
// import logger from '../../lib/logger';
import {Row, ControlLabel, Col} from 'react-bootstrap';
import './style.css';
const math = require('mathjs');
const common = window.common;
class GuestorderInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prod_list: []
    };
  }

  componentDidMount() {
    const data = common.Util.data('guestorder/Info');
    DB.shopGuestorder({guest_order_id: data.guest_order_id}).then(result => {
      const ret_data = result;
      this.setState({
        ...ret_data
      });
    }).catch(err => {
      alert(err);
    });
  }

  render() {
    const data = this.state;
    return (
      <Container className='flex-auto gird-align' title={'站点商品管理>>详情'}>
        <Row className='border-bottom gird-align'>
          <Col sm={12}>
            <ControlLabel>基本信息</ControlLabel>
          </Col>
        </Row>
        <Row className='gird-align'>
          <Col sm={2}>
            意向单号
          </Col>
          <Col sm={4}>
            {data.guest_order_no}
          </Col>
          <Col sm={2}>
            提交时间
          </Col>
          <Col sm={4}>
            {formatDateTime(data.create_date)}
          </Col>
        </Row>
        <Row className='gird-align'>
          <Col sm={2}>
            金额总计
          </Col>
          <Col sm={4}>
            {data.guest_order_amount}
          </Col>
          <Col sm={2}>
            商品数量
          </Col>
          <Col sm={4}>
            {data.prod_num}
          </Col>
        </Row>
        <Row className='gird-align'>
          <Col sm={2}>
            收货人
          </Col>
          <Col sm={4}>
            {data.receipt_name}
          </Col>
          <Col sm={2}>
            联系电话
          </Col>
          <Col sm={4}>
            {data.receipt_contact}
          </Col>
        </Row>
        <Row className='gird-align'>
          <Col sm={2}>
            地址
          </Col>
          <Col sm={4}>
            {data.receipt_address}
          </Col>
          <Col sm={2}>
            指定健康管理师
          </Col>
          <Col sm={4}>
            {data.hecadre_assigned}
          </Col>
        </Row>
        <Row className='gird-align'>
          <Col sm={2}>
            操作人
          </Col>
          <Col sm={4}>
            {data.assign_by}
          </Col>
          <Col sm={2}>
            操作时间
          </Col>
          <Col sm={4}>
            {formatDateTime(data.assign_date)}
          </Col>
        </Row>
        <Row className='border-bottom gird-align'>
          <Col sm={12}>
            <ControlLabel>意向商品</ControlLabel>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col sm={4}>
            商品名称
          </Col>
          <Col sm={4}>
            商品数量
          </Col>
          <Col sm={4}>
            金额
          </Col>
        </Row>
        {data.prod_list.map(prod => {
          const prod_imgs = prod.prod_imgs || [];
          const prod_imgs_src = prod_imgs.length > 0
            ? prod_imgs[0]
            : undefined;
          return (
            <Row key={prod.prod_id} className='border-bottom'>
              <Col sm={4}>
                <Prod prod_imgs_src={prod_imgs_src} prod_price={amount_format(prod.prod_price)} prod_name={prod.prod_name}/>
              </Col>
              <Col sm={4} className='guestorder-prod text-center'>
                {'x'}{prod.prod_num}
              </Col>
              <Col sm={4} className='guestorder-prod text-center'>
                {'¥'}<span className='price_color'>{amount_format(math.eval(prod.prod_num + '*' + prod.prod_price))}</span>
              </Col>
            </Row>
          );
        })
}
        <Row className='text-center'>
          <Col sm={4}></Col>
          <Col sm={4}>
            {'共'}<span className="price_color">{_.reduce(_.map(data.prod_list, (prod) => {
                return prod.prod_num;
              }), (sum, item) => {
                return sum + item;
              })}
            </span>{'件商品'}
          </Col>
          <Col sm={4}>
            {'合计¥'}<span className="price_color">{_.reduce(_.map(data.prod_list, (prod) => {
                return amount_format(math.eval(prod.prod_num + '*' + prod.prod_price));
              }), (sum, item) => {
                return sum + item;
              })}</span>
          </Col>
        </Row>
      </Container>
    );
  }
}
ReactDOM.render(
  <GuestorderInfo data={common.Util.data('guestorder/Info')}/>, document.getElementById('__guestorder/Info__'));
