import React, { Fragment, useState, useContext, useEffect } from "react";
import { Card,Button } from 'antd';
import {Link} from 'react-router-dom';
import axios from "axios";
import {TextContext} from "../app";

export default function PostedTask() {
  const [name,setName] = useContext(TextContext);
  const [user,setUser] = useState([]);
  useEffect(() => {
    axios.get(`http://192.168.0.6:8181/ongoingTask/search/${name}`)
    .then(res => {
      console.log(res.data)
        setUser(res.data);
    }
    )
    }, [])
  return (
    <Fragment>
      {
        user.map(e=>(
        <Card title={e.title} extra={<Button type="primary" 
        onClick = {
            ()=>{
                axios.get(`http://192.168.0.6:8181/ongoingTask/agree/${e.id}`)
                    .then(res => {
                      if(res.data =="success"){
                          window.location.reload();
                      }else{
                          alert("something is wrong");
                          window.location.reload();
                      }
                    }
                    )
            }
        }
        shape="round" size="large">
        Complete
      </Button>} style={{ width: 900, margin : 10 }}>
        {/* <p>{e.tag}</p> */}
        <p>${e.price}</p>
        <p>{e.details}</p>
      </Card>
      
      ))
      }
    </Fragment>
  );
}