const products = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        product: action.payload,
      };
  }
};

export default products;
