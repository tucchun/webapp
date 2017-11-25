import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  FormGroup,
  ControlLabel,
  Button,
  FormControl,
  Checkbox
} from 'react-bootstrap';

class Condition extends Component {

  constructor(props) {
    super(props);
    this.state = {
      prod_assist_code: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handle_prod_assist_code = this.handle_prod_assist_code.bind(this);
  }

  handleSubmit(){
    console.log(this.prod_assist_code);
  }

  handle_prod_assist_code(e){
    this.setState({
      prod_assist_code: e.target.value
    });
  }



  render() {
    const {tags, crowds, cats} = this.props;
    //inputRef={ref => {this.prod_assist_code = ref.value;}}
    return (
      <Form inline>
        <FormGroup controlId="prod_assist_code">
          <ControlLabel>助记码</ControlLabel>
          {' '}
          <FormControl type="text" onChange={this.handle_prod_assist_code} value={this.state.prod_assist_code} placeholder="助记码" />
        </FormGroup>
        {' '}
        <FormGroup controlId="prod_name">
          <ControlLabel>商品名称</ControlLabel>
          {' '}
          <FormControl type="text" placeholder="商品名称"/>
        </FormGroup>
        {' '}
        <FormGroup controlId="prod_src">
          <ControlLabel>商品产地</ControlLabel>
          {' '}
          <FormControl type="text" placeholder="商品产地"/>
        </FormGroup>
        {' '}
        <FormGroup controlId="station_in_sale">
          <ControlLabel>是否上架</ControlLabel>
          {' '}
          <FormControl componentClass="select" placeholder="是否上架">
            <option value="">请选择</option>
            <option value="0">未上架</option>
            <option value="1">上架</option>
          </FormControl>
        </FormGroup>
        {' '}
        <FormGroup controlId="station_in_sale">
          <Button bsClass={'btn btn-main'} onClick={this.handleSubmit} type='button'>查询</Button>
        </FormGroup>
        <div className='commodityManagement-cats'>
          <FormGroup>
            <Checkbox inline>
              <ControlLabel>商品标签</ControlLabel>
            </Checkbox>
            <div className='commodityManagement - cats commodityManagement-pl20'>
              <FormGroup>
                {tags.map(tag => {
                  return (
                    <Checkbox key={tag.tag_id} value={tag.tag_no} inline>
                      {tag.tag_text}
                    </Checkbox>
                  );
                })}
              </FormGroup>
            </div>
          </FormGroup>
          <FormGroup>
            <Checkbox inline>
              <ControlLabel>适用人群</ControlLabel>
            </Checkbox>
            <div className='commodityManagement - cats commodityManagement-pl20'>
              <FormGroup>
                {crowds.map(crowd => {
                  return (
                    <Checkbox key={crowd.crowd_id} value={crowd.crowd_id} inline>
                      {crowd.crowd_text}
                    </Checkbox>
                  );
                })}
              </FormGroup>
            </div>
          </FormGroup>
          <FormGroup>
            <ControlLabel>商品分类</ControlLabel>
            {cats.map(cat => {
              let sub_cats = cat.sub_cats.map(sub_cat => {
                return (
                  <Checkbox key={sub_cat.cat_id} inline value={sub_cat.cat_id}>
                    {sub_cat.cat_text}
                  </Checkbox>
                );
              });
              return (
                <div key={cat.cat_id} className='commodityManagement-cats commodityManagement-pl20'>
                  <FormGroup>
                    <Checkbox inline key={cat.cat_id} value={cat.cat_id}>
                      {cat.cat_text}
                    </Checkbox>
                    <div className='commodityManagement-pl20'>
                      {sub_cats}
                    </div>
                  </FormGroup>
                </div>
              );
            })}
          </FormGroup>
        </div>

      </Form>
    );
  }
}

Condition.propTypes = {
  tags: PropTypes.array.isRequired,
  crowds: PropTypes.array.isRequired,
  cats: PropTypes.array.isRequired
};

export default Condition;
