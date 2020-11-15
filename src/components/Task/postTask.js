import React, { useContext } from "react";
import "../../css/postTask.css";
import { Form, Input, InputNumber, Button } from "antd";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { TextContext, PathContext } from "../app";

const layout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const PostTask = () => {
  let history = useHistory();
  const [name, setName] = useContext(TextContext);
  const [path, setPath] = useContext(PathContext);
  const onFinish = (values) => {
    axios
      .post("http://192.168.0.6:8181/task/save", values)
      .then(function (resp) {
        if (resp.data == "success") {
          setPath("/home");
          history.push("/");
        }
      });
  };

  return (
    <div className="outDivP">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input maxLength={100} allowClear="true" />
        </Form.Item>
        {/* <span style={{ display: 'none'}}> */}
        <Form.Item
          name="username"
          hidden="true"
          initialValue={name}
        ></Form.Item>
        {/* </span> */}
        {/* <Form.Item name= 'deadline' label="Deadline" rules={[{ required: true }]}>
        <Input />
      </Form.Item> */}
        <Form.Item name="price" label="Price" rules={[{ required: true }]}>
          <InputNumber allowClear="true" />
        </Form.Item>
        <Form.Item name="tag" label="Tag">
          <Input maxLength={100} allowClear="true" />
        </Form.Item>

        <Form.Item
          name="details"
          className="detail"
          label="Details"
          rules={[{ required: true }]}
        >
          <Input.TextArea maxLength={1000} className="details" />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 18 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default PostTask;
