import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-bottom: 37px;
  padding-left: 60px;
  padding-right: 60px;
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