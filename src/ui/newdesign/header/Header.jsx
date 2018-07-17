import React from 'react'
import { inject, observer } from 'mobx-react'
import { Link, withRouter } from 'react-router-dom'

import { 
  HeaderWrapper,
  HeaderRow, 
  Menu, 
  WrapperHidden,
  Item, 
  StyledLink
} from './styles';
import data from '../../../data'

import { Logo } from '../logo/Logo'
import { SearchInput } from '../searchInput/SearchInput'
import { Button } from '../button/Button'
import { Select } from '../select/Select'

@inject('app')
@observer
class HeaderClass extends React.Component {

  state = {
    focus: false,
    searchValue: ''
  }

  search = event => {
    event.preventDefault()

    this.setState({ searchValue: event.target.value })
  }

  handleBlur = () => {
    this.setState({
      focus: false,
      searchValue: ''
    })
  }

  handleFocus = () => {
    this.setState({
      focus: true
    })
  }

  render() {
    const { menu = [] } = data;
    const { connectionId } = this.props.app

    return (
      <HeaderWrapper className='container-fluid'>
        <HeaderRow className='container'>
        <div className='row no-gutters align-items-center justify-content-between'>

          <WrapperHidden className='col-2'>
            <Logo />
          </WrapperHidden>

          <div className='col-md-12 col-lg-7 col-xl-6'>
            <div className={
              `
              no-gutters row align-items-center 
              justify-content-${this.state.focus ? 'end' : 'between'}
            `}>
              {
                !this.state.focus &&
                  <Menu className='row no-gutters align-items-center'>
                    {
                      menu && menu.map((element, i) => 
                        <Item key={i}>
                          <StyledLink activeStyle={{color: '#15AD56'}} to={`/${element.toLowerCase()}`}>{element}</StyledLink>
                        </Item>
                      )
                    }
                    <Item><Button text='Suggest' primary /></Item>
                  </Menu>
              }
              <SearchInput 
                handleFocus={this.handleFocus}
                handleBlur={this.handleBlur}
                handleChange={this.search}
                focus={this.state.focus}
                value={this.state.searchValue}
              />
            </div>
          </div>

          <div className='col-md-4 col-lg-3 col-xl-3'>
            <div className='row no-gutters align-items-center justify-content-between'>
              <WrapperHidden><Link to='/faq'>FAQ</Link></WrapperHidden>
              <WrapperHidden><Select options={[{ value: 'en', name: 'EN' }]} /></WrapperHidden>
              <Button text='Surprise' primary />
              <Button 
                href={`https://t.me/medev_bot?start=${connectionId}`} 
                text='Sign In'
              />
            </div>
          </div>

        </div>
      </HeaderRow>
      </HeaderWrapper>
    )
  }
}

export const Header = withRouter(HeaderClass)
