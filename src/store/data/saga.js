import { takeLatest, takeEvery, throttle, all, put, call, select } from "redux-saga/effects";
import { createSelector } from "reselect";
import { normalize } from "normalizr";
import channelSchema from "src/schema/channel";

import { setSession } from "src/store/auth/actions";

import { getMembers, getCost, getPageSize, getFilters, getCategory, getQuery } from "./selectors";
import {
  fetchData,
  setItems,
  setCategories,
  setCost,
  setMembers,
  setQuery,
  toggleCategory,
  setMeta,
} from "./actions";

import { goChannels } from "src/store/route/actions";

const getRangeForResponse = getter =>
  createSelector(getter, ({ min, max }) => (max === Infinity ? [] : [min, max]));

const getMembersForResponse = getRangeForResponse(getMembers);
const getCostForResponse = getRangeForResponse(getCost);

function* fetchDataSaga(_, { backend }) {
  const filters = yield select(getFilters);

  const { channels, categories, maxMembers, maxCost, total } = yield call(backend.getChannels, {
    title: yield select(getQuery),
    category: yield select(getCategory),
    members: yield select(getMembersForResponse),
    cost: yield select(getCostForResponse),
    offset: filters.from,
    count: filters.to - filters.from,
  });

  yield put(setMeta({ maxMembers, total, maxCost: 300e3 }));
  yield put(setCategories(categories));
  yield put(setItems(channels));

  yield put({ type: Symbol(), payload: normalize(channels, [channelSchema]) });
}

function* refetchDataSaga(services) {
  const category = yield select(getCategory);

  yield put(
    goChannels({
      category: category === "" ? "all" : category,
      from: 0,
      to: 20,
    }),
  );
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
    debounce(200, setCost, refetchDataSaga, undefined, services),
    takeEvery(toggleCategory, refetchDataSaga, undefined, services),
    takeEvery(goChannels, fetchDataSaga, undefined, services),
  ]);
}
