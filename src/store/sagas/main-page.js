import { call, takeLatest, put, select } from "redux-saga/effects";
import { getChannels, getCategories } from "../backend";
import { setChannels, setCategories } from "../action-creators";

function* fetchChannels(action) {
  const filters = yield select(state => state.main.filters);
  const response = yield call(
    getChannels,
    action.type === "CHANNELS_FETCH_REQUESTED" ? { ...filters, category: action.payload } : filters,
  );
  yield put(setChannels(response));
}

export default function*() {
  yield takeLatest("CHANNELS_FETCH_REQUESTED", fetchChannels);
  yield takeLatest("CHANNELS_SET_FILTERS", fetchChannels);
}
