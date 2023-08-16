import { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";

const initialState = {
  product: null,
};

const API_URL = "http://localhost:8080/";

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const showProducts = async (product) => {
    const res = await axios.get(API_URL + "shoes/showall");

    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });
  };

  return (
    <ProductContext.Provider
      value={{
        product: state.product,
        showProducts,
      }}
    ></ProductContext.Provider>
  );
};
