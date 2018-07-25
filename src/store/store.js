import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import * as sagas from "./sagas";
import * as reducers from "./reducers";

const saga = createSagaMiddleware();
const store = createStore(
  combineReducers({
    connection: reducers.connection,
    main: reducers.mainPage,
  }),
  applyMiddleware(saga),
);

saga.run(function*() {
  yield all({
    auth: sagas.auth(),
    data: sagas.data(),
  });
});

export default store;
