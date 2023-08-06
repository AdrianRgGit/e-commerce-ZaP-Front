const users = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return {
        ...state,
        user: action.payload,
      };

    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
      };

    case "GET_USER_INFO":
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default users;
