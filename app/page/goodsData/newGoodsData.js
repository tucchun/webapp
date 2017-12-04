import React,{Component} from 'react';
import ReactDom from 'react-dom';
import Container from '../../component/container/Container';
import { Form,Clearfix,FormGroup,ControlLabel,FormControl,Col,Button } from 'react-bootstrap';
import http from '../../lib/Api/http';
import { alert } from '../../lib/Util';
import ApiMap from '../../lib/Api/ApiMap';
import GoodsDialog from './goodsTagDialog';
import FileUpload from 'react-fileupload';
import 'kindeditor';
import './newGoods.css';

class NewGoodsData extends Component{

    constructor(props){
        super(props);
        this.state = {
            //提交使用的
            goodsMsg:{
                prod_name:'',
                prod_src:'',
                prod_spec:'',
                prod_apprv_no:'',
                prod_valid_month:1,
                prod_pkg_unit:1,
                prod_assist_code:'',
                prod_price:0.0,
                prod_original_price:1.0,
                prod_cat:1,
                prod_country_flag:1,
                prod_in_sale:1,
                prod_allow_sale:1,
                prod_display:1,
                prod_tags:[],
                prod_crowds:[],
                prod_ingreds:'',
                prod_memo:'',
                prod_imgs:[],
                prod_intro:''
            },
            //页面状态
            goods_cat:[],
            lgShow:false,
            tagList:[],
            tagsText:'',
            crowText:'',
            dialogName:'商品标签',
            dataKey:'prod_tags',
            showImg:[]
        };
        this.editor = {};
        this.tags = {};
        this.fileUploadArgument = this.fileUploadArgument.bind(this);
        this.imgData = [];
    }

    //请求获取分类
    getCats(){
        http({
            ...ApiMap.shopProdmeta,
            data:{
                ...ApiMap.commonData
            }
        }).then(response=>{
            let data = response.data,cats = [];
            if(data.ret_code === 1){
                let cat1 = data.ret_data.cats;
                for(let i = 0; i < cat1.length; i++){
                    cats.push(...cat1[i].sub_cats);
                }
            }
            this.setState({goods_cat:cats});
            this.tags = {
                tags:[...data.ret_data.tags],
                crowds:[...data.ret_data.crowds]
            };
        }).catch(err=>{})
    }

    //生命周期函数
    componentDidMount(){
        let that = this;
        this.editor = KindEditor.create(document.getElementsByName('prod_intro')[0],{
            width:"100%",
            height:300,
            filterMode:false,
            afterChange:function(){
                this.sync();
                let prod_intro = this.html();
                that.setState({
                    goodsMsg:{
                        ...that.state.goodsMsg,
                        prod_intro
                    }
                });
            }
        });
        this.getCats();
    }

    //打开弹窗
    openDialog(type){
        if(type === 'tags'){
            this.setState({
                lgShow:true,
                tagList:this.tags.tags,
                dialogName:'商品标签',
                dataKey:'prod_tags'
            });
        }else{
            this.setState({
                lgShow:true,
                tagList:this.tags.crowds,
                dialogName:'适用人群',
                dataKey:'prod_crowds'
            });
        }
    }

    //获取弹窗值
    getDialogData(data){
        if(data['prod_tags']){
            let prod_tags = data['prod_tags'].map(tag => {
                return parseInt(tag);
            });
            this.setState({tagsText:data.text,goodsMsg:{
                ...this.state.goodsMsg,
                prod_tags
            }});
        }else{
            let prod_crowds = data['prod_crowds'].map(crow => {
                return parseInt(crow);
            });
            this.setState({crowText:data.text,goodsMsg:{
                ...this.state.goodsMsg,
                prod_crowds
            }});
        }
        this.setState({lgShow:false});
    }

    submitHandler(ev){
        ev.preventDefault();
        let data = this.state.goodsMsg;
        http({
            ...ApiMap.goodsCreate,
            data:{
                ...ApiMap.commonData,
                ...data
            }
        }).then(response=>{
            let responseData = response.data;
            if(responseData.ret_code === 1){
                alert('新增成功');
                common.closeTab('newGoodsData');
            }else{
                alert(responseData.ret_msg)
            }
            console.log(response);
        }).catch(err=>{console.log(err)});
    }

    fileUploadArgument(){
        let that = this;
        return {
            baseUrl:'/hca/web/management/upload/uploadFile',
            dataType:'json',
            chooseAndUpload:true,
            uploadSuccess:function(res){
                that.imgData.push(res);
                let prod_imgs = that.imgData.map(img=>{
                    return img.img;
                });
                that.setState({
                    showImg:[...that.state.showImg,res.imgUrl],
                    goodsMsg:{
                        ...that.state.goodsMsg,
                        prod_imgs
                    }
                });
            }
        }
    }

    elementChange(ev){
        let key = ev.target.name,goodsMsg = {...this.state.goodsMsg};
        const intKey = [
            'prod_valid_month',
            'prod_pkg_unit',
            'prod_cat',
            'prod_country_flag',
            'prod_in_sale',
            'prod_allow_sale',
            'prod_display'
        ];
        const floatKey = ['prod_price','prod_original_price'];
        if(intKey.indexOf(key)!== -1){
            goodsMsg[key] = parseInt(ev.target.value);
        }else if(floatKey.indexOf(key)!== -1){
            goodsMsg[key] = parseFloat(ev.target.value);
        }else{
            goodsMsg[key] = ev.target.value;
        }

        this.setState({goodsMsg});
    }

    render(){
        return (
            <Container className="p20" title="新增商品">
                <div className="newGoodsData">
                    <Form bsClass="form" horizontal onSubmit={
                        ev => {
                            this.submitHandler(ev)
                        }}>
                        <FormGroup>
                            <Col className="text-right" sm={2}>
                                <ControlLabel><span>*</span>商品名称：</ControlLabel>
                            </Col>
                            <Col sm={10}>
                                <FormControl name="prod_name" placeholder="商品名称" onChange={
                                    ev=>{
                                        this.elementChange(ev)
                                    }
                                } />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col className="text-right" sm={2}>
                                <ControlLabel><span>*</span>商品产地：</ControlLabel>
                            </Col>
                            <Col sm={4}>
                                <FormControl name="prod_src" placeholder="商品产地" onChange={
                                    ev=>{
                                        this.elementChange(ev)
                                    }
                                }/>
                            </Col>
                            <Col className="text-right" sm={2}>
                                <ControlLabel><span>*</span>商品规格：</ControlLabel>
                            </Col>
                            <Col sm={4}>
                                <FormControl name="prod_spec" placeholder="商品规格" onChange={
                                    ev=>{
                                        this.elementChange(ev)
                                    }
                                }/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col className="text-right" sm={2}>
                                <ControlLabel>批准文号：</ControlLabel>
                            </Col>
                            <Col sm={4}>
                                <FormControl name="prod_apprv_no" placeholder="批准文号" onChange={
                                    ev=>{
                                        this.elementChange(ev)
                                    }
                                }/>
                            </Col>
                            <Col className="text-right" sm={2}>
                                <ControlLabel><span>*</span>有效期（月）：</ControlLabel>
                            </Col>
                            <Col sm={4}>
                                <FormControl name="prod_valid_month" placeholder="有效期（月）" onChange={
                                    ev=>{
                                        this.elementChange(ev)
                                    }
                                }/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col className="text-right" sm={2}>
                                <ControlLabel><span>*</span>包装单位：</ControlLabel>
                            </Col>
                            <Col sm={4}>
                                <FormControl name="prod_pkg_unit" componentClass="select" onChange={
                                    ev=>{
                                        this.elementChange(ev)
                                    }
                                }>
                                    <option value={1}>盒</option>
                                    <option value={2}>袋</option>
                                    <option value={3}>瓶</option>
                                    <option value={4}>罐</option>
                                    <option value={5}>听</option>
                                </FormControl>
                            </Col>
                            <Col className="text-right" sm={2}>
                                <ControlLabel>助记码：</ControlLabel>
                            </Col>
                            <Col sm={4}>
                                <FormControl name="prod_assist_code" placeholder="助记码" onChange={
                                    ev=>{
                                        this.elementChange(ev)
                                    }
                                }/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col className="text-right" sm={2}>
                                <ControlLabel><span>*</span>售价（元）：</ControlLabel>
                            </Col>
                            <Col sm={4}>
                                <FormControl name="prod_price" placeholder="售价（元）" onChange={
                                    ev=>{
                                        this.elementChange(ev)
                                    }
                                }/>
                            </Col>
                            <Col className="text-right" sm={2}>
                                <ControlLabel>原价（元）：</ControlLabel>
                            </Col>
                            <Col sm={4}>
                                <FormControl name="prod_original_price" placeholder="原价（元）" onChange={
                                    ev=>{
                                        this.elementChange(ev)
                                    }
                                }/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col className="text-right" sm={2}>
                                <ControlLabel><span>*</span>商品分类：</ControlLabel>
                            </Col>
                            <Col sm={4}>
                                <FormControl name="prod_cat" componentClass="select" onChange={
                                    ev=>{
                                        this.elementChange(ev)
                                    }
                                }>
                                    {
                                        this.state.goods_cat.map(cat => {
                                            return (
                                                <option key={cat.cat_id} value={cat.cat_id}>{cat.cat_text}</option>
                                            )
                                        })
                                    }
                                </FormControl>
                            </Col>
                            <Col className="text-right" sm={2}>
                                <ControlLabel><span>*</span>国产/进口：</ControlLabel>
                            </Col>
                            <Col sm={4}>
                                <FormControl name="prod_country_flag" componentClass="select" onChange={
                                    ev=>{
                                        this.elementChange(ev)
                                    }
                                }>
                                    <option value={1}>国产</option>
                                    <option value={2}>进口</option>
                                </FormControl>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col className="text-right" sm={2}>
                                <ControlLabel><span>*</span>是否在售：</ControlLabel>
                            </Col>
                            <Col sm={4}>
                                <FormControl name="prod_in_sale" componentClass="select" onChange={
                                    ev=>{
                                        this.elementChange(ev)
                                    }
                                }>
                                    <option value={1}>在售</option>
                                    <option value={2}>停售</option>
                                </FormControl>
                            </Col>
                            <Col className="text-right" sm={2}>
                                <ControlLabel><span>*</span>是否可售：</ControlLabel>
                            </Col>
                            <Col sm={4}>
                                <FormControl name="prod_allow_sale" componentClass="select" onChange={
                                    ev=>{
                                        this.elementChange(ev)
                                    }
                                }>
                                    <option value={1}>可售</option>
                                    <option value={2}>不可售</option>
                                </FormControl>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col className="text-right" sm={2}>
                                <ControlLabel><span>*</span>默认显示：</ControlLabel>
                            </Col>
                            <Col sm={5}>
                                <FormControl name="prod_display" componentClass="select" onChange={
                                    ev=>{
                                        this.elementChange(ev)
                                    }
                                }>
                                    <option value={1}>是</option>
                                    <option value={2}>否</option>
                                </FormControl>
                            </Col>
                            <Col sm={5}>
                                <FormControl.Static bsClass="tips" name="prod_name" componentClass="span">
                                    商城首页默认状态下是否显示该商品。如不希望商品默认显示在首页，则选择“否”。
                                </FormControl.Static>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col className="text-right" sm={2}>
                                <ControlLabel>商品标签：</ControlLabel>
                            </Col>
                            <Col sm={10}>
                                <FormControl name="prod_tags" value={this.state.tagsText} placeholder="商品标签" readOnly />
                                <FormControl.Static className="icon icon-add" componentClass="span" onClick={
                                    () => {
                                        this.openDialog('tags')
                                    }
                                } />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col className="text-right" sm={2}>
                                <ControlLabel>适用人群：</ControlLabel>
                            </Col>
                            <Col sm={10}>
                                <FormControl name="prod_crowds" value={this.state.crowText} placeholder="适用人群" readOnly />
                                <FormControl.Static className="icon icon-add" componentClass="span" onClick={
                                    () => {
                                        this.openDialog('crows')
                                    }
                                } />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} className="text-right" sm={2}>主要成分：</Col>
                            <Col sm={10}>
                                <FormControl name="prod_ingreds" placeholder="主要成分" onChange={
                                    ev=>{
                                        this.elementChange(ev)
                                    }
                                }/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} className="text-right" sm={2}>备注：</Col>
                            <Col sm={10}>
                                <FormControl name="prod_memo" placeholder="备注" componentClass="textarea" onChange={
                                    ev=>{
                                        this.elementChange(ev)
                                    }
                                }/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} className="text-right" sm={2}><span>*</span>商品图片：</Col>
                            <Col sm={10}>
                                <Clearfix>
                                    {
                                        this.state.showImg.map(img=>{
                                            return (<img src={img} key={img} className="uploadImg" alt="商品图片"/>)
                                        })
                                    }
                                    <FileUpload options = {this.fileUploadArgument()} className="pull-left">
                                        <span className="uploadImg" ref="chooseAndUpload">+</span>
                                    </FileUpload>
                                    <input type="hidden" name="prod_imgs" />
                                </Clearfix>
                                <FormControl.Static bsClass="tips" componentClass="span">上传图片宽高比例为4:3，大小500K以内</FormControl.Static>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col componentClass={ControlLabel} className="text-right" sm={2}><span>*</span>商品介绍：</Col>
                            <Col sm={10}>
                                <textarea name="prod_intro" placeholder="商品介绍" onInput={
                                    ev=>{
                                        this.elementChange(ev)
                                    }
                                }>

                                </textarea>
                            </Col>
                        </FormGroup>
                        <FormGroup className="text-center">
                            <Col componentClass={ControlLabel} className="text-right" sm={2}>{''}</Col>
                            <Col sm={10}>
                                <Button type="reset" bsSize="large">取消</Button><Button bsSize="large" type="submit" className="btn-main">保存</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
                <GoodsDialog lgShow={this.state.lgShow} tagList={this.state.tagList}
                             dialogName={this.state.dialogName} getData = { data => {
                                 this.getDialogData(data)
                }} dataKey={this.state.dataKey} />
            </Container>
        );
    }
}

ReactDom.render(
    <NewGoodsData />,
    document.getElementById('__goodsData/newGoodsData__')
);