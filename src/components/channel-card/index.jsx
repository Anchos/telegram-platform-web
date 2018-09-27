import React from "react";
import PropTypes from "prop-types";
import classNames from "class-names";
import { Link } from "react-router-dom";
import { numberFormatter } from "biplane-uikit";
import style from "./style.scss";

const ChannelCard = ({ photo, title, username, verified, members, likes, cost, tags }) => (
  <div className="channel-card">
    <div className="channel-card__status" />
    <div
      className={classNames(
        "channel-card__image-container",
        !photo && "channel-card__image-container_empty",
      )}
    >
      {photo && <img src={photo} className="channel-card__image" />}
    </div>
    <div className="channel-card__name-info">
      <Link to={`/channels/${username}`} className="channel-card__channel-link">
        <div
          className={classNames("channel-card__title", verified && "channel-card__title_verified")}
        >
          {title}
        </div>
        <div className="channel-card__username">{username}</div>
      </Link>
      <div className="channel-card__tags">
        {tags.map(tag => (
          <div className="channel-card__tag">{tag}</div>
        ))}
      </div>
    </div>
    <div className="channel-card__numbers">{numberFormatter(members)}</div>
    <div className="channel-card__numbers">{numberFormatter(likes)}</div>
    <div className="channel-card__numbers">{numberFormatter(cost)}</div>
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
