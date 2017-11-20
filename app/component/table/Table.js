import React from 'react';
import Table from 'rc-table';
import _ from 'lodash';
import 'rc-table/assets/index.css';
import './rc-table.css';

class Grid extends React.Component {
  render() {
    const rowClassName = this.props.rowClassName;
    const props = _.omit(this.props, 'rowClassName');
    return (<Table rowClassName={rowClassName + ' my-row-class'} {...props} />);
  }
}

export default Grid;
