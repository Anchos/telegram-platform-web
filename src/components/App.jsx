import * as React from "react";
import data from '../data';
import styles from '../ui/styles';
import { observer, inject } from 'mobx-react';
import { Header } from "../ui/newdesign/header/Header";
import { Categories } from "../ui/newdesign/categories/Categories";
import { Footer } from "../ui/newdesign/Footer";
import {
  PAGE_CHANNEL,
  PAGE_CHANNELS,
} from "../store/route/reducer";
import { MainPage } from "../pages/MainPage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Channel } from "../pages/channel/channel";
import { DevLogs } from "../pages/DevLogs";
import { AddChannel } from "../pages/AddChannel";

styles()

@inject('app')
@observer
class App extends React.Component {
  // renderPage = () => {
  //   const { page } = this.props;

  //   switch (page) {
  //     case PAGE_CHANNEL:
  //       return <div>Bye world</div>;

  //     case PAGE_CHANNELS:
  //       return <MainPage/>;

  //     default:
  //       return <MainPage />;
  //   }
  // };

  render() {
    const { session, page } = this.props;

    return (
      <Router>
        <div>
          <Header />
          <Categories categories={data.categories} />
          <Switch>
            <Route exact={true} path={'/'} component={MainPage} />
            <Route path={'/channels/@:username'} component={Channel} />
          </Switch>
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