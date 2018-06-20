import * as React from "react";
import {
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";

import { ChannelFilters } from '../components/channels-filters';
import { ChannelList } from "../components/ChannelList";
import { ChannelCard } from "../ui/newdesign/ChannelCard";
import { CategoryButton } from "../ui/newdesign/CategoryButton";

import { SearchForm } from "../ui/newdesign/SearchForm";
import { observer, inject } from 'mobx-react';
import { Button } from "../ui/newdesign/Button";
import { ChannelTable } from "../ui/newdesign/ChannelTable";

@inject('app')
@observer
export class MainPage extends React.Component {

  state = {
    activeSection: 0,
    activeCategory: 0,
  }

  render() {
    return (
      <div>
        <div style={{ marginTop: 40 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {
              ['Channels', 'Supergroups', 'Bots', 'Stickers'].map((t, i) => {
                const isActive = this.state.activeSection;
                return <div>
                  <CategoryButton
                    text={t}
                    active={isActive === i}
                    onClick={() => this.setState({ activeSection: i })}
                  />
                  {
                    isActive === 0 && i === 0 ?
                      <Link
                        to={'/addchannel'}
                        style={{
                          color: '#2fb96a',
                          fontSize: 20,
                          fontWeight: 300,
                          textDecoration: 'underline',
                          padding: '9px 13px'
                        }}
                      >
                      Add channel
                      </Link>
                      : <div style={{ padding: '20px 0' }} />
                  }
                </div>
              })
            }
          </div>
        </div>
        <Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>
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
        <Container style={{ marginTop: 50 }}>
          <div>
            <h2 style={{ fontSize: 22, paddingLeft: 20 }}>Category</h2>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              {
                this.props.app.categories.map((c, i) => (
                  <CategoryButton
                    style={{
                      fontSize: 22,
                      marginTop: 20,
                    }}
                    text={c}
                    active={this.state.activeCategory === i}
                    onClick={() => this.setState({ activeCategory: i })}
                  />
                ))
              }
            </div>
          </div>
          <ChannelFilters />
          <ChannelTable
            rows={[
              {
                members: 123,
                price: 223,
                like: 321,
                name: 'Channel by Joker',
                username: '@joker',
                type: 'super',
                categories: ['Dota', 'League of Legends', 'Anime', 'Nujabes', 'Cole Slow', 'Salade'],
                photo: 'http://via.placeholder.com/60x60'
              }
            ]}
          />
          <ChannelList />
        </Container>
      </div>
    )
  }
}
