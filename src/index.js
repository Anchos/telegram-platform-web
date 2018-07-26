import * as React from "react";
import { render } from "react-dom";
import { initializeConnection } from "./store/action-creators";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import store from "./store/store";
import { Socket } from "./store/socket";

export const socket = new Socket("wss://ws.recursion.ga/client");
store.dispatch(initializeConnection());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
