import React from 'react';
import { StyledInput, WrapperInput } from './styles';

export const SearchInput = () => (
  <WrapperInput>
    <StyledInput 
      type='text'
      placeholder='Channel name, tag or description...'
    />
  </WrapperInput>
)