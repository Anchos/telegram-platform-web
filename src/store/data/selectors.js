import { createSelector } from "reselect";

export const getCategories = state => state.data.categories;
export const getItems = state => state.data.items;
export const getFilters = state => state.data.filters;
export const getMeta = state => state.data.meta;
export const getPage = state => state.data.page;

export const getTotalChannels = createSelector(getMeta, meta => meta.totalChannels);
export const getMaxMembers = createSelector(getMeta, meta => meta.maxMembers);

export const getQuery = createSelector(getFilters, filters => filters.query);
export const getCategory = createSelector(getFilters, filters => filters.category);
export const getMembers = createSelector([getFilters, getMaxMembers], (filters, maxMembers) => {
  if (filters.members.max != null) return filters.members;
  return { min: filters.members.min, max: maxMembers };
});

export const getPageSize = () => 10;

export const getIsTherePrevPage = createSelector(getPage, page => page > 0);
export const getIsThereNextPage = createSelector(
  [getPage, getMeta, getPageSize],
  (page, meta, pageSize) => (page + 1) * pageSize < meta.totalChannels,
);
