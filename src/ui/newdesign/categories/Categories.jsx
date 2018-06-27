import React from 'react'
import { StyledCategories, Item, StyledLink } from './styles'

export class Categories extends React.Component {
  render() {

    let { categories } = this.props

    return (
      <StyledCategories className='container-fluid'>
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
      </StyledCategories>
    )
  }
}