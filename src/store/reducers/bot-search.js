const initialValues = {
  filters: {
    count: 20,
    offset: 0,
    installs: [0, 100000],
    title: ''
  },
  bots: {
    items: [],
    fetching: false
  },
};

const botSearch = (state = initialValues, action) => {
  switch (action.type) {
    case "SEARCH_BOTS_FETCH_REQUESTED":
      return {
        ...state,
        bots: {
          ...state.bots,
          fetching: true,
        },
      };
    case "SEARCH_BOTS_FETCH_SUCCESS":
      return {
        ...state,
        bots: {
          ...action.payload,
          fetching: false,
        },
      };
    case "SEARCH_BOTS_SET_FILTERS":
      return {
        ...state,
        filters: action.payload
      };
    default:
      return state;
  }
};

export default botSearch;
