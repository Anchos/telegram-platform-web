import React from 'react'
import { StyledButton, StyledLink } from './styles'

export const Button = ({ text, handleClick, href, ...props }) => 
  href ?
    <StyledLink {...props} href={href} >
      {text}
    </StyledLink>
    :
    <StyledButton
      {...props}
      type='button'
      onClick={handleClick}
    >
      {text}
    </StyledButton>
