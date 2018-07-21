import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 305px;
  width: 305px;
  padding-top: 16px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #F2F2F2;
  margin-right: 43px;

  &:nth-child(4n) {
    margin-right: 0;
  }

  @media (max-width: 1399px) {
    &:nth-child(4n) {
      margin-right: 43px;
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (max-width: 1199px) {

    margin-right: 5px;

    &:nth-child(4n) {
      margin-right: 5px;
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (max-width: 991px) {

    margin-right: 30px;

    &:nth-child(4n) {
      margin-right: 30px;
    }

    &:nth-child(3n) {
      margin-right: 30px;
    }
}
`

export const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 6px;
`

export const SmallText = styled.span`
  font-size: 14px;
`

export const Img = styled.img`
  display: block;
  width: 200px;
  height: 200px;
  max-width: 100%;
`