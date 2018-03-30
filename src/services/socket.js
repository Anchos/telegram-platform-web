/**
 * Wrapper concept
 */

import { EventEmitter } from 'events';

export const OPEN = 'OPEN';
export const ERROR = 'ERROR';
export const CLOSE = 'CLOSE';

class Socket {
  constructor(url) {
    this.socket = new WebSocket(url);
    this.emitter = new EventEmitter();

    this.registerBaseListeners();
  }

  registerBaseListeners() {
    this.socket.onmessage = event => {
      const message = JSON.parse(event.data);

      this.emitter.emit(message.type, message.data);
    };

    this.socket.onopen = event => {
      this.emitter.emit(OPEN, event);
    };

    this.socket.onerror = event => {
      this.emitter.emit(ERROR, event);
    };

    this.socket.onclose = event => {
      this.emitter.emit(CLOSE, event);
    };
  }

  emit(eventName, data) {
    this.socket.send(
      JSON.stringify({
        type: eventName,
        data,
      }),
    );
  }

  close(code, reason) {
    this.socket.close(code, reason);
  }

  on(eventName, listener) {
    this.emitter.addListener(eventName, listener);
  }

  off(eventName, listener) {
    this.emitter.removeListener(eventName, listener);
  }
}

export default Socket;
