import { combineReducers } from "redux";
import { createReducer } from "redux-act";

import { createField } from "src/store/create-field";

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
  setCost,
} from "./actions";

import { goChannels } from "../route/actions";

const initialFilters = {
  query: "",
  members: { min: 0, max: null },
  cost: { min: 0, max: null },
  category: "",
  from: 0,
  to: 0,
};

const filters = createReducer({}, initialFilters)
  .on(setQuery, (state, query) => ({ ...state, query }))
  .on(setMembers, (state, members) => ({ ...state, members }))
  .on(setCost, (state, cost) => ({ ...state, cost }))
  .on(toggleCategory, (state, category) => ({
    ...state,
    category: state.category === category ? "" : category,
  }))
  .on(goChannels, (state, { from, to, category }) => ({
    ...state,
    from,
    to,
    category: category === "all" ? "" : category,
  }));

export const data = combineReducers({
  categories: createField([], setCategories),
  items: createField([], setItems),
  meta: createField({ total: 0, maxMembers: Infinity, maxCost: Infinity }, setMeta),
  filters,
});
