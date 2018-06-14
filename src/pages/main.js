import * as React from "react";
import {
  Container,
} from "reactstrap";

import { ChannelsFilters } from "src/components/channels-filters";
import { ChannelsList } from "src/components/channels-list";
import { ChannelCard } from "../ui/newdesign/ChannelCard";
import { CategoryButton } from "../ui/newdesign/CategoryButton";

import { SearchForm } from "../ui/newdesign/SearchForm";
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
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 80 }}>
        <CategoryButton text={'Channels'} style={{ marginRight: 30 }} active />
        <CategoryButton text={'Supergroups'} style={{ marginRight: 30 }} />
        <CategoryButton text={'Bots'} style={{ marginRight: 30 }} />
        <CategoryButton text={'Stickers'} />
      </div>
      <Container className="my-3">
        <SearchForm
          style={{
            marginTop: 80,
          }}
          onChange={e => console.log("Value from search", e.target.value)}
          onSubmit={() => console.log("Submitted search")}
        />
        <ChannelsFilters />
        <ChannelsList />
      </Container>
    </>
  );
}
