import { createStore, combineReducers, applyMiddleware, bindActionCreators } from "redux";
import createSagaMiddleware from "redux-saga";
import reduxLogger from "redux-logger";
import { all } from "redux-saga/effects";
import { initializeConnection, authorize } from "./action-creators";
import { socket } from "./backend";
import * as sagas from "./sagas";
import * as reducers from "./reducers";

const saga = createSagaMiddleware();
const middlewares = [saga];

if (process.env.NODE_ENV === "development") {
  middlewares.push(reduxLogger);
}

const store = createStore(
  combineReducers({
    connection: reducers.connection,
    main: reducers.mainPage,
    channelSearch: reducers.channelSearch,
    botSearch: reducers.botSearch,
    stickerSearch: reducers.stickerSearch,
    channelPage: reducers.channelPage,
    authorization: reducers.authorization,
  }),
  applyMiddleware(...middlewares),
);

const boundConnectionInitializer = bindActionCreators(initializeConnection, store.dispatch);
socket.onOpen(boundConnectionInitializer);

const boundAuth = bindActionCreators(authorize, store.dispatch);
socket.subscribe(message => {
  const { action, ...rest } = message;
  if (action === "AUTH") boundAuth(rest);
});

saga.run(function*() {
  yield all([
    sagas.init(),
    sagas.data(),
    sagas.searchChannels(),
    sagas.searchBots(),
    sagas.searchStickers(),
    sagas.channelPage(),
    sagas.logout(),
  ]);
});
export default store;
