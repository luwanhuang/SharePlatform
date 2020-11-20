import React, { useState, useContext } from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "../utils/axiosInstance";
import "../../css/login.css";
import { useHistory, useLocation, Link } from "react-router-dom";
import { TextContext } from "../app";
export default function LogIn() {
  let history = useHistory();
  let location = useLocation();

  const [show, setShow] = useState("none");
  const [name, setName] = useContext(TextContext);


  const onFinish = (values) => {
    // console.log('Received values of form: ', values);
    axios.post("/user/login", values).then(function (resp) {
      if (resp.data === "error") {
        setCookie("login", "", -1);
        setCookie("username", "", -1);
        setShow("block");
        setName("");
        // onFinishFailed(resp);
      } else {
        setCookie("login", true, 15);
        setCookie("username", resp.data, 15);
        // console.log(resp.data);
        setName(resp.data);
        jumpBack();
      }
    });
  };
  const setCookie = (key, value, day) => {
    let expires = day * 86400 * 1000; //
    let date = new Date(+new Date() + expires); //
    document.cookie = `${key}=${value};expires=${date.toUTCString()}`;
  };
  const jumpBack = () => {
    let { from } = location.state || { from: { pathname: "/" } };
    history.push(from);
  };
  return (
    <div className="outDivLogin">
      <Card title="Share Platform Login" className="login-form">
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <span style={{ display: show, color: "red", margin: "5px" }}>
            Username or Password error
          </span>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            Or <Link to="/signUp">register now!</Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
