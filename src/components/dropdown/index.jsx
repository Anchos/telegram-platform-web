import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import onClickOutside from "react-onclickoutside";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "class-names";
import { Button, Modal } from "biplane-uikit";
import AuthorizationModule from "../authorization-module";
import Loader from "../loader";
import ChannelSearch from "../channel-search";
import BotSearch from "../bot-search";
import StickerSearch from "../sticker-search";
import style from "./style.css";

class Dropdown extends React.Component {
  state = {
    open: false,
  };

  dropdownRef = React.createRef();

  onWrappedElementClick = () => {
    if (!this.state.open) {
      this.setState({ open: true });
    } else {
      this.closeDropdown();
    }
  };
  closeDropdown = () => {
    if (this.state.open) {
      this.dropdownRef.classList.add("bui-dropdown_closing");
      setTimeout(() => {
        this.setState({ open: false });
      }, 160);
    }
  };

  handleClickOutside = this.closeDropdown;

  render() {
    const { children, options } = this.props;
    const { open } = this.state;
    return (
      <div className="bui-dropdown__wrapper">
        <div className="bui-dropdown__wrapped-item" onClick={this.onWrappedElementClick}>
          {children}
        </div>
        {open && (
          <div className="bui-dropdown" ref={dd => (this.dropdownRef = dd)}>
            {options.map(option => (
              <div className="bui-dropdown__option" onClick={option.onClick} key={option.label}>
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.node,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ),
};

export default onClickOutside(Dropdown);
