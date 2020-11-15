import React, { Fragment, useState, useContext, useEffect } from "react";
import { Card,Pagination } from 'antd';
import {Link} from 'react-router-dom';
import axios from "axios";
import {TextContext} from "../app";
import "../../css/personalTask.css"

export default function PostedTask(props) {
  const [name,setName] = useContext(TextContext);
  const [temData, setTemData] = useState([]);
  const [temTotal, setTemTotal] = useState(0);
  const [result, setResult] = useState([]);
  const [totalRes, setTotalRes] = useState(0);
  const lenth = window.innerHeight<1100? 3:5;

  useEffect(() => {
    if (props.state != "") {
      axios
        .get(`http://localhost:8181/task/postedSearch/1/${lenth}/${name}/${props.state}`)
        .then(function (resp) {
          setResult(resp.data);
        });
      axios
        .get(`http://192.168.0.6:8181/task/unstartedSearchTotal/${name}/${props.state}`)
        .then((res) => {
          setTotalRes(res.data);
        });
    } else {
      setResult(temData);
      setTotalRes(temTotal);
    }
  }, [props.state]);
  useEffect(() => {
    axios.get(`http://192.168.0.6:8181/task/posted/1/${lenth}/${name}`)
    .then(res => {
      console.log(res)
      setResult(res.data);
      setTemData(res.data);
    })
    axios.get(`http://192.168.0.6:8181/task/unstartedTotal/${name}`).then((res) => {
    setTotalRes(res.data);
    setTemTotal(res.data);
    });
  }, []);
  return (
    <div className = "outFormD">
      <div className = "personalCardsD">
      {
        result.map(e=>(
          <div className="pCards">
        <Card title={e[1]} 
        hoverable = "true"
        extra={<Link style ={{display: (e[3]=="0"?"none":"block")}} to={{
          pathname: "/applicants",
          state: { from: e }
        }}>More</Link>} style={{ width: 900, margin : 10 }}>
        {/* <p>{e.tag}</p> */}
        <p>${e[2]}</p>
        <p>{e[3]==0? "No one apply right now": "We have applicants, Click More to check details"}</p>
      </Card></div>
      
      ))
      }</div>
      <div className = "pPaginationD">
      <Pagination
        defaultCurrent={1}
        pageSize={lenth}
        onChange={(e) => {
          if (props.state == "") {
            axios
            .get(`http://192.168.0.6:8181/task/posted/${e}/${lenth}/${name}`)
            .then((res) => {
              // res.data.map(e => ({id:e.id, title: e.title}))
              setResult(res.data);
            });
          } else{
            axios
            .get(
              `http://localhost:8181/task/postedSearch/${e}/${lenth}/${name}/${props.state}`
            )
            .then((res) => setResult(res.data.content));
          }
        }}
        total={totalRes}
      />
      </div>
    </div>
  );
}