import * as React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import "bootstrap/dist/css/bootstrap.min.css";
//
// import { reducer } from "src/store/reducer";
// import { saga } from "src/store/saga";
//
// import { enhancer as routesEnhancer, middleware as routesMiddleware } from "src/store/routes";
//
// import { DI } from "src/DI";
// import { Backend } from "src/services/backend";
// import { Socket } from "src/services/socket";
// import { Storage } from "src/services/storage";
// import { AuthPopup } from "src/services/auth-popup";

import App from "./components/App";
import { createStores } from "./newstore";

//
// const container = new DI()
//   .add({
//     Socket,
//     Storage,
//     AuthPopup,
//   })
//   .add({
//     Backend,
//   });
//
// const sagaMiddleware = createSagaMiddleware();
//
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
// const devTools = () => {
//   if (window.__REDUX_DEVTOOLS_EXTENSION__) {
//     return window.__REDUX_DEVTOOLS_EXTENSION__();
//   }
// };
//
// const store = createStore(
//   reducer,
//   compose(
//     routesEnhancer,
//     applyMiddleware(routesMiddleware, sagaMiddleware),
//   ),
// );
//
// sagaMiddleware.run(saga, container.instances);

const stores = createStores();

render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
