import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SalesData from '../../component/salesData';
import Gird from '../../component/table/Table';
import PageNation from '../../component/pageNation/pageNation';
import DatePicker from "react-bootstrap-date-picker";
import http from '../../lib/Api/http';
import ApiMap from '../../lib/Api/ApiMap';
import {setInitDate, getTimestamp, addDate, downloadExcel} from '../../lib/Util';
import '../../lib/styles/index.css';

class SalesStats extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
              className: 'my-col-class',
              title: '名称',
              dataIndex: 'stat_name',
              key: 'a'
            }, {
              className: 'my-col-class',
              id: '123',
              title: '订单金额(元)',
              dataIndex: 'stat_sale',
              key: 'b',
            }, {
              className: 'my-col-class',
              title: '商品数量',
              dataIndex: 'stat_prod_num',
              key: 'c',
            }, {
                className: 'my-col-class',
                title: '购买人次',
                dataIndex: 'stat_order_num',
                key: 'd',
            }, {
                className: 'my-col-class',
                title: '操作',
                dataIndex: 'e',
                key: 'e',
                render: (text, record) => <a onClick={e => this.createTab(record.stat_id, e)} href="javascript:;">详情</a>
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
            //orgId: 0,
            tableData: []
        };

        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
        this.handleClickSearch = this.handleClickSearch.bind(this);
        this.handleClickExport = this.handleClickExport.bind(this);
        this.handleTogglePage = this.handleTogglePage.bind(this);
    }

    componentWillMount() {
        console.log(common.Util.data('parms'));

        if (!common.Util.data('parms')) {
            this.getShopSaleStat();
        } else {
            this.setState({
                orgId: common.Util.data('parms').orgId
            }, () => {
                console.log(this.state);
                this.getShopSaleStat();
            });
        }
    }
    componentDidMount() {}

    // 获取销售统计
    getShopSaleStat() {
        const {startTime, endTime, pageCount, currentPage, orgId, beginNum} = this.state;
        const parms = {
            ...ApiMap.commonData,
            org_id: orgId,
            stat_start: getTimestamp(startTime),
            stat_end: getTimestamp(endTime),
            begin: beginNum,
            count: pageCount
        };

        http({
            url: ApiMap.getShopSaleStat.url,
            method: ApiMap.getShopSaleStat.method,
            data: JSON.stringify(parms)
        })
        .then((res) => {
            if (res.data.ret_code === 1) {
                const resData = res.data.ret_data;
                console.log(resData);
                this.setState({
                    pageNum: Math.ceil(resData.total / pageCount),
                    totalSale: resData.total_sale,
                    totalProdNum: resData.total_prod_num,
                    totalOrderNum: resData.total_order_num,
                    tableData: resData.stat_list.map(function (item, index) {
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
        this.setState({
            currentPage: 1,
        }, () => {
            this.setState({
                beginNum: (this.state.currentPage - 1) * this.state.pageCount
            }, () => {
                this.getShopSaleStat();
            });
        });
    }

    // 导出销售统计
    handleClickExport() {
        const {startTime, endTime} = this.state;
        const parms = {
            ...ApiMap.commonData,
            stat_start: getTimestamp(startTime),
            stat_end: getTimestamp(endTime)
        };
        http({
            url: ApiMap.shopSaleStatExport.url,
            method: ApiMap.shopSaleStatExport.method,
            data: JSON.stringify(parms),
            responseType: 'blob'
        })
        .then((res) => {
            console.log(res);
            downloadExcel(res, '销售统计');
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
                this.getShopSaleStat();
            });
        });
    }

    createTab(id, e) {
        console.log(common, id);
        if (id.toString().length === 10) {
            common.createTab({
                uri: 'app/dist/jgssalesStats/jgssalesStats.html',
                data: {
                    name: '销售统计-健管师'
                },
                key: 'jgssalesStats',
            });
            common.Util.data('parms', {
                orgId: common.Util.data('parms').orgId,
                hecadreUid: id
            });
        } else {
            common.createTab({
                uri: 'app/dist/salesStats/salesStats.html',
                data: {
                    name: '销售统计'
                },
                key: 'salesStats',
            });

            common.Util.data('parms', {
                orgId: id
            });
        }

    }

    render() {
        const {totalSale, totalProdNum, totalOrderNum, startTime, endTime, format, inputFormat, mode, pageNum, currentPage, tableData} = this.state;
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
            </div>
        )
    }
}

ReactDOM.render(
    <SalesStats />,
    document.getElementById('__salesStats/salesStats__')
);