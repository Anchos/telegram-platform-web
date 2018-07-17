import React from 'react'
import { Wrapper, StrongText , WrapperSort, List, RowMargin, RowCenter } from './styles'
import { Button } from '../ui/newdesign/button/Button'
import ButtonSort from '../ui/newdesign/buttonSort/ButtonSort'
import Sticker from '../ui/newdesign/sticker/Sticker'

export class StickersPage extends React.Component {

  render() {
    return (
      <Wrapper className='container'>
        <WrapperSort className='row no-gutters align-items-center justify-content-between'>
          <div className='col col-sm-12 col-lg-6 col-xl-5'>
            <RowMargin className='row no-gutters align-items'>
              <div className='col'>
                <StrongText>Sort by:</StrongText>
              </div>
              <div className='col'>
                <ButtonSort to='/' text='Popularity' style={{ marginRight: 10 }} />
              </div>
              <div className='col'>
                <ButtonSort to='/' text='Name' />
              </div>
            </RowMargin>
          </div>
          <div className='col-sm-12 col-lg-auto col-xl-auto'>
            <RowCenter className='row no-gutters'><Button text='Add stickers' /></RowCenter>
          </div>
        </WrapperSort>
        <List>
          {
            new Array(12).fill('').map((element, i) => <Sticker key={i} />)
          }
        </List>
      </Wrapper>
    )
  }
}