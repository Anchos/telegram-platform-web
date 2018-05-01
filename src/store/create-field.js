import { createReducer } from "redux-act";

export const createField = (defaultValue, setter) =>
  createReducer({}, defaultValue).on(setter, (_, value) => value);
