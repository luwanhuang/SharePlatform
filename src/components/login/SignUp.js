import React, { useState, useContext } from "react";
import { Form, Input, Tooltip, Checkbox, Button, AutoComplete } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../../css/signUp.css";
import { TextContext,PathContext } from "../app";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 4,
    },
  },
};

export default function SignUp() {
  const [name, setName] = useContext(TextContext);
  const [path,setPath] = useContext(PathContext);
  const setCookie = (key, value, day) => {
    let expires = day * 86400 * 1000; //
    let date = new Date(+new Date() + expires); //
    document.cookie = `${key}=${value};expires=${date.toUTCString()}`;
  };
  let history = useHistory();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // console.log('Received values of form: ', values);
    axios
      .post("http://192.168.0.6:8181/user/save", values)
      .then(function (resp) {
        if (resp.data == "exist") {
          alert("Sorry, the username is already exist!");
        } else if (resp.data == "error") {
          alert("Sorry, something wrong, please register again!");
          window.location.reload();
        } else {
          alert("congratulations!");
          setCookie("login", true, 15);
          setCookie("username", resp.data, 15);
          // console.log(resp.data);
          setName(resp.data);
          setPath("/home")
          history.push("/");
        }
      });
  };

  return (
    <div className="outDivSignUp">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
        className="signUp"
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="username"
          label={
            <span>
              Username&nbsp;
              <Tooltip title="What do you want others to call you?">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: "Please input your nickname!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="address"
          label="Address" //first step just try plan text, easy to combine with back-end
          rules={[{ required: true, message: "Please input your address!" }]}
        >
          <Input style={{ width: "100%" }} />
          {/* <Cascader options={residences} /> */}
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="occupation"
          label="Occupation"
          rules={[{ required: true, message: "Please input occupation!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject("Should accept agreement"),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
