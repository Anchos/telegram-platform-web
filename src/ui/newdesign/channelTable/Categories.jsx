import React from 'react'
import { Category } from './styles'

export const Categories = ({ categories} ) => (
  <ul>
    {
      categories && categories.map((category, i) => 
        <Category key={i}>{category}</Category>
      )
    }
  </ul>
)