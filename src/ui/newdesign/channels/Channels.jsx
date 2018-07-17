import React from 'react'
import { Wrapper, Title, RowMarginBottom, WrapperCheckboxes, WrapperFilter } from './styles'

import { NumericFilter } from '../numericFilter/NumericFilter'
import { Checkbox } from '../checkbox/Checkbox'
import { ChannelTable } from '../channelTable/ChannelTable'
import { Button } from '../button/Button'

export class Channels extends React.Component {
  render() {

    let { channels = [], getChannelForMembers, maxMembers } = this.props

    return (
      <Wrapper className='container'>
        <RowMarginBottom margin='48px' className='row no-gutters align-items'>
          <Title>Channels</Title>
          <Button text='Add Channel' maxWidth='160px' />
        </RowMarginBottom>
        <RowMarginBottom margin='35px' className='row align-items-end justify-content-between'>
          <WrapperFilter className='col-12 col-sm-12 col-md-6 col-lg-4 mb-md-100'>
            <NumericFilter 
              getChannelForMembers={getChannelForMembers} 
              label='Number of subscribers' 
              channels={channels}
              maxValue={maxMembers}
            />
          </WrapperFilter>
          <WrapperFilter className='col-12 col-sm-12 col-md-6 col-lg-4 mb-md-100'>
            <NumericFilter label='Advertising cost' />
          </WrapperFilter>
          <WrapperCheckboxes className='col-12 col-sm-12 col-md-12 col-lg-4'>
            <div className='row no-gutters justify-content-between'>
              <Checkbox id='partners' label='Partners' />
              <Checkbox id='verified' label='Verified' />
              <Checkbox id='verified' label='Mutual Promotion' />
            </div>
          </WrapperCheckboxes>
        </RowMarginBottom>
        <ChannelTable channels={channels} />
      </Wrapper>
    )
  }
}