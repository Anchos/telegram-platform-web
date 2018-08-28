const initialValues = {
  error: '',
  fetching: false
};

const channelSuggest = (state = initialValues, action) => {
  switch (action.type) {
    case "UPDATE_CHANNEL_REQUEST":
      return {
        ...state,
        fetching: true,
      };
    case "UPDATE_CHANNEL_SUCCESS":
      return {
        ...initialValues,
        fetching: false,
      };
    case "UPDATE_CHANNEL_FAIL":
      return {
        ...initialValues,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};

export default channelSuggest;
