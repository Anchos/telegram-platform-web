import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "class-names";
import SearchOverlay from "../search-overlay";
import { setSearchStickersFilters } from "../../store/action-creators";
import StickerCard from "../sticker-card";
import Loader from "../loader";
import { NumericFilter } from "../../ui/newdesign/numericFilter/NumericFilter";
import style from "./style.css";

const st = classNames.bind(style);

class StickerSearch extends React.Component {
  onInstallsChange = ({ max, min }) => {
    this.props.setSearchStickersFilters({
      ...this.props.filters,
      title: this.props.searchQuery,
      installs: [min, max],
    });
  };

  componentWillUpdate(newProps) {
    if (newProps.searchQuery !== this.props.searchQuery)
      this.props.setSearchStickersFilters({
        ...this.props.filters,
        title: newProps.searchQuery,
      });
  }

  render() {
    const {
      open,
      stickers,
      stickersFetching,
      filters: {
        installs: [fromInstalls, toInstalls],
      },
    } = this.props;
    return (
      <SearchOverlay open={open}>
        <div className={st("sticker-search")}>
          <div className={st("sticker-search__filters")}>
            <NumericFilter
              label="Number of installs"
              from={fromInstalls}
              to={toInstalls}
              maxValue={100000}
              onChange={this.onInstallsChange}
            />
          </div>
          {stickersFetching ? (
            <Loader centered size="lg" />
          ) : stickers.length > 0 ? (
            <div className={st("sticker-search__tiles")}>
              {stickers.map(sticker => <StickerCard key={sticker.id} {...sticker} />)}
            </div>
          ) : (
            <div className={st("channel-search__empty")}>No stickers match your search</div>
          )}
        </div>
      </SearchOverlay>
    );
  }
}

StickerSearch.propTypes = {
  open: PropTypes.bool,
  searchQuery: PropTypes.string,
  channels: PropTypes.array,
  filters: PropTypes.object,
  setSearchChannelsFilters: PropTypes.func,
};

export default connect(
  state => ({
    stickersFetching: state.stickerSearch.stickers.fetching,
    filters: state.stickerSearch.filters,
    stickers: state.stickerSearch.stickers.items,
  }),
  { setSearchStickersFilters },
)(StickerSearch);
