import React from "react";
import {NavLink} from 'react-router-dom';
import PropTypes from "prop-types";
import style from "./style.css";

const Footer = () => (
  <div className='app-footer'>
    <div className='app-footer__left'>
      <span className='app-footer__branding'>Biplane</span>
      , 2018
    </div>
    <div className='app-footer__right'>
      <NavLink
        className="app-footer__navigation-link"
        activeClassName="app-footer__navigation-link_active"
        to="/landing"
      >
        Surprise
      </NavLink>
      <NavLink
        className="app-footer__navigation-link"
        activeClassName="app-footer__navigation-link_active"
        to="/contacts"
      >
        Contact us
      </NavLink>
      <NavLink
        className="app-footer__navigation-link"
        activeClassName="app-footer__navigation-link_active"
        to="/privacy"
      >
        Privacy policy
      </NavLink>
      <NavLink
        className="app-footer__navigation-link"
        activeClassName="app-footer__navigation-link_active"
        to="/terms"
      >
        Terms and conditions
      </NavLink>
    </div>
  </div>
);

export default Footer;
