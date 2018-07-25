const initialValues = {
  logged_in: false,
  socket_host: "",
  connection_id: "",
};

const connectionReducer = (state = initialValues, action) => {
  switch (action.type) {
    case "INIT_SUCCESS":
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default connectionReducer;
