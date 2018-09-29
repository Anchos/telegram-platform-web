import React from "react";
import PropTypes from "prop-types";
import InputRange from "react-input-range";
import { Range, Handle } from "rc-slider";
import "./styles.scss";

const Hand = ({ value, index, offset }) => (
  <div className="rc-slider-handle-container" key={index} style={{ left: `${offset}%` }}>
    <div className="rc-slider-handle-value">{value}</div>
    <div className="rc-slider-handle" />
  </div>
);

class RangeSlider extends React.Component {
  state = {
    value: [this.props.from, this.props.to],
  };

  completeChange = ([from, to]) =>
    (this.props.from !== from || this.props.to !== to) && this.props.onChange([from, to]);

  onRangeChange = value => {
    this.setState({ value });
  };

  render() {
    const { label, maxValue, from, to } = this.props;
    const rangeValue = [from, to];
    return (
      <div className="input-range-container">
        <div className="input-range-container__label">{label}</div>
        <Range
          max={maxValue}
          min={0}
          defaultValue={rangeValue}
          onAfterChange={this.completeChange}
          handle={Hand}
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
