import * as React from "react";
import {
  Container,
} from "reactstrap";

import { ChannelFilters } from '../components/channels-filters';
import { ChannelList } from "../components/ChannelList";
import { ChannelCard } from "../ui/newdesign/ChannelCard";
import { CategoryButton } from "../ui/newdesign/CategoryButton";

import { SearchForm } from "../ui/newdesign/SearchForm";
import { observer } from 'mobx-react';

@observer
export class MainPage extends React.Component {

  render() {
    return (
      <div>
        <div style={{ textAlign: 'center' }}>Very Premium channel</div>
        <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
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
          <ChannelFilters />
          <ChannelList />
        </Container>
      </div>
    )
  }
}
