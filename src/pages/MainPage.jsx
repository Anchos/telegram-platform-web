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

  getChannelForMembers = values => {
    this.props.channelsStore.getChannelForMembers(values)
  }

  render() {

    const { channels, app: { maxMembers } } = this.props.channelsStore

  
    return (
      <div>
        <Banners cards={data.cards} />
        <Channels 
          getChannelForMembers={this.getChannelForMembers}
          channels={channels}
          maxMembers={maxMembers}
        />
      </div>
    )
  }
}