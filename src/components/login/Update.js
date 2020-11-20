import React, { useState, useEffect, useContext } from "react";
import { Form, Input, Button } from "antd";
import axios from "../utils/axiosInstance";
import { useHistory } from "react-router-dom";
import "../../css/signUp.css";
import { TextContext } from "../app";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

export default function Update() {
  const [name, setName] = useContext(TextContext);
  const [user, setUser] = useState("");
  let history = useHistory();
  const [form] = Form.useForm();
  useEffect(() => {
    axios.get(`/user/update/${name}`).then((res) => {
      // res.data.map(e => ({id:e.id, title: e.title}))
      let a = res.data;
      setUser(a);
      console.log(a);
    });
  }, []);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    axios.post("/user/update", values).then(function (resp) {
      if (resp.data === "success") {
        history.push("/");
      }
    });
  };

  return (
    <Form
      {...formItemLayout}
      style={{ marginTop: "60px" }}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
      className="signUp"
    >
      <Form.Item
        name="username"
        key={user.username}
        initialValue={user.username}
        read
        label="Username"
      >
        <Input readOnly="true" />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        initialValue={user.email}
        key={user.email}
      >
        <Input readOnly="true" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        hidden="true"
        initialValue={user.password}
        key={user.password}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="id"
        label="id"
        hidden="true"
        initialValue={user.id}
        key={user.id}
      >
        <Input readOnly="true" />
      </Form.Item>

      <Form.Item
        name="address"
        initialValue={user.address}
        label="Address" //first step just try plan text, easy to combine with back-end
        rules={[{ required: true, message: "Please input your address!" }]}
        key={user.address}
      >
        <Input style={{ width: "100%" }} allowClear="true" maxLength={80} />
        {/* <Cascader options={residences} /> */}
      </Form.Item>

      <Form.Item
        name="phone"
        key={user.phone}
        initialValue={user.phone}
        label="Phone Number"
        rules={[
          { required: true, message: "Please input your phone number!" },
          {
            pattern: /^0[4][0-9]{8}$/,
            message:
              "The phone number must start from 04 and the length is 10!",
          },
        ]}
      >
        <Input style={{ width: "100%" }} allowClear="true" />
      </Form.Item>

      <Form.Item
        name="occupation"
        initialValue={user.occupation}
        key={user.occupation}
        label="Occupation"
        rules={[{ required: true, message: "Please input occupation!" }]}
      >
        <Input allowClear="true" maxLength={30} />
      </Form.Item>
      <Form.Item
        // {...tailFormItemLayout}
        wrapperCol={{ span: 4, offset: 18 }}
      >
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
    </Form>
  );
}
