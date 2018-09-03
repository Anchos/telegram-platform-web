import React from "react";
import { hot } from "react-hot-loader";
import { connect } from "react-redux";
import data from "../data_mocks";
import { closeConnection } from "../store/backend";
import Header from "./header";
import { Categories } from "../ui/newdesign/categories/Categories";
import MainPage from "../pages/MainPage";
import ChannelPage from "./channel-page";
import { StickersPage } from "../pages/Stickers";
import { BotsPage } from "../pages/Bots";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./footer";
import { socket } from "../store/backend";
import { initializeConnection, requestCategories, requestChannels } from "../store/action-creators";
import style from "./style.css";

class App extends React.Component {
  componentDidMount() {
    setInterval(() => {
      console.log("checking connection...");
      if (!socket.isOpen) {
        socket.connect();
      }
    }, 10000);
  }

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
            <Route path="/stickers" component={StickersPage} />
            <Route path="/bots" component={BotsPage} />
            <Route path="/channels/:username" component={ChannelPage} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
