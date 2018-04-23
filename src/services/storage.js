export class Storage {
  getFromStore(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (_) {}
  }

  setToStore(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getSessionId() {
    return this.getFromStore("sessionId");
  }

  setSessionId(session) {
    this.setToStore("sessionId", session);
  }

  removeSessionId() {
    this.setSessionId(undefined);
  }

  getUser() {
    return this.getFromStore("user");
  }

  setUser(user) {
    this.setToStore("user", user);
  }

  removeUser() {
    this.setUser(undefined);
  }
}
