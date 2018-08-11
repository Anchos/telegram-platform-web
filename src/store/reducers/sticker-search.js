const initialValues = {
  filters: {
    count: 20,
    offset: 0,
    installs: [0, 100000],
    title: ''
  },
  stickers: {
    items: [],
    fetching: false
  },
};

const stickerSearch = (state = initialValues, action) => {
  switch (action.type) {
    case "SEARCH_STICKERS_FETCH_REQUESTED":
      return {
        ...state,
        stickers: {
          ...state.stickers,
          fetching: true,
        },
      };
    case "SEARCH_STICKERS_FETCH_SUCCESS":
      return {
        ...state,
        stickers: {
          ...action.payload,
          fetching: false,
        },
      };
    case "SEARCH_STICKERS_SET_FILTERS":
      return {
        ...state,
        filters: action.payload,
        stickers: {
          ...state.stickers,
          fetching: true,
        },
      };
    default:
      return state;
  }
};

export default stickerSearch;
