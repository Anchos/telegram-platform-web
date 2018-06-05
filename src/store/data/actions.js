import { createAction } from "redux-act";

export const fetchData = createAction("FETCH_DATA");

export const setCategories = createAction("SET_CATEGORIES");
export const setItems = createAction("SET_ITEMS");

export const setMeta = createAction("SET_META");

export const setQuery = createAction("SET_QUERY");
export const setMembers = createAction("SET_MEMBERS");
export const setCost = createAction("SET_COST");
export const toggleCategory = createAction("TOGGLE_CATEGORY");
