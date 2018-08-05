import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "class-names";
import { Select, Checkbox } from "biplane-uikit";
import { NumericFilter } from "../../ui/newdesign/numericFilter/NumericFilter";
import SearchOverlay from "../search-overlay";
import ChannelCard from "../channel-card";
import { setSearchChannelsFilters } from "../../store/action-creators";
import style from "./style.css";

const st = classNames.bind(style);

const selectOptionsMOCK = [{ label: "option1", value: "1" }, { label: "option2", value: "2" }];

class ChannelSearch extends React.Component {
  onMembersChange = ({ max, min }) => {
    this.props.setSearchChannelsFilters({
      ...this.props.filters,
      title: this.props.searchQuery,
      members: [min, max],
    });
  };

  onCostChange = ({ max, min }) => {
    this.props.setSearchChannelsFilters({
      ...this.props.filters,
      title: this.props.searchQuery,
      cost: [min, max],
    });
  };

  componentWillUpdate(newProps) {
    if (newProps.searchQuery !== this.props.searchQuery)
      this.props.setSearchChannelsFilters({
        ...this.props.filters,
        title: newProps.searchQuery
      });
  }

  render() {
    const {
      open,
      channels,
      filters: {
        members: [fromMembers, toMembers],
        cost: [fromCost, toCost],
      },
    } = this.props;
    return (
      <SearchOverlay open={open}>
        <div className={st("channel-search")}>
          <div className={st("channel-search__filters")}>
            <div>
              <span className={st("channel-search__filter-title")}>Category</span>
              <Select options={selectOptionsMOCK} />
            </div>
            <NumericFilter
              label="Number of subscribers"
              from={fromMembers}
              to={toMembers}
              maxValue={10000}
              onChange={this.onMembersChange}
            />
            <NumericFilter
              label="Advertising cost"
              from={fromCost}
              to={toCost}
              maxValue={10000}
              onChange={this.onCostChange}
            />
            <div className={st("channel-search__checkboxes")}>
              <Checkbox label="Partners" />
              <Checkbox label="Verified" />
              <Checkbox label="Mutual Promotion" />
            </div>
          </div>
          <div className={st("channel-search__table-header")}>
            <div className={st("channel-search__name")}>Name</div>
            <div className={st("channel-search__followers")}>Followers</div>
            <div className={st("channel-search__likes")}>Likes</div>
            <div className={st("channel-search__cost")}>Ads</div>
          </div>
          {channels.map(channel => <ChannelCard key={channel.id} {...channel} />)}
        </div>
      </SearchOverlay>
    );
  }
}

ChannelSearch.propTypes = {
  open: PropTypes.bool,
  searchQuery: PropTypes.string,
  channels: PropTypes.array,
  filters: PropTypes.object,
  setSearchChannelsFilters: PropTypes.func
};

export default connect(
  state => ({
    channels: state.channelSearch.channels.items,
    filters: state.channelSearch.filters,
  }),
  { setSearchChannelsFilters },
)(ChannelSearch);
