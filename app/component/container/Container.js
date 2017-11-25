import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrap">
        <div className="tb-head">{this.props.title}</div>
        <div className="tb-content">
          <div className="tb-wrap p20">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Container.propTypes = {
  title: PropTypes.string.isRequired
};

export default Container;
