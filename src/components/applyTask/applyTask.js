import React, {useContext} from 'react'
import '../../css/applyTask.css'
import { Form, Input, InputNumber, Button } from 'antd';
import { useHistory, useLocation } from "react-router-dom";
import { Typography, Divider } from 'antd';
import {TextContext} from '../app';
import axios from "axios";


const { Title, Paragraph, Text, Link } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!'
};

const ApplyTask = () => {
  const [name,setName] = useContext(TextContext);
  let history = useHistory();
  let location = useLocation();
  
  if(location.state==null){
    history.push("/")
    return null;
  }else{
    let { from } = location.state;
    const onFinish = values => {
      axios.post("http://192.168.0.6:8181/application/save", values).then(function (resp) {
        if (resp.data == "success") {
          history.push("/");
        }
      });
    };
  
    return (
      <>
        <Typography>
    <Title>{from.title}</Title>
      <Paragraph>
        {from.details}
      </Paragraph>
      <Paragraph>
        {from.username}
      </Paragraph>
      </Typography>
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} className = "postTask">
      <Form.Item
        name="applicant"
        hidden="true"
        initialValue={name}
      ></Form.Item>
      <Form.Item
        name="taskID"
        hidden="true"
        initialValue={from.id}
      ></Form.Item>
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
      </>
    );
  };
  }

export default ApplyTask;