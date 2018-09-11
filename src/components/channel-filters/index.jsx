import React from "react";
import { connect } from "react-redux";
import { injectIntl, intlShape } from "react-intl";
import PropTypes from "prop-types";
import { Select, Checkbox } from "biplane-uikit";
import RangeSlider from "../range-slider";
import style from "./style.scss";

const selectOptionsMOCK = [{ label: "option1", value: "1" }, { label: "option2", value: "2" }];

class ChannelFilters extends React.Component {
  onMembersChange = ({ max, min }) =>
    this.props.onFiltersChange({
      ...this.props.filters,
      members: [min, max],
    });

  onCostChange = ({ max, min }) =>
    this.props.onFiltersChange({
      ...this.props.filters,
      cost: [min, max],
    });

  onPartneredChange = ({ target: { checked } }) =>
    this.props.onFiltersChange({
      ...this.props.filters,
      partner: checked,
    });

  onVerifiedChange = ({ target: { checked } }) =>
    this.props.onFiltersChange({
      ...this.props.filters,
      verified: checked,
    });

  onMutualPromotionChange = ({ target: { checked } }) =>
    this.props.onFiltersChange({
      ...this.props.filters,
      mut_promo: checked,
    });

  render() {
    const {
      filters: {
        members: [fromMembers, toMembers],
        cost: [fromCost, toCost],
        partner,
        verified,
        mut_promo,
      },
      categoriesEnabled,
      intl,
    } = this.props;
    return (
      <div className="channel-filters">
        {categoriesEnabled && (
          <div>
            <span className="channel-filters__title">
              {intl.messages["channels.filters.category"]}
            </span>
            <Select options={selectOptionsMOCK} />
          </div>
        )}
        <RangeSlider
          label={intl.messages["channels.filters.subscribers"]}
          from={fromMembers}
          to={toMembers}
          maxValue={10000}
          onChange={this.onMembersChange}
        />
        <RangeSlider
          label={intl.messages["channels.filters.cost"]}
          from={fromCost}
          to={toCost}
          maxValue={10000}
          onChange={this.onCostChange}
        />
        <div className="channel-filters__checkboxes">
          <Checkbox
            label={intl.messages["channels.filters.partnered"]}
            checked={partner}
            onChange={this.onPartneredChange}
          />
          <Checkbox
            label={intl.messages["channels.filters.verified"]}
            checked={verified}
            onChange={this.onVerifiedChange}
          />
          <Checkbox
            label={intl.messages["channels.filters.mutualPromo"]}
            checked={mut_promo}
            onChange={this.onMutualPromotionChange}
          />
        </div>
      </div>
    );
  }
}

ChannelFilters.propTypes = {
  filters: PropTypes.object,
  categoriesEnabled: PropTypes.bool,
  onFiltersChange: PropTypes.func,
  intl: intlShape,
};

export default injectIntl(ChannelFilters);
