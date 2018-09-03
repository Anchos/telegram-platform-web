const initialValues = {
  filters: {
    count: 20,
    offset: 0,
    title: "",
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
  categories: {
    items: [],
    fetching: false
  }
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
    case "CATEGORIES_FETCH_START":
      return {
        ...state,
        categories: {
          ...state.categories,
          fetching: true
        }
      }
    case "CATEGORIES_FETCH_SUCCESS":
      return {
        ...state,
        categories: {
          items: action.payload,
          fetching: true
        }
      }
    default:
      return state;
  }
};

export default mainPageReducer;
