import { Socket } from "./socket";

const socket = new Socket("wss://ws.recursion.ga/client");

export const getSession = sessionId =>
  socket
    .request({
      action: "INIT",
      session_id: sessionId,
    })
    .then(message => ({
      sessionId: message.session_id,
      connectionId: message.connection_id,
    }));

export const getSingleChannel = ({ username } = {}) =>
  socket.request({
    username,
    action: "FETCH_CHANNEL",
    type: "",
  });

export const getChannelsAndCategories = ({ count, offset, title, category, members, cost } = {}) =>
  socket
    .request({
      action: "FETCH_CHANNELS",
      count,
      offset,
      members,
      cost,
      ...(category ? { category } : {}),
      ...(title ? { title } : {}),
    })
    .then(message => ({
      channels: message.data.items,
      categories: message.data.categories,
      maxMembers: message.data.max_members,
      total: message.data.total,
    }));

export const awaitUser = () =>
  socket.once(message => message.action === "AUTH").then(message => ({
    name: message.first_name,
    avatar: message.photo,
  }));
