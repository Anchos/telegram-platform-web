const initialValues = {
  photo: "",
  title: "",
  username: "",
  verified: false,
  members: 0,
  likes: 0,
  cost: 0,
  category: "",
  description: "",
  language: "",
  views: 0,
  fetching: true,
  error: ''
};

const channelPage = (state = initialValues, action) => {
  switch (action.type) {
    case "CHANNEL_FETCH_REQUESTED":
      return {
        ...state,
        fetching: true,
      };
    case "CHANNEL_FETCH_SUCCESS":
      return {
        ...initialValues,
        ...action.payload,
        fetching: false,
      };
    case "CHANNEL_FETCH_FAIL":
      return {
        ...initialValues,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};

export default channelPage;
