import { call, takeLatest, put, select } from "redux-saga/effects";
import { delay } from "redux-saga";
import { getChannels } from "../backend";
import { setSearchChannels } from "../action-creators";

function* fetchChannels() {
  yield delay(1000);

  const state = yield select();
  const language = state.configuration.locale;
  const filters = {...state.channelSearch.filters, language};

  const response = yield call(getChannels, filters);
  yield put(setSearchChannels(response));
}

export default function*() {
  yield takeLatest("SEARCH_CHANNELS_FETCH_REQUESTED", fetchChannels);
  yield takeLatest("SEARCH_CHANNELS_SET_FILTERS", fetchChannels);
}
