import React from 'react'

import { Filters } from './Filters'
import { Row } from './Row'

export class ChannelTable extends React.Component {
  render() {
    return (
      <div className='container-fluid'>
        <Filters />
        <ul>
          <Row type='partners' />
          <Row type='verified' />
          <Row />
          <Row />
          <Row />
          <Row />
        </ul>
      </div>
    )
  }
}