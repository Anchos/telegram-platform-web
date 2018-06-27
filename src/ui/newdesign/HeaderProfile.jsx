import * as React from 'react';

export class HeaderProfile extends React.Component {

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginRight: 40 }}>
          <div
            id={'profile-name'}
            style={{
              color: '#3d3d3d',
              fontSize: 16,
            }}
          >
            {this.props.profileName}
          </div>
          <div
            id={'balance'}
            style={{
              fontSize: 14,
              color: '#15ad56',
              fontWeight: 'bold'
            }}
          >
            {this.props.balance}
          </div>
        </div>
        <div>
          <img src="http://via.placeholder.com/40x40" style={{ borderRadius: 20 }} />
        </div>
      </div>
    )
  }
}