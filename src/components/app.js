import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { getSession } from "src/store/auth/selectors";

import { PAGE_CHANNEL, PAGE_CHANNELS } from "src/store/route/reducer";
import { getPage } from "src/store/route/selectors";

import Channel from "src/pages/channel";
import Main from "src/pages/main";
import { Header } from "src/components/header";

class App extends React.Component {
  renderPage = () => {
    const { page } = this.props;

    switch (page) {
      case PAGE_CHANNEL:
        return <Channel />;

      case PAGE_CHANNELS:
        return <Main />;

      default:
        return "default";
    }
  };

  render() {
    const { session, page } = this.props;

    return (
      <>
        <Header />
        {session && this.renderPage()}
      </>
    );
  }
}

export default connect(
  createStructuredSelector({
    session: getSession,
    page: getPage,
  }),
)(App);
