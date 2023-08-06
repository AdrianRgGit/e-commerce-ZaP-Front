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

  const signUp = async (user) => {
    const res = await axios.post(API_URL + "users/createuser", user);

    dispatch({
      type: "SIGNUP",
      payload: res.data,
    });
  };

  const login = async (user) => {
    const res = await axios.post(API_URL + "users/login", user);

    dispatch({
      type: "LOGIN",
      payload: res.data,
    });

    if (res.data) {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    }
  };

  const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.delete(API_URL + "users/logout", {
      headers: {
        Authorization: token,
      },
    });

    dispatch({
      type: "LOGOUT",
      payload: res.data,
    });
    if (res.data) {
      localStorage.removeItem("token");
    }
  };

  const getUserInfo = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await axios.get(API_URL + "users/showuserregistered", {
      headers: {
        Authorization: token,
      },
    });

    dispatch({
      type: "GET_USER_INFO",
      payload: res.data,
    });
  };

  return (
    <UserContext.Provider
      value={{
        token: state.token,
        user: state.user,
        signUp,
        login,
        logout,
        getUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
