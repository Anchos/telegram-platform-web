import React from "react";
import PropTypes from "prop-types";
import { injectIntl, intlShape } from "react-intl";
import { Select, Checkbox } from "biplane-uikit";
import { getLocalizedCategories } from "../../static-data/categories";
import RangeSlider from "../range-slider";
import SortOrderButton from "../sort-order-button";
import style from "./style.scss";

const sortMap = {
  "+title": { filter: "title", order: "asc" },
  "-title": { filter: "title", order: "desc" },
  "+members": { filter: "members", order: "asc" },
  "-members": { filter: "members", order: "desc" },
  "+likes": { filter: "likes", order: "asc" },
  "-likes": { filter: "likes", order: "desc" },
  "+cost": { filter: "cost", order: "asc" },
  "-cost": { filter: "cost", order: "desc" },
};

class ChannelFilters extends React.Component {
  onMembersChange = values =>
    this.props.onFiltersChange({
      ...this.props.filters,
      members: values,
    });

  onCostChange = values =>
    this.props.onFiltersChange({
      ...this.props.filters,
      cost: values,
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

  onCategoryIdChange = id =>
    this.props.onFiltersChange({
      ...this.props.filters,
      category_id: +id || undefined,
    });

  onSortOrderChange = (filter, order) => console.log(filter, order) ||
    this.props.onFiltersChange({
      ...this.props.filters,
      order: `${order === "asc" ? "+" : "-"}${filter}`,
    });

  render() {
    const {
      filters: {
        members: [fromMembers, toMembers],
        cost: [fromCost, toCost],
        partner,
        verified,
        mut_promo,
        category_id = 0,
        order,
      },
      categoriesEnabled,
      intl,
    } = this.props;

    const sort = sortMap[order];

    return (
      <div>
        <div className="channel-filters">
          {categoriesEnabled && (
            <div>
              <div className="channel-filters__title">
                {intl.messages["channels.filters.category"]}
              </div>
              <Select
                options={getLocalizedCategories(intl)}
                value={category_id}
                onChange={this.onCategoryIdChange}
              />
            </div>
          )}
          <RangeSlider
            label={intl.messages["channels.filters.subscribers"]}
            from={fromMembers}
            to={toMembers}
            maxValue={1000000}
            onChange={this.onMembersChange}
          />
          <RangeSlider
            label={intl.messages["channels.filters.cost"]}
            from={fromCost}
            to={toCost}
            maxValue={200000}
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
        <div className="channel-filters__table-header">
          <div className="channel-filters__order-name">
            <SortOrderButton filter="title" onChange={this.onSortOrderChange} current={sort}>
              {intl.messages["channel.name"]}
            </SortOrderButton>
          </div>
          <div className="channel-filters__order-numbers">
            <SortOrderButton filter="members" onChange={this.onSortOrderChange} current={sort}>
              {intl.messages["channel.followers"]}
            </SortOrderButton>
          </div>
          <div className="channel-filters__order-numbers">
            <SortOrderButton filter="likes" onChange={this.onSortOrderChange} current={sort}>
              {intl.messages["channel.likes"]}
            </SortOrderButton>
          </div>
          <div className="channel-filters__order-numbers">
            <SortOrderButton filter="cost" onChange={this.onSortOrderChange} current={sort}>
              {intl.messages["channel.cost"]}
            </SortOrderButton>
          </div>
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
