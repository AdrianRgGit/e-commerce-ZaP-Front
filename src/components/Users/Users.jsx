import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Logout from "./Logout/Logout";
import ShowUsers from "./ShowUsers/ShowUsers";
import { UserProvider } from "../../context/UserContext/UserState";

function Users() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
      Users
    </>
  );
}

export default Users;
