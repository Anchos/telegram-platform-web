import { combineReducers } from "redux";

import { createField } from "~/store/create-field";

import { setSession, setUser } from "./actions";

export const auth = combineReducers({
  session: createField(null, setSession),
  user: createField(null, setUser),
});
