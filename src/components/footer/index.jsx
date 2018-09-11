import React from "react";
import {injectIntl, intlShape} from 'react-intl';
import {NavLink} from 'react-router-dom';
import PropTypes from "prop-types";
import style from "./style.css";

const Footer = ({intl}) => (
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
        {intl.messages['header.landing']}
      </NavLink>
      <NavLink
        className="app-footer__navigation-link"
        activeClassName="app-footer__navigation-link_active"
        to="/contacts"
      >
        {intl.messages['footer.contacts']}
      </NavLink>
      <NavLink
        className="app-footer__navigation-link"
        activeClassName="app-footer__navigation-link_active"
        to="/privacy"
      >
        {intl.messages['footer.privacy']}
      </NavLink>
      <NavLink
        className="app-footer__navigation-link"
        activeClassName="app-footer__navigation-link_active"
        to="/terms"
      >
        {intl.messages['footer.terms']}
      </NavLink>
    </div>
  </div>
);

Footer.propTypes = {
  intl: intlShape
};

export default injectIntl(Footer);
