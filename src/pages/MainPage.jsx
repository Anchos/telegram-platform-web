import React from "react";
import { connect } from "react-redux";
import data from "../data_mocks";
import { requestChannels, setChannelsFilters } from "../store/action-creators";

import { Banners } from "../ui/newdesign/banners/Banners";
import { Channels } from "../ui/newdesign/channels/Channels";

class MainPage extends React.Component {
  componentDidMount() {
    this.props.requestChannels();
  }

  render() {
    const { channels, setChannelsFilters, filters } = this.props;
    return (
      <div>
        <Banners cards={data.cards} />
        <Channels
          channels={channels}
          onFiltersChange={setChannelsFilters}
          filters={filters}
          maxMembers={20000}
          maxCost={20000}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    channels: state.main.channels.items,
    filters: state.main.filters,
  }),
  { requestChannels, setChannelsFilters },
)(MainPage);
