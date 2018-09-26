import ChangelPage from "./page";
import { requestChannel, requestChannelVerification } from "../../store/action-creators";
import { connect } from "react-redux";
import React from "react";
import "./index.scss";

const ChangelPageContainer = ({ ...props }) => {
    return <ChangelPage {...props} />;
}

const dispatchToProps = dispatch => ({
  requestChannel: username => dispatch(requestChannel(username)),
  requestChannelVerification: username => dispatch(requestChannelVerification(username)),
});

export default connect(
  state => ({
    ...state.channelPage,
  }),
  dispatchToProps
)(ChangelPageContainer);
