import React from "react";
import { connect } from "react-redux";
import data from "../data_mocks";
import { requestChannels, requestCategories, setChannelsFilters } from "../store/action-creators";
import qs from "query-string";
import { Banners } from "../ui/newdesign/banners/Banners";
import Channels from "../ui/newdesign/channels/Channels";
import Categories from "../components/categories";

class MainPage extends React.Component {
  componentDidMount() {
    this.props.requestChannels();
    this.props.requestCategories();
  }

  render() {
    const { channels, setChannelsFilters, filters } = this.props;
    return (
      <React.Fragment>
        <Categories categories={data.categories} />
        <Banners cards={data.cards} />
        <Channels
          channels={channels}
          onFiltersChange={setChannelsFilters}
          filters={filters}
          maxMembers={20000}
          maxCost={20000}
        />
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    channels: state.main.channels.items,
    filters: state.main.filters,
  }),
  (dispatch, ownProps) => {
    const category = qs.parse(ownProps.location.search).category || '';
    return {
      requestChannels: () => dispatch(requestChannels(category)),
      setChannelsFilters: filters => dispatch(setChannelsFilters({...filters, category})),
      requestCategories: () => dispatch(requestCategories()),
    };
  },
)(MainPage);
