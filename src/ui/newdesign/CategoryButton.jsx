import React from 'react';

export class CategoryButton extends React.Component {

  render() {
    const color = this.props.active ? '#15ad56' : 'black';
    return (
      <div onClick={this.props.onClick} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <div
          style={{
            color,
            fontSize: 24,
            paddingTop: 10,
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            ...this.props.style,
          }}
        >
          {
            this.props.active &&
            <div style={{ position: 'absolute', bottom: -1, width: '80%', height: 2, backgroundColor: color }} />
          }
          {this.props.text}
        </div>
      </div>
    );
  }
}