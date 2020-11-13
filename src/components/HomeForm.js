import React, { Fragment } from "react";
import { Card } from 'antd';
import {Link} from 'react-router-dom';

export default function HomeForm(props) {
  const div1 = {
    width: "900px",
    height: "800px",
    display: "block",
    margin: "0 auto",
  };
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
