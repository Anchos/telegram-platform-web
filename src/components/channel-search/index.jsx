import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Select, Checkbox } from "biplane-uikit";
import { NumericFilter } from "../../ui/newdesign/numericFilter/NumericFilter";
import SearchOverlay from "../search-overlay";
import ChannelCard from "../channel-card";
import Paginator from "../paginator";
import Loader from "../loader";
import { setSearchChannelsFilters } from "../../store/action-creators";
import style from "./style.css";

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

  onPageChange = page => {
    this.props.setSearchChannelsFilters({
      ...this.props.filters,
      title: this.props.searchQuery,
      offset: page * this.props.filters.count,
    });
  };

  componentWillUpdate(newProps) {
    if (newProps.searchQuery !== this.props.searchQuery)
      this.props.setSearchChannelsFilters({
        ...this.props.filters,
        title: newProps.searchQuery,
      });
  }

  render() {
    const {
      open,
      channels,
      channelsFetching,
      pageCount,
      filters: {
        members: [fromMembers, toMembers],
        cost: [fromCost, toCost],
        offset,
        count,
      },
    } = this.props;
    return (
      <SearchOverlay open={open}>
        <div className="channel-search">
          <div className="channel-search__filters">
            <div>
              <span className="channel-search__filter-title">Category</span>
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
            <div className="channel-search__checkboxes">
              <Checkbox label="Partners" />
              <Checkbox label="Verified" />
              <Checkbox label="Mutual Promotion" />
            </div>
          </div>
          {channelsFetching ? (
            <Loader centered size="large" />
          ) : channels.length > 0 ? (
            <React.Fragment>
              <div className="channel-search__table-header">
                <div className="channel-search__name">Name</div>
                <div className="channel-search__followers">Followers</div>
                <div className="channel-search__likes">Likes</div>
                <div className="channel-search__cost">Ads</div>
              </div>
              {channels.map(channel => <ChannelCard key={channel.id} {...channel} />)}
              {pageCount > 1 && (
                <Paginator
                  pageCount={pageCount}
                  currentPage={offset / count}
                  onChange={this.onPageChange}
                />
              )}
            </React.Fragment>
          ) : (
            <div className="channel-search__empty">No channels match your search</div>
          )}
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
  setSearchChannelsFilters: PropTypes.func,
};

export default connect(
  state => ({
    channelsFetching: state.channelSearch.channels.fetching,
    channels: state.channelSearch.channels.items,
    pageCount: Math.ceil(state.channelSearch.channels.total / state.channelSearch.filters.count),
    filters: state.channelSearch.filters,
  }),
  { setSearchChannelsFilters },
)(ChannelSearch);
