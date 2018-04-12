import React, { Component } from 'react';
import { HomePage } from 'pages';
import { hot } from 'react-hot-loader';

class App extends Component {
  state = {};

  render() {
    return <HomePage />;
  }
}

export default hot(module)(App);
