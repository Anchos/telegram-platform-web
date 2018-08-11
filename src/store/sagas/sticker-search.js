import {call, takeLatest, put, select} from 'redux-saga/effects'
import {delay} from 'redux-saga';
import {setSearchStickers} from "../action-creators";
import {getStickersMock} from "../../data_mocks/stickers";

function* getStickers() {
  yield delay(1000);
  const filters = yield select(state => state.stickerSearch.filters);
  const response = yield call(getStickersMock, filters);
  yield put(setSearchStickers(response));
}

export default function*() {
  yield takeLatest('SEARCH_STICKERS_FETCH_REQUESTED', getStickers);
  yield takeLatest('SEARCH_STICKERS_SET_FILTERS', getStickers);
};
