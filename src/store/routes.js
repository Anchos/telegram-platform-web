import { connectRoutes } from "redux-first-router";
import { createAction } from "redux-act";
import createHistory from "history/createBrowserHistory";

import { goChannel, goChannels } from "~/store/route/actions";

export const routesMap = {
  [createAction()]: {
    path: "/",
    thunk: dispatch =>
      dispatch(
        goChannels({
          category: "all",
          from: 0,
          to: 20,
        }),
      ),
  },

  [goChannel]: "/channels/@:name",

  [goChannels]: "/channels/:category/:from-:to",

  [createAction()]: {
    path: "/channels",
    thunk: dispatch =>
      dispatch(
        goChannels({
          category: "all",
          from: 0,
          to: 20,
        }),
      ),
  },

  [createAction()]: {
    path: "/channels/:category",
    thunk: (dispatch, getState) =>
      dispatch(
        goChannels({
          category: getState().location.payload.category,
          from: 0,
          to: 20,
        }),
      ),
  },
};

const history = createHistory();

export const { reducer: location, middleware, enhancer } = connectRoutes(history, routesMap);
