import { combineReducers } from "redux";

import { auth } from "./auth/reducer";
import { data } from "./data/reducer";

export const reducer = combineReducers({
  auth,
  data,
});
