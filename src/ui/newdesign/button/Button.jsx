import React from 'react'
import { StyledButton, StyledLink } from './styles'

export const Button = ({ 
  text, 
  marginRight,
  handleClick, 
  href, 
  ...props 
}) => 
  href ?
    <StyledLink marginRight={marginRight} {...props} href={href} >
      {text}
    </StyledLink>
    :
    <StyledButton
      {...props}
      marginRight={marginRight}
      type='button'
      onClick={handleClick}
    >
      {text}
    </StyledButton>
