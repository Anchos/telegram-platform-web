import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SearchOverlay from "../search-overlay";
import { setSearchBotsFilters } from "../../store/action-creators";
import BotCard from "../bot-card";
import Loader from "../loader";
import { NumericFilter } from "../../ui/newdesign/numericFilter/NumericFilter";
import style from "./style.css";

class BotSearch extends React.Component {
  onInstallsChange = ({ max, min }) => {
    this.props.setSearchBotsFilters({
      ...this.props.filters,
      title: this.props.searchQuery,
      installs: [min, max],
    });
  };

  componentWillUpdate(newProps) {
    if (newProps.searchQuery !== this.props.searchQuery)
      this.props.setSearchBotsFilters({
        ...this.props.filters,
        title: newProps.searchQuery,
      });
  }

  render() {
    const {
      open,
      bots,
      botsFetching,
      filters: {
        installs: [fromInstalls, toInstalls],
      },
    } = this.props;
    return (
      <SearchOverlay open={open}>
        <div className="bot-search">
          <div className="bot-search__filters">
            <NumericFilter
              label="Number of installs"
              from={fromInstalls}
              to={toInstalls}
              maxValue={100000}
              onChange={this.onInstallsChange}
            />
          </div>
          {botsFetching ? (
            <Loader centered size="lg" />
          ) : bots.length > 0 ? (
            <div className="bot-search__tiles">
              {bots.map(bot => <BotCard key={bot.id} {...bot} />)}
            </div>
          ) : (
            <div className="channel-search__empty">No bots match your search</div>
          )}
        </div>
      </SearchOverlay>
    );
  }
}

BotSearch.propTypes = {
  open: PropTypes.bool,
  searchQuery: PropTypes.string,
  channels: PropTypes.array,
  filters: PropTypes.object,
  setSearchChannelsFilters: PropTypes.func,
};

export default connect(
  state => ({
    botsFetching: state.botSearch.bots.fetching,
    filters: state.botSearch.filters,
    bots: state.botSearch.bots.items,
  }),
  { setSearchBotsFilters },
)(BotSearch);
