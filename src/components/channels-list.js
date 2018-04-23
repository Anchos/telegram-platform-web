import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Table } from "reactstrap";

import { getActiveChannels, fetchData } from "~/store/data";

const mapStateToProps = createStructuredSelector({
  channels: getActiveChannels,
});

class ChannelsListView extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchData());
  }

  renderHeader() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Link</th>
          <th>Member count</th>
        </tr>
      </thead>
    );
  }

  renderContent() {
    return (
      <tbody>
        {this.props.channels.map(channel => (
          <tr key={channel.link}>
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
