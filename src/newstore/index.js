import { AppStore } from "./AppStore";
import { observable } from 'mobx';

export const createStores = () => {
  const app = new AppStore('wss://ws.recursion.ga/client');

  const s = observable({
    app,
  });

  return s;
}