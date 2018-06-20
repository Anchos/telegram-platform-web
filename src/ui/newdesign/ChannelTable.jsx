import * as React from 'react';
import { ChannelTableHeader } from "./ChannelTableHeader";
import { ChannelTableRow } from "./ChannelTableRow";
import {
  inject,
  observer,
} from "mobx-react";

@inject('channelsStore')
@observer
export class ChannelTable extends React.Component {

  async componentDidMount() {
    await this.props.channelsStore.getAll({ count: 20, offset: 0, title: '', category: '', members: [0, 0], cost: [0, 0] });
  }

  render() {
    const { channels } = this.props.channelsStore;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginBottom: 50,
          marginTop: 50,
        }}
      >
        <ChannelTableHeader/>
        {
          channels.map(c => (
            <ChannelTableRow row={c} />
          ))
        }
      </div>
    )
  }
}