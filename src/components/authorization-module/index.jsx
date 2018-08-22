import React from "react";
import { connect } from "react-redux";
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
      setTimeout(() => this.setState({ modalOpen: false }), 3000);
    }
  }

  render() {
    const { connection_id } = this.props;
    const { modalOpen, clickedBotPage, authorizeConfirmed } = this.state;
    return (
      <React.Fragment>
        <Button appearance="secondary" onClick={this.openModal}>
          Sign in
        </Button>
        {modalOpen && (
          <Modal onClose={this.closeModal} size="medium">
            <div className="authorization-modal">
              <div className="authorization-modal__header">Log In</div>
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
                      <span className="authorization-modal__open-button-container">
                        <Button
                          onClick={() => {
                            this.setState({ clickedBotPage: true });
                            window.open(`https://t.me/medev_bot?start=${connection_id}`);
                          }}
                        >
                          Open
                        </Button>
                      </span>
                      bot in Telegram
                    </div>
                    <div className="authorization-modal__instruction-point">
                      2. Press <b>Start</b>, wait for response
                    </div>
                    <div className="authorization-modal__instruction-point">
                      3. Go back to Biplane website
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
};

export default connect(state => ({
  isAuthorizedYet: !!state.authorization.user_id,
  connection_id: state.connection.connection_id,
}))(Authorization);
