import * as React from 'react';
import { Col } from "reactstrap";
import { CategoryButton } from "./CategoryButton";
import { observer } from 'mobx-react';

@observer
export class ChannelTableRow extends React.Component {
  render() {

    const {
      category,
      cost,
      description,
      id,
      language,
      members,
      members_growth: membersGrowth,
      photo,
      telegram_id: telegramId,
      title,
      views_growth: viewsGrowth,
      vip,
      username,
      verified,
      views
    } = this.props.row;
    console.log('category', category)
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
              marginRight: 10,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>{vip ? 'Vip' : 'Not Vip'}</span>
            <span>{verified ? 'Verified' : 'Not Verified'}</span>
          </div>
          <div
            style={{
              marginRight: 10
            }}
          >
            <img
              src={photo}
              width={60}
              height={60}
              style={{
                borderRadius: 50,
                borderColor: 'white',
                borderWidth: 2,
                backgroundColor: 'white'
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 18, wordWrap: 'break-word' }}>{title}</div>
            <div style={{ fontSize: 14 }}>{username}</div>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              <CategoryButton
                text={category}
                style={{
                  fontSize: 16,
                  borderRadius: 3,
                  marginRight: 3,
                  marginTop: 3
                }}
                active
              />
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
          <div style={{ width: '100%' }}>{cost}</div>
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
          <div style={{ width: '100%' }}>Rating...</div>
        </Col>
      </div>
    )
  }
}