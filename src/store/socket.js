const LSPrevMessageId = "prevMessageId";

function getNextMessageId() {
  if (!localStorage.getItem(LSPrevMessageId)) {
    localStorage.setItem(LSPrevMessageId, 0);
  }

  const prevId = parseInt(localStorage.getItem(LSPrevMessageId), 10);
  const nextId = prevId > 1000 ? 0 : prevId + 1;

  localStorage.setItem(LSPrevMessageId, nextId);

  return prevId;
}

export class Socket {
  messagesQueue = [];
  openQueue = [];
  continuations = new Map();
  subscribers = new Set();
  socketHost = "";
  connectionThrottling = false;

  constructor(SOCKET_HOST) {
    this.socketHost = SOCKET_HOST;
  }

  connect = () => {
    if(this.connectionThrottling)
      return setTimeout(() => this.connect(), 10000);
    this.connectionThrottling = true;
    setTimeout(() => this.connectionThrottling = false, 10000);
    return new Promise((resolve, reject) => {
      this.socket = new WebSocket(this.socketHost);
      this.socket.onmessage = this.handleHandleSocket;
      this.socket.onopen = this.handleOpenSocket;
      this.socket.onerror = reject;
      this.socket.onclose = this.connect;
    });
  };

  onOpen = callback => {
    this.openQueue.push(callback);
  };

  handleOpenSocket = () => {
    this.openQueue.forEach(callback => callback());
    this.messagesQueue.forEach(message => this.send(message));
    this.messagesQueue.length = [];
  };

  handleHandleSocket = event => {
    const message = JSON.parse(event.data);

    if (this.continuations.has(message.id)) {
      if (message.code) this.continuations.get(message.id).reject(message);
      else this.continuations.get(message.id).resolve(message);
      this.continuations.delete(message.id);
    }

    for (const subscriber of this.subscribers) {
      subscriber(message);
    }
  };

  send = message => {
    if (this.isOpen) {
      this.socket.send(JSON.stringify(message));
    } else {
      this.messagesQueue.push(message);
    }
  };

  request = data => {
    const messageId = getNextMessageId();
    const message = { ...data, id: messageId };

    return new Promise((resolve, reject) => {
      this.send(message);
      this.continuations.set(messageId, { reject, resolve });
    });
  };

  subscribe = subscriber => {
    this.subscribers.add(subscriber);
  };

  unsubscribe = subscriber => {
    this.subscribers.delete(subscriber);
  };

  once = isValid =>
    new Promise(resolve => {
      const handler = message => {
        if (isValid(message)) {
          resolve(message);
          this.unsubscribe(handler);
        }
      };

      this.subscribe(handler);
    });

  close = () => this.socket.close();

  get isOpen() {
    return this.socket.readyState === this.socket.OPEN;
  }
}
