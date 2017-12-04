import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SalesData from '../../component/salesData';
import Gird from '../../component/table/Table';
import PageNation from '../../component/pageNation/pageNation';
import DatePicker from "react-bootstrap-date-picker";
import http from '../../lib/Api/http';
import ApiMap from '../../lib/Api/ApiMap';
import {setInitDate, getTimestamp, addDate, orderStatus, downloadExcel} from '../../lib/Util';
import '../../lib/styles/index.css';
import { Modal } from 'react-bootstrap';


class JGSSalesStats extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
              className: 'my-col-class',
              title: '订单编号',
              dataIndex: 'order_no',
              key: 'a'
            }, {
              className: 'my-col-class',
              id: '123',
              title: '订单时间',
              dataIndex: 'create_date',
              key: 'b',
            }, {
              className: 'my-col-class',
              title: '实付金额',
              dataIndex: 'pay_amount',
              key: 'c',
            }, {
                className: 'my-col-class',
                title: '商品数量',
                dataIndex: 'prod_num',
                key: 'd',
            }, {
                className: 'my-col-class',
                title: '用户姓名',
                dataIndex: 'receipt_name',
                key: 'e',
            }, {
                className: 'my-col-class',
                title: '联系电话',
                dataIndex: 'receipt_contact',
                key: 'f',
            }, {
              className: 'my-col-class',
              title: '地址',
              dataIndex: 'receipt_address',
              key: 'g'
            }, {
                className: 'my-col-class',
                title: '操作',
                dataIndex: 'oper',
                key: 'h',
                render: (text, record) => <a onClick={e => this.viewDetails(record.order_id, e)} href="javascript:;">操作</a>,
            }
        ];
        this.state = {
            totalSale: 0,
            totalProdNum: 0,
            totalOrderNum: 0,
            pageNum: 0,
            pageCount: 10,
            currentPage: 1,
            beginNum: 0,
            startTime: setInitDate().startTime,
            endTime: setInitDate().endTime,
            format: "YYYY/MM/DD",
            showModal: false,
            details: {
                "prod_list": []
            },
            tableData: []
        };

        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
        this.handleClickSearch = this.handleClickSearch.bind(this);
        this.handleClickExport = this.handleClickExport.bind(this);
        this.handleTogglePage = this.handleTogglePage.bind(this);
        this.close = this.close.bind(this);
    }

    componentWillMount() {
        console.log(common.Util.data('parms'));
        
        this.setState({
            hecadreUid: common.Util.data('parms').hecadreUid,
            orgId: common.Util.data('parms').orgId
        }, () => {
            console.log(this.state);
            this.getShopHecadreSaleStat();
        });
       
    }
    componentDidMount() {}

    // 获取健管师销售统计
    getShopHecadreSaleStat() {
        const {startTime, endTime, pageCount, currentPage, beginNum, hecadreUid, orgId} = this.state;
        const parms = {
            ...ApiMap.commonData,
            hecadre_uid: hecadreUid,
            org_id: orgId,
            stat_start: getTimestamp(startTime),
            stat_end: getTimestamp(endTime),
            begin: beginNum,
            count: pageCount
        };

        http({
            url: ApiMap.getShopHecadreSaleStat.url,
            method: ApiMap.getShopHecadreSaleStat.method,
            data: JSON.stringify(parms)
        })
        .then((res) => {
            if (res.data.ret_code === 1) {
                const resData = res.data.ret_data;
                this.setState({
                    pageNum: Math.ceil(resData.total / pageCount),
                    totalSale: resData.total_sale,
                    totalProdNum: resData.total_prod_num,
                    totalOrderNum: resData.total_order_num,
                    tableData: resData.order_list.map(function (item, index) {
                        item.key = (currentPage - 1) * pageCount + index + 1;
                        return item;
                    })
                });
            } else {
                common.alert(res.data.ret_msg);
            }
        }, (error) => {
            common.alert(error);
        });
    }

    handleStartTimeChange(value, formattedValue) {
        this.setState({
            startTime: formattedValue
        });
    }
    handleEndTimeChange(value, formattedValue) {
        this.setState({
            endTime: formattedValue
        });
    }

    handleClickSearch() {
        this.getShopHecadreSaleStat();
    }

    // 导出健管师销售统计
    handleClickExport() {
        const {startTime, endTime, hecadreUid, orgId} = this.state;
        const parms = {
            ...ApiMap.commonData,
            hecadre_uid: hecadreUid,
            org_id: orgId,
            stat_start: getTimestamp(startTime),
            stat_end: getTimestamp(endTime)
        };
        http({
            url: ApiMap.shopHecadreSaleStatExport.url,
            method: ApiMap.shopHecadreSaleStatExport.method,
            data: JSON.stringify(parms),
            responseType: 'blob'
        })
        .then((res) => {
            downloadExcel(res, '销售统计')
        }, (error) => {
            common.alert(error);
        });
    }

    handleTogglePage(ev) {
        console.log(this.state.currentPage);
        console.log(ev);
        this.setState({
            currentPage: ev.currentPage,
        }, () => {
            this.setState({
                beginNum: (this.state.currentPage - 1) * this.state.pageCount
            }, () => {
                this.getShopHecadreSaleStat();
            });
        });
    }

    close() {
        this.setState({
            showModal: false
        });
    }
    // 查看详情
    viewDetails(num, e) {
        // console.log(Math.random(), num);
        const parms = {
            ...ApiMap.commonData,
            order_id: num
        };

        http({
            url: ApiMap.getShopOrder.url,
            method: ApiMap.getShopOrder.method,
            data: parms
        })
        .then((res) => {
            if (res.data.ret_code === 1) {
                const resData = res.data.ret_data;
                this.setState({
                    showModal: true,
                    details: resData
                });
            } else {
                common.alert(res.ret_msg);
            }
        }, (error) => {
            common.alert(error);
        });
    }

    render() {
        const {totalSale, totalProdNum, totalOrderNum, startTime, endTime, format, pageNum, currentPage, tableData, showModal, details} = this.state;
        const columns = this.columns;
        const start = startTime && new Date(addDate(startTime)).toISOString();
        const end = endTime && new Date(addDate(endTime)).toISOString();
        return (
            <div className="wrap hospital">
                <div className="tb-head">销售统计</div>
                <div className="tb-content">
                    <div className="tb-wrap">
                        <div className="clearfix pdtb">
                            <div className="pull-left">
                                <div className="date-wrap">
                                    <DatePicker
                                        value={start}
                                        dateFormat={format}
                                        onChange={this.handleStartTimeChange}
                                    />
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;
                                <div className="date-wrap">
                                    <DatePicker
                                        value={end}
                                        dateFormat={format}
                                        onChange={this.handleEndTimeChange}
                                    />
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button type="button" className="btn btn-main" id="js-search" onClick={this.handleClickSearch}>查询</button>
                            </div>
                            <div className="pull-right">
                                <button type="button" className="btn btn-main" id="btn-export" onClick={this.handleClickExport}>导出</button>
                            </div>
                        </div>
                        <SalesData
                            totalAmount={totalSale}
                            totalGoods={totalProdNum}
                            totalPerson={totalOrderNum}
                        />
                        <Gird
                            rowClassName='my-row-class'
                            columns={columns}
                            data={tableData}
                        />
                        <PageNation
                            pageNumber={pageNum}
                            currentPage={currentPage}
                            getPage={this.handleTogglePage}
                        />
                    </div>
                </div>
                <Modal show={showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>详情</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={{paddingBottom: '20px'}}>
                            <div className="clearfix" style={{padding: '15px', borderBottom: '1px solid #e5e5e5'}}>
                                <div className="pull-left">
                                    <h5 style={{margin: 0, paddingTop: '10px', fontSize: '16px'}}>基本信息</h5>
                                </div>
                                <div className="pull-right" style={{verticalAlign: 'middle'}}>
                                    <button type="button" className="btn btn-main">{orderStatus(details.order_status)}</button>
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <div className="col-sm-3 control-label">订单编号:</div>
                                <div className="col-sm-7">{details.order_no}</div>
                            </div>
                            <div className="form-group clearfix">
                                <div className="col-sm-3 control-label">订单时间:</div>
                                <div className="col-sm-7">{details.create_date}</div>
                            </div>
                            <div className="form-group clearfix">
                                <div className="col-sm-3 control-label">订单金额（元）:</div>
                                <div className="col-sm-7">{details.order_amount}</div>
                            </div>
                            <div className="form-group clearfix">
                                <div className="col-sm-3 control-label">商品数量:</div>
                                <div className="col-sm-7">{details.prod_num}</div>
                            </div>
                            <div className="form-group clearfix">
                                <div className="col-sm-3 control-label">用户姓名:</div>
                                <div className="col-sm-7">{details.receipt_name}</div>
                            </div>
                            <div className="form-group clearfix">
                                <div className="col-sm-3 control-label">联系电话:</div>
                                <div className="col-sm-7">{details.receipt_contact}</div>
                            </div>
                            <div className="form-group clearfix">
                                <div className="col-sm-3 control-label">地址:</div>
                                <div className="col-sm-7">{details.receipt_address}</div>
                            </div>
                            <div className="form-group clearfix">
                                <div className="col-sm-3 control-label">推荐人:</div>
                                <div className="col-sm-7">{details.create_hecadre}</div>
                            </div>
                            <div className="form-group clearfix">
                                <div className="col-sm-3 control-label">送货人:</div>
                                <div className="col-sm-7">{details.ship_hecadre}</div>
                            </div>
                            <div style={{padding: '15px', borderBottom: '1px solid #e5e5e5'}}>
                                <h5 style={{margin: 0, paddingTop: '10px', fontSize: '16px'}}>订单商品</h5>
                            </div>
                            <div>
                                <div className="list-title clearfix">
                                    <span>商品名称</span>
                                    <span>商品数量</span>
                                    <span>商品金额</span>
                                </div>
                                <ul className="prod-list">
                                    {
                                        details.prod_list.map((item) => <li key={item.prod_id} className="clearfix">
                                            <div className="prod-col tal clearfix">
                                                <img className="pull-left" src={item.prod_imgs[0]} />
                                                <div className="pull-left">
                                                    <p title={item.prod_name}>{item.prod_name}</p>
                                                    <span>{item.prod_price}</span>
                                                </div>
                                            </div>
                                            <div className="prod-col lh60">{item.prod_num}</div>
                                            <div className="prod-col lh60">{item.prod_num * item.prod_price}</div>
                                        </li>)
                                    }
                                </ul>
                                <div className="list-total clearfix">
                                    <span>{details.order_amount}</span>
                                    <span>{details.prod_num}</span>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                </Modal>
            </div>
        )
    }
}

ReactDOM.render(
    <JGSSalesStats />,
    document.getElementById('__jgssalesStats/jgssalesStats__')
);