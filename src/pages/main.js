import * as React from "react";
import { Container } from "reactstrap";

import { AdBar } from "src/components/ad-bar";
import { CategoriesList } from "src/components/categories-list";
import { ChannelsFilters } from "src/components/channels-filters";
import { ChannelsList } from "src/components/channels-list";
import { GroupsList } from "src/ui/groups-list";
import { ChannelCard } from "../ui/newdesign/ChannelCard";

export default function Main() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>Premium channel</div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
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
