import {call, takeLatest, put, select} from 'redux-saga/effects'
import {delay} from 'redux-saga';
import {setSearchBots} from "../action-creators";
import {getBotsMock} from "../../data_mocks/bots";

function* getBots() {
  yield delay(1000);
  const filters = yield select(state => state.botSearch.filters);
  const response = yield call(getBotsMock, filters);
  yield put(setSearchBots(response));
}

export default function*() {
  yield takeLatest('SEARCH_BOTS_FETCH_REQUESTED', getBots);
  yield takeLatest('SEARCH_BOTS_SET_FILTERS', getBots);
};
