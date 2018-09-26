import React from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import data from "../data_mocks";
import { closeConnection } from "../store/backend";
import Header from "./header";
import MainPage from "../pages/MainPage";
import ChannelPage from "./channel-page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./footer";
import { socket } from "../store/backend";
import { initializeConnection, requestCategories, requestChannels } from "../store/action-creators";
import style from "./style.css";

class App extends React.Component {

  componentWillUnmount() {
    closeConnection();
  }

  render() {
    return (
      <Router>
        <div className="app-root">
          <Header />
          <Switch>
            <Route exact={true} path="/" component={MainPage} />
            <Route path="/channels/:username" component={ChannelPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
