import React from 'react'
import data from '../data_mocks'
import { inject, observer } from 'mobx-react'
import _ from 'lodash'

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
    this.debounce = _.debounce(this.props.channelsStore.getChannelForMembers, 1000)
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
          getChannelForMembers={this.debounce}
          channels={channels}
          maxMembers={maxMembers}
        />
      </div>
    )
  }
}
