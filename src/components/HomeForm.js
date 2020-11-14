import React, { Fragment, useContext, useState, useEffect } from "react";
import { Card, Pagination } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/homeForm.css";

export default function HomeForm(props) {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState([]);
  const [totalRes, setTotalRes] = useState(0);
  const h = window.screen.availHeight / 5;
  const [temData, setTemData] = useState([]);
  const [temTotal, setTemTotal] = useState(0);
  const div1 = {
    width: "900px",
    margin: "50px auto",
    // marginTop:"5px",
    minHeight: "200px",

    boxSizing: "border-box",
  };
  useEffect(() => {
    if (props.state != "") {
      axios
        .get(`http://localhost:8181/task/keyword/1/3/${props.state}`)
        .then(function (resp) {
          setResult(resp.data.content);
        });
      axios
        .get(`http://192.168.0.6:8181/task/totalLikeKeyword/${props.state}`)
        .then((res) => {
          setTotalRes(res.data);
        });
    } else {
      setResult(temData);
      setTotalRes(temTotal);
    }
  }, [props.state]);
  useEffect(() => {
    axios.get("http://192.168.0.6:8181/task/findAll/1/3").then((res) => {
      setTemData(res.data.content);
      setResult(res.data.content);
    });
    axios.get("http://192.168.0.6:8181/task/showTotal").then((res) => {
      setTemTotal(res.data);
      setTotalRes(res.data);
    });
  }, []);

  return (
    <div style={div1}>
      {result.map((e) => (
        <Card
          className="cards"
          title={e.title}
          extra={
            <Link
              to={{
                pathname: "/applyTask",
                state: { from: e },
              }}
            >
              More
            </Link>
          }
          style={{ width: 900, marginTop: 10, height: h }}
        >
          <p>{e.tag}</p>
          <p>${e.price}</p>
          <p>{e.details.substring(0, 245)}...</p>
        </Card>
      ))}
      <Pagination
        defaultCurrent={1}
        pageSize={3}
        onChange={(e) => {
          if (props.state == "") {
            axios
              .get(`http://192.168.0.6:8181/task/findAll/${e}/${3}`)
              .then((res) => {
                // res.data.map(e => ({id:e.id, title: e.title}))
                console.log(res.data.content);
                setResult(res.data.content);
              });
          } else {
            axios
              .get(
                `http://localhost:8181/task/keyword/${e}/${3}/${props.state}`
              )
              .then((res) => setResult(res.data.content));
          }
        }}
        total={totalRes}
      />
    </div>
  );
}
