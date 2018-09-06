import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Select, Checkbox } from "biplane-uikit";
import SearchOverlay from "../search-overlay";
import ChannelCard from "../channel-card";
import Paginator from "../paginator";
import Loader from "../loader";
import { setChannelsFilters } from "../../store/action-creators";
import ChannelFilters from "../channel-filters";
import style from "./style.scss";

class ChannelsMain extends React.Component {
  onPageChange = page => {
    this.props.setChannelsFilters({
      ...this.props.filters,
      offset: page * this.props.filters.count,
    });
  };

  render() {
    const { open, channels, channelsFetching, pageCount, filters, setChannelsFilters } = this.props;
    return (
      <div className="channels-main">
        <div className="channels-main__header">Channels</div>
        <ChannelFilters
          categoriesEnabled={false}
          filters={filters}
          onFiltersChange={setChannelsFilters}
        />
        {channelsFetching ? (
          <div className="channels-main__empty">
            <Loader centered size="large" />
          </div>
        ) : channels.length > 0 ? (
          <React.Fragment>
            <div className="channels-main__table-header">
              <div className="channels-main__name">Name</div>
              <div className="channels-main__numbers">Followers</div>
              <div className="channels-main__numbers">Likes</div>
              <div className="channels-main__numbers">Ads</div>
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
          <div className="channels-main__empty">No channels match your search</div>
        )}
      </div>
    );
  }
}

ChannelsMain.propTypes = {
  channels: PropTypes.array,
  filters: PropTypes.object,
  setChannelsFilters: PropTypes.func,
};

export default connect(
  state => ({
    channelsFetching: state.main.channels.fetching,
    channels: state.main.channels.items,
    pageCount: Math.ceil(state.main.channels.total / state.main.filters.count),
    filters: state.main.filters,
  }),
  { setChannelsFilters },
)(ChannelsMain);
