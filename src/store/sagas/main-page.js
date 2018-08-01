import {call, takeLatest, put, select} from 'redux-saga/effects'
import {getChannelsAndCategories} from "../backend";
import {setChannels} from "../action-creators";

function* getChannels() {
  const filters = yield select(state => state.main.filters);
  console.log(filters);
  const response = yield call(getChannelsAndCategories, filters);
  console.log(response);
  yield put(setChannels(response));
}

export default function*() {
  yield takeLatest('CHANNELS_FETCH_REQUESTED', getChannels);
};
