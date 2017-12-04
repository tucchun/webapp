import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Form} from 'react-bootstrap';

class QueryForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fromData:{
                prod_assist_code:'',
                prod_name:'',
                prod_src:'',
                prod_in_sale:1,
                prod_allow_sale:1,
                prod_display:1
            }
        };
        this.getFormData = this.getFormData.bind(this);
    }

    componentDidMount(){
        let formEle = document.getElementById('from-query');
        let arr = QueryForm.handleFormData(formEle);
        this.setState({
            fromData:arr
        });
    }

    //处理表单数据
    static handleFormData(form){
        let formEle = form,arr = {};
        for(let i = 0;i < formEle.elements.length; i ++){
            let feled = formEle.elements[i];
            switch (feled.type){
                case undefined:
                case 'button':
                case 'file':
                case 'reset':
                case 'submit':
                    break;
                case 'checkbox':
                case 'radio':
                    if (!feled.checked) {
                        break;
                    }
                default:
                    if(arr[feled.name]){
                        arr[feled.name] = arr[feled.name]+','+feled.value;
                    }else{
                        arr[feled.name]=parseInt(feled.value) || feled.value;
                    }
            }
        }
        return arr;
    }

    //提交时触发方法
    getFormData(ev){
        ev.preventDefault();
        let arr = QueryForm.handleFormData(document.getElementById('from-query'));
        this.setState({fromData:arr});
        this.props.submitHandle(arr);
    }

    getData(){
        return this.state.fromData;
    }

    render(){
        return (
            <Form bsClass="form" onSubmit={
                ev => this.getFormData(ev)
            } id="from-query" inline>
                <table><tbody>
                <tr>
                    <td><label>助记码</label>
                        <input type="text" className="form-control" name="prod_assist_code" placeholder="助记码" /></td>
                    <td><label>商品名称</label>
                        <input type="text" className="form-control" name="prod_name" placeholder="商品名称" /></td>
                    <td><label>商品产地</label>
                        <input type="text" className="form-control" name="prod_src" placeholder="商品产地" /></td>
                    <td><label>是否在售</label><select className="form-control" name="prod_in_sale" id="">
                        <option value={1}>在售</option><option value={2}>停售</option></select></td>
                    <td><label>是否可售</label><select className="form-control" name="prod_allow_sale" id="">
                        <option value={1}>可售</option><option value={2}>不可售</option>
                    </select></td>
                    <td><label>默认显示</label><select className="form-control" name="prod_display" id="">
                        <option value={1}>展示</option><option value={2}>不展示</option>
                    </select></td>
                    <td><button className="btn btn-main" type="submit">查询</button></td>
                </tr>
                </tbody></table>
            </Form>
        );
    }
}

QueryForm.propTypes = {
    submitHandle:PropTypes.func.isRequired
};
export default QueryForm;
