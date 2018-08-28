import { call, takeLatest, put, select } from "redux-saga/effects";
import { updateChannel } from "../backend";
import { setUpdateChannelSuccess, setUpdateChannelError } from "../action-creators";

function* updateChannelSaga(action) {
  try {
    const response = yield call(updateChannel, action.username);
    yield put(setUpdateChannelSuccess(response));
  } catch (errorMessage) {
    yield put(setUpdateChannelError(errorMessage));
  }
}

export default function*() {
  yield takeLatest("UPDATE_CHANNEL_REQUEST", updateChannelSaga);
}
