import { createAction } from "redux-act";

export const fetchData = createAction();

export const setCategories = createAction();
export const setItems = createAction();

export const setMeta = createAction();

export const setQuery = createAction();
export const setMembers = createAction();
export const toggleCategory = createAction();

export const setPage = createAction();
export const nextPage = createAction();
export const prevPage = createAction();
