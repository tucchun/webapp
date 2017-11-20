import React from 'react';
import Table from 'rc-table';
import _ from 'lodash';
import 'rc-table/assets/index.css';
import './rc-table.css';

class Grid extends React.Component {
  render() {
    const rowClassName = this.props.rowClassName ? this.props.rowClassName + ' my-row-class' : 'my-row-class';
    const props = _.omit(this.props, 'rowClassName');
    return (<Table rowClassName={rowClassName} {...props} />);
  }
}

export default Grid;
