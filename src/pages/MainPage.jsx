import React from "react";
import { connect } from "react-redux";
import data from "../data_mocks";
import { requestChannels } from "../store/action-creators";

import { Banners } from "../ui/newdesign/banners/Banners";
import { Channels } from "../ui/newdesign/channels/Channels";

class MainPage extends React.Component {
  componentDidMount() {
    this.props.requestChannels();
  }

  render() {
    const {channels} = this.props;
    return (
      <div>
        <Banners cards={data.cards} />
        <Channels
        //getChannelForMembers={this.debounce}
        channels={channels}
        //maxMembers={maxMembers}
        />
      </div>
    );
  }
}

export default connect(
  state => ({ channels: state.main.channels.items }),
  { requestChannels },
)(MainPage);
