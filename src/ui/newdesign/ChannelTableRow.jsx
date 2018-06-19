import * as React from 'react';
import { Col } from "reactstrap";
import { CategoryButton } from "./CategoryButton";

export class ChannelTableRow extends React.Component {
  render() {
    const {
      type,
      members,
      price,
      like,
      name,
      username,
      categories,
      photo
    } = this.props.row;
    return (
      <div
        style={{
          display: 'flex',
          padding: '10px 20px',
        }}
      >
        <Col
          xs={12}
          md={9}
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <div
            style={{
              marginRight: 10
            }}
          >
            {type}
          </div>
          <div
            style={{
              marginRight: 10
            }}
          >
            <img src={photo} width={60} height={60} style={{ borderRadius: 50, borderColor: 'white', borderWidth: 2 }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 18 }}>{name}</div>
            <div style={{ fontSize: 14 }}>{username}</div>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              {categories && categories.map(c => (
                <CategoryButton
                  text={c}
                  style={{
                    fontSize: 16,
                    borderRadius: 3,
                    marginRight: 3,
                    marginTop: 3
                  }}
                  active
                />
              ))}
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          md={1}
          style={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <div style={{ width: '100%' }}>{members}</div>
        </Col>
        <Col
          xs={12}
          md={1}
          style={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <div style={{ width: '100%' }}>{price}</div>
        </Col>
        <Col
          xs={12}
          md={1}
          style={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <div style={{ width: '100%' }}>{like}</div>
        </Col>
      </div>
    )
  }
}