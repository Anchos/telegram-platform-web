import React from 'react';
import PropTypes from "prop-types";

export class Button extends React.Component {

  render() {
    return (
      <div
        style={{
          fontSize: 18,
          textAlign: 'center',
          color: '#3f3f3f',
          padding: '9px 13px',
          backgroundColor: 'transparent',
          border: 'none',
          fontWeight: 'bold',
          cursor: 'pointer',
          borderRadius: 5,
          ...this.props.style,
        }}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </div>
    )
  }
}