import { Socket } from "./socket";

export const socket = new Socket(process.env.SOCKET_ENDPOINT);
socket.connect();

export const getSession = session_id =>
  socket.request({
    action: "INIT",
    session_id,
  });

export const logout = () =>
  socket.request({
    action: "LOGOUT",
  });

export const getSingleChannel = username =>
  socket
    .request({
      username,
      action: "FETCH_CHANNEL",
    })
    .then(message => ({
      ...message.data,
    }));

export const getChannels = params => {
  const { category, title, ...rest } = params;
  if (category) rest.category = category;
  if (title) rest.title = title;
  return socket.request({
    action: "FETCH_CHANNELS",
    ...rest,
  });
};

export const getCategories = () => {
  return socket
    .request({
      action: "GET_CATEGORIES",
    })
    .then(message => ({
      ...message.items,
    }));
};

export const verifyChannel = username =>
  socket
    .request({
      action: "VERIFY_CHANNEL",
      username,
    })
    .then(message => ({
      ...message.data,
    }));

export const ping = () =>
  socket
    .request({
      action: "ping",
    })
    .then(message => ({
      ...message.data,
    }));

export const getTags = (name, language) =>
  socket
    .request({
      action: "GET_TAGS",
      name,
      language
    })
    .then(message => ({
      ...message.data,
    }));

export const updateChannel = username =>
  socket
    .request({
      action: "UPDATE_CHANNEL",
      username,
    })
    .then(message => ({
      ...message.data,
    }));

export const likeChannel = username =>
  socket
    .request({
      action: "LIKE_CHANNEL",
      username,
    })
    .then(message => ({
      ...message.data,
    }));

// to be used only in "componentWillUnmount" of App component; reason: not bound to redux store, not being handled anywhere
export const closeConnection = () => socket.close();
