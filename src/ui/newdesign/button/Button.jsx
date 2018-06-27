import React from 'react'
import { StyledButton } from './styles'

export const Button = ({ text, handleClick, ...props }) => (
  <StyledButton
    {...props}
    type='button' 
    onClick={handleClick}
  >
    {text}
  </StyledButton>
)