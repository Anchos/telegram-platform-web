const initialValues = {
  logged_in: false,
  socket_host: "",
  connection_id: "",
  fetching: false,
};

const connectionReducer = (state = initialValues, action) => {
  switch (action.type) {
    case "INIT_REQUESTED":
      return {
        ...state,
        fetching: true,
      };
    case "INIT_SUCCESS":
      return {
        ...state,
        ...action.payload,
        fetching: false
      };
    default:
      return state;
  }
};

export default connectionReducer;
