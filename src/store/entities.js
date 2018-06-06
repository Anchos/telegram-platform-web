import * as R from "ramda";

const isNotNil = R.complement(R.isNil);

export default (state = {}, { payload: { entities } = {} }) => {
  if (isNotNil(entities)) {
    return R.mergeDeepRight(state, entities);
  }

  return state;
};
