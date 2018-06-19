import * as React from 'react';
import { ChannelTableHeader } from "./ChannelTableHeader";
import { ChannelTableRow } from "./ChannelTableRow";

export class ChannelTable extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <ChannelTableHeader/>
        {
          this.props.rows && this.props.rows.map(r => (
            <ChannelTableRow row={r} />
          ))
        }
      </div>
    )
  }
}