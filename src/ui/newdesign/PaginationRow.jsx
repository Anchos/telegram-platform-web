import * as React from 'react';

export class PaginationRow extends React.Component {

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          cursor: 'pointer',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#15ad56',
          ...this.props.style,
        }}
      >
        {this.props.showRight ? <div>{'<'}</div> : null}
        {this.props.pages && this.props.pages.map(p => (
          <div
            style={{
              border: this.props.activePage === Number(p) ? '2px solid #15ad56' : 'none',
              height: 40,
              width: 40,
              borderRadius: 3,
              display: 'flex',
              justifyContent: 'center',
              fontSize: 21,
              fontWeight: 'bold',
              alignItems: 'center',
            }}
            onClick={() => this.props.onPageClick(p)}
          >
            {p}
          </div>
        ))}
      </div>
    )
  }
}