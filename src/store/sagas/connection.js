import {call, takeLatest, put} from 'redux-saga/effects'
import {getSession} from "../backend";
import {setConnection} from "../action-creators";

const getLocalStorageItem = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch(e) {
    return null;
  }
};

const setLocalStorageItem = (key, item) => {
  localStorage.setItem(key, JSON.stringify(item));
};

function* initializeConnection() {
  const prevSessionId = yield call(getLocalStorageItem, 'session_id');
  const response = yield call(getSession, prevSessionId || undefined);
  yield call(setLocalStorageItem, 'session_id', response.session_id);
  yield put(setConnection(response));
}

export default function*() {
  yield takeLatest('INIT_REQUESTED', initializeConnection);
};
