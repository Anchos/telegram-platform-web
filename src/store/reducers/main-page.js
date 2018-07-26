const initialValues = {
  filters: {
    count: 20,
    offset: 0,
    title: "",
    category: "",
    members: [0, 10000000],
    cost: [0, 100000],
    likes: [0, 1000000],
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

const mainPageReducer = (state = initialValues, action) => {
  switch (action.type) {
    case "CHANNELS_FETCH_REQUESTED":
      return {
        ...state,
        channels: {
          ...state.channels,
          fetching: true,
        },
      };
    case "CHANNELS_FETCH_SUCCESS":
      return {
        ...state,
        channels: {
          ...action.payload,
          fetching: false,
        },
      };
    case "CHANNELS_SET_FILTERS":
      return {
        ...state,
        filters: action.payload
      };
    default:
      return state;
  }
};

export default mainPageReducer;
