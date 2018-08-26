import {call, takeLatest, put} from 'redux-saga/effects'
import {logout} from "../backend";
import {setLogout} from "../action-creators";

function* logOut() {
  yield call(logout);
  yield put(setLogout());
}

export default function*() {
  yield takeLatest('LOGOUT_REQUESTED', logOut);
};
