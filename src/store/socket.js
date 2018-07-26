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
  continuations = new Map();
  subscribers = new Set();

  constructor(SOCKET_HOST) {
    this.socket = new WebSocket(SOCKET_HOST);
    this.socket.onopen = this.handleOpenSocket;
    this.socket.onmessage = this.handleHandleSocket;
  }

  handleOpenSocket = event => {
    for (const message of this.messagesQueue) {
      this.send(message);
    }
  };

  handleHandleSocket = event => {
    const message = JSON.parse(event.data);

    if (this.continuations.has(message.id)) {
      this.continuations.get(message.id).resolve(message);
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
