import React from 'react';
import {Row, Col} from 'react-bootstrap';
import {baseURL} from '../../lib/Api/http';
import './prod.css';

class Prod extends React.Component {
  render() {
    const {prod_imgs_src, prod_price, prod_name} = this.props;
    const imgSrc = baseURL + prod_imgs_src;
    return (
      <div className='prod'>
        <Col sm={4} className='prod-img' >
          <img src={imgSrc}/>
        </Col>
        <Col sm={8} className="prod-instr">
          <div className="prod-instr-txt">{prod_name}</div>
          <div>¥<span className='prod-price'>{prod_price}</span>
          </div>
        </Col>
      </div>
    );
  }
}

export default Prod;
