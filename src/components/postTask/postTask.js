import React from 'react'
import '../../css/postTask.css'
import { Form, Input, InputNumber, Button } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const PostTask = () => {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} className = "postTask">
      <Form.Item name={['user', 'name']} label="Task Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'email']} label="Deadline" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'age']} label="Payment" rules={[{ required: true }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Tag">
        <Input />
      </Form.Item>
      <div className = "details">
      <Form.Item name={['user', 'details']} className = "detail" label="Details" rules={[{ required: true }]}>
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