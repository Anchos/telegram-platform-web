import styled from 'styled-components'

export const TableRow = styled.li`
  min-height: 99px;
  padding-top: 13px;
  padding-bottom: 13px;
  padding-left: 25px;
  border-radius: 3px;
  background-image: ${props => props.type === 'partners' ? 'linear-gradient(86deg, #4e99cd, #1b679c)': 'none'};
  border: ${props => props.type === 'partners' ? 'none' : '1px solid #087ac9'};
  margin-bottom: 10px;
  color: #3f8abf;

  &:last-child {
    margin-bottom: 0
  }
`

export const Type = styled.div`
  width: 40px;
  margin-right: 30px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.type === 'partners' ? '#eef5fe' : '#3f8abf'};
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 20px;
  color: ${props => props.type === 'partners' ? '#3f8abf' : '#eef5fe'};
`

export const Avatar = styled.div`
  width: 70px;
  height: 70px;
  background-color: #fff;
  border-radius: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${props => props.imageUrl ? `url(${props.imageUrl})` : 'none'};
`

export const Title = styled.h4`
  color: ${props => props.type === 'partners' ? '#fff' : '#232825'};
  font-size: 18px;
  margin-bottom: 0;
`

export const SmallText = styled.h4`
  color: ${props => props.type === 'partners' ? '#fff' : '#232825'};
  font-size: 14px;
  margin-bottom: 10px;
  font-weight: 100;
`

export const Category = styled.li`
  font-size: 15px;
  background-color: #fff;
  display: inline-block;
  border-radius: 3px;
  height: 26px;
  padding: 4px;
  margin-right: 4px;
  line-height: 1.2;
  color: #3f8abf;
  font-weight: 500;
`

export const WrapperFilters = styled.div`
  padding-left: 25px;
  margin-bottom: 23px;
  color: #232825;
  font-size: 20px;
`

export const Filter = styled.button`
  border: none;
  background-color: transparent;
  position: relative;
  padding-right: 33px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    border: 7px solid transparent;	
    border-top: 7px solid #232825;
    bottom: 5px;
    right: 14px;
  }
`