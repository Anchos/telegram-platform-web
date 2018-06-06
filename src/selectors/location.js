import * as R from "ramda";

export function getLocationPayload(state = {}) {
  return R.path(["location", "payload"], state);
}
