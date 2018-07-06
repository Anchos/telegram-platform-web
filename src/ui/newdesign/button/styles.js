import styled from 'styled-components'

export const StyledButton = styled.button`
  border-radius: 4px;
  background-color: ${props => props.primary ? '#15ad56' : '#fff'};
  display: block;
  padding: 7px 20px;
  font-size: 20px;
  text-transform: ${props => props.upperCase ? 'uppercase' : 'none'};
  width: ${props => props.width ? props.width : 'auto'};
  max-width: ${props => props.maxWidth ? props.maxWidth : 'auto'}
  color: ${props => props.primary ? '#fff' : '#15ad56'};
  border: ${props => props.primary ? 'none' : '1px solid #15ad56'};
`
export const StyledLink = StyledButton.withComponent('a')
