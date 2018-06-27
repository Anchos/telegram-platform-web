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
    <div className='col-1'>
      <div className='row justify-content-center no-gutters'>
        <Filter>Followers</Filter>
      </div>
    </div>
    <div className='col-1'>
      <div className='row justify-content-center no-gutters'>
        <Filter>Ads</Filter>
      </div>
    </div>
    <div className='col-1'>
      <div className='row justify-content-center no-gutters'>
        <Filter>Followers</Filter>
      </div>
    </div>
  </WrapperFilters>
)