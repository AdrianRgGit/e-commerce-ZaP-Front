import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Logout from "./Logout/Logout";
import UserInfo from "./UserInfo/UserInfo";
import { UserProvider } from "../../context/UserContext/UserState";

function Users() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<UserInfo />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default Users;
