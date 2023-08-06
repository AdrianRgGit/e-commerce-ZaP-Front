import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Logout from "./Logout/Logout";
import { UserProvider } from "../../context/UserContext/UserState";
import UserInfo from "./UserInfo/UserInfo";

function Users() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/userinfo" element={<UserInfo />} />
            <Route path="/userinfo" element={<UserInfo />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
      Users
    </>
  );
}

export default Users;
