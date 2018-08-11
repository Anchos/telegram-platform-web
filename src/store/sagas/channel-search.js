import {call, takeLatest, put, select} from 'redux-saga/effects'
import {delay} from 'redux-saga';
import {getChannelsAndCategories} from "../backend";
import {setSearchChannels} from "../action-creators";

function* getChannels() {
  yield delay(1000);
  const filters = yield select(state => state.channelSearch.filters);
  const response = yield call(getChannelsAndCategories, filters);
  yield put(setSearchChannels(response));
}

export default function*() {
  yield takeLatest('SEARCH_CHANNELS_FETCH_REQUESTED', getChannels);
  yield takeLatest('SEARCH_CHANNELS_SET_FILTERS', getChannels);
};
