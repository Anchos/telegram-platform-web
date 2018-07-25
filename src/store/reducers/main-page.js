const initialValues = {
  filters: {
    category: "",
    subscribers: [0, 10000000],
    price: [0, 100000],
    partners: false,
    verified: false,
    mutual_promotion: false,
    sort: "followers",
    sort_order: "desc",
  },
  channels: {
    categories: [],
    items: [],
  },
};

const mainPageReducer = (state = initialValues, action) => {
  switch (action.type) {
    case "FETCH_CHANNELS_SUCCESS":
      return {
        ...state,
        channels: {
          categories: action.payload.categories,
          items: action.payload.items,
        },
      };
    default:
      return state;
  }
};

export default mainPageReducer;
