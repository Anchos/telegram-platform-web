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
        ...action.payload,
        fetching: true,
      };
    default:
      return state;
  }
};

export default channelPage;
