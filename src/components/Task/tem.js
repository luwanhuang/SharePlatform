import React, { Fragment, useState, useContext, useEffect } from "react";
import { Card, Pagination, Button } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { TextContext } from "../app";
import "../../css/personalTask.css";

export default function FinishedApplication(props) {
  const [name, setName] = useContext(TextContext);
  const [temData, setTemData] = useState([]);
  const [temTotal, setTemTotal] = useState(0);
  const [result, setResult] = useState([]);
  const [totalRes, setTotalRes] = useState(0);
  const size = window.innerHeight < 1100 ? 2 : 3;
  const lenth = window.innerHeight < 1100 ? 600 : 600;
  const heig = window.innerHeight < 1100 ? "303px" : "303px";

  useEffect(() => {
    if (props.state != "") {
      axios
        .get(
          `http://localhost:8181/finishedApplication/finishedJobSearch/1/${lenth}/${name}/${props.state}`
        )
        .then(function (resp) {
          setResult(resp.data);
        });
      axios
        .get(
          `http://192.168.0.6:8181/finishedApplication/totalFinishedJobSearch/${name}/${props.state}`
        )
        .then((res) => {
          setTotalRes(res.data);
        });
    } else {
      setResult(temData);
      setTotalRes(temTotal);
    }
  }, [props.state]);
  useEffect(() => {
    axios
      .get(
        `http://192.168.0.6:8181/finishedApplication/finishedJob/1/${lenth}/${name}`
      )
      .then((res) => {
        console.log(res);
        setResult(res.data);
        setTemData(res.data);
      });
    axios
      .get(
        `http://192.168.0.6:8181/finishedApplication/totalFinishedJob/${name}`
      )
      .then((res) => {
        setTotalRes(res.data);
        setTemTotal(res.data);
      });
  }, []);
  return (
    <div className="outFormD">
      <div className="personalCardsD">
        {result.map((e) => (
          <div className="pCards">
            <Card
              title={e.title}
              hoverable="true"
              //     extra={<Button type="primary"
              //     onClick = {
              //         ()=>{
              //             axios.get(`http://192.168.0.6:8181/finishedApplication/agree/${e.id}`)
              //                 .then(res => {
              //                   if(res.data =="success"){
              //                       window.location.reload();
              //                   }else{
              //                       alert("something is wrong");
              //                       window.location.reload();
              //                   }
              //                 }
              //                 )
              //         }
              //     }
              //     shape="round" size="large">
              //     Complete
              //   </Button>}
              style={{ width: 900, margin: 10, height: heig }}
            >
              {/* <p>{e.tag}</p> */}
              <p>${e.price}</p>
              <p>{e.details.substring(0, lenth)}...</p>
              <p>
                <i>Finished by: </i>
                <b>{e[3]}</b>
              </p>
            </Card>
          </div>
        ))}
      </div>
      <div className="pPaginationD">
        <Pagination
          defaultCurrent={1}
          pageSize={lenth}
          onChange={(e) => {
            if (props.state == "") {
              axios
                .get(
                  `http://192.168.0.6:8181/finishedApplication/finishedJob/${e}/${lenth}/${name}`
                )
                .then((res) => {
                  // res.data.map(e => ({id:e.id, title: e.title}))
                  setResult(res.data);
                });
            } else {
              axios
                .get(
                  `http://localhost:8181/finishedApplication/finishedJobSearch/${e}/${lenth}/${name}/${props.state}`
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
