import React from "react";
import PropTypes from "prop-types";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./styles.scss";

class RangeSlider extends React.Component {
  state = {
    min: this.props.from,
    max: this.props.to,
  };

  completeChange = () => {
    this.props.onChange(this.state);
  };

  onRangeChange = value => {
    this.setState(value);
  };

  render() {
    const { label, maxValue } = this.props;
    return (
      <div className="input-range-container">
        <div className="input-range-container__label">{label}</div>
        <InputRange
          maxValue={maxValue}
          minValue={0}
          value={this.state}
          onChange={this.onRangeChange}
          onChangeComplete={this.completeChange}
        />
      </div>
    );
  }
}

RangeSlider.propTypes = {
  onChange: PropTypes.func,
  maxValue: PropTypes.number,
  from: PropTypes.number,
  to: PropTypes.number,
};

export default RangeSlider;