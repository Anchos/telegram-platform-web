import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "class-names";
import { Button, Modal } from "biplane-uikit";
import { requestUpdateChannel, resetSuggestion } from "../../store/action-creators";
import Loader from "../loader";
import style from "./style.css";

const processErrorCode = code => {
  switch (code) {
    case 404:
      return "Channel not found";
    default:
      return "Unknown error";
  }
};

class Authorization extends React.Component {
  state = {
    modalOpen: false,
    inputValue: "",
  };

  openModal = () => this.setState({ modalOpen: true });
  closeModal = () => {
    this.props.resetSuggestion();
    this.setState({ modalOpen: false, inputValue: "" });
  };
  changeInput = e => this.setState({ inputValue: e.target.value });

  addChannel = () => {
    this.props.requestUpdateChannel(this.state.inputValue);
  };

  render() {
    const { modalOpen, inputValue } = this.state;
    const { error, success, fetching } = this.props;

    return (
      <React.Fragment>
        <Button onClick={this.openModal}>Suggest</Button>
        {modalOpen && (
          <Modal onClose={this.closeModal} size="medium">
            <div className="suggest-modal">
              <div className="suggest-modal__header">Suggest channel</div>
              <input
                className="suggest-modal__input"
                value={inputValue}
                onChange={this.changeInput}
              />
              <div className="suggest-modal__footer">
                {fetching ? (
                  <Loader />
                ) : error ? (
                  <div className="suggest-modal__error">{processErrorCode(error.code)}</div>
                ) : success ? (
                  <div className="suggest-modal__success">
                    Channel successfully added
                  </div>
                ) : (
                  <div />
                )}
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
  requestUpdateChannel: PropTypes.func,
  resetSuggestion: PropTypes.func,
  error: PropTypes.object,
  success: PropTypes.bool,
  fetching: PropTypes.bool,
};

export default connect(
  state => state.channelSuggest,
  dispatch => ({
    requestUpdateChannel: username => dispatch(requestUpdateChannel(username)),
    resetSuggestion: () => dispatch(resetSuggestion()),
  }),
)(Authorization);
