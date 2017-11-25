import React from 'react';
import ReactDom from 'react-dom';
import Container from '../../component/container/Container';
import Condition from '../../component/condition/Condition';
import Table from '../../component/table/Table';
import PageNation from "../../component/pageNation/pageNation";
import './goodsTag.css';

class GoodsTag extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage: 1,
            pageNumber: 10,
            pageCode:1
        };
        this.getPage = this.getPage.bind(this);
    }
    getPage(ev){
        this.setState({
            currentPage:ev.currentPage,
            pageCode:ev.pageCode
        })
    }
    render(){
        return (
            <Container title={'商品标签管理'}>
                <div className="goodsTaglist">
                    <Condition>
                        <form id="js_search" className="form-inline">
                            <label htmlFor="">商品标签</label>
                            <input type="text" className="form-control"/>
                            <button type="submit" className="btn btn-main">查询</button>
                        </form>
                    </Condition>
                    <Table />
                    <PageNation getPage={this.getPage} pageNumber={this.state.pageNumber} currentPage={this.state.currentPage}/>
                </div>
            </Container>
        );
    }
}

ReactDom.render(
    <GoodsTag />,
    document.getElementById('__goodsTag__')
);