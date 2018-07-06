import React from 'react';
import { inject, observer } from 'mobx-react'
import { Logo } from '../logo/Logo';
import { 
  HeaderRow, 
  Menu, 
  Item, 
  StyledLink,
  StyledButton
} from './styles';
import data from '../../../data'

import { SearchInput } from '../searchInput/SearchInput'
import { Button } from '../button/Button'

@inject('app')
@observer
export class Header extends React.Component {
  render() {
    const { menu = [] } = data;
    const { connectionId } = this.props.app

    return (
      <HeaderRow className='container-fluid'>
        <div className='row no-gutters align-items-center justify-content-between'>
          <div className='row no-gutters align-items-center'>
            <Logo />
            <SearchInput />
          </div>

          <div className='row no-gutters align-items-center'>
            <Menu className='row no-gutters align-items-center'>
              {
                menu && menu.map((element, i) => 
                  <Item key={i}>
                    <StyledLink to={`/${element}`}>{element}</StyledLink>
                  </Item>
                )
              }
            </Menu>
            <StyledButton type='button'>English</StyledButton>
            <div style={{ marginRight: 16 }}>
              <Button text='Surprise' primary />
            </div>
            <Button 
              text='Sign In'
              target='_blank'
              href={`https://t.me/medev_bot?start=${connectionId}`} 
            />
          </div>
        </div>
      </HeaderRow>
    )
  }
}
