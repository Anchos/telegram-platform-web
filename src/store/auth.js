import { createReducer, createAction } from "redux-act";

// =======================
// Actions

export const justSetSession = createAction();
export const justRemoveSession = createAction();
export const justSetUser = createAction();
export const justRemoveUser = createAction();

// =======================
// Reducers

export const session = createReducer({}, null)
  .on(justSetSession, (_, { sessionId, connectionId }) => ({ sessionId, connectionId }))
  .on(justRemoveSession, () => null);

export const user = createReducer({}, null)
  .on(justSetUser, (_, user) => user)
  .on(justRemoveUser, () => null);

// =======================
// Selectors

export const getIsAuthPopupVisible = state => state.isAuthPopupVisible;
export const getSession = state => state.session;
export const getUser = state => state.user;

// =======================
// Logic

export function showAuthPopup({ sessionId, connectionId }) {
  return (dispatch, getState, { authPopup }) => {
    authPopup.open({ sessionId, connectionId });
  };
}

const setSession = ({ sessionId, connectionId }) => (dispatch, getState, { storage }) => {
  storage.setSessionId(sessionId);
  dispatch(justSetSession({ sessionId, connectionId }));
};

const setUser = user => (dispatch, getState, { storage }) => {
  storage.setUser(user);
  dispatch(justSetUser(user));
};

export const auth = () => (dispatch, getState, { backend, storage, authPopup }) => {
  const prevSessionId = storage.getSessionId();

  backend.request({ action: "INIT", session_id: prevSessionId }).then(message => {
    const newSessionId = message.session_id;

    dispatch(
      setSession({
        sessionId: newSessionId,
        connectionId: message.connection_id,
      }),
    );

    const user = storage.getUser();
    if (user && prevSessionId === newSessionId) {
      return dispatch(justSetUser(user));
    }

    backend.once("AUTH", message => {
      const user = {
        name: message.first_name,
        avatar: message.avatar,
      };

      authPopup.hide();
      dispatch(setUser(user));
    });
  });
};

export const logout = () => (dispatch, getState, { storage }) => {
  storage.removeUser();
  storage.removeSessionId();
  dispatch(removeSession());
  dispatch(removeUser());
  dispatch(auth());
};
