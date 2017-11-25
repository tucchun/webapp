//分页展示组件
import React from 'react';
import Link from './link';
import PropTypes from 'prop-types';
import './pagenation.css';
class PageNation extends React.Component{
    constructor(props) {
        super(props);
        this.state = props;
    }
    getLinkList(){
        let list = [
            <Link key="firstpage" pageArgument={
                {
                    page:'首页',
                    pageCode:1,
                    currentPage:this.props.currentPage
                }
            } onLink={ev => this.props.getPage(ev)} />,
            <Link key="prePage" pageArgument={
                {
                    page:'上一页',
                    pageCode:this.props.currentPage - 1 === 0 ? 1 : this.props.currentPage - 1,
                    currentPage:this.props.currentPage
                }
            } onLink={ev => this.props.getPage(ev)} />
        ];
        for(let i = 0;i < this.props.pageNumber;i++){
            list.push(
                <Link key={"page"+i} pageArgument={
                    {
                        page:(i+1).toString(),
                        pageCode:i+1,
                        currentPage:this.props.currentPage
                    }
                } onLink={ev => this.props.getPage(ev)} />
            );
        }
        list = [
            ...list,
            <Link key="nextPage" pageArgument={
                {
                    page:'下一页',
                    pageCode:(this.props.currentPage+1 >= this.props.pageNumber ? this.props.pageNumber : this.props.currentPage+1),
                    currentPage:this.props.currentPage
                }
            } onLink={ev => this.props.getPage(ev)} />,
            <Link key="lastPage" pageArgument={
                {
                    page:'末页',
                    pageCode:this.props.pageNumber,
                    currentPage:this.props.currentPage
                }
            } onLink={ev => this.props.getPage(ev)} />
        ];
        return list;
    }
    render(){
        let style = {clear:'both'};
        return (
            <div className="pd20">
                <div className="pageNation">{this.getLinkList()}</div>
                <div style={style}>{''}</div>
            </div>
        );
    }
}

PageNation.propTypes={
    getPage:PropTypes.func.isRequired,//回调函数，用来获取数据
    pageNumber:PropTypes.number.isRequired,
    currentPage:PropTypes.number.isRequired
};
export default PageNation;