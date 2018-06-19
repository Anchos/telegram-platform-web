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
  @observable maxCost = 1;
  @observable toCost = 1;
  @observable maxMembers = 1;
  @observable toMembers = 1;
  @observable showPartners = false;
  @observable count = 20;
  @observable categories = [
    'Work', 'Telegram', 'Web', 'Programming', 'Anime', '3D', '2D', '4D', 'Miku Miku Dance', 'Coding', 'Testing', 'Gurren', 'Lagann',
    'Noragami', 'Naruto', 'Sasuke', 'Bleach', 'Row', 'Fight', 'The', 'Power'
  ];

  init = async () => {
    const prevSessionId = this.storage.getSessionId();
    console.log('has old session id', prevSessionId)
    const { sessionId } = await this.api.getSession(prevSessionId || '');
    console.log('new session id', sessionId);
    this.storage.setSessionId(sessionId);
  }

}