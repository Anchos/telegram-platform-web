import React from "react";
import PropTypes from "prop-types";
import classNames from "class-names";
import { numberFormatter } from "biplane-uikit";
import style from "./style.css";

const st = classNames.bind(style);

const ChannelCard = ({ photo, title, username, verified, members, likes, cost }) => (
  <div className={st("channel-card")}>
    <div className={st("channel-card__status")} />
    <div
      className={st(
        "channel-card__image-container",
        !photo && "channel-card__image-container_empty",
      )}
    >
      {photo && <img src={photo} className={st("channel-card__image")} />}
    </div>
    <div className={st("channel-card__name-info")}>
      <div className={st("channel-card__title", verified && "channel-card__title_verified")}>
        {title}
      </div>
      <div className={st("channel-card__username")}>{username}</div>
    </div>
    <span className={st("channel-card__followers")}>{numberFormatter(members)}</span>
    <span className={st("channel-card__likes")}>{numberFormatter(likes)}</span>
    <span className={st("channel-card__cost")}>{numberFormatter(cost)}</span>
  </div>
);

ChannelCard.propTypes = {
  photo: PropTypes.string,
  title: PropTypes.string,
  username: PropTypes.string,
  verified: PropTypes.bool,
  members: PropTypes.number,
  likes: PropTypes.number,
  cost: PropTypes.number,
};

export default ChannelCard;
