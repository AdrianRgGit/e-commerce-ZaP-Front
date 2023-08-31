import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/UserContext/UserState";
import { Card, Spin } from "antd";
import { Link } from "react-router-dom";
import "./UserInfo.scss";

const UserInfo = () => {
  const { user, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    console.log(user);
    getUserInfo();
  }, []);

  if (!user) {
    return <Spin size="large" />;
  }

  const { name, email, avatar } = user.getUser;

  return (
    <div className="card-container">
      <Card
        className="card-style"
        style={{
          width: 300,
        }}
      >
        <img
          src={avatar}
          style={{
            maxWidth: 150,
          }}
          alt="avatar"
        />
        <p>{name}</p>
        <p>{email}</p>
        <Link className="link" to="#"> My orders</Link>
      </Card>
    </div>
  );
};

export default UserInfo;
