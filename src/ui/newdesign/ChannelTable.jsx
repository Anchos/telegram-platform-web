import * as React from 'react';
import { ChannelTableHeader } from "./ChannelTableHeader";
import { ChannelTableRow } from "./ChannelTableRow";
import {
  inject,
  observer,
} from "mobx-react";
import { ShowMoreButton } from "./ShowMoreButton";
import { PaginationRow } from "./PaginationRow";
import * as _ from 'lodash';

@inject('channelsStore', 'app')
@observer
export class ChannelTable extends React.Component {

  async componentDidMount() {
    await this.props.channelsStore.getAll({ count: 20, offset: 0, title: '', category: '', members: [0, 0], cost: [0, 0] });
  }

  render() {
    const { channels, pagesLength } = this.props.channelsStore;
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
        <ShowMoreButton
          style={{ marginTop: 20 }}
        />
        {
          pagesLength > 1 ?
            <PaginationRow
              activePage={this.props.channelsStore.activePage}
              onPageClick={p => {
                this.props.channelsStore.activePage = Number(p);
                this.props.channelsStore.getAll({
                  offset: this.props.app.count * (Number(p) - 1),
                  count: this.props.app.count,
                  members: [0, this.props.app.toMembers],
                  cost: [0, this.props.app.toCost],
                })
              }}
              style={{ marginTop: 20 }}
              pages={_.range(1, pagesLength + 1)}
            /> : null
        }
      </div>
    )
  }
}