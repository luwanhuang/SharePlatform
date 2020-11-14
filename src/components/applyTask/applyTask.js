import React, {useContext} from 'react'
import '../../css/applyTask.css'
import { Form, Input, InputNumber, Button } from 'antd';
import { useHistory, useLocation } from "react-router-dom";
import { Typography, Divider } from 'antd';
import {TextContext,PathContext} from '../app';
import axios from "axios";


const { Title, Paragraph, Text, Link } = Typography;

const layout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 29 },
};

const validateMessages = {
  required: '${label} is required!'
};

const ApplyTask = () => {
  
  const [name,setName] = useContext(TextContext);
  const [path,setPath] = useContext(PathContext);
  let history = useHistory();
  let location = useLocation();
  
  if(location.state==null){
    history.push("/")
    return null;
  }else{
    let { from } = location.state;
    setPath("/applyTask");
    const onFinish = values => {
      axios.post("http://192.168.0.6:8181/application/save", values).then(function (resp) {
        if (resp.data == "success") {
          history.push("/");
        }
      });
    };
  
    return (
      <div className = "outDi">
        <div>
        <Typography>
    <Title>{from.title}</Title>
      
      <Paragraph>
       <b> {from.tag} </b>
      </Paragraph>
      <Paragraph>
        {from.details}
      </Paragraph>
      <Paragraph>
       <i> About the Employer: </i><b>{from.username}</b>
      </Paragraph>
      </Typography>
      </div>
      <div>
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} >
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
       
        <Form.Item name= 'details' className = "detail" label="Details" rules={[{ required: true }]}>
          <Input.TextArea  />
        </Form.Item>
    
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 21 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </div>
      </div>
    );
  };
  }

export default ApplyTask;