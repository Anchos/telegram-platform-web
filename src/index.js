import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import "bootstrap/dist/css/bootstrap.min.css";

import { reducer } from "src/store/reducer";
import { saga } from "src/store/saga";

import { enhancer as routesEnhancer, middleware as routesMiddleware } from "src/store/routes";

import { DI } from "src/DI";
import { Backend } from "src/services/backend";
import { Socket } from "src/services/socket";
import { Storage } from "src/services/storage";
import { AuthPopup } from "src/services/auth-popup";

import { App } from "src/components/app";

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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  compose(
    routesEnhancer,
    applyMiddleware(routesMiddleware, sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

sagaMiddleware.run(saga, container.instances);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root,
);
