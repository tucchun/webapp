import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { Modal,Form,Checkbox,FormControl,Button} from 'react-bootstrap';

class GoodsDialog extends Component{
    constructor(props){
        super(props);
        this.state = {
            lgShow:false,
            tagList:[],
            name:'商品标签',
            dataKey:'prod_tags'
        };
        this.getData = this.getData.bind(this);
    }

    //收到props，还未重新渲染的的状态(生命周期函数)
    componentWillReceiveProps(nextProps){
        this.setState({
            lgShow:nextProps.lgShow,
            name:nextProps.dialogName,
            tagList:nextProps.tagList,
            dataKey:nextProps.dataKey
        });
    }

    getData(){
        let elements = [...this.form.elements],datas = [],key = elements[0].name,data = {},text = [];
        for(let i = 0;i < elements.length;i++){
            if(elements[i].type === 'checkbox' && elements[i].checked){
                datas.push(elements[i].value);
                text.push(elements[i].parentElement.textContent)
            }
        }
        data[key] = datas;
        data.text = text.join(',');
        this.props.getData(data);
        this.setState({lgShow:false});
        /*let datas = elements.map(element => {
            if(element.type === 'checkbox' && element.checked){
                return element.value
            }
        });*/
    }

    render(){
        let lgClose = () => {this.setState({lgShow:false})};
        return (
            <Modal show={this.state.lgShow} onHide={lgClose} bsSize="large" aria-labelledby="contained-modal-title-lg">
                <Modal.Header closeButton>{this.state.name}</Modal.Header>
                <Modal.Body>
                    <form className="p20" ref={ref => this.form = ref}>
                        {
                            this.state.tagList.map(tag => {
                                return (
                                    <Checkbox key={tag.crowd_id||tag.tag_id} name={this.state.dataKey} inline
                                              defaultValue={tag.crowd_id||tag.tag_id}>{tag.crowd_text||tag.tag_text}</Checkbox>
                                )
                            })
                        }
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={lgClose}>取消</Button>
                    <Button onClick={
                        () => {
                            this.getData()
                        }
                    } bsStyle="primary">确定</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

GoodsDialog.propTypes = {
    lgShow:PropTypes.bool.isRequired,
    tagList:PropTypes.array.isRequired
};
export default GoodsDialog;