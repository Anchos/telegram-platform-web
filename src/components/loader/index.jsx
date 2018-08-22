import React from "react";
import PropTypes from "prop-types";
import classNames from "class-names";
import style from "./style.css";

const Loader = ({ size, centered }) => (
  <div className={classNames("loader", `loader_${size}`, centered && "loader_centered")}>
    <div className="loader__spinner" />
  </div>
);

Loader.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large", "xxlarge"]),
  centered: PropTypes.bool,
};

Loader.defaultProps = {
  size: "medium",
};

export default Loader;
