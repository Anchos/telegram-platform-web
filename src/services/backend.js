import { Socket } from "./socket";

export class Backend {
  constructor({ socket, storage }) {
    this.socket = socket;
    this.storage = storage;
  }

  getSession = sessionId =>
    this.socket
      .request({ action: "INIT", type: "SESSION", session_id: sessionId })
      .then(message => ({
        sessionId: message.session_id,
        connectionId: message.connection_id,
      }));

  getChannels = ({ count, offset, name, category, members, advertisingCost } = {}) =>
    this.socket
      .request({ action: "FETCH", type: "CHANNELS", count, offset, name, category, members, advertisingCost })
      .then(message => ({
        channels: message.data.channels,
        categories: message.data.categories,
        maxMembers: message.data.max_members,
        totalChannels: message.data.total_channels,
      }));

  awaitUser = () =>
    this.socket.once(message => message.action === "AUTH").then(message => ({
      name: message.first_name,
      avatar: message.photo,
    }));
}
