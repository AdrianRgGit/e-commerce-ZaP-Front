const users = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        token: action.payload.token,
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
