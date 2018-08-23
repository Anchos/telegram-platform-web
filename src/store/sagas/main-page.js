import {call, takeLatest, put, select} from 'redux-saga/effects'
import {getChannels, getCategories} from "../backend";
import {setChannels, setCategories} from "../action-creators";

function* fetchChannels() {
  const filters = yield select(state => state.main.filters);
  const response = yield call(getChannels, filters);
  yield put(setChannels(response));
}

function* fetchCategories() {
  const response = yield call(getCategories);
  yield put(setCategories(response));
}

export default function*() {
  yield takeLatest('CHANNELS_FETCH_REQUESTED', fetchChannels);
  yield takeLatest('CHANNELS_SET_FILTERS', fetchChannels);
  yield takeLatest('CATEGORIES_FETCH_REQUESTED', fetchCategories);
};
