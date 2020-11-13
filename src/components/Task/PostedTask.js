import React, { Fragment, useState, useContext, useEffect } from "react";
import { Card } from 'antd';
import {Link} from 'react-router-dom';
import axios from "axios";
import {TextContext} from "../app";

export default function PostedTask() {
  const [name,setName] = useContext(TextContext);
  const [user,setUser] = useState([]);
  useEffect(() => {
    axios.get(`http://192.168.0.6:8181/task/posted/${name}`)
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
        <Card title={e[1]} extra={<Link style ={{display: (e[3]=="0"?"none":"block")}} to={{
          pathname: "/applicants",
          state: { from: e }
        }}>More</Link>} style={{ width: 900, margin : 10 }}>
        {/* <p>{e.tag}</p> */}
        <p>${e[2]}</p>
        <p>{e[3]==0? "No one apply right now": "We have applicants, Click More to check details"}</p>
      </Card>
      
      ))
      }
    </Fragment>
  );
}