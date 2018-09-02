import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "class-names";
import { numberFormatter, Button } from "biplane-uikit";
import style from "./style.css";

import { requestChannel, requestChannelVerification } from "../../store/action-creators";
import Loader from "../loader";
import Error from "../error";

class ChannelPage extends React.Component {
  componentDidMount() {
    this.props.requestChannel(this.props.match.params.username);
  }

  verifyChannel = () => this.props.requestChannelVerification(this.props.username);

  render() {
    const {
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
      fetching,
      error,
      verifying,
      verificationConfirmed,
      verificationError,
    } = this.props;
    return fetching ? (
      <Loader centered />
    ) : error ? (
      <Error text={`Can't find channel with username ${this.props.match.params.username}`} />
    ) : (
      <div className="channel-page__container">
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
                <a href={`https://t.me/${username.split("@")[1]}`} target="_blank">
                  <Button>Join</Button>
                </a>
                <div className="channel-page__channel-card-description">
                  <div>Are you an admin of this channel?</div>
                  <div className="channel-page__channel-verification">
                    {verifying ? (
                      <Loader size="small" />
                    ) : (
                      <a href="#" onClick={this.verifyChannel}>
                        Confirm ownership
                      </a>
                    )}
                    {verificationError && (
                      <div className="channel-page__channel-verification-error">
                        Could not verify your account as an admin of this channel
                      </div>
                    )}

                    {verificationConfirmed && (
                      <div className="channel-page__channel-verification-confirmed">
                        You are seeing this page as an adming of this channel
                      </div>
                    )}
                  </div>
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
                      <div className="channel-page__single-number-value">
                        {numberFormatter(members)}
                      </div>
                    </div>
                    <div className="channel-page__single-number">
                      <div className="channel-page__single-number-label">Likes</div>
                      <div className="channel-page__single-number-value">
                        {numberFormatter(likes)}
                      </div>
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
                      {description && description.length > 255
                        ? `${description.substr(0, 252)}...`
                        : description}
                    </div>
                    {/*todo: channel categories tags go here, these tags are not implemented anywhere yet*/}
                    {/*todo: reserved for social media links (?)*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="channel-page__related-channels-container">
            <div className="channel-page__section-title">Related Channels</div>
            <div className="channel-page__related-channels-cards">
              <div />
              <div />
              <div />
              {/*todo: related channels go here, not implemented on backend yet, might replace with a mock later*/}
            </div>
          </div>
          <div className="channel-page__statistics-section">
            <div className="channel-page__section-title">Channel Statistics</div>
          </div>
        </div>
        <div className="channel-page__latest-posts-container">
          <div className="channel-page__latest-posts-title">Latest posts</div>
          <div className="channel-page__latest-posts-cards">
            <div />
            <div />
            <div />
            <div />
            {/*todo: latest posts go here, not implemented on backend or frontend yet, could replace with a mock later*/}
          </div>
        </div>
      </div>
    );
  }
}

ChannelPage.propTypes = {
  photo: PropTypes.string,
  title: PropTypes.string,
  username: PropTypes.string,
  verified: PropTypes.bool,
  members: PropTypes.number,
  likes: PropTypes.number,
  cost: PropTypes.number,
  category: PropTypes.string,
  description: PropTypes.string,
  language: PropTypes.string,
  views: PropTypes.number,
  requestChannel: PropTypes.func,
};

export default connect(
  state => state.channelPage,
  dispatch => ({
    requestChannel: username => dispatch(requestChannel(username)),
    requestChannelVerification: username => dispatch(requestChannelVerification(username)),
  }),
)(ChannelPage);
