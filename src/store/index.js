import { combineReducers } from "redux";

import { user, session } from "./auth";
import { activeCategory, categories, channels, filters } from "./data";

export const reducer = combineReducers({
  activeCategory,
  session,
  user,
  categories,
  channels,
  filters,
});
