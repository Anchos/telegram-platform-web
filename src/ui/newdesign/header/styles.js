import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const NativeLink = ({ className, children, ...props }) => (
  <Link {...props} className={className}>
    {children}
  </Link>
)

export const HeaderRow = styled.header`
  width: 100%;
  padding: 15px 60px;
  background-color: #ffffff;
  box-shadow: 0 3px 8px 0 rgba(9, 71, 36, 0.1);
`

export const Menu = styled.ul`
  list-style: none;
  font-size: 20px;
  color: #232825;
  margin-bottom: 0;
  margin-right: 40px;
`
export const StyledLink = styled(NativeLink)`
  color: #232825;

  &:hover {
    text-decoration: none;
    color: #15ad56;
  }
`

export const Item = styled.li`
  list-style: none;
  font-size: 20px;
  color: #232825;
  margin-bottom: 0;
  margin-right: 33px;

  &:last-child {
    margin-right: 0;
  }
`

export const StyledButton = styled.button`
  list-style: none;
  font-size: 20px;
  color: #232825;
  border: none;
  background-color: transparent;
  margin-right: 14px;
`



