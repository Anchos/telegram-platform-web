import { Socket } from "./socket";

export const socket = new Socket("wss://ws.recursion.ga/client");

export const getSession = session_id =>
  socket.request({
    action: "INIT",
    session_id,
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

export const getChannelsAndCategories = params => {
  const { category, title, ...rest } = params;
  if (category) rest.category = category;
  if (title) rest.title = title;
  return socket.request({
    action: "FETCH_CHANNELS",
    ...rest,
  });
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

export const awaitUser = () =>
  socket.once(message => message.action === "AUTH").then(message => ({
    name: message.first_name,
    avatar: message.photo,
  }));

// to be used only in "componentWillUnmount" of App component; reason: not bound to redux store, not being handled anywhere
export const closeConnection = () => socket.close();
