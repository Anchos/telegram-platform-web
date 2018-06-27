import * as React from 'react';

export class ShowMoreButton extends React.Component {

  render() {
    return (
      <div
        {...this.props}
        style={{
          color: this.props.color || '#15ad56',
          fontWeight: 'bold',
          fontSize: 21,
          padding: '10px 0',
          cursor: 'pointer',
          border: '2px solid #15ad56',
          borderRadius: 3,
          textAlign: 'center',
          ...this.props.style,
        }}
      >
        {this.props.text || 'Show More'}
      </div>
    )
  }
}