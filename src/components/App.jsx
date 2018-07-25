import React from "react";
import data from "../data_mocks";
import { Header } from "../ui/newdesign/header/Header";
import { Categories } from "../ui/newdesign/categories/Categories";
import { MainPage } from "../pages/MainPage";
import { StickersPage } from "../pages/Stickers";
import { BotsPage } from "../pages/Bots";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer } from "../ui/newdesign/footer/Footer";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  height: calc(100vh - 40px);
`;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Header />
          <Categories categories={data.categories} />
          <Switch>
            <Route exact={true} path={"/"} component={MainPage} />
            <Route path={"/stickers"} component={StickersPage} />
            <Route path={"/bots"} component={BotsPage} />
          </Switch>
          <Footer />
        </Wrapper>
      </Router>
    );
  }
}

export default App;
