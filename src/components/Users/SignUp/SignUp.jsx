import { Button, Form, Input, notification } from "antd";
import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import "./SignUp.scss";

const SignUp = () => {
  const { signUp, login } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmit = (values) => {
    signUp(values);

    notification.success({
      message: "Successfully registered",
    });
    setTimeout(() => {
      login(values);
      navigate("/");
    }, 3000);
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
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
            {
              type: "name",
              message: "Please input a correct name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
