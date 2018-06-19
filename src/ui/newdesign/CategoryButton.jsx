import React from 'react';

export class CategoryButton extends React.Component {

  render() {
    const color = this.props.active ? this.props.activeColor || '#15ad56' : this.props.color || '#3f3f3f';
    return (
      <div onClick={this.props.onClick} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <div
          style={{
            color,
            fontSize: 32,
            paddingRight: 10,
            paddingLeft: 10,
            borderRadius: 3,
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            ...this.props.active ? { backgroundColor: color, color: 'white' } : {},
            ...this.props.style,
          }}
        >
          {this.props.text}
        </div>
      </div>
    );
  }
}