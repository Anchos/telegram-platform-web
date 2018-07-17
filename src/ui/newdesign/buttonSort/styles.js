import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Button = styled(NavLink)`
  border: none;
  background-color: transparent;
  position: relative;
  padding-right: 33px;
  font-size: 20px;

  &:hover {
    color: #15AD56;
  }

  &:hover::after {
    border-top: 7px solid #15AD56;
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    border: 7px solid transparent;	
    border-top: 7px solid #232825;
    bottom: 2px;
    right: 12px;
  }
`