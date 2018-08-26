import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link, NavLink } from "react-router-dom";
import classNames from "class-names";
import { Button } from "biplane-uikit";
import { requestLogout } from "../../store/action-creators";
import AuthorizationModule from "../authorization-module";
import Dropdown from "../dropdown";
import ChannelSearch from "../channel-search";
import BotSearch from "../bot-search";
import StickerSearch from "../sticker-search";
import style from "./style.css";

class Header extends React.Component {
  state = {
    searchValue: "",
  };

  onInputChange = e => this.setState({ searchValue: e.target.value });
  clearInput = () => this.setState({ searchValue: "" });

  render() {
    const { photo, username, requestLogout, location } = this.props;
    const { searchValue } = this.state;
    const currentPage = location.pathname.split("/")[1];
    return (
      <div className="app-header">
        <div className="app-header__left-part">
          <Link to="/">
            <div className="app-header__logo">
              <img src={require("../../images/biplane-logo.svg")} alt="Biplane" />
            </div>
          </Link>
          <div className="app-header__navigation">
            <NavLink
              className="app-header__navigation-link"
              activeClassName="app-header__navigation-link_active"
              to="/"
              exact={true}
            >
              Channels
            </NavLink>
            <NavLink
              className="app-header__navigation-link"
              activeClassName="app-header__navigation-link_active"
              to="/supergroups"
            >
              Supergroups
            </NavLink>
            <NavLink
              className="app-header__navigation-link"
              activeClassName="app-header__navigation-link_active"
              to="/bots"
            >
              Bots
            </NavLink>
            <NavLink
              className="app-header__navigation-link"
              activeClassName="app-header__navigation-link_active"
              to="/stickers"
            >
              Stickers
            </NavLink>
          </div>
        </div>
        <div className="app-header__right-part">
          <div className="app-header__login">
            <NavLink
              className="app-header__navigation-link"
              activeClassName="app-header__navigation-link_active"
              to="/faq"
            >
              FAQ
            </NavLink>
            {username ? (
              <React.Fragment>
                <Dropdown options={[{ label: "Log out", onClick: requestLogout }]}>
                  <div className="app-header__user-name">{username}</div>
                </Dropdown>
                <div
                  className={classNames(
                    "app-header__user-image-container",
                    !photo && "app-header__user-image-container_empty",
                  )}
                >
                  {photo && <img src={photo} alt={username} />}
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="app-header__button">
                  <Button>Surprise</Button>
                </div>
                <div className="app-header__button">
                  <AuthorizationModule />
                </div>
              </React.Fragment>
            )}
          </div>
          <input
            type="text"
            value={this.state.searchValue}
            onChange={this.onInputChange}
            className={classNames("app-header__search", searchValue && "app-header__search_active")}
          />
          {searchValue ? (
            <div className="app-header__delete-search" onClick={this.clearInput}>
              ⨉
            </div>
          ) : (
            <img
              src={require("../../images/icon-search.svg")}
              alt=""
              className="app-header__search-icon"
            />
          )}
        </div>
        {currentPage === "bots" ? (
          <BotSearch open={searchValue} searchQuery={searchValue} />
        ) : currentPage === "stickers" ? (
          <StickerSearch open={!!searchValue} searchQuery={searchValue} />
        ) : (
          <ChannelSearch open={!!searchValue} searchQuery={searchValue} />
        )}
      </div>
    );
  }
}

Header.propTypes = {};

export default connect(
  state => ({
    ...state.authorization,
  }),
  {
    requestLogout,
  },
)(withRouter(Header));