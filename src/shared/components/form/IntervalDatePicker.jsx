/* eslint-disable no-param-reassign */
import React, { PureComponent } from 'react';
import { DateRangePicker } from 'react-advance-jalaali-datepicker';
// import MinusIcon from 'mdi-react/MinusIcon';
import PropTypes from 'prop-types';

// function DatePickerInput(props) {
//   return <input className="popo" {...props} />;
// }

class IntervalDatePickerField extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      startDate: '5',
      endDate: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange({ startDate, endDate }) {
    startDate = startDate || this.state.startDate;
    endDate = endDate || this.state.endDate;

    if (startDate.isAfter(endDate)) {
      endDate = startDate;
    }

    this.setState({ startDate, endDate });
    this.props.onChange({ start: startDate, end: endDate });
  }

  handleChangeStart = startDate => this.handleChange({ startDate });

  handleChangeEnd = endDate => this.handleChange({ endDate });

  render() {
    return (
      <div className="date-picker date-picker--interval">
        <DateRangePicker
          placeholderStart="تاریخ شروع"
          placeholderEnd="تاریخ پایان"
          format="jYYYY/jMM/jDD"
          onChangeStart={this.change}
          onChangeEnd={this.changeTimeDate}
          idStart="rangePickerStart"
          idEnd="rangePickerEnd"
        />
        {/* <MinusIcon className="date-picker__svg" />
          <DatePicker
          selected={this.state.endDate}
          selectsEnd
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeEnd}
          dateFormat="LL"
          placeholderText="To"
        /> */}
      </div>
    );
  }
}

const renderIntervalDatePickerField = props => (
  <IntervalDatePickerField
    {...props.input}
  />
);

renderIntervalDatePickerField.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func,
  }).isRequired,
};

export default renderIntervalDatePickerField;
