import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext/UserState";

const NavBar = () => {
  const { token, logout } = useContext(UserContext);

  const logoutUser = (event) => {
    event.preventDefault();
    logout();
  };

  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>

      {token ? (
        <>
          <Link to="/logout" onClick={logoutUser}>
            Logout
          </Link>
          <Link to="/profile">Profile</Link>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default NavBar;
