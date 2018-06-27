import styled from 'styled-components';
import img from './img/search.svg';

export const WrapperInput = styled.div`
  width: 373px;
  height: 40px;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    right: 17px;
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    background-image: url(${img});
    position: absolute;
  }
`

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 20px;
  background-color: #ffffff;
  border: solid 1px #cccccc;
  font-family: Lato;
  font-size: 20px;
  color: #232825;
  padding-left: 18px;
  padding-right: 30px;
  outline: none;

  &:focus { 
    border: solid 1px #15ad56;
  }

  &::placeholder {
    color: #cccccc;
    font-family: Lato;
  }
`