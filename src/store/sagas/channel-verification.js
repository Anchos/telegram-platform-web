import { call, takeLatest, put, select } from "redux-saga/effects";
import { verifyChannel, ping } from "../backend";
import {
  requestChannelVerification,
  setChannelVerificationSuccess,
  setChannelVerificationError,
} from "../action-creators";

function* verifyChannelSaga(action) {
  try {
    const response = yield call(verifyChannel, action.username);
    yield put(setChannelVerificationSuccess())
  } catch (errorMessage) {
    yield put(setChannelVerificationError(errorMessage));
  }
}

export default function*() {
  yield takeLatest("CHANNEL_VERIFICATION_REQUESTED", verifyChannelSaga);
}
