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
        members: [0, this.app.toMembers || 0],
        cost: [0, this.app.toCost || 0]
      }, false)
    }, { delay: 500 })
  }

  @observable channels = [];

  @observable id = -1;
  @observable description = '';
  @observable photo = '';
  @observable members = 0;
  @observable membersGrowth = 0;
  @observable cost = 0;
  @observable category = '';
  @observable language = '';
  @observable verified = false;
  @observable vip = false;
  @observable views = 0;
  @observable viewsGrowth = 0;
  @observable telegramId = null;
  @observable title = '';
  @observable username = '';

  @action.bound
  confirmOwner = async () => {
    alert('Тусуйся бля')
  }

  @action.bound
  getAll = async ({ count, offset, title, category, members, cost }, initMaxValues = true) => {
    const data = await this.app.api.getChannelsAndCategories({ count, offset, title, category, members, cost });
    console.log('data at channs', data)
    this.app.maxMembers = data.maxMembers;
    this.app.maxCost = 240000;
    if (initMaxValues) {
      this.app.toMembers = data.maxMembers;
      this.app.toCost = 240000;
    }
    console.log('set max members', this.app.maxMembers)
    this.channels = data.channels;
    this.app.categories = data.categories;
  }

  getChannelInfo = async ({ username }) => {
    const channel = await this.app.api.getSingleChannel({ username: '@' + username });
    console.log('single channel info', channel);
    const {
      id,
      description,
      photo,
      members,
      members_growth: membersGrowth,
      cost,
      category,
      language,
      verified,
      vip,
      views,
      views_growth: viewsGrowth,
      telegram_id,
      title
    } = channel.data;
    this.id = id;
    this.description = description;
    this.photo = photo;
    this.members = members;
    this.membersGrowth = membersGrowth;
    this.cost = cost;
    this.category = category;
    this.language = language;
    this.verified = verified;
    this.vip = vip;
    this.views = views;
    this.viewsGrowth = viewsGrowth;
    this.telegram_id = telegram_id;
    this.title = title;
    this.username = channel.username;

  }

}