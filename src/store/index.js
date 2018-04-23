import { combineReducers } from "redux";

import { user, session } from "./auth";
import { activeCategory, categories, channels } from "./data";

export const reducer = combineReducers({
  activeCategory,
  session,
  user,
  categories,
  channels,
});
