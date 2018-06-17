import { action, observable, reaction } from 'mobx';

export class ChannelStore {

  app;
  constructor(app) {
    this.app = app;
    reaction(() => [
      this.app.toMembers,
      this.app.toCost,
      this.app.count,
    ], async (data, reaction) => {
      console.log("data after reaction", data);
      await this.getAll({
        count: Number(this.app.count) || 20,
        offset: 0,
        title: '',
        category: '',
        members: [0, this.app.toMembers],
        cost: [0, this.app.toCost]
      }, false)
    }, { delay: 500 })
  }

  @observable channels = [];

  @action.bound
  getAll = async ({ count, offset, title, category, members, cost }, initMaxValues = true) => {
    const data = await this.app.api.getChannels({ count, offset, title, category, members, cost });
    console.log('data at channs', data)
    this.app.maxMembers = data.maxMembers;
    this.app.maxCost = 240000;
    if (initMaxValues) {
      this.app.toMembers = data.maxMembers;
      this.app.toCost = 240000;
    }
    console.log('set max members', this.app.maxMembers)
    this.channels = data.channels;
  }

}