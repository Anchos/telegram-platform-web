import { action, observable, reaction } from 'mobx';

export class ChannelStore {

  app;
  constructor(app) {
    this.app = app;
    reaction(() => [this.app.members, this.app.cost], async (data, reaction) => {
      console.log("data after reaction", data);
      await this.getAll({
        count: 20,
        offset: 0,
        title: '',
        category: '',
        members: [this.app.members, this.app.maxMembers],
        cost: [this.app.cost, this.app.maxCost]
      })
    }, { delay: 500, name: 'somename' })
  }

  @observable channels = [];

  @action.bound
  getAll = async ({ count, offset, title, category, members, cost }) => {
    const data = await this.app.api.getChannels({ count, offset, title, category, members, cost });
    console.log('data at channs', data)
    this.app.maxMembers = data.maxMembers;
    this.app.maxCost = 240000;
    this.channels = data.channels;
  }

}