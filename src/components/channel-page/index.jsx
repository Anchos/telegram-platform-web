import React from "react";
import PropTypes from "prop-types";
import classNames from "class-names";
import { numberFormatter, Button } from "biplane-uikit";
import style from "./style.css";

const ChannelPage = ({
  category,
  cost,
  description,
  language,
  members,
  photo,
  title,
  username,
  verified,
  views,
  likes,
}) => (
  <div className="channel-page">
    <div className="channel-page__channel-section">
      <div className="channel-page__channel-info">
        <div className="channel-page__channel-card">
          <div
            className={classNames(
              "channel-page__channel-icon-container",
              !photo && "channel-page-channel-icon-container__empty",
            )}
          >
            <img src={photo} alt={title} />
          </div>
          <Button>Join</Button>
          <div className="channel-page__channel-card-description">
            Are you an admin of this channel?
            <a>Confirm ownership</a>
          </div>
        </div>
        <div className="channel-page__channel-text-info">
          <div
            className={classNames(
              "channel-page__title",
              verified && "channel-page__title_verified",
            )}
          >
            {title}
          </div>
          <div className="channel-page__channel-extended-info">
            <div className="channel-page__numbers">
              <div className="channel-page__single-number">
                <div className="channel-page__single-number-label">Followers</div>
                <div className="channel-page__single-number-value">{numberFormatter(members)}</div>
              </div>
              <div className="channel-page__single-number">
                <div className="channel-page__single-number-label">Likes</div>
                <div className="channel-page__single-number-value">{numberFormatter(likes)}</div>
              </div>
              <div className="channel-page__single-number">
                <div className="channel-page__single-number-label">Ads</div>
                <div className="channel-page__single-number-value">{cost}</div>
              </div>
            </div>

            <div className="channel-page__description-language-container">
              <div className="channel-page__language-category">
                <span>{language}</span>
                <span>{category}</span>
              </div>
              <div className="channel-page__description">
                {description.length > 255 ? `${description.substr(0, 252)}...` : description.length}
              </div>
              {/*todo: channel categories tags go here, these tags are not implemented anywhere yet*/}
              {/*todo: reserved for social media links (?)*/}
            </div>
          </div>
        </div>
        <div className="channel-page__related-channels-container">
          {/*todo: related channels go here, not implemented on backend yet, might replace with a mock later*/}
        </div>
      </div>
      <div className="channel-page__channel-latest-posts-container">
        <div className="channel-page__latest-posts-title">Latest posts</div>
        {/*todo: latest posts go here, not implemented on backend or frontend yet, could replace with a mock later*/}
      </div>
    </div>
    <div className="channel-page__statistics-section">stats</div>
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
