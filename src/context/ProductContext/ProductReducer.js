const products = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        product: action.payload,
      };

    case "SHOW_DESC":
      return {
        ...state,
        product: action.payload,
      };

    case "SHOW_ASC":
      return {
        ...state,
        product: action.payload,
      };

    case "SHOW_BY_BRAND":
      return {
        ...state,
        product: action.payload,
      };

    case "ADD_CART":
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default products;
