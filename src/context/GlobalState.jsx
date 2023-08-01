import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import AppReducer from "./AppReducer.js";

const initialState = {
  users: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8080/users/showall");

      dispatch({
        type: "GET_USERS",
        payload: res.data,
      });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        getUsers,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
