import { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";
import axios from "axios";

const cart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  products: null,
  cart: cart ? cart : [],
};

const API_URL = "http://localhost:8080/shoes/";

export const ProductContext = createContext(initialState);

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    const res = await axios.get(API_URL + "showall");

    dispatch({
      type: "GET_PRODUCTS",
      payload: res.data,
    });

    return res;
  };

  const showProductsDesc = async () => {
    const res = await axios.get(API_URL + "showalldesc");

    dispatch({
      type: "SHOW_DESC",
      payload: res.data,
    });

    return res;
  };

  const showProductsAsc = async () => {
    const res = await axios.get(API_URL + "showallasc");

    dispatch({
      type: "SHOW_ASC",
      payload: res.data,
    });

    return res;
  };

  const showProductByBrand = async (brand) => {
    const res = await axios.get(API_URL + "showbybrand/" + brand);

    dispatch({
      type: "SHOW_BY_BRAND",
      payload: res.data,
    });

    return res;
  };

  const addCart = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART",
    });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.product,
        cart: state.cart,
        getProducts,
        showProductsDesc,
        showProductsAsc,
        showProductByBrand,
        addCart,
        clearCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
