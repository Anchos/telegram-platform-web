import * as React from "react";
import { connect } from "react-redux";
import { createSelector, createStructuredSelector } from "reselect";
import { Button } from "reactstrap";

import { getSession, getUser, showAuthPopup, auth, logout } from "~/store/auth";

import { UserCard } from "~/ui/user-card";

const mapStateToProps = createStructuredSelector({
  user: getUser,
  session: getSession,
});

class LoginButtonView extends React.Component {
  componentWillMount() {
    this.props.dispatch(auth());
  }

  handleLoginButtonClick = () => {
    this.props.dispatch(
      showAuthPopup({
        sessionId: this.props.session.sessionId,
        connectionId: this.props.session.connectionId,
      }),
    );
  };

  handleLogoutButtonClick = () => {
    this.props.dispatch(logout());
  };

  renderLoading = () => (
    <Button color="primary" disabled>
      Waiting session...
    </Button>
  );

  renderButton = () => (
    <Button color="primary" onClick={this.handleLoginButtonClick}>
      Login with telegram
    </Button>
  );

  renderUser = () => (
    <UserCard
      name={this.props.user.name}
      avatar={this.props.user.avatar}
      onLogout={this.handleLogoutButtonClick}
    />
  );

  render() {
    if (!this.props.session) return this.renderLoading();
    if (!this.props.user) return this.renderButton();
    return this.renderUser();
  }
}

export const LoginButton = connect(mapStateToProps)(LoginButtonView);
