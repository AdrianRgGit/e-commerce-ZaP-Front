const products = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        product: action.payload,
      };

    case "ADD_CART":
      console.log(state)
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };

    default:
      return state;
  }
};

export default products;
