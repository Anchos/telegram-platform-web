import * as React from "react";
import { CardDeck, Container, Row } from "reactstrap";

import { AdChannelCard } from "../../src/ui/ad-channel-card";

const channel = (
  <AdChannelCard
    name="Channel by Vasyan"
    id="354677"
    nick="vachannel"
    description="Vasyan created this channel just for lulz"
    logo="none"
  />
);

export const AdBar = () => (
  <CardDeck className="bg-primary p-3">
    <Container>
      <Row>
        {channel}
        {channel}
        {channel}
      </Row>
    </Container>
  </CardDeck>
);
