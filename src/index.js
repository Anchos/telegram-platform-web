import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./store/store";
import "./style.css";

let vh = window.innerHeight * 0.01;
let vw = window.innerWidth * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);
document.documentElement.style.setProperty('--vw', `${vw}px`);

window.addEventListener('resize', () => {
  vh = window.innerHeight * 0.01;
  vw = window.innerWidth * 0.01;

  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.documentElement.style.setProperty('--vw', `${vw}px`);
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
