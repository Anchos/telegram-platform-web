import { createAction, createReducer } from "redux-act";
import { countBy, pipe, toPairs, map } from "ramda";
import { createSelector } from "reselect";

// =======================
// Actions

export const fetchDataRequest = createAction();
export const fetchDataSuccess = createAction();
export const toggleCategory = createAction();

// =======================
// Reducers

// prettier-ignore
export const activeCategory = createReducer({}, null)
  .on(toggleCategory, (state, name) => state === name ? null : name);

const getCategoriesFromChannels = pipe(
  countBy(channel => channel.category),
  toPairs,
  map(([name, count]) => ({ name, count })),
);

export const categories = createReducer({}, [])
  .on(fetchDataRequest, () => [])
  .on(fetchDataSuccess, (_, channels) => getCategoriesFromChannels(channels));

export const channels = createReducer({}, [])
  .on(fetchDataRequest, () => [])
  .on(fetchDataSuccess, (_, channels) => channels);

// =======================
// Selectors

export const getCategories = state => state.categories;
export const getActiveCategory = state => state.activeCategory;
export const getChannels = state => state.channels;

export const getActiveChannels = createSelector(
  [getActiveCategory, getChannels],
  (activeCategory, channels) => {
    if (!activeCategory) return channels;
    return channels.filter(channel => channel.category === activeCategory);
  },
);

// =======================
// Logic

export const fetchData = () => (dispatch, getState, { backend }) => {
  dispatch(fetchDataRequest());

  return backend
    .request({ action: "FETCH", type: "CHANNELS" })
    .then(message => message.data.channels)
    .then(channels => dispatch(fetchDataSuccess(channels)));
};
