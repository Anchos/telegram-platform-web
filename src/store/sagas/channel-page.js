import {call, takeLatest, put, select} from 'redux-saga/effects'
import {getSingleChannel} from "../backend";
import {getSingleChannelMOCK} from "../../data_mocks/channel";
import {setChannel} from "../action-creators";

function* getChannel(action) {
  const response = yield call(getSingleChannelMOCK, action.username);
  yield put(setChannel(response));
}

export default function*() {
  yield takeLatest('CHANNEL_FETCH_REQUESTED', getChannel);
};

