import React from "react";
import { connect } from "react-redux";
import { injectIntl, intlShape, FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import classNames from "class-names";
import { Button, Modal } from "biplane-uikit";
import Loader from "../loader";
import style from "./style.css";

class Authorization extends React.Component {
  state = {
    modalOpen: false,
    clickedBotPage: false,
    authorizeConfirmed: false,
  };

  openModal = () => this.setState({ modalOpen: true });
  closeModal = () =>
    this.setState({ modalOpen: false, clickedBotPage: false, authorizeConfirmed: false });

  componentWillUpdate(newProps) {
    if (newProps.isAuthorizedYet === true && this.props.isAuthorizedYet === false) {
      this.setState({ authorizeConfirmed: true });
    }
  }

  render() {
    const { connection_id, intl } = this.props;
    const { modalOpen, clickedBotPage, authorizeConfirmed } = this.state;
    return (
      <React.Fragment>
        <Button appearance="secondary" onClick={this.openModal}>
          {intl.messages["auth.signIn"]}
        </Button>
        {modalOpen && (
          <Modal onClose={this.closeModal} size="medium">
            <div className="authorization-modal">
              <div className="authorization-modal__header">{intl.messages["auth.logIn"]}</div>
              <div className="authorization-modal__instructions">
                {clickedBotPage ? (
                  authorizeConfirmed ? (
                    <div className="authorization-modal__success-image-container">
                      <img src={require("../../images/login-success.svg")} alt="" />
                    </div>
                  ) : (
                    <Loader centered size="xxlarge" />
                  )
                ) : (
                  <React.Fragment>
                    <div className="authorization-modal__instruction-point">
                      1.
                      <FormattedMessage
                        id="auth-bot-caption"
                        defaultMessage={intl.messages["auth.botAction"]}
                        values={{
                          open: (
                            <span className="authorization-modal__open-button-container">
                              <Button
                                onClick={() => {
                                  this.setState({ clickedBotPage: true });
                                  window.open(`https://t.me/medev_bot?start=${connection_id}`);
                                }}
                              >
                                {intl.messages["auth.botAction.button"]}
                              </Button>
                            </span>
                          ),
                        }}
                      />
                    </div>
                    <div className="authorization-modal__instruction-point">
                      2.
                      <FormattedMessage
                        id="auth-bot-start"
                        defaultMessage={intl.messages["auth.pressStart"]}
                        values={{ start: <b>{intl.messages["auth.pressStart.start"]}</b> }}
                      />
                    </div>
                    <div className="authorization-modal__instruction-point">
                      3.
                      {intl.messages["auth.goBack"]}
                    </div>
                  </React.Fragment>
                )}
              </div>
            </div>
          </Modal>
        )}
      </React.Fragment>
    );
  }
}

Authorization.propTypes = {
  isAuthorizedYet: PropTypes.bool,
  connection_id: PropTypes.string,
  intl: intlShape,
};

export default injectIntl(
  connect(state => ({
    isAuthorizedYet: !!state.authorization.user_id,
    connection_id: state.connection.connection_id,
  }))(Authorization),
);
