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
      prod_assist_code: '',
      prod_name: '',
      prod_src: '',
      prod_cats: [],
      prod_tags: [],
      prod_crowds: [],
      station_in_sale: 1
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleSearch() {
    this.props.handleConditionSearch();
    // this.props.handleSearch(this.state);
  }

  getData() {
    return this.state;
  }

  handleCheckboxChange(event) {
    const target = event.target;
    const name = target.name;
    const value = parseInt(target.value) || 0;
    this.props.handleCheckboxChange(name, value);
  }

  handleSelectChange(event) {
    const target = event.target;
    const name = target.name;
    const value = parseInt(target.value) || 0;
    this.props.handleSelectChange(name, value);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value.trim();
    this.props.handleInputChange(name, value);
  }

  render() {
    const {tags, crowds, cats} = this.props;
    //inputRef={ref => {this.prod_assist_code = ref.value;}}
    let station_in_sale_view = (
      <FormGroup controlId="station_in_sale">
        <ControlLabel>是否上架</ControlLabel>
        {' '}
        <FormControl componentClass="select" value={this.props.station_in_sale} onChange={this.handleSelectChange} name='station_in_sale' placeholder="是否上架">
          <option value={0}>请选择</option>
          <option value="2">未上架</option>
          <option value="1">上架</option>
        </FormControl>
      </FormGroup>
    );
    if (this.props.modal) {
      station_in_sale_view = null;
    }
    return (
      <Form inline>
        <div className='pull-left'>
          <FormGroup controlId="prod_assist_code">
            <ControlLabel>助记码</ControlLabel>
            {' '}
            <FormControl type="text" name='prod_assist_code' onChange={this.handleInputChange} value={this.props.prod_assist_code} placeholder="助记码"/>
          </FormGroup>
          {' '}
          <FormGroup controlId="prod_name">
            <ControlLabel>商品名称</ControlLabel>
            {' '}
            <FormControl type="text" name='prod_name' onChange={this.handleInputChange} value={this.props.prod_name} placeholder="商品名称"/>
          </FormGroup>
          {' '}
          <FormGroup controlId="prod_src">
            <ControlLabel>商品产地</ControlLabel>
            {' '}
            <FormControl type="text" name='prod_src' onChange={this.handleInputChange} value={this.props.prod_src} placeholder="商品产地"/>
          </FormGroup>
          {' '}
          {station_in_sale_view}
          {' '}
        </div>
        <div className='pull-right'>
          <FormGroup controlId="button">
            <Button bsClass={'btn btn-main'} onClick={this.handleSearch} type='button'>查询</Button>
          </FormGroup>
        </div>
        <div className='commodityManagement-cats'>
          <FormGroup>
            <ControlLabel>商品标签</ControlLabel>
            <div className='commodityManagement-cats commodityManagement-pl20'>
              <FormGroup>
                {tags.map(tag => {
                  const state = this.props['prod_tags'].findIndex(item => {
                    return item === tag.tag_id;
                  });
                  const checked = (state > -1)
                    ? 'checked'
                    : false;
                  return (
                    <Checkbox key={tag.tag_id} name='prod_tags' onChange={this.handleCheckboxChange} value={tag.tag_id} checked={checked} inline>
                      {tag.tag_text}
                    </Checkbox>
                  );
                })}
              </FormGroup>
            </div>
          </FormGroup>
          <FormGroup>
            <ControlLabel>适用人群</ControlLabel>
            <div className='commodityManagement-cats commodityManagement-pl20'>
              <FormGroup>
                {crowds.map(crowd => {
                  const state = this.props['prod_crowds'].findIndex(item => {
                    return item === crowd.crowd_id;
                  });
                  const checked = (state > -1)
                    ? 'checked'
                    : false;
                  return (
                    <Checkbox name='prod_crowds' onChange={this.handleCheckboxChange} key={crowd.crowd_id} value={crowd.crowd_id} checked={checked} inline>
                      {crowd.crowd_text}
                    </Checkbox>
                  );
                })}
              </FormGroup>
            </div>
          </FormGroup>
          <FormGroup>
            <div>
              <ControlLabel>商品分类</ControlLabel>
            </div>
            {cats.map(cat => {
              const sub_cats = cat.sub_cats.map(sub_cat => {
                const state = this.props['prod_cats'].findIndex(item => {
                  return item === sub_cat.cat_id;
                });
                const checked = (state > -1)
                  ? 'checked'
                  : false;

                return (
                  <Checkbox key={sub_cat.cat_id} checked={checked} name='prod_cats' onChange={this.handleCheckboxChange} inline value={sub_cat.cat_id}>
                    {sub_cat.cat_text}
                  </Checkbox>
                );
              });
              return (
                <span key={cat.cat_id} className='commodityManagement-cats commodityManagement-pl20'>
                  <FormGroup>
                    {cat.cat_text}
                    <div className='commodityManagement-pl20'>
                      {sub_cats}
                    </div>
                  </FormGroup>
                </span>
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
  cats: PropTypes.array.isRequired,
  handleConditionSearch: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  prod_assist_code: PropTypes.string.isRequired,
  prod_name: PropTypes.string.isRequired,
  prod_src: PropTypes.string.isRequired,
  prod_cats: PropTypes.array.isRequired,
  prod_tags: PropTypes.array.isRequired,
  prod_crowds: PropTypes.array.isRequired,
  station_in_sale: PropTypes.number
};

export default Condition;
