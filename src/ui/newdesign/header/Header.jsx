import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import MediaQuery from "react-responsive";
import { requestChannels } from "../../../store/action-creators";
import {
  HeaderWrapper,
  HeaderRow,
  Menu,
  WrapperHidden,
  Item,
  StyledLink,
  MenuWrapper,
  ButtonToggle,
  ButtonToggleSpan,
  WrapperLogin,
  Overlay,
} from "./styles";
import data from "../../../data_mocks";

import { Logo } from "../logo/Logo";
import { SearchInput } from "../searchInput/SearchInput";
import { Button } from "../button/Button";
import { Select } from "../select/Select";
import ChannelSearch from './../../../components/channel-search'

class HeaderClass extends React.Component {
  state = {
    focus: false,
    searchValue: "",
    toggleMenu: false,
  };

  search = event => {
    event.preventDefault();

    this.setState({ searchValue: event.target.value });
  };

  handleBlur = () => {
    this.setState({
      focus: false,
    });
  };

  handleFocus = () => {
    this.setState({
      focus: true,
    });
  };

  toggleMenu = event => {
    event.preventDefault();

    this.setState(prevState => ({
      toggleMenu: !prevState.toggleMenu,
    }));
  };

  render() {
    const { connection_id } = this.props;
    const { menu = [] } = data;

    return (
      <HeaderWrapper className="container-fluid">
        <HeaderRow className="container">
          <div className="row no-gutters align-items-center justify-content-between">
            <WrapperHidden className="col-2">
              <Logo />
            </WrapperHidden>

            <MediaQuery query="(max-width: 991px)">
              <ButtonToggle toggleMenu={this.state.toggleMenu} onClick={this.toggleMenu}>
                <ButtonToggleSpan toggleMenu={this.state.toggleMenu} />
                <ButtonToggleSpan toggleMenu={this.state.toggleMenu} />
                <ButtonToggleSpan toggleMenu={this.state.toggleMenu} />
              </ButtonToggle>
            </MediaQuery>

            <MenuWrapper toggleMenu={this.state.toggleMenu} className="col-md-12 col-lg-7 col-xl-6">
              <div
                id="outer-container"
                className={`
              no-gutters row align-items-center
              justify-content-${this.state.focus ? "end" : "between"}
            `}
              >
                {!this.state.focus && (
                  <Menu
                    id="page-wrap"
                    className="row no-gutters align-items-center"
                    itemListClassName="row"
                  >
                    {menu &&
                      menu.map((element, i) => (
                        <Item key={i}>
                          <StyledLink
                            activeStyle={{ color: "#15AD56" }}
                            to={`/${element.toLowerCase()}`}
                          >
                            {element}
                          </StyledLink>
                        </Item>
                      ))}
                    <Item>
                      <Button text="Suggest" primary handleClick={this.props.requestChannels} />
                    </Item>
                    <MediaQuery query="(max-width: 991px)">
                      <Button text="Surprise" primary />
                    </MediaQuery>
                  </Menu>
                )}
                <SearchInput
                  handleFocus={this.handleFocus}
                  handleBlur={this.handleBlur}
                  handleChange={this.search}
                  focus={this.state.focus}
                  value={this.state.searchValue}
                />
                <ChannelSearch open={!!this.state.searchValue} searchQuery={this.state.searchValue}/>
              </div>
            </MenuWrapper>

            <div className="col-md-12 col-lg-3 col-xl-3">
              <div className="row no-gutters align-items-center justify-content-between">
                <WrapperHidden>
                  <Link to="/faq">FAQ</Link>
                </WrapperHidden>
                <WrapperHidden>
                  <Select options={[{ value: "en", name: "EN" }]} />
                </WrapperHidden>
                <MediaQuery query="(min-width: 991px)">
                  <Button text="Surprise" primary />
                </MediaQuery>
                <WrapperLogin>
                  <Button href={`https://t.me/medev_bot?start=${connection_id}`} text="Sign In" />
                </WrapperLogin>
              </div>
            </div>
          </div>
        </HeaderRow>
      </HeaderWrapper>
    );
  }
}

export const Header = withRouter(
  connect(
    state => ({ connection_id: state.connection.connection_id }),
    { requestChannels },
  )(HeaderClass),
);
