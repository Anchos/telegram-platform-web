const initialValues = {
  filters: {
    count: 20,
    offset: 0,
    title: "",
    category: "",
    members: [0, 10000],
    cost: [0, 10000],
    likes: [0, 10000],
  },
  channels: {
    items: [],
    categories: [],
    total: 0,
    max_members: 0,
    max_cost: 0,
    max_likes: 0,
    fetching: false,
  },
};

const channelSearch = (state = initialValues, action) => {
  switch (action.type) {
    case "SEARCH_CHANNELS_FETCH_REQUESTED":
      return {
        ...state,
        channels: {
          ...state.channels,
          fetching: true,
        },
      };
    case "SEARCH_CHANNELS_FETCH_SUCCESS":
      return {
        ...state,
        channels: {
          ...action.payload,
          fetching: false,
        },
      };
    case "SEARCH_CHANNELS_SET_FILTERS":
      return {
        ...state,
        filters: action.payload,
        channels: {
          ...state.channels,
          fetching: true,
        },
      };
    default:
      return state;
  }
};

export default channelSearch;
