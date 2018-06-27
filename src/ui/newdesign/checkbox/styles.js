import styled from 'styled-components'

export const InputHidden = styled.input`
  display:none;

  &:checked + label {
    background-color: green
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #3d3d3d;  
`
export const Input = styled.label`
  width: 13px;
  height: 13px;
  border: solid 1px #000000;
  display: block;
  margin-right: 14px;
`