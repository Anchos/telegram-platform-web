import React from "react";
import data from "../data_mocks";
import _ from "lodash";

import { Banners } from "../ui/newdesign/banners/Banners";
import { Channels } from "../ui/newdesign/channels/Channels";

export class MainPage extends React.Component {
  constructor() {
    super();

    this.body = {
      count: 20,
      offset: 0,
      title: "",
      category: "",
      members: [0, 20],
      cost: [0, 20],
    };
  }

  getChannelForMembers = values => {
    // this.props.channelsStore.getChannelForMembers(values)
  };

  render() {
    // const { channels, app: { maxMembers } } = this.props.channelsStore
    return (
      <div>
        <Banners cards={data.cards} />
        <Channels
        //getChannelForMembers={this.debounce}
        //channels={channels}
        //maxMembers={maxMembers}
        />
      </div>
    );
  }
}
