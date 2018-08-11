import React from "react";
import PropTypes from "prop-types";
import classNames from "class-names";
import { numberFormatter } from "biplane-uikit";
import style from "./style.css";

const st = classNames.bind(style);

const BotCard = ({ image, title, creator, installs }) => (
  <div className={st("sticker-card")}>
    <div
      className={st(
        "sticker-card__image-container",
        !image && "sticker-card__image-container_empty",
      )}
    >
      {image && <img src={image} alt={image} />}
    </div>
    <div className={st("sticker-card__title")}>{title}</div>
    <div className={st("sticker-card__creator")}>
      by {creator} | {numberFormatter(installs)} installs
    </div>
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
