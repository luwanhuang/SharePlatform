import React, {useContext, useState} from "react";
import "../../css/postTask.css";
import { Form, Input, InputNumber, Button } from "antd";
import { useHistory } from "react-router-dom";
import axios from "../utils/axiosInstance";
import { TextContext, PathContext } from "../app";
import NewTag from "../utils/NewTag";
import TagInput from "../utils/TagInput"

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
  const [str, setStr] = useState("");
  const [tags, setTags] = useState("");
  const [username, setUsername] = useContext(TextContext);
  const [path, setPath] = useContext(PathContext);
  const [flag, setFlag] = useState(true);


  const onFinish = (values) => {
    values.tag = str.slice(3,-3);
    // console.log(values);
    axios.post("/task/save", values).then(function (resp) {
      if (resp.data === "success") {
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
          initialValue={username}
        ></Form.Item>
        {/* </span> */}
        {/* <Form.Item name= 'deadline' label="Deadline" rules={[{ required: true }]}>
        <Input />
      </Form.Item> */}
        <Form.Item
          name="price"
          label="Price"
          rules={[
            { required: true },
            {
              pattern: /^(\d|[1-9]\d){1,3}$/,
              message: "please input number between 0 and 1000,000",
            },
          ]}
        >
          <InputNumber allowClear="true" />
        </Form.Item>
        <Form.Item name="tag" label="Tag">
          <TagInput maxLength={15}
                 setStr = {setStr}
                 setTags = {setTags}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}
                   hidden = {flag}

        >
          <NewTag tags = {tags} setFlag = {setFlag} />
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
