import React, { Fragment, useState, useContext, useEffect } from "react";
import { Card } from 'antd';
import {Link} from 'react-router-dom';
import axios from "axios";
import {TextContext} from "../app";

export default function AppliedTask() {
  const [name,setName] = useContext(TextContext);
  const [user,setUser] = useState([]);
  useEffect(() => {
    axios.get(`http://192.168.0.6:8181/ongoingTask/ongoing/${name}`)
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
        <Card title={e.applicant} 
        // extra={<Link style ={{display: (e[3]=="0"?"none":"block")}} to={{
        //   pathname: "/applicants",
        //   state: { from: e }
        // }}>More</Link>} 
        style={{ width: 900, margin : 10 }}>
        <p>TaskID: {e.taskID}</p>
        <p>{e.details}</p>
      </Card>
      
      ))
      }
    </Fragment>
  );
}