import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import store from "./store/store";
import './style.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
