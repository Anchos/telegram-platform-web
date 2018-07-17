import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const rotate = keyframes`
  0% { transform: none }
  100% { transform: rotate(45deg) }
`

const rotate2 = keyframes`
  0% { transform: none }
  100% { transform: rotate(-45deg) }
`

export const MenuWrapper = styled.div`
  @media (max-width: 992px) {
    padding-top: 50px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    background-color: #fff;
    z-index: 3;
    display: ${props => props.toggleMenu ? 'block' : 'none'};
  }
`

export const WrapperHidden = styled.div`
  @media (max-width: 1400px) {
    display: none;
  }
`

export const RowCenter = styled.div`
  justify-content: flex-end;
`

export const HeaderWrapper = styled.div`
  box-shadow: 0 3px 8px 0 rgba(9, 71, 36, 0.1);
  background-color: #ffffff;
`

export const HeaderRow = styled.header`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
`

export const Menu = styled.ul`
  list-style: none;
  font-size: 20px;
  color: #232825;
  margin-bottom: 0;

  @media (max-width: 992px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    align-items: center;
  }
`
export const StyledLink = styled(NavLink)`
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
  margin-right: 13.5px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 992px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`

export const ButtonToggle = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 100;
`

export const ButtonToggleSpan = styled.span`
  display: block;
  width: 30px;
  height: 2px;
  background-color: black;
  margin-bottom: ${props => props.toggleMenu ? '-2px' : '5px'};

  &:first-child {
    animation: ${props => props.toggleMenu ? `${rotate} 0.3s both` : `${rotate} 0.3s reverse`}
  }

  &:nth-child(2) {
    display: ${props => props.toggleMenu ? 'none' : 'block'}
  }

  &:last-child {
    margin-bottom: 0;
    animation: ${props => props.toggleMenu ? `${rotate2} 0.3s both` : `${rotate2} 0.3s reverse`}
  }
`

export const WrapperLogin = styled.div`
  @media (max-width: 991px) {
    margin-left: 100px;
  }
`

export const Overlay =  styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`



