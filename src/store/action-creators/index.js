export const initializeConnection = () => ({ type: "INIT_REQUESTED" });

export const setConnection = message => ({
  type: "INIT_SUCCESS",
  payload: { connection_id: message.connection_id },
});

export const requestChannels = () => ({type: "CHANNELS_FETCH_REQUESTED"});

export const setChannels = message => ({type: "CHANNELS_FETCH_SUCCESS", payload: message.data});

export const setSearchChannels = message => ({type: "SEARCH_CHANNELS_FETCH_SUCCESS", payload: message.data});

export const setChannelsFilters = filters => ({type: 'CHANNELS_SET_FILTERS', payload: filters});

export const setSearchChannelsFilters = filters => ({type: 'SEARCH_CHANNELS_SET_FILTERS', payload: filters});
