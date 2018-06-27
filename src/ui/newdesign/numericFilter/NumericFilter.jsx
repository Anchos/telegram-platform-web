import React from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import { Wrapper, Value, Label } from './styles'
import './styles.css'

export class NumericFilter extends React.Component {

  state = {
    value: 10
  }

  handleChange = value => this.setState({ value })

  render() {
    return (
      <Wrapper>
        <Label>{this.props.label}</Label>
        <InputRange 
          maxValue={100}
          minValue={0}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Value>{this.state.value}</Value>
      </Wrapper>
    )
  }
}