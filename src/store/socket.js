const localStorageMessageKey = "socket:lastMessageId";

function getNextMessageId() {
  if (!localStorage.getItem(localStorageMessageKey)) {
    localStorage.setItem(localStorageMessageKey, 0);
    return 0;
  }

  const prevId = parseInt(localStorage.getItem(localStorageMessageKey), 10);
  const nextId = prevId < 1000 ? prevId + 1 : 0;

  localStorage.setItem(localStorageMessageKey, nextId);

  return nextId;
}

export class Socket {
  //messages sent before the socket was opened
  messagesQueue = [];
  //map that matches sent messages with received using their ids
  unansweredMessages = new Map();
  //socket's "onmessage" subscribers
  onMessageSubscribers = new Set();
  //socket's "onopen" subscribers
  onOpenSubscribers = [];
  //host set in constructor
  socketHost = "";

  //how often should client ping server to avoid idle socket timeout
  pingInterval = 50000;
  //how often socket should try to reconnect
  connectionThrottlingTimeout = 10000;
  throttlingConnection = false;
  connectionQueue = false;

  constructor(socketHost) {
    this.socketHost = socketHost;
  }

  connect = () => {
    if (this.throttlingConnection) return (this.connectionQueue = true);

    this.throttlingConnection = true;
    this.connectionQueue = false;

    this.socket = new WebSocket(this.socketHost);
    this.socket.onmessage = this.__handleIncomingMessage;
    this.socket.onopen = this.__handleOpenSocket;
    this.socket.onclose = this.connect;

    setTimeout(() => {
      this.throttlingConnection = false;
      if (this.connectionQueue) this.connect();
    }, this.connectionThrottlingTimeout);
  };

  request = data => {
    const messageId = getNextMessageId();
    const message = { ...data, id: messageId };

    return new Promise((resolve, reject) => {
      this.__send(message);
      this.unansweredMessages.set(messageId, { reject, resolve });
    });
  };

  close = () => {
    this.messagesQueue.length = 0;
    this.unansweredMessages.clear();
    this.socket.close();
  };

  onOpen = callback => {
    this.onOpenSubscribers.push(callback);
  };

  onMessage = subscriber => {
    this.onMessageSubscribers.add(subscriber);
  };

  unsubscribe = subscriber => {
    this.onMessageSubscribers.delete(subscriber);
  };

  get isOpen() {
    return this.socket.readyState === 1;
  }

  __handleOpenSocket = () => {
    this.onOpenSubscribers.forEach(callback => callback());
    this.messagesQueue.forEach(message => this.request(message));
    this.messagesQueue.length = [];
    setInterval(() => this.request({ action: "PING" }), this.pingInterval);
  };

  __handleIncomingMessage = event => {
    const message = JSON.parse(event.data);

    if (message.id !== undefined && this.unansweredMessages.has(message.id)) {
      if (message.code) this.unansweredMessages.get(message.id).reject(message);
      else this.unansweredMessages.get(message.id).resolve(message);
      this.unansweredMessages.delete(message.id);
    }

    for (const subscriber of this.onMessageSubscribers) {
      subscriber(message);
    }
  };

  __send = message => {
    if (this.isOpen) {
      this.socket.send(JSON.stringify(message));
    } else {
      this.messagesQueue.push(message);
    }
  };
}
