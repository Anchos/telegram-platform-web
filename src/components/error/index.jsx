import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import style from "./style.css";

const Error = ({ code, text }) => (
  <div className="app-error">
    <div className="app-error__image-container">
      <img src={require("../../images/icon-error-page.svg")} alt="" />
    </div>
    <div className="app-error__description">
      <div className="app-error__code">{code}</div>
      <div className="app-error__text">{text}</div>
    </div>
  </div>
);

Error.propTypes = {
  code: PropTypes.number,
  text: PropTypes.string,
};

Error.defaultProps = {
  code: 404,
  text: "Sorry, page doesn't exist",
};

export default Error;
