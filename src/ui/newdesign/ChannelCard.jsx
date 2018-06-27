import React from "react";

export class ChannelCard extends React.Component {

  render() {
    return (
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: 3,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          flexDirection: 'row',
          padding: '10px 25px',
          maxWidth: 370
        }}
      >
        <div style={{ marginRight: 10 }}>
          <img src={'http://via.placeholder.com/75x75'} width={75} height={75} style={{ borderRadius: 50 }} />
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