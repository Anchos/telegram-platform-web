import styled from 'styled-components';
import img from './img/search.svg';

const Wrapper = styled.div`
  width: ${props => props.focus ? '100%' : '40px'};
  height: 40px;
  border-bottom: ${props => props.focus ? '1px solid #232825' : 'none'};
`

const Input = styled.input`
  display: block;
  border: none;
  background-color: transparent;
  background-image: url(${img});
  background-size: 18px 18px;
  background-repeat: no-repeat;
  background-position: right 10px top 50%;
  height: 100%;
  width: 100%;
  outline: none;
`

export { Wrapper, Input }