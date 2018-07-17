import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 37px;
`

export const WrapperCheckboxes = styled.div`

  &:last-child {
      margin-bottom: 0;
    }

  @media (max-width: 960px) {
    margin-top: 80px;
  }
`

export const WrapperFilter = styled.div`
  @media (max-width: 720px) {
    margin-bottom: 100px;
  }
`

export const RowMarginBottom = styled.div`
  margin-bottom: ${props => props.margin ? props.margin : ''};
`

export const Title = styled.h2`
  font-size: 30px;
  color: #232825;
  margin-bottom: 0;
  margin-right: 20px;
`