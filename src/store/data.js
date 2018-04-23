import { combineReducers } from "redux";
import { createAction, createReducer } from "redux-act";
import { countBy, pipe, toPairs, map } from "ramda";
import { createSelector } from "reselect";

// =======================
// Actions

export const fetchDataRequest = createAction();
export const fetchDataSuccess = createAction();
export const toggleCategory = createAction();
export const setQuery = createAction();
export const setSubsRange = createAction();

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

// prettier-ignore
const query = createReducer({}, "")
  .on(setQuery, (_, query) => query);

// prettier-ignore
const subsRange = createReducer({}, { min: 0, max: null })
  .on(setSubsRange, (_, range) => range);

export const filters = combineReducers({
  query,
  subsRange,
});

// =======================
// Selectors

export const getCategories = state => state.categories;
export const getActiveCategory = state => state.activeCategory;
export const getChannels = state => state.channels;
export const getFilters = state => state.filters;

export const getQuery = createSelector(getFilters, filters => filters.query.toLowerCase());
export const getJustSubsRange = createSelector(getFilters, filters => filters.subsRange);

export const getActiveChannels = createSelector(
  [getActiveCategory, getChannels],
  (activeCategory, channels) => {
    if (!activeCategory) return channels;
    return channels.filter(channel => channel.category === activeCategory);
  },
);

// prettier-ignore
export const getMaxSubsRange = createSelector(
  [getActiveChannels],
  channels => Math.max(...channels.map(channel => channel.members)),
);

export const getSubsRange = createSelector(
  [getJustSubsRange, getMaxSubsRange],
  ({ min, max }, defaultMax) => ({ min, max: max === null ? defaultMax : max }),
);

export const getActiveFilteredChannels = createSelector(
  [getActiveChannels, getQuery, getSubsRange],
  (channels, query, subsRange) =>
    channels
      .filter(
        channel =>
          channel.name.toLowerCase().includes(query) || channel.link.toLowerCase().includes(query),
      )
      .filter(channel => channel.members >= subsRange.min)
      .filter(channel => channel.members <= subsRange.max),
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
