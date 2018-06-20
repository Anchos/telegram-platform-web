import React from 'react';
import { Logo } from "./Logo";
import { Button } from "./Button";
import { SearchForm } from "./SearchForm";
import { HeaderProfile } from "./HeaderProfile";
import { Container } from "reactstrap";

export class Header extends React.Component {

  state = {
    lang: 'en'
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          paddingLeft: 60,
          paddingRight: 60,
          backgroundColor: 'white',
          boxShadow: '0 3px 4px 0 rgba(0, 0, 0, 0.25)'
        }}
      >
        <Container
          style={{
            flexDirection: 'row',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ marginRight: 60 }}>
              <Logo/>
            </div>
            <div style={{ marginRight: 30 }}>
              <SearchForm
                width={350}
                onChange={e => console.log("Value from search", e.target.value)}
                onSubmit={() => console.log("Submitted search")}
              />
            </div>
            <Button
              text={'Surprise'}
              onClick={() => console.log('hih')}
            />
            <Button
              text={'FAQ'}
              onClick={() => console.log('hih')}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <HeaderProfile
              profileName={'Joker the DC'}
              balance={'$ 2000'}
            />
            <Button
              style={{ marginLeft: 25 }}
              text={this.state.lang}
              onClick={() => this.setState({ lang: this.state.lang === 'en' ? 'ru' : 'en' })}
            />
          </div>
        </Container>
      </div>
    )
  }
}