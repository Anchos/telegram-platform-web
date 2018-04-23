import * as React from "react";
import { connect } from "react-redux";
import { createSelector, createStructuredSelector } from "reselect";

import { getSession } from "~/store/auth";

import { List } from "~/pages/list";
import { Header } from "~/components/header";

const mapStateToProps = createStructuredSelector({
  session: getSession,
});

const AppView = ({ session }) => (
  <>
    <Header />
    {session && <List />}
  </>
);

export const App = connect(mapStateToProps)(AppView);
