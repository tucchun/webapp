import React from 'react';
import 'react-virtualized/styles.css';
import {Column, Table, AutoSizer} from 'react-virtualized';
import './table.css';

// Table data as a array of objects
const list = [
  {
    name: 'Brian Vaughn',
    description: 'Software engineer'
  }, {
    name: 'Brian Vaughn1',
    description: 'Software engineer1'
  }, {
    name: 'Brian Vaughn2',
    description: 'Software engineer2'
  }, {
    name: 'Brian Vaughn1',
    description: 'Software engineer1'
  }, {
    name: 'Brian Vaughn2',
    description: 'Software engineer2'
  }, {
    name: 'Brian Vaughn1',
    description: 'Software engineer1'
  }, {
    name: 'Brian Vaughn2',
    description: 'Software engineer2'
  }, {
    name: 'Brian Vaughn1',
    description: 'Software engineer1'
  }, {
    name: 'Brian Vaughn2',
    description: 'Software engineer2'
  }, {
    name: 'Brian Vaughn1',
    description: 'Software engineer1'
  }, {
    name: 'Brian Vaughn2',
    description: 'Software engineer2'
  }, {
    name: 'Brian Vaughn1',
    description: 'Software engineer1'
  }, {
    name: 'Brian Vaughn2',
    description: 'Software engineer2'
  }, {
    name: 'Brian Vaughn1',
    description: 'Software engineer1'
  }, {
    name: 'Brian Vaughn2',
    description: 'Software engineer2'
  }
  // And so on...
];

class GirdList extends React.Component {
  render() {
    return (
      <AutoSizer>
        {({width, height}) => (
          <Table width={width} height={height} headerHeight={20} rowHeight={30} rowCount={list.length} rowClassName={'headerRow'}
          onRowClick={(e) => {window.alert(e.type);}} headerClassName={'headerColumn'} rowGetter={({index}) => list[index]}>
            <Column label='Name' dataKey='name' className={'exampleColumn'} width={100}/>
            <Column width={200} label='Description' className={'exampleColumn'} dataKey='description'/>
          </Table>
        )}
      </AutoSizer>
    );
  }
}

export default GirdList;
