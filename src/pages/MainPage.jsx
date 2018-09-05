import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import data from "../data_mocks";
import { requestChannels, requestCategories, setChannelsFilters } from "../store/action-creators";
import qs from "query-string";
import { Banners } from "../ui/newdesign/banners/Banners";
import FeaturedChannels from "../components/featured-channels";
import Channels from "../ui/newdesign/channels/Channels";
import Categories from "../components/categories";

class MainPage extends React.Component {
  componentDidMount() {
    this.props.requestChannels();
  }

  handleCategoryChange = categoryId => {
    this.props.history.push({ search: `?category=${categoryId}` });
    this.props.requestChannels(categoryId);
  };

  render() {
    const { channels, setChannelsFilters, requestChannels, filters, currentCategory } = this.props;
    return (
      <React.Fragment>
        <Categories
          categories={data.categories}
          onCategoryChange={this.handleCategoryChange}
          currentCategory={currentCategory}
        />
        <FeaturedChannels channels={channels.slice(0, 3)} />
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

export default withRouter(
  connect(
    state => ({
      channels: state.main.channels.items,
      filters: state.main.filters,
    }),
    (dispatch, ownProps) => {
      const currentCategory = +qs.parse(ownProps.location.search).category || 0;
      return {
        requestChannels: category =>
          dispatch(requestChannels(category === undefined ? currentCategory : category)),
        setChannelsFilters: filters =>
          dispatch(setChannelsFilters({ ...filters, category: currentCategory })),
        requestCategories: () => dispatch(requestCategories()),
        currentCategory,
      };
    },
  )(MainPage),
);
