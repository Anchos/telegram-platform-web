import * as R from "ramda";
import { createSelector } from "reselect";
import { denormalize } from "normalizr";
import { getEntities } from "src/selectors/entities";
import channelSchema from "src/schema/channel";

export function makeGetChannelByName() {
  return createSelector(
    getEntities,
    (_, { username }) => username,
    (entities, username) => {
      if (R.isNil(username)) {
        return;
      }

      return denormalize(username, channelSchema, entities);
    },
  );
}
