import { createAction } from "redux-act";

export const setSession = createAction("SET_SESSION");
export const setUser = createAction("SET_USER");

export const login = createAction("LOGIN");
export const logout = createAction("LOGOUT");
