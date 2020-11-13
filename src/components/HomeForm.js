import React, { Fragment, useContext,useState } from "react";
import { Card } from 'antd';
import {Link} from 'react-router-dom';


export default function HomeForm(props) {

  return (
    <Fragment>
      {
        props.state.map(e=>(
        <Card title={e.title} extra={<Link to={{
          pathname: "/applyTask",
          state: { from: e }
        }}>More</Link>} style={{ width: 900, margin : 10 }}>
        <p>{e.tag}</p>
        <p>${e.price}</p>
        <p>{e.details}</p>
      </Card>
      
      ))
      }
    </Fragment>
  );
}
