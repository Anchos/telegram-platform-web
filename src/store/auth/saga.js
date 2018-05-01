import { takeEvery, takeLatest, call, select, put, all } from "redux-saga/effects";

import { setSession, setUser, login, logout } from "./actions";
import { getSession } from "./selectors";

function* loginHandler({ authPopup }) {
  yield call(authPopup.open, yield select(getSession));
}

function* logoutHandler(services) {
  yield call(services.storage.removeUser);
  yield call(services.storage.removeSessionId);
  yield put(setUser(null));
  yield put(setSession(null));
  yield init(services);
}

function* init({ backend, storage, authPopup }) {
  const prevSessionId = yield call(storage.getSessionId);

  const { sessionId, connectionId } = yield call(backend.getSession, prevSessionId);
  yield call(storage.setSessionId, sessionId);
  yield put(setSession({ sessionId, connectionId }));

  let user = yield call(storage.getUser);
  if (!user || prevSessionId !== sessionId) {
    user = yield call(backend.awaitUser);
    yield call(authPopup.hide);
    yield call(storage.setUser, user);
  }

  yield put(setUser(user));
}

export function* auth(services) {
  yield all({
    init: init(services),
    login: takeLatest(login, loginHandler, services),
    logout: takeLatest(logout, logoutHandler, services),
  });
}
