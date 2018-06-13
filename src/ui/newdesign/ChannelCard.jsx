import React from "react";

export class ChannelCard extends React.Component {

  render() {
    return (
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          flexDirection: 'row',
          padding: '10px 25px',
          width: 310
        }}
      >
        <div style={{ marginRight: 10 }}>
          image
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#3f3f3f'
            }}
          >
            Channel by {this.props.author}
          </div>
          <div
            style={{
              color: '#2FB96A',
              fontWeight: 600,
              fontSize: 12,
            }}
          >
            {this.props.name}
          </div>
          <div
            style={{ color: 'black' }}
          >
            {this.props.description}
          </div>
        </div>
      </div>
    )
  }
}