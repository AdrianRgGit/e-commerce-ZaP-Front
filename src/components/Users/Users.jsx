import Login from "./Login/Login";
import Logout from "./Logout/Logout";
import ShowUsers from "./ShowUsers/ShowUsers";

function Users() {
  return (
    <div>
      Users
      <ShowUsers />
      <Login />
      <Logout />
    </div>
  );
}

export default Users;
