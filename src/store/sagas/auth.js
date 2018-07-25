import {call, takeLatest, put} from 'redux-saga/effects'
import {getSession} from "../backend";

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

function* init() {
  const prevSessionId = yield call(getLocalStorageItem, 'sessionId');
  const { sessionId, connectionId } = yield call(getSession, prevSessionId);
  yield call(setLocalStorageItem, 'sessionId', sessionId);
  yield put({type: 'INIT_SUCCESS', payload: {connection_id: connectionId}});

}

export default function*() {
  yield takeLatest('INIT_REQUESTED', init)
};
