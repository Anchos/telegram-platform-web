import * as React from "react";

import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

export const AdChannelCard = ({ id, name, nick, logo, description }) => (
  <Card>
    <CardBody>
      <CardTitle className="clearfix">
        <div className="float-left">{name}</div>
        <div className="float-right text-secondary small">{id}</div>
      </CardTitle>
      <CardSubtitle>@{nick}</CardSubtitle>
      <CardText>{description}</CardText>
    </CardBody>
  </Card>
);
