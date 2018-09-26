import { call, takeLatest, put, select } from "redux-saga/effects";
import { delay } from "redux-saga";
import { getChannels, getCategories } from "../backend";
import { setChannels, setCategories } from "../action-creators";

function* fetchChannels(action) {
  yield delay(1000);

  const state = yield select();
  const language = state.configuration.locale;
  const filters = {...state.main.filters, language};

  const response = yield call(
    getChannels,
    action.type === "CHANNELS_FETCH_REQUESTED"
      ? { ...filters, category_id: action.payload > 0 ? action.payload : undefined }
      : filters,
  );
  yield put(setChannels(response));
}

export default function*() {
  yield takeLatest("CHANNELS_FETCH_REQUESTED", fetchChannels);
  yield takeLatest("CHANNELS_SET_FILTERS", fetchChannels);
}
