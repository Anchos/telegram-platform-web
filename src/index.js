import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import "bootstrap/dist/css/bootstrap.min.css";

import { reducer } from "~/store/reducer";
import { saga } from "~/store/saga";

import { enhancer as routesEnhancer, middleware as routesMiddleware } from "~/store/routes";

import { DI } from "~/DI";
import { Backend } from "~/services/backend";
import { Socket } from "~/services/socket";
import { Storage } from "~/services/storage";
import { AuthPopup } from "~/services/auth-popup";

import { App } from "~/components/app";

const root = document.createElement("div");
document.body.appendChild(root);

const container = new DI()
  .add({
    Socket,
    Storage,
    AuthPopup,
  })
  .add({
    Backend,
  });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  compose(routesEnhancer, applyMiddleware(routesMiddleware, sagaMiddleware)),
);

sagaMiddleware.run(saga, container.instances);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
);
