import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(UserContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    login(user);
  };

  return (
    <form>
      <input
        type="email"
        className="email"
        placeholder="Email"
        name="email"
        onChange={handleInputChange}
      />
      <input
        type="password"
        className="password"
        placeholder="Password"
        name="password"
        onChange={handleInputChange}
      />
      <div className="submit-container">
        <input type="submit" onClick={onSubmit} />
      </div>
    </form>
  );
};

export default Login;
