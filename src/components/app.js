import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { getSession } from "src/store/auth/selectors";

import { PAGE_CHANNEL, PAGE_CHANNELS } from "src/store/route/reducer";
import { getPage } from "src/store/route/selectors";

import { List } from "src/pages/list";
import { Header } from "src/components/header";

const renderPage = page => {
  switch (page) {
    case PAGE_CHANNEL:
      return "Hello";

    case PAGE_CHANNELS:
      return <List />;

    default:
      return "default";
  }
};

export const App = connect(
  createStructuredSelector({
    session: getSession,
    page: getPage,
  }),
)(({ session, page }) => (
  <>
    <Header />
    {session && renderPage(page)}
  </>
));
