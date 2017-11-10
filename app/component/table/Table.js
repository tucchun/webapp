import React from 'react';
import 'react-virtualized/styles.css';
import {Column, Table, AutoSizer} from 'react-virtualized';
import './table.css';

// Table data as a array of objects
const list = [
  {
    name: 'Brian Vaughn',
    description: 'Software engineer',
    description1: 'Software engineer',
    description2: 'Software engineer',
    description3: 'Software engineer',
    description4: 'Software engineer',
    description5: 'Software engineer',
    description6: 'Software engineer',
    description7: 'Software engineer',
  }
  // And so on...
];

class GirdList extends React.Component {
  constructor(props){
    super(props);
    this._rowClassName = this._rowClassName.bind(this);
  }

  _rowClassName({index}) {
  if (index < 0) {
    return 'headerRow';
  } else {
    return index % 2 === 0 ? 'evenRow' : 'oddRow';
  }
}
  render() {
    return (
      <AutoSizer>
        {({width, height}) => (
          <Table width={width} height={700} headerHeight={40} rowHeight={30} rowCount={list.length} rowClassName={this._rowClassName}
          onRowClick={(e) => {window.alert(e.type);}} headerClassName={'headerCell'} rowGetter={({index}) => list[index]}>
            <Column label='序号' dataKey='name' className={'exampleColumn'} width={100}/>
            <Column width={200} label='省/直辖市/自治区' className={'exampleColumn'} dataKey='description'/>
            <Column width={200} label='省/直辖市/自治区' className={'exampleColumn'} dataKey='description2'/>
            <Column width={200} label='省/直辖市/自治区' className={'exampleColumn'} dataKey='description3'/>
            <Column width={200} label='省/直辖市/自治区' className={'exampleColumn'} dataKey='description4'/>
            <Column width={200} label='省/直辖市/自治区' className={'exampleColumn'} dataKey='description5'/>
            <Column width={200} label='省/直辖市/自治区' className={'exampleColumn'} dataKey='description6'/>
            <Column width={200} label='省/直辖市/自治区' className={'exampleColumn'} dataKey='description7'/>
          </Table>
        )}
      </AutoSizer>
    );
  }
}

export default GirdList;
