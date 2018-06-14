import React from 'react';
import { Input } from 'reactstrap';

export class SearchForm extends React.Component {

  render() {
    return (
      <div
        style={{
          position: 'relative',
          justifyContent: 'center',
          display: 'flex',
          ...this.props.style,
        }}
      >
        <div style={{ width: 500, position: 'relative' }}>
          <Input
            placeholder="Search..."
            value={''}
            style={{
              borderRadius: 20,
              boxShadow: 'inset -1px 1px 5px 0 rgba(0, 0, 0, 0.25)'
            }}
            onChange={this.props.onChange}
          />
          <button
            onClick={this.props.onSubmit}
            style={{
              border: 'none',
              position: 'absolute',
              right: 5,
              top: 4,
              width: 30,
              height: 30,
              backgroundColor: '#2fb96a',
              borderRadius: 20,
              textAlign: 'center',
            }}
          >
            Q
          </button>
        </div>
      </div>
    );
  }
}