import React from 'react'
import {
  TableRow,
  Type,
  Avatar,
  Title,
  SmallText
} from './styles'

import { Categories } from './Categories'

export const Row = ({ type }) => (
  <TableRow type={type} className='row align-items-center'>
    <div className='col-2'>
      <div className='row no-gutters align-items-center no-gutters'>
        <Type type={type}>s</Type>
        <Avatar></Avatar>
      </div>
    </div>
    <div className='col-7'>
      <Title type={type}>Channel by joker</Title>
      <SmallText type={type}>@joker</SmallText>
      <Categories categories={new Array(6).fill('Криптовалюта')} />
    </div>
    <div className='col-3'>
      <div className='row no-gutters justify-content-between'>
        <div className='col'>
          <div className='row no-gutters justify-content-center'>15 897</div>
        </div>
        <div className='col'>
          <div className='row no-gutters justify-content-center'>59 781</div>
        </div>
        <div className='col'>
          <div className='row no-gutters justify-content-center'>200 $</div>
        </div>
      </div>
    </div>
  </TableRow>
)