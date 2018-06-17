import * as React from "react";
import { Button, Table } from "reactstrap";
import { inject, observer } from 'mobx-react';


@inject('channelsStore')
@observer
export class ChannelList extends React.Component {

  async componentDidMount() {
    await this.props.channelsStore.getAll({ count: 20, offset: 0, title: '', category: '', members: [], cost: [] });
  }

  render() {
    const { channels } = this.props.channelsStore;
    if (!channels || !channels.length) {
      return null;
    }
    return (
      <div style={{ marginTop: 70 }}>
        <div>pagination will be here (broken now)</div>

        <Table>
          <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Link</th>
            <th style={{ whiteSpace: "nowrap" }}>Member count</th>
          </tr>
          </thead>

          <tbody>
          {channels.map(channel => (
            <tr key={channel.username}>
              <td>
                <img src={channel.photo} width={32} height={32} className="rounded-circle" />
              </td>
              <td>
                <div>Link on channel (will work later)</div>
              </td>
              <td>
                <a href={`https://t.me/${channel.username}`} target="_blank">
                  {channel.username}
                </a>
              </td>
              <td>{channel.members}</td>
            </tr>
          ))}
          </tbody>
        </Table>

        <div>pagination will be here (broken now)</div>
      </div>
    )
  }
}

