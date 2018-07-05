import React from 'react'
import data from '../data'
import { inject, observer } from 'mobx-react'

import { Banners } from '../ui/newdesign/banners/Banners'
import { Channels } from '../ui/newdesign/channels/Channels'

@inject('channelsStore')
@observer
export class MainPage extends React.Component {

  constructor() {
    super()

    this.body = { 
      count: 20, 
      offset: 0, 
      title: '', 
      category: '', 
      members: [0, 20], 
      cost: [0, 20] 
    }
  }

  async componentDidMount() {
    await this.props.channelsStore.getAll(this.body)
  }

  render() {

    const { channels, getChannelForMembers } = this.props.channelsStore

    if (!channels || !channels.length) {
      return null;
    }

    return (
      <div>
        <Banners cards={data.cards} />
        <Channels 
          getChannelForMembers={getChannelForMembers}
          channels={channels}
        />
      </div>
    )
  }
}