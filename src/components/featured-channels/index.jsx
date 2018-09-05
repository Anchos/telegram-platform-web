import React from "react";
import PropTypes from "prop-types";
import classNames from "class-names";
import { Link } from "react-router-dom";
import { Button, numberFormatter } from "biplane-uikit";
import "./style.scss";

const FeaturedChannelCard = ({ title, description, members, likes, cost, photo, username }) => (
  <div className="featured-channel-card">
    <div className="featured-channel-card__header">
      <div className="featured-channel-card__image">
        <img src={photo} alt={username} />
      </div>
      <div className="featured-channel-card__controls">
        <div className="featured-channel-card__stats">
          <div className="featured-channel-card__stat">
            <div className="featured-channel-card__stat-value">{numberFormatter(members)}</div>
            <div className="featured-channel-card__stat-title">Followers</div>
          </div>
          <div className="featured-channel-card__stat">
            <div className="featured-channel-card__stat-value">{numberFormatter(likes)}</div>
            <div className="featured-channel-card__stat-title">Likes</div>
          </div>
          <div className="featured-channel-card__stat">
            <div className="featured-channel-card__stat-value">{cost}</div>
            <div className="featured-channel-card__stat-title">Ads</div>
          </div>
        </div>
        <a
          className="featured-channel-card__join-link"
          href={`https://t.me/${username.split("@")[1]}`}
          target="_blank"
        >
          <Button appearance="secondary">Join</Button>
        </a>
      </div>
    </div>
    <div className="featured-channel-card__title">{title}</div>
    <div className="featured-channel-card__description">
      {description && description.length > 120 ? `${description.substr(0, 116)}...` : description}
    </div>
    <Link className="featured-channel-card__channel-link" to={`/channels/${username}`}>
      Learn more
    </Link>
  </div>
);

const FeaturedChannels = ({ channels }) => (
  <div className="featured-channels-container">
    {channels.map(channel => (
      <FeaturedChannelCard key={channel.username} {...channel} />
    ))}
  </div>
);

FeaturedChannels.propTypes = {
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.string,
      description: PropTypes.string,
      title: PropTypes.string,
      username: PropTypes.string,
      members: PropTypes.number,
      likes: PropTypes.number,
      cost: PropTypes.number,
    }),
  ),
};

export default FeaturedChannels;
