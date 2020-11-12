import React from 'react'
import '../../css/applyTask.css'
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

const ApplyTask = () => {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} className = "postTask">
      <Form.Item name='title' label="Title" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      {/* <Form.Item name= 'deadline' label="Deadline" rules={[{ required: true }]}>
        <Input />
      </Form.Item> */}
      <Form.Item name= 'price' label="Price" rules={[{ required: true }]}>
        <InputNumber />
      </Form.Item>
      <Form.Item name= 'tag' label="Tag">
        <Input />
      </Form.Item>
      <div className = "details">
      <Form.Item name= 'details' className = "detail" label="Details" rules={[{ required: true }]}>
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
export default ApplyTask;