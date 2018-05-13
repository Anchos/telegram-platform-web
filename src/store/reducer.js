import { combineReducers } from "redux";

import { auth } from "./auth/reducer";
import { data } from "./data/reducer";
import { route } from "./route/reducer";
import { location } from "./routes";

export const reducer = combineReducers({
  auth,
  data,
  route,
  location,
});
