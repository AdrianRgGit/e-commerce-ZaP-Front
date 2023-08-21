import { createContext } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/orders/";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const createOrder = async (order) => {
    const token = JSON.parse(localStorage.getItem("token"));

    try {
      await axios.post(
        API_URL + "create",
        { productIds: order },

        {
          headers: {
            authorization: token,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        createOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
