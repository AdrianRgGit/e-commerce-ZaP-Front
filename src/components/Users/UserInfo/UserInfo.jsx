import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/UserContext/UserState";
import { Card, Spin } from "antd";
import { Link } from "react-router-dom";

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
    <div>
      <Card
        title={name}
        style={{
          width: 300,
        }}
      >
        <img
          src={avatar}
          style={{
            maxWidth: 150,
          }}
          alt="product"
        />

        <p>{email}</p>
        <Link to="/orders"> My orders</Link>
      </Card>
    </div>
  );
};

export default UserInfo;
