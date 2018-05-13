import { combineReducers } from "redux";
import { createReducer } from "redux-act";

import { goChannel, goChannels } from "./actions";

export const PAGE_CHANNELS = Symbol();
export const PAGE_CHANNEL = Symbol();

const page = createReducer({}, PAGE_CHANNELS)
  .on(goChannel, () => PAGE_CHANNEL)
  .on(goChannels, () => PAGE_CHANNELS);

export const route = combineReducers({
  page,
});
