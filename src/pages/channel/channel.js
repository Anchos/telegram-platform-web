import React from "react";
import PropTypes from "prop-types";
// import { AdBar } from '../../components/ad-bar';
import { Container, Row, Col, Button } from "reactstrap";
import { observer, inject } from 'mobx-react';
import { ChannelCard } from "../../ui/newdesign/ChannelCard";

@inject('channelsStore')
@observer
export class Channel extends React.Component {

  async componentDidMount() {
    await this.props.channelsStore.getChannelInfo({ username: this.props.match.params.username });
  }

  render() {
    const { photo, category, username, title, description, members } = this.props.channelsStore;
    return (
      <div style={{ paddingBottom: 100 }}>
        <Container className="my-3">
          <Row>
            <Col xs="6">
              <Row>
                <Col xs="6" style={{ textAlign: 'center' }}>
                  <img
                    style={{
                      width: 150,
                      height: 150,
                      backgroundColor: 'white'
                    }}
                    src={photo}
                    alt={username}
                  />
                </Col>
                <Col xs="6">
                  <Row>
                    <h6>{title}</h6>
                  </Row>
                  <Row>
                    <span>{members} подписчиков</span>
                  </Row>
                  {category && (
                    <Row>
                      <i>{category}</i>
                    </Row>
                  )}
                  <Row style={{ marginTop: 10 }}>
                    <a href={`https://t.me/${username}`}>t.me/{username}</a>
                  </Row>
                  <Row>
                    <Button style={{ marginTop: 20 }} color="primary" onClick={this.props.channelsStore.confirmOwner}>Подтвердить владение</Button>
                  </Row>
                </Col>
              </Row>
              <Row>
                <p>{description}</p>
              </Row>
            </Col>
            <Col xs="6">
              <div
                style={{
                  borderColor: "gray",
                  borderRadius: "4px",
                  borderStyle: "solid",
                  minHeight: "300px",
                  borderWidth: "1px",
                }}
              >
                Здесь будут недавние посты
              </div>
            </Col>
          </Row>
        </Container>
        <Container style={{ marginTop: 100, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <ChannelCard
            name="@name"
            author="someAuthor"
            description="Description lorem ipsum"
          />
          <ChannelCard
            name="@name"
            author="someAuthor"
            description="Description lorem ipsum"
          />
          <ChannelCard
            name="@name"
            author="someAuthor"
            description="Description lorem ipsum"
          />
        </Container>
      </div>
    )
  }
}
