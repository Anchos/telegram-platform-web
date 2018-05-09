import { combineReducers } from "redux";
import { createReducer } from "redux-act";

import { createField } from "~/store/create-field";

import {
  setItems,
  setCategories,
  setMembers,
  setQuery,
  toggleCategory,
  setMeta,
  setPage,
  prevPage,
  nextPage,
  setAdvertisingCost,
} from './actions'

// prettier-ignore
const category = createReducer({}, "")
  .on(toggleCategory, (state, name) => state === name ? "" : name);

const page = createField(0, setPage)
  .on(prevPage, page => page - 1)
  .on(nextPage, page => page + 1);

export const data = combineReducers({
  categories: createField([], setCategories),
  items: createField([], setItems),
  page,
  meta: createField({ totalChannels: 0, maxMembers: Infinity, maxAdvertisingCost: Infinity }, setMeta),
  filters: combineReducers({
    query: createField("", setQuery),
    members: createField({ min: 0, max: null }, setMembers),
    advertisingCost: createField({min: 0, max: null}, setAdvertisingCost),
    category,
  }),
});
