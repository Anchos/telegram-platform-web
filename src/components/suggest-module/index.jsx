import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "class-names";
import { Button, Modal } from "biplane-uikit";
import { requestUpdateChannel } from "../../store/action-creators";
import Loader from "../loader";
import style from "./style.css";

class Authorization extends React.Component {
  state = {
    modalOpen: false,
    inputValue: "",
  };

  openModal = () => this.setState({ modalOpen: true });
  closeModal = () => this.setState({ modalOpen: false });
  changeInput = e => this.setState({ inputValue: e.target.value });

  addChannel = () => {
    this.props.requestUpdateChannel(this.state.inputValue);
  };

  render() {
    const { modalOpen, inputValue } = this.state;
    return (
      <React.Fragment>
        <Button onClick={this.openModal}>
          Suggest
        </Button>
        {modalOpen && (
          <Modal onClose={this.closeModal} size="medium">
            <div className="authorization-modal">
              <div className="authorization-modal__header">Suggest channel</div>
              <input
                className="suggest-modal__input"
                value={inputValue}
                onChange={this.changeInput}
              />
              <div className="suggest-modal__footer">
                <div />
                <Button onClick={this.addChannel}>Add channel</Button>
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

export default connect(
  state => ({}),
  dispatch => ({
    requestUpdateChannel: username => dispatch(requestUpdateChannel(username)),
  }),
)(Authorization);
