import React from 'react'
import { 
  StyledCard,
  Avatar,
  Stats,
  StrongText,
  StatsRow,
  Title,
  Text,
  StyledLink
} from './styles'

import { Button } from '../button/Button'

export const Card = props => (
  <StyledCard>
    <div className='row no-gutters align-items-center'>
      <Avatar><img src={`/${props.avatar}`} alt='avatar'/></Avatar>
      <Stats>
        <StatsRow className='row align-items-center'>
          <div className='col'>
            <div className='row justify-content-center'>
              <div>
                <StrongText>{props.advert}$</StrongText>
                <div>Advert</div>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='row justify-content-center'>
              <div>
                <StrongText>{props.followers}K</StrongText>
                <div>Followers</div>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='row justify-content-center'>
              <div>
                <StrongText>{props.likes}</StrongText>
                <div>Likes</div>
              </div>
            </div>
          </div>
        </StatsRow>
        <Button 
          text='join' 
          width='100%'
          upperCase 
        />
      </Stats>
      <Title>{props.title}</Title>
      <p>
        <Text>{props.description}</Text>...
        <StyledLink to='/'>  Learn More</StyledLink>
      </p>
    </div>
  </StyledCard>
)