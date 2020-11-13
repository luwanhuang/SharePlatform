import React, { Fragment, useContext,useState } from "react";
import { Card } from 'antd';
import {Link} from 'react-router-dom';


export default function HomeForm(props) {
  const div1 = {
    width: "900px",
    margin: "50px auto",
    // marginTop:"5px",
    minHeight: "200px",
    
    boxSizing: "border-box",
  };

  return (
    <div style = {div1}>
      {
        props.state.map(e=>(
        <Card title={e.title} extra={<Link to={{
          pathname: "/applyTask",
          state: { from: e }
        }}>More</Link>} style={{ width: 900, marginTop: 20}}>
        <p>{e.tag}</p>
        <p>${e.price}</p>
        <p>{e.details}</p>
      </Card>
      
      ))
      }
    </div>
  );
}
