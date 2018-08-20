import React from "react";
import { connect } from "react-redux";
import data from "../data_mocks";
import { closeConnection } from "../store/backend";
import { Header } from "../ui/newdesign/header/Header";
import { Categories } from "../ui/newdesign/categories/Categories";
import MainPage from "../pages/MainPage";
import ChannelPage from "./channel-page";
import { StickersPage } from "../pages/Stickers";
import { BotsPage } from "../pages/Bots";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "../ui/newdesign/footer/Footer";
import { socket } from "../store/backend";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 40px);
`;

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
        <Wrapper>
          <Header />
          <Switch>
            <Route exact={true} path="/" component={MainPage} />
            <Route path="/stickers" component={StickersPage} />
            <Route path="/bots" component={BotsPage} />
            <Route path="/channels/:username" component={ChannelPage} />
          </Switch>
          <Footer />
        </Wrapper>
      </Router>
    );
  }
}

export default connect(
  state => ({ fetching: state.connection.fetching }),
  dispatch => ({
    initialize: () => dispatch({ type: "INIT_REQUESTED" }),
  }),
)(App);
