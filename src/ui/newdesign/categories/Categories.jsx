import React from 'react'
import { StyledCategories, Item, StyledLink, Wrapper } from './styles'

export class Categories extends React.Component {
  render() {

    let { categories } = this.props

    return (
      <Wrapper className='container-fluid'>
        <StyledCategories className='container'>
          <div className='row no-gutters justify-content-center'>  
            <ul className='row no-gutters'>
              {
                categories && categories.map((element, i) => 
                  <Item key={i}>
                    <StyledLink to={`/${element}`}>
                    {element}
                    </StyledLink>
                  </Item>)
              }
            </ul>
          </div>
        </StyledCategories>
      </Wrapper>
    )
  }
}