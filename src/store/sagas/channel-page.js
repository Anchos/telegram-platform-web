import {call, takeLatest, put, select} from 'redux-saga/effects'
import {delay} from 'redux-saga';
import {getSingleChannel} from "../backend";
import {setChannel} from "../action-creators";

function* getChannel(action) {
  yield delay(1000);
  const response = yield call(getSingleChannel, action.username);
  yield put(setChannel(response));
}

export default function*() {
  yield takeLatest('CHANNEL_FETCH_REQUESTED', getChannel);
};

