const users = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      console.log(action.payload);
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default users;
