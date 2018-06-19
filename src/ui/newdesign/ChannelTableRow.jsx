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
        }}
      >
        <Col
          xs={12}
          md={9}
        >
          <div>
            {type}
          </div>
          <div>
            <img src={photo} width={60} height={60} style={{ borderRadius: 50, borderColor: 'white', borderWidth: 2 }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>{name}</div>
            <div>{username}</div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {categories && categories.map(c => <CategoryButton text={c} />)}
            </div>
          </div>
        </Col>
        <Col
          xs={12}
          md={1}
        >
          <div>{members}</div>
        </Col>
        <Col
          xs={12}
          md={1}
        >
          <div>{price}</div>
        </Col>
        <Col
          xs={12}
          md={1}
        >
          <div>{like}</div>
        </Col>
      </div>
    )
  }
}