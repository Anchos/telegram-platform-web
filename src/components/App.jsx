import * as React from "react";
import { observer, inject } from 'mobx-react';
import { Header } from "../ui/newdesign/Header";
import {
  PAGE_CHANNEL,
  PAGE_CHANNELS,
} from "../store/route/reducer";
import { MainPage } from "../pages/MainPage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Channel } from "../pages/channel/channel";
import { DevLogs } from "../pages/DevLogs";

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
      <Router>
        <div style={{ backgroundColor: '#EEF5FE', height: '100%' }}>
          <Header />
          <div
            style={{
              padding: '0 60px'
            }}
          >
            <Switch>
              <Route exact={true} path={'/'} component={MainPage} />
              <Route path={'/channels/@:username'} component={Channel} />
              <Route path={'/dev/log'} component={DevLogs} />
            </Switch>
          </div>
        </div>
      </Router>
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