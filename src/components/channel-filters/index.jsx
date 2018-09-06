import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Select, Checkbox } from "biplane-uikit";
import RangeSlider from '../range-slider';
import style from "./style.scss";

const selectOptionsMOCK = [{ label: "option1", value: "1" }, { label: "option2", value: "2" }];

class ChannelFilters extends React.Component {
  onMembersChange = ({ max, min }) => {
    this.props.onFiltersChange({
      ...this.props.filters,
      members: [min, max],
    });
  };

  onCostChange = ({ max, min }) => {
    this.props.onFiltersChange({
      ...this.props.filters,
      cost: [min, max],
    });
  };

  render() {
    const {
      filters: {
        members: [fromMembers, toMembers],
        cost: [fromCost, toCost],
      },
      categoriesEnabled,
    } = this.props;
    return (
      <div className="channel-filters">
        {categoriesEnabled && (
          <div>
            <span className="channel-filters__title">Category</span>
            <Select options={selectOptionsMOCK} />
          </div>
        )}
        <RangeSlider
          label="Number of subscribers"
          from={fromMembers}
          to={toMembers}
          maxValue={10000}
          onChange={this.onMembersChange}
        />
        <RangeSlider
          label="Advertising cost"
          from={fromCost}
          to={toCost}
          maxValue={10000}
          onChange={this.onCostChange}
        />
        <div className="channel-filters__checkboxes">
          <Checkbox label="Partners" />
          <Checkbox label="Verified" />
          <Checkbox label="Mutual Promotion" />
        </div>
      </div>
    );
  }
}

ChannelFilters.propTypes = {
  filters: PropTypes.object,
  categoriesEnabled: PropTypes.bool,
  onFiltersChange: PropTypes.func,
};

export default ChannelFilters;
