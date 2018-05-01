import { takeLatest, takeEvery, throttle, all, put, call, select } from "redux-saga/effects";
import { createSelector } from "reselect";

import { setSession } from "~/store/auth/actions";

import { getQuery, getMembers, getCategory, getPage, getPageSize } from "./selectors";
import {
  fetchData,
  setItems,
  setCategories,
  setMembers,
  setQuery,
  toggleCategory,
  setMeta,
  setPage,
  nextPage,
  prevPage,
} from "./actions";

// prettier-ignore
const getMembersForResponse = createSelector(
  getMembers,
  ({ min, max }) => [min, max === Infinity ? Number.MAX_VALUE : max]
);

function* fetchDataSaga(_, { backend }) {
  const { channels, categories, maxMembers, totalChannels } = yield call(backend.getChannels, {
    name: yield select(getQuery),
    category: yield select(getCategory),
    members: yield select(getMembersForResponse),
    count: yield select(getPageSize),
    offset: (yield select(getPage)) * (yield select(getPageSize)),
  });

  yield put(setMeta({ maxMembers, totalChannels }));
  yield put(setCategories(categories));
  yield put(setItems(channels));
}

function* refetchDataSaga(services) {
  yield put(setPage(0));
}

function debounce(ms, pattern, handler, ...args) {
  function* delayedHandler(...handlerArgs) {
    yield new Promise(resolve => setTimeout(resolve, ms));
    yield handler(...handlerArgs);
  }

  return takeLatest(pattern, delayedHandler, ...args);
}

export function* data(services) {
  yield all([
    takeLatest(setSession, fetchDataSaga, undefined, services),
    takeLatest(fetchData, fetchDataSaga, services),
    debounce(200, setQuery, refetchDataSaga, undefined, services),
    debounce(200, setMembers, refetchDataSaga, undefined, services),
    takeEvery(toggleCategory, refetchDataSaga, undefined, services),
    takeEvery(setPage, fetchDataSaga, undefined, services),
    takeEvery(nextPage, fetchDataSaga, undefined, services),
    takeEvery(prevPage, fetchDataSaga, undefined, services),
  ]);
}
