import React from 'react'
import {
  TableRow,
  Type,
  Avatar,
  Title,
  SmallText
} from './styles'

import { Categories } from './Categories'

export const Row = ({ 
  title,
  username,
  photo,
  likes,
  members
}) => (
  <TableRow className='row align-items-center'>
    <div className='col-2'>
      <div className='row no-gutters align-items-center no-gutters'>
        <Type>s</Type>
        <Avatar imageUrl={photo}></Avatar>
      </div>
    </div>
    <div className='col-7'>
      <Title>{title}</Title>
      <SmallText>{username}</SmallText>
      <Categories categories={new Array(6).fill('Криптовалюта')} />
    </div>
    <div className='col-3'>
      <div className='row no-gutters justify-content-between'>
        <div className='col'>
          <div className='row no-gutters justify-content-center'>{members}</div>
        </div>
        <div className='col'>
          <div className='row no-gutters justify-content-center'>{likes}</div>
        </div>
        <div className='col'>
          <div className='row no-gutters justify-content-center'>200 $</div>
        </div>
      </div>
    </div>
  </TableRow>
)