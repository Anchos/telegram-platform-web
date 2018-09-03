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
  error: null,
  verifying: false,
  verificationError: null,
  verificationConfirmed: false
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
    case "CHANNEL_VERIFICATION_REQUESTED":
      return {
        ...state,
        verifying: true,
      }
    case "CHANNEL_VERIFICATION_SUCCESS":
      return {
        ...state,
        verifying: false,
        verificationError: null,
        verificationConfirmed: true
      }
    case "CHANNEL_VERIFICATION_FAIL":
      return {
        ...state,
        verifying: false,
        verificationConfirmed: false,
        verificationError: action.payload
      }

    default:
      return state;
  }
};

export default channelPage;
