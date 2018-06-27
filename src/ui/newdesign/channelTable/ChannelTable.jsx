import React from 'react'

import { Filters } from './Filters'
import { Row } from './Row'

export class ChannelTable extends React.Component {
  render() {

    let { channels } = this.props

    return (
      <div className='container-fluid'>
        <Filters />
        <ul>
          {
            channels.map((channel, i) => <Row key={channel.id} {...channel} />)
          }
        </ul>
      </div>
    )
  }
}