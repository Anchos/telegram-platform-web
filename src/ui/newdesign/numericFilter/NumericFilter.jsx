import React from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import { Label, Wrapper } from './styles'
import './styles.css'
import _ from 'lodash'

export class NumericFilter extends React.Component {
  constructor() {
    super()

    this.state = {
      value: {
        min: 0,
        max: 1000
      }
    }

  }

  handleChange = value => {
    this.setState({ value }, () => this.props.getChannelForMembers(value))
  }

  render() {
    return (
      <Wrapper>
        <Label>{this.props.label}</Label>
        <InputRange 
          maxValue={this.props.maxValue || this.state.value.max}
          minValue={0}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </Wrapper>
    )
  }
}