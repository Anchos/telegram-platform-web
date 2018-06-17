import { AppStore } from "./AppStore";
import { observable } from 'mobx';
import { ChannelStore } from "./ChannelStore";

export const createStores = () => {
  const app = new AppStore('wss://ws.recursion.ga/client');
  const channelsStore = new ChannelStore(app);

  const s = observable({
    app,
    channelsStore
  });

  return s;
}