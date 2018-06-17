import * as React from "react";
import { connect } from "react-redux";
import { observer, inject } from 'mobx-react';
// import { createStructuredSelector } from "reselect";
//
// import { getSession } from "src/store/auth/selectors";
//
// import { PAGE_CHANNEL, PAGE_CHANNELS } from "src/store/route/reducer";
// import { getPage } from "src/store/route/selectors";
//
// import Channel from "src/pages/channel";
// import Main from "src/pages/main";
import { Header } from "../ui/newdesign/Header";
import { ChannelList } from "./ChannelList";
import {
  PAGE_CHANNEL,
  PAGE_CHANNELS,
} from "../store/route/reducer";
import { MainPage } from "../pages/MainPage";

@inject('app')
@observer
class App extends React.Component {
  renderPage = () => {
    const { page } = this.props;

    switch (page) {
      case PAGE_CHANNEL:
        return <div>Bye world</div>;

      case PAGE_CHANNELS:
        return <MainPage/>;

      default:
        return <MainPage />;
    }
  };

  render() {
    const { session, page } = this.props;

    return (
      <div style={{ backgroundColor: '#EEF5FE' }}>
        <Header />
        <div
          style={{
            padding: '0 60px'
          }}
        >
          <div>I was built with parcel 1.9 and work with Mobx 4. Feels better.</div>
          {this.renderPage()}
        </div>
      </div>
    );
  }
}
//
// export default connect(
//   createStructuredSelector({
//     session: getSession,
//     page: getPage,
//   }),
// )(App);

export default App