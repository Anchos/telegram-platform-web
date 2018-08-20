import React from "react";
import PropTypes from "prop-types";
import classNames from "class-names";
import { numberFormatter } from "biplane-uikit";
import style from "./style.css";

const BotCard = ({ image, title, username, installs, description }) => (
  <div className="bot-card">
    <div className="bot-card__header">
      <div
        className={classNames(
          "bot-card__image-container",
          !image && "bot-card__image-container_empty",
        )}
      >
        {image && <img src={image} alt={username} />}
      </div>
      <div className="bot-card__names">
        <span className="bot-card__title">{title}</span>
        <span className="bot-card__username">
          {username} | {numberFormatter(installs)} installs
        </span>
      </div>
    </div>
    {description}
  </div>
);

BotCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  username: PropTypes.string,
  installs: PropTypes.number,
  description: PropTypes.string,
};

export default BotCard;
