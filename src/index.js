import * as React from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import { getLocaleMessages } from "./translation/utils";
import App from "./components/App";
import store, { boundSetStoreLocale } from "./store/store";
import "./style.css";

//manually set vh vw trick for mobile devices
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

//localization
let storageLocale = localStorage.getItem("locale");
if (!storageLocale) {
  storageLocale = "en";
  localStorage.setItem("locale", storageLocale);
}
boundSetStoreLocale(storageLocale);

//intl provider connected to redux to get locale from redux store
const ConnectedIntlProvider = connect(state => ({ locale: state.configuration.locale }))(
  ({ locale, ...props }) => (
    <IntlProvider locale={locale} messages={getLocaleMessages(locale)} {...props} />
  ),
);

render(
  <Provider store={store}>
    <ConnectedIntlProvider>
      <App />
    </ConnectedIntlProvider>
  </Provider>,
  document.getElementById("root"),
);
