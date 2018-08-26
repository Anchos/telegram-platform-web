const initialValues = {
  first_name: "",
  language_code: "",
  photo: "",
  user_id: 0,
  username: "",
};

const authorization = (state = initialValues, action) => {
  switch (action.type) {
    case "AUTH":
      return action.payload;

    case "LOGOUT_SUCCESS":
      return initialValues;

    default:
      return state;
  }
};

export default authorization;
