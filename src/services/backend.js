import { Socket } from "./socket";

export class Backend {
  constructor({ socket, storage }) {
    this.socket = socket;
    this.storage = storage;
  }

  getSession = sessionId =>
    this.socket
      .request({
        action: 'INIT',
        session_id: sessionId
      })
      .then(message => ({
        sessionId: message.session_id,
        connectionId: message.connection_id,
      }));

  getSingleChannel = ({ username } = {}) =>
    this.socket
      .request({
        username,
        action: "FETCH_CHANNEL",
        type: "",
      });

  getChannelsAndCategories = ({ count, offset, title, category, members, cost } = {}) =>
    this.socket
      .request({
        action: "FETCH_CHANNELS",
        count,
        offset,
        members,
        cost,
        ...category.length ? { category } : {},
        ...title.length ? { title } : {},
      })
      .then(message => ({
        channels: message.data.items,
        categories: message.data.categories,
        maxMembers: message.data.max_members,
        total: message.data.total,
      }));

  awaitUser = () =>
    this.socket.once(message => message.action === "AUTH").then(message => ({
      name: message.first_name,
      avatar: message.photo,
    }));
}
