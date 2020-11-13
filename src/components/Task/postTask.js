import React,{useContext} from "react";
import "../../css/postTask.css";
import { Form, Input, InputNumber, Button } from "antd";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {TextContext} from '../app';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
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
  const [name,setName] = useContext(TextContext);
  const onFinish = (values) => {
    axios.post("http://192.168.0.6:8181/task/save", values).then(function (resp) {
      if (resp.data == "success") {
        history.push("/");
      }
    });
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      className="postTask"
    >
      <Form.Item name="title" label="Title" rules={[{ required: true }]}>
        <Input />
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
        <InputNumber />
      </Form.Item>
      <Form.Item name="tag" label="Tag">
        <Input />
      </Form.Item>
      <div className="details">
        <Form.Item
          name="details"
          className="detail"
          label="Details"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
      </div>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default PostTask;
