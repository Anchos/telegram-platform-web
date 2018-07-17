import React from 'react'
import { Wrapper, StyledSelect } from './styles'

export const Select = ({ options }) => (
  <Wrapper>
    <StyledSelect>
      {
        options && options.map((option, i) => 
          <option key={i} value={option.value}>{option.name}</option>
        )
      }
    </StyledSelect>
  </Wrapper>
)