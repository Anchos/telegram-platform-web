import * as React from "react";
import data from '../data';
import styles from '../ui/styles';
import { observer, inject } from 'mobx-react';
import { Header } from "../ui/newdesign/header/Header";
import { Categories } from "../ui/newdesign/categories/Categories";
import { MainPage } from "../pages/MainPage";
import { StickersPage } from "../pages/Stickers";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Channel } from "../pages/channel/channel";

styles()

@inject('app')
@observer
class App extends React.Component {

  render() {

    return (
      <Router>
        <div>
          <Header />
          <Categories categories={data.categories} />
          <Switch>
            <Route exact={true} path={'/'} component={MainPage} />
            <Route path={'/stickers'} component={StickersPage} />
            <Route path={'/channels/@:username'} component={Channel} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App