import React from 'react';
import {DatePicker} from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

class DateRange extends React.Component {

  constructor(props) {
    super(props);
    this.state = {endOpen: false};
    this.disabledStartDate = this.disabledStartDate.bind(this);
    this.onStartChange = this.onStartChange.bind(this);
    this.handleStartOpenChange = this.handleStartOpenChange.bind(this);
    this.disabledEndDate = this.disabledEndDate.bind(this);
    this.onEndChange = this.onEndChange.bind(this);
    this.handleEndOpenChange = this.handleEndOpenChange.bind(this);
  }

  disabledStartDate(startValue) {
    const endValue = this.props.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }

  disabledEndDate(endValue) {
    const startValue = this.props.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  }

  onChange(field, value) {
    //defaultValue={moment({hour: 23, minute: 59, seconds: 59})}
    //defaultValue={moment({hour: 0, minute: 0, seconds: 0})}
    this.props.handleOnChange(field, value);
    // this.setState({[field]: value});
  }

  onStartChange(value, formattedValue) {
    value.seconds(0);
    value.minute(0);
    value.hour(0);
    this.onChange(this.props.startName, value.toString());
    // this.onChange('startValue', value);
  }

  onEndChange(value, formattedValue) {
    value.seconds(59);
    value.minute(59);
    value.hour(23);
    this.onChange(this.props.endName, value.toString());
    // this.onChange('endValue', value);
  }

  handleStartOpenChange(open) {
    if (!open) {
      this.setState({endOpen: true});
    }
  }

  handleEndOpenChange(open) {
    this.setState({endOpen: open});
  }

  render() {
    const {startName, endName, startValue, endValue} = this.props;
    const create_start = startValue && moment(startValue);
    const create_end = endValue && moment(endValue);
    return (
      <span>
        <DatePicker name={startName} disabledDate={this.disabledStartDate} showTime format="YYYY-MM-DD HH:mm:ss" value={create_start} onChange={this.onStartChange} onOpenChange={this.handleStartOpenChange}/>
        {'-'}
        <DatePicker name={endName} disabledDate={this.disabledEndDate} showTime format="YYYY-MM-DD HH:mm:ss" value={create_end} onChange={this.onEndChange} open={this.state.endOpen} onOpenChange={this.handleEndOpenChange}/>
      </span>
    );
  }
}
DateRange.propTypes = {
  startName: PropTypes.string.isRequired,
  endName: PropTypes.string.isRequired,
  startValue: PropTypes.number,
  endValue: PropTypes.number,
  handleOnChange: PropTypes.func.isRequired
};

export default DateRange;
