const initialValues = {
  locale: "en",
};

const configuration = (state = initialValues, action) => {
  switch (action.type) {
    case "CONFIGURATION_SET_LOCALE":
      return {
        locale: action.payload,
      };
    default:
      return state;
  }
};

export default configuration;
