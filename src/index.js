import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import "bootstrap/dist/css/bootstrap.min.css";

import { reducer } from "~/store";

import { Backend } from "~/services/backend";
import { Storage } from "~/services/storage";
import { AuthPopup } from "~/services/auth-popup";

import { App } from "~/components/app";

const root = document.createElement("div");
document.body.appendChild(root);

const store = createStore(
  reducer,
  applyMiddleware(
    thunk.withExtraArgument({
      backend: new Backend(),
      storage: new Storage(),
      authPopup: new AuthPopup(),
    }),
  ),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
);
