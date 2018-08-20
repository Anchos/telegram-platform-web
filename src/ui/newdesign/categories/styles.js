import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NativeLink = ({ className, children, ...props }) => (
  <Link {...props} className={className}>
    {children}
  </Link>
);

export const Wrapper = styled.div`
  background-color: #fff;
  box-shadow: 0 3px 8px 0 rgba(9, 71, 36, 0.1);
`;

export const StyledLink = styled(NativeLink)`
  color: inherit;

  &:hover {
    text-decoration: none;
    color: #808080
  }

  &:active {
    color:  #232825;
  }
`;

export const StyledCategories = styled.div`
  padding-top: 18px;
  padding-bottom: 14px;
  color: #ccc;
  font-size: 16px;
`;

export const Item = styled.li`
  margin-right: 40px;
  margin-bottom: 20px;

  &:last-child {
    margin-right: 0;
    margin-bottom: 0
  }
`;
