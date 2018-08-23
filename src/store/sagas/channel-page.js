import { call, takeLatest, put, select } from "redux-saga/effects";
import { getSingleChannel } from "../backend";
import { setChannel, setChannelRequestError } from "../action-creators";

function* getChannel(action) {
  try {
    const response = yield call(getSingleChannel, action.username);
    yield put(setChannel(response));
  } catch (errorMessage) {
    yield put(setChannelRequestError(errorMessage.desc));
  }
}

export default function*() {
  yield takeLatest("CHANNEL_FETCH_REQUESTED", getChannel);
}
