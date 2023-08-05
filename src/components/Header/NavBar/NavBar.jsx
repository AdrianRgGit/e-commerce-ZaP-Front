import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext/UserState";

const NavBar = () => {
  const { token } = useContext(UserContext);

  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>

      {token ? (
        <>
          <Link to="/logout">Logout</Link>
          <Link to="/profile">Profile</Link>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
};

export default NavBar;
