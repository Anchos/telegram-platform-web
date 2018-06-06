import * as React from "react";
import { Container } from "reactstrap";

import { AdBar } from "src/components/ad-bar";
import { CategoriesList } from "src/components/categories-list";
import { ChannelsFilters } from "src/components/channels-filters";
import { ChannelsList } from "src/components/channels-list";
import { GroupsList } from "src/ui/groups-list";

export default function Main() {
  return (
    <>
      <GroupsList />
      <div className="my-3">
        <AdBar />
      </div>
      <Container className="my-3">
        <CategoriesList />
      </Container>
      <Container className="my-3">
        <ChannelsFilters />
        <ChannelsList />
      </Container>
    </>
  );
}
