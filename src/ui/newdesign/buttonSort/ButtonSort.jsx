import React from 'react'
import { Button } from './styles'

const ButtonSort = ({ text, ...props }) => (
  <Button
    exact
    activeStyle={{color: '#15AD56'}}
    {...props}
  >{text}
  </Button>
)

export default ButtonSort