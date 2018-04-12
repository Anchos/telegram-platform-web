import { EventEmitter } from 'eventemitter3';
// import { isPromise } from 'helpers';

export const SOCKET_EVENTS = [
  'open',
  'message',
  'error',
  'close',
  'disconnect',
];

class Socket {
  constructor(socket) {
    this.emitter = new EventEmitter();
    this.wrappedListeners = new WeakMap();

    this.pendingSend = [];
    this.pendingRequests = {};
    this.requestId = 0;
    this.requestTimeout = 10000;

    this.bindSocket(socket);
  }

  bindSocket(socket) {
    if (socket) {
      this.socket = socket;

      this.socket.onopen = event => {
        this.emit('open', event);
      };

      this.socket.onmessage = event => {
        this.emit('message', event);
        this.handleMessage(event);
      };

      this.socket.onerror = event => {
        this.emit('error', event);
      };

      this.socket.onclose = event => {
        this.emit('close', event);
        this.emit('disconnect', event);
      };
    }
  }

  send(data) {
    if (this.isConnected()) {
      this.socket.send(data);
    } else {
      this.pendingSend.push(data);
    }
  }

  disconnect(...args) {
    if (this.socket) {
      this.socket.close(...args);
    }
  }

  handleMessage(event) {
    try {
      const data = JSON.parse(event.data);

      this.pendingRequests[data.id].resolve(data);
      clearTimeout(this.pendingRequests[data.id].timer);
      delete this.pendingRequests[data.id];
    } catch (error) {}
  }

  request(data = {}) {
    if (data) {
      this.requestId += 1;

      data.id = this.requestId;

      const request = new Promise((resolve, reject) => {
        const pendingRequest = {
          resolve,
          reject,
        };

        this.pendingRequests[data.id] = pendingRequest;

        // if (this.requestTimeout > 0) {
        //   pendingRequest.timer = setTimeout(() => {
        //     reject(new Error('Request timed out'));

        //     delete this.pendingRequests[data.i];
        //   }, this.requestTimeout);
        // }
      });

      this.send(JSON.stringify(data));

      return request;
    }

    return null;
  }

  abort() {
    Object.keys(this.pendingRequests).forEach(id => {
      this.pendingRequests[id].reject(new Error('Request was aborted'));
    });

    this.pendingRequests = {};
    this.pendingSend = [];
  }

  isConnecting() {
    return this.socket && this.socket.readyState === this.socket.CONNECTING;
  }

  isConnected() {
    return this.socket && this.socket.readyState === this.socket.OPEN;
  }

  on(eventName, listener) {
    this.emitter.on(eventName, listener);

    return this;
  }

  once(eventName, listener) {
    this.emitter.once(eventName, listener);

    return this;
  }

  emit(eventName, ...args) {
    this.emitter.emit(eventName, ...args);

    return this;
  }

  off(eventName, listener) {
    this.emitter.off(eventName, listener);

    return this;
  }
}

export default Socket;
