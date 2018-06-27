import React from 'react'
import { Wrapper, Input, Label, InputHidden } from './styles'

export class Checkbox extends React.Component {
  render() {

    let { id, label } = this.props

    return (
      <Wrapper>
        <InputHidden type='checkbox' id={id} />
        <Input htmlFor={id} />
        <label htmlFor={id}>{label}</label>
      </Wrapper>
    )
  }
}