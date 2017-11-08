import React from 'react';
import ReactDOM from 'react-dom';
import { Column, Table, AutoSizer } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

// Table data as a array of objects
const list = [
  { name: 'Brian Vaughn', description: 'Software engineer' }
  // And so on...
];

class Index extends React.Component{
  render(){
    return (
      <AutoSizer>
        {({width}) => {
          <Table
            width={width}
            height={300}
            headerHeight={20}
            rowHeight={30}
            rowCount={list.length}
            rowGetter={({ index }) => list[index]}
          >
            <Column
              label='Name'
              dataKey='name'
              width={100}
            />
            <Column
              width={200}
              label='Description'
              dataKey='description'
            />
          </Table>
        }}
      </AutoSizer>
    );
  }
}

// Render your table
ReactDOM.render(
  <Table
    width={300}
    height={300}
    headerHeight={20}
    rowHeight={30}
    rowCount={list.length}
    rowGetter={({ index }) => list[index]}
  >
    <Column
      label='Name'
      dataKey='name'
      width={100}
    />
    <Column
      width={200}
      label='Description'
      dataKey='description'
    />
  </Table>,
  document.getElementById('root')
);
