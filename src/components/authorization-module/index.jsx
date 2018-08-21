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
  closeModal = () => this.setState({ modalOpen: false });

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
          <Modal onClose={this.closeModal}>
            <div className="authorization-modal">
              {clickedBotPage ? (
                authorizeConfirmed ? (
                  <div>confirmed</div>
                ) : (
                  <Loader centered />
                )
              ) : (
                <div>
                  <Button
                    onClick={() => window.open(`https://t.me/medev_bot?start=${connection_id}`)}
                  >
                    Open
                  </Button>
                </div>
              )}
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
