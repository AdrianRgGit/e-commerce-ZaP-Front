import { useContext, useEffect } from "react";
import { UserContext } from "../../../context/UserContext/UserState";
import { Spin } from "antd";

const UserInfo = () => {
  const { user, getUserInfo } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);
  
  if (!user) {
    return <Spin size="large" />;
  }

  return (
    <div>
      <Card
        title={user.name}
        style={{
          width: 300,
        }}
      >
        <p>{user.email}</p>
      </Card>
    </div>
  );
};

export default UserInfo;
