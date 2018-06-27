import React from 'react'
import { Wrapper } from './styles'

import { Card } from '../card/Card'

export const Banners = ({ cards }) => (
  <Wrapper className='container-fluid'>
    <ul className='row align-items-center justify-content-center'>
      {
        cards && cards.map((card, i) =>
          <li className='col-12 col-sm-12 col-md-6 col-lg-4' key={i}><Card {...card}/></li>
        )
      }
    </ul>
  </Wrapper>
)