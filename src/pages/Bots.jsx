import React from 'react'
import { Wrapper, StrongText, WrapperSort, ListCenter, RowMargin, RowCenter } from './styles'
import { Button } from '../ui/newdesign/button/Button'
import ButtonSort from '../ui/newdesign/buttonSort/ButtonSort'
import Bot from '../ui/newdesign/bot/Bot'

export class BotsPage extends React.Component {

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
            <RowCenter className='row no-gutters'><Button text='Add bot' /></RowCenter>
          </div>
        </WrapperSort>
        <ListCenter>
          {
            new Array(12).fill('').map((bot, i) => <Bot key={i} />)
          }
        </ListCenter>
      </Wrapper>
    )
  }
}