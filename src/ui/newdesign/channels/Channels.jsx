import React from 'react'
import { Wrapper, Title, RowMarginBottom } from './styles'

import { NumericFilter } from '../numericFilter/NumericFilter'
import { Checkbox } from '../checkbox/Checkbox'
import { ChannelTable } from '../channelTable/ChannelTable'
import { Button } from '../button/Button'

export class Channels extends React.Component {
  render() {

    let { channels = [], getChannelForMembers, maxMembers } = this.props

    return (
      <Wrapper className='container-fluid'>
        <RowMarginBottom margin='48px' className='row no-gutters align-items'>
          <Title>Channels</Title>
          <Button text='Add Channel' width='160px' />
        </RowMarginBottom>
        <RowMarginBottom margin='35px' className='row align-items-center justify-content-between'>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
            <NumericFilter 
              getChannelForMembers={getChannelForMembers} 
              label='Number of subscribers' 
              channels={channels}
              maxValue={maxMembers}
            />
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
            <NumericFilter label='Advertising cost' />
          </div>
          <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
            <div className='row no-gutters justify-content-between'>
              <Checkbox id='partners' label='Partners channels' />
              <Checkbox id='verified' label='Verified channels' />
            </div>
          </div>
        </RowMarginBottom>
        <ChannelTable channels={channels} />
      </Wrapper>
    )
  }
}