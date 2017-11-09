import React from 'react';
import ReactDOM from 'react-dom';
import { Column, Table, AutoSizer } from 'react-virtualized';
import GirdList from './component/table/Table';



// Render your table
ReactDOM.render(
  <GirdList />,
  document.getElementById('__index__')
);
