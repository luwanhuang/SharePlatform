import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import { List, Avatar, Button,Radio } from "antd";

export default function Applicants() {
  const [applicants, setApplicants] = useState([]);
  let history = useHistory();
  let location = useLocation();
  let id = location.state == null ? 1 : location.state.from[0];
  useEffect(()=>{
    axios.get(`http://192.168.0.6:8181/task/showApplicants/${id}`)
      .then(resp => {
        setApplicants(resp.data);
      })},
    []
  );
  if (location.state == null) {
    history.push("/");
    return null;
  } else {
    let { from } = location.state;

    return (
      <>
        <div>{from[1]}</div>
        <List itemLayout="vertical"
        
        >
          {applicants.map((e) => (
            <List.Item
            extra={
                <div width={300}>
                <Button onClick={
                    ()=>{
                    axios.get(`http://192.168.0.6:8181/task/agree/${e[6]}/${e[0]}`)
                    .then(res => {
                      if(res.data =="success"){
                          window.location.reload();
                      }else{
                          alert("something is wrong");
                          window.location.reload();
                      }
                    }
                    )
                }}  
                type="primary" shape="round" size="large">
                     Agree
                </Button>
                </div>
              }
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={e[1]}
                description={e[2] +" "+ e[3]}
              />
              {e[5]}
            </List.Item>
          ))}
        </List>
      </>
    );
  }
}
