import React from 'react'
import data from '../data'

import { Banners } from '../ui/newdesign/banners/Banners'
import { Channels } from '../ui/newdesign/channels/Channels'

export class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Banners cards={data.cards} />
        <Channels />
      </div>
    )
  }
}