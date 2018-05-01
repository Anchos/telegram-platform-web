import * as React from "react";
import { connect } from "react-redux";
import { createSelector, createStructuredSelector } from "reselect";
import { Media, Button } from "reactstrap";

import { getUser, getSession } from "~/store/auth/selectors";
import { login, logout } from "~/store/auth/actions";

const mapStateToProps = createStructuredSelector({
  user: getUser,
  session: getSession,
});

const LoginButtonView = ({ user, session, dispatch }) => {
  if (!session) {
    return (
      <Button color="primary" disabled>
        Waiting session...
      </Button>
    );
  }

  if (!user) {
    return (
      <Button color="primary" onClick={() => dispatch(login())}>
        Login with telegram
      </Button>
    );
  }

  return (
    <Media className="d-flex align-items-center">
      <Media left className="m-2">
        <Media
          object
          className="rounded-circle"
          src={user.avatar}
          alt={user.name}
          width={32}
          height={32}
        />
      </Media>
      <Media body className="pr-3">
        {user.name}
      </Media>
      <Media body>
        <Button color="danger" onClick={() => dispatch(logout())}>
          Logout
        </Button>
      </Media>
    </Media>
  );
};

export const LoginButton = connect(mapStateToProps)(LoginButtonView);
