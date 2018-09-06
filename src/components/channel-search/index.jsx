import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Select, Checkbox } from "biplane-uikit";
import SearchOverlay from "../search-overlay";
import ChannelCard from "../channel-card";
import Paginator from "../paginator";
import Loader from "../loader";
import { setSearchChannelsFilters } from "../../store/action-creators";
import ChannelFilters from "../channel-filters";
import style from "./style.css";

class ChannelSearch extends React.Component {
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
      filters,
      setSearchChannelsFilters,
    } = this.props;
    return (
      <SearchOverlay open={open}>
        <div className="channel-search">
          <ChannelFilters
            categoriesEnabled={true}
            filters={filters}
            onFiltersChange={setSearchChannelsFilters}
          />
          {channelsFetching ? (
            <Loader centered size="large" />
          ) : channels.length > 0 ? (
            <React.Fragment>
              <div className="channel-search__table-header">
                <div className="channel-search__name">Name</div>
                <div className="channel-search__numbers">Followers</div>
                <div className="channel-search__numbers">Likes</div>
                <div className="channel-search__numbers">Ads</div>
              </div>
              {channels.map(channel => (
                <ChannelCard key={channel.id} {...channel} />
              ))}
              {pageCount > 1 && (
                <Paginator
                  pageCount={pageCount}
                  currentPage={filters.offset / filters.count}
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
