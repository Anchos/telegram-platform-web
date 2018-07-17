import React from 'react'
import { Wrapper, Img, Title, SmallText } from './styles'
 
const Sticker = () => (
  <Wrapper>
    <Img 
      width={200} 
      height={200} 
      src='http://via.placeholder.com/200x200' 
      alt=''
    />
    <Title>Теребонька</Title>
    <SmallText>by Cheburash | 100k instals</SmallText>
  </Wrapper>
)

export default Sticker