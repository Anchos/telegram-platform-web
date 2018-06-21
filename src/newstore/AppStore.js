import { observable, reaction } from 'mobx';
import { Socket } from "../services/socket";
import { Storage } from "../services/storage";
import { Backend } from "../services/backend";

export class AppStore {

  socket;
  api;
  storage;
  constructor(HOST) {
    console.log("host at constructor in app store", HOST);
    this.SOCKET_HOST = HOST;
    this.socket = new Socket(HOST);
    this.storage = new Storage();
    this.api = new Backend({ socket: this.socket, storage: this.storage })
    this.init();
  }

  @observable loggedIn = false;
  @observable SOCKET_HOST = '';
  @observable maxCost = 0;
  @observable toCost = 0;
  @observable maxMembers = 0;
  @observable toMembers = 0;
  @observable showPartners = false;
  @observable count = 20;
  @observable categories = [];

  init = async () => {
    const prevSessionId = this.storage.getSessionId();
    console.log('has old session id', prevSessionId)
    const { sessionId } = await this.api.getSession(prevSessionId || '');
    console.log('new session id', sessionId);
    this.storage.setSessionId(sessionId);
  }

}