export const initializeConnection = () => ({ type: "INIT_REQUESTED" });

export const setConnection = message => ({
  type: "INIT_SUCCESS",
  payload: { connection_id: message.connection_id },
});

export const requestChannels = () => ({type: "CHANNELS_FETCH_REQUESTED"});

export const setChannels = message => ({type: "CHANNELS_FETCH_SUCCESS", payload: message.data});
export const setChannelsFilters = filters => ({type: 'CHANNELS_SET_FILTERS', payload: filters});

export const setSearchChannels = message => ({type: "SEARCH_CHANNELS_FETCH_SUCCESS", payload: message.data});
export const setSearchChannelsFilters = filters => ({type: 'SEARCH_CHANNELS_SET_FILTERS', payload: filters});

export const setSearchBots = message => ({type: "SEARCH_BOTS_FETCH_SUCCESS", payload: message.data});
export const setSearchBotsFilters = filters => ({type: 'SEARCH_BOTS_SET_FILTERS', payload: filters});

export const setSearchStickers = message => ({type: "SEARCH_STICKERS_FETCH_SUCCESS", payload: message.data});
export const setSearchStickersFilters = filters => ({type: 'SEARCH_STICKERS_SET_FILTERS', payload: filters});

export const requestChannel = username => ({type: 'CHANNEL_FETCH_START', username});
export const setChannel = message => ({type: "CHANNEL_FETCH_SUCCESS", payload: message.data});
