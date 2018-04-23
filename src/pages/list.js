import * as React from "react";
import { Container } from "reactstrap";

import { AdBar } from "~/components/ad-bar";
import { CategoriesList } from "~/components/categories-list";
import { ChannelsFilters } from "~/components/channels-filters";
import { ChannelsList } from "~/components/channels-list";
import { GroupsList } from "~/ui/groups-list";

export const List = () => (
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
