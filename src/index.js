import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import { getLocaleMessages } from "./translation/utils";
import App from "./components/App";
import store from "./store/store";
import "./style.css";

let locale = localStorage.getItem("locale");

if (!locale) {
  locale = "en";
  localStorage.setItem("locale", locale);
}

let vh = window.innerHeight * 0.01;
let vw = window.innerWidth * 0.01;

document.documentElement.style.setProperty("--vh", `${vh}px`);
document.documentElement.style.setProperty("--vw", `${vw}px`);

window.addEventListener("resize", () => {
  vh = window.innerHeight * 0.01;
  vw = window.innerWidth * 0.01;

  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
});

render(
  <Provider store={store}>
    <IntlProvider locale={locale} messages={getLocaleMessages(locale)}>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById("root"),
);
