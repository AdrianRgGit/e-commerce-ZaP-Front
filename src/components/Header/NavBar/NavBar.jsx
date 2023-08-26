import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext/UserState";

import "./NavBar.scss";
import { Spin } from "antd";

const NavBar = () => {
  const { token, user, logout, getUserInfo } = useContext(UserContext);

  const logoutUser = (event) => {
    event.preventDefault();
    logout();
  };

  return (
    <nav className="nav-container">
      <Link className="home-link" to="/">
        Home{" "}
      </Link>

      {token ? (
        <>
          <Link className="logout-link" to="/logout" onClick={logoutUser}>
            Logout
          </Link>
          <Link className="profile-link" to="/profile">
            {" "}
            Profile
          </Link>
          <Link className="cart-link" to="/cart">
            {" "}
            Cart
          </Link>
        </>
      ) : (
        <>
          <Link className="login-link" to="/login">
            {" "}
            Login
          </Link>
          <Link className="signup-link" to="/signup">
            {" "}
            Sign up
          </Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
