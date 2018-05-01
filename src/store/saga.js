import { all } from "redux-saga/effects";

import { auth } from "./auth/saga";
import { data } from "./data/saga";

export function* saga(services) {
  yield all({
    auth: auth(services),
    data: data(services),
  });
}
