import React from 'react'
import { 
  WrapperFilters,
  Filter
} from './styles'

export const Filters = () => (
  <WrapperFilters className='row align-items-center no-gutters'>
    <div className='offset-2 col-7'>
      <div className='row no-gutters'>
        <Filter>Name</Filter>
      </div>
    </div>
    <div className='col-3'>
      <div className='row no-gutters justify-content-between'>
        <div><Filter>Followers</Filter></div>
        <div><Filter>Likes</Filter></div>
        <div><Filter>Ads</Filter></div>
      </div>
    </div>
  </WrapperFilters>
)