import React from 'react';
import { Link } from "react-router-dom";
import { StyledLogo } from './styles';

export const Logo = () => (
  <StyledLogo>
    <Link style={{ color: '#15ad56'}} to={'/'}>
      Biplane
    </Link>
  </StyledLogo>
);
