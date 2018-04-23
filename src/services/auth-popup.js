function telegramURL({ sessionId, connectionId }) {
  return `https://t.me/medev_bot?start=${sessionId}_${connectionId}`;
}

export class AuthPopup {
  popup = null;

  open({ sessionId, connectionId }) {
    this.hide();

    const url = telegramURL({ sessionId, connectionId });
    this.popup = window.open(url, "", "");
  }

  hide() {
    this.popup && this.popup.close();
  }
}
