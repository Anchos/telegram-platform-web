import React from "react";
import PropTypes from "prop-types";
import classNames from "class-names";
import { numberFormatter, Button, Select } from "biplane-uikit";

import Loader from "../loader";
import Error from "../error";
import Ads from "./ads";
import Description from "./description";

export default class ChannelPage extends React.Component {

  componentWillMount() {
    const { description, tags, category, cost } = this.props;
    const txt = "Лучшая подборка горящих туров из Украины: - качественные и выгодные пакетные предложения; - скидки, акции на отели и перелеты; - полезные советы опытных турагентов и путешественников. Контакты для связи: @magicrest"
    this.setState({ description: txt, tags, category, cost, isOwner: true, language: "en" });
  }

  componentDidMount() {
    const { requestChannel, match } = this.props;
    requestChannel(match.params.username);
  }

  onChange = (value, key) => this.setState({[key]: value })

  renderBody = () => {
    const {
      category,
      members,
      photo,
      title,
      username,
      verified,
      views,
      likes,
      fetching,
      error,
    } = this.props;
    const { cost, language, description } = this.state;
    return (
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
                <Button>Join</Button>
                <div className="channel-page__channel-card-description">
                  <div>Are you an admin of this channel?</div>
                  <a href="#">Confirm ownership</a>
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
                    <Ads
                      isOwner={this.state.isOwner}
                      cost={cost}
                      onChange={(e) => this.onChange(e.target.value, "cost")}
                    />
                  </div>

                  <div className="channel-page__description-language-container">
                    <div className="channel-page__language-category">
                      <Select
                        options={[{label: "1", value: "1"}]}
                        onChange={value => this.onChange(value, "language")}
                        value={this.state.value}
                      />
                      <span>{category}</span>
                    </div>
                    <Description
                      isOwner={this.state.isOwner}
                      description={description}
                      onChange={(e) => this.onChange(e.target.value, "description")}
                    />
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

  render() {
    const { fetching, error } = this.props;
    return fetching ? (
      <Loader centered />
    ) : error ? (
      <Error text={`Can't find channel with username ${this.props.match.params.username}`} />
    ) : this.renderBody();
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