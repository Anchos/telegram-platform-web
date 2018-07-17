import React from 'react';
import { Input, Wrapper } from './styles';

export const SearchInput = props => (
  <Wrapper focus={props.focus}>
    <Input 
      type='search'
      onFocus={props.handleFocus}
      onBlur={props.handleBlur}
      onChange={props.handleChange}
      value={props.value}
    />
  </Wrapper>
)