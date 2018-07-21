import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, Strong } from './styles'

const data = [
  'Surprise',
  'Contact us',
  'Privacy Policy',
  'Terms and Conditions'
]

export const Footer = () => (
  <Wrapper className='container-fluid'>
    <div className='container'>
      <div className='row justify-content-between'>
        <div className='col-auto'><Strong>Biplane</Strong>, 2018</div>
        <ul className='col-4'>
          <div className='row no-gutters justify-content-between'>
            {
              data.map((el, i) => <li key={i} ><Link to='/'>{el}</Link></li>)
            }
          </div>
        </ul>
      </div>
    </div>
  </Wrapper>
)