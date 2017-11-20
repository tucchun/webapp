import React from 'react';
import ReactDOM from 'react-dom';
import Gird from '../component/table/Table';


const columns = [
  {
    className: 'my-col-class',
    title: 'title1',
    dataIndex: 'a',
    key: 'a',
    width: 100
  }, {
    className: 'my-col-class',
    id: '123',
    title: 'title2',
    dataIndex: 'b',
    key: 'b',
    width: 100
  }, {
    className: 'my-col-class',
    title: 'title3',
    dataIndex: 'c',
    key: 'c',
    width: 200
  }, {
    className: 'my-col-class',
    title: 'Operations',
    dataIndex: '',
    key: 'd',
    render() {
      return <a href="#">Operations</a>;
    }
  }
];

const data = [
  {
    a: '123',
    key: '1'
  }, {
    a: 'cdd',
    b: 'edd',
    key: '2'
  }, {
    a: '1333',
    c: 'eee',
    d: 2,
    key: '3'
  }
];

//
ReactDOM.render(
  <Gird rowClassName='my-row-class' columns={columns} data={data}/>
, document.getElementById('__index__'));
