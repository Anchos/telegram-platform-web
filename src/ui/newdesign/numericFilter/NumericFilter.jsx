import React from 'react'
import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'
import { Wrapper, Value, Label } from './styles'
import './styles.css'
// import { getMaxMembersInChannels } from '../../../selectors/channel'



export class NumericFilter extends React.Component {

  state = {
    value: {
      min: 0,
      max: 100
    }
  }

  handleChange = value => this.setState({ value }, () => {
    this.props.getChannelForMembers(this.state.value)
  })

  render() {
    return (
      <Wrapper>
        <Label>{this.props.label}</Label>
        <InputRange 
          // maxValue={getMaxMembersInChannels(this.props.channels)}
          maxValue={1000}
          minValue={0}
          value={this.state.value}
          onChange={this.handleChange}
          formatLabel={value => value}
        />
      </Wrapper>
    )
  }
}