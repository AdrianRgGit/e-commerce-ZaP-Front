import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";
import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
  token: token ? token : null,
  user: null,
};

const API_URL = "http://localhost:8080/";

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const login = async (user) => {
    const res = await axios.post(API_URL + "users/login", user);
    console.log("ruta")

    dispatch({
      type: "LOGIN",
      payload: res.data,
    });

    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
  };
  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
