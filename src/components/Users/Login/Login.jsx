import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, notification } from "antd";
import "./Login.scss";

const Login = () => {
  const { login } = useContext(UserContext);

  const navigate = useNavigate();

  const onSubmit = (user) => {
    login(user);

    setTimeout(() => {
      const token = JSON.parse(localStorage.getItem("token"));
      if (!token) {
        notification.error({
          message: "Wrong email or password",
        });
      } else {
        notification.success({
          message: "Successfully logged",
        });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    }, 100);
  };

  return (
    <div className="form-container">
      <Form
        className="form-style"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "Please input a correct email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button className="button" type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
