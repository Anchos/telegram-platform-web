import React from 'react'
import { Wrapper, Row, Img, Text, Title, Span } from './styles'

const Bot = () => (
  <Wrapper>
    <Row>
      <Img
        alt=''
        width={100}
        height={100}
        src='http://via.placeholder.com/100x100'
      />
      <div>
        <Title>Repost VK —> Telegram</Title>
        <Span>@re_postBot | 100k instals</Span>
      </div>
    </Row>
    <Text>автоматический репостинг из одного или нескольких пабликов VKTwitterInstagram в один или несколько каналов в Телеграмме. #Боты #ДляАдминов #Автопостинг</Text>
  </Wrapper>
)

export default Bot