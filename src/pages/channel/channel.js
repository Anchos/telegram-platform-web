import React from "react";
import PropTypes from "prop-types";
import { AdBar } from "src/components/ad-bar";
import { Container, Row, Col, Button } from "reactstrap";

export default function Channel(props) {
  const { username, photo, title, description, members, category } = props;

  return (
    <>
      <Container className="my-3">
        <Row>
          <Col xs="6">
            <Row>
              <Col xs="6">
                <img src={photo} alt="Здесь есть картиночка овощь ты наш сладенький" />
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
                <Row>
                  <a href={`https://t.me/${username}`}>t.me/{username}</a>
                </Row>
                <Row>
                  <Button color="primary">Подтвердить владение</Button>
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
      <div className="my-3">
        <AdBar />
      </div>
    </>
  );
}

Channel.propTypes = {
  username: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
