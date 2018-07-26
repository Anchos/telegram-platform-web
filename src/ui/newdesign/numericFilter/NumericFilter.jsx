import React from "react";
import PropTypes from "prop-types";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { Label, Wrapper } from "./styles";
import "./styles.css";

export class NumericFilter extends React.Component {
  state = {
    min: 0,
    max: 0,
  };

  completeChange = () => {
    this.props.onChange(this.state);
  };

  onRangeChange = value => {
    this.setState(value, () => console.log(this.state));
  };

  render() {
    const { label, maxValue } = this.props;
    return (
      <Wrapper>
        <Label>{label}</Label>
        <InputRange
          maxValue={maxValue}
          minValue={0}
          value={this.state}
          onChange={this.onRangeChange}
          onChangeComplete={this.completeChange}
        />
      </Wrapper>
    );
  }
}

NumericFilter.propTypes = {
  onChange: PropTypes.func,
};
