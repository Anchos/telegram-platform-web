export const initializeConnection = () => ({ type: "INIT_REQUESTED" });

export const authorize = data => ({type: 'AUTH', payload: data});
export const requestLogout = () => ({type: 'LOGOUT_REQUESTED'});
export const setLogout = () => ({type: 'LOGOUT_SUCCESS'});

export const setConnection = message => ({
  type: "INIT_SUCCESS",
  payload: { connection_id: message.connection_id },
});

export const requestChannels = category => ({type: "CHANNELS_FETCH_REQUESTED", payload: category});

export const requestCategories = () => ({type: 'CATEGORIES_FETCH_REQUESTED'});
export const setCategories = items => ({type: 'CATEGORIES_FETCH_SUCCESS', payload: items})

export const setChannels = message => ({type: "CHANNELS_FETCH_SUCCESS", payload: message.data});
export const setChannelsFilters = filters => ({type: 'CHANNELS_SET_FILTERS', payload: filters});

export const setSearchChannels = message => ({type: "SEARCH_CHANNELS_FETCH_SUCCESS", payload: message.data});
export const setSearchChannelsFilters = filters => ({type: 'SEARCH_CHANNELS_SET_FILTERS', payload: filters});

export const setSearchBots = message => ({type: "SEARCH_BOTS_FETCH_SUCCESS", payload: message.data});
export const setSearchBotsFilters = filters => ({type: 'SEARCH_BOTS_SET_FILTERS', payload: filters});

export const setSearchStickers = message => ({type: "SEARCH_STICKERS_FETCH_SUCCESS", payload: message.data});
export const setSearchStickersFilters = filters => ({type: 'SEARCH_STICKERS_SET_FILTERS', payload: filters});

export const requestChannel = username => ({type: 'CHANNEL_FETCH_REQUESTED', username});
export const setChannel = data => ({type: "CHANNEL_FETCH_SUCCESS", payload: data});
export const setChannelRequestError = error => ({type: "CHANNEL_FETCH_FAIL", payload: error});

export const requestUpdateChannel = username => ({type: 'UPDATE_CHANNEL_REQUEST', username});
export const setUpdateChannelSuccess = () => ({type: 'UPDATE_CHANNEL_SUCCESS'});
export const setUpdateChannelError = error => ({type: 'UPDATE_CHANNEL_FAIL', payload: error});
export const resetSuggestion = () => ({type: 'UPDATE_CHANNEL_RESET'});