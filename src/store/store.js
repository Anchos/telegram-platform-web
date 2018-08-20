import { createStore, combineReducers, applyMiddleware, bindActionCreators } from "redux";
import createSagaMiddleware from "redux-saga";
import reduxLogger from 'redux-logger';
import { all } from "redux-saga/effects";
import {initializeConnection} from "./action-creators";
import {socket} from "./backend";
import * as sagas from "./sagas";
import * as reducers from "./reducers";

const saga = createSagaMiddleware();
const middlewares = [saga];

if(process.env.NODE_ENV === 'development') {
  middlewares.push(reduxLogger);
}

const store = createStore(
  combineReducers({
    connection: reducers.connection,
    main: reducers.mainPage,
    channelSearch: reducers.channelSearch,
    botSearch: reducers.botSearch,
    stickerSearch: reducers.stickerSearch,
    channelPage: reducers.channelPage
  }),
  applyMiddleware(...middlewares),
);

const boundConnectionInitializer = bindActionCreators(initializeConnection, store.dispatch);
socket.onOpen(boundConnectionInitializer);

saga.run(function*() {
  yield all([
    sagas.auth(),
    sagas.data(),
    sagas.searchChannels(),
    sagas.searchBots(),
    sagas.searchStickers(),
    sagas.channelPage()
  ]);
});
export default store;
