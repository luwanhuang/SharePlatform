import React, { Fragment, useState, useContext, useEffect } from "react";
import { Card } from 'antd';
import {Link} from 'react-router-dom';
import axios from "axios";
import {TextContext} from "../app";

export default function FinishedTask() {
  const [name,setName] = useContext(TextContext);
  const [user,setUser] = useState([]);
  useEffect(() => {
    axios.get(`http://192.168.0.6:8181/finishedTask/search/${name}`)
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
        <Card title={e.title} style={{ width: 900, margin : 10 }}>
        <p>${e.price}</p>
        <p>{e.details}</p>
      </Card>
      
      ))
      }
    </Fragment>
  );
}