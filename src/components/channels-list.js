import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Table } from "reactstrap";

import { getActiveFilteredChannels, fetchData } from "~/store/data";

const mapStateToProps = createStructuredSelector({
  channels: getActiveFilteredChannels,
});

class ChannelsListView extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchData());
  }

  renderHeader() {
    return (
      <thead>
        <tr>
          <th />
          <th>Name</th>
          <th>Link</th>
          <th style={{ whiteSpace: "nowrap" }}>Member count</th>
        </tr>
      </thead>
    );
  }

  renderContent() {
    return (
      <tbody>
        {this.props.channels.map(channel => (
          <tr key={channel.link}>
            <td>
              <img src={channel.photo} width={32} height={32} className="rounded-circle" />
            </td>
            <td>{channel.name}</td>
            <td>
              <a href={`https://t.me/${channel.link}`} target="_blank">
                @{channel.link}
              </a>
            </td>
            <td>{channel.members}</td>
          </tr>
        ))}
      </tbody>
    );
  }

  render() {
    return (
      <Table>
        {this.renderHeader()}
        {this.renderContent()}
      </Table>
    );
  }
}

export const ChannelsList = connect(mapStateToProps)(ChannelsListView);
