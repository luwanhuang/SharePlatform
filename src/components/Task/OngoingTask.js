import React, { useState, useContext, useEffect } from "react";
import { Card, Pagination, Button } from "antd";
import axios from "../utils/axiosInstance";
import { TextContext } from "../app";
import "../../css/personalTask.css";
// import TagShow from "../utils/TagShow";

export default function OngoingTask(props) {
  const [name, setName] = useContext(TextContext);
  const [temData, setTemData] = useState([]);
  const [temTotal, setTemTotal] = useState(0);
  const [result, setResult] = useState([]);
  const [totalRes, setTotalRes] = useState(0);
  const size = window.innerHeight < 1100 ? 2 : 3;
  const lenth = window.innerHeight < 1100 ? 600 : 600;
  const heig = window.innerHeight < 1100 ? "303px" : "303px";

  useEffect(() => {
    if (props.state !== "") {
      axios
        .get(`/ongoingTask/ongoingSearch/1/${size}/${name}/${props.state}`)
        .then(function (resp) {
          setResult(resp.data);
        });
      axios
        .get(`/ongoingTask/ongoingSearchTotal/${name}/${props.state}`)
        .then((res) => {
          setTotalRes(res.data);
        });
    } else {
      setResult(temData);
      setTotalRes(temTotal);
    }
  }, [props.state]);
  useEffect(() => {
    axios.get(`/ongoingTask/ongoing/1/${size}/${name}`).then((res) => {
      console.log(res);
      setResult(res.data);
      setTemData(res.data);
    });
    axios.get(`/ongoingTask/ongoingTotal/${name}`).then((res) => {
      setTotalRes(res.data);
      setTemTotal(res.data);
    });
  }, []);
  return (
    <div className="outFormD">
      <div className="personalCardsD">
        {result.map((e,index) => (
          <div className="pCards" key = {e+index}>
            <Card
              title={e[1]}
              hoverable="true"
              extra={
                <Button
                  type="primary"
                  onClick={() => {
                    axios.get(`/ongoingTask/agree/${e[0]}`).then((res) => {
                      if (res.data == "success") {
                        window.location.reload();
                      } else {
                        alert("something is wrong");
                        window.location.reload();
                      }
                    });
                  }}
                  shape="round"
                  size="large"
                >
                  Complete
                </Button>
              }
              style={{ width: 900, margin: 6, height: heig }}
            >
              {/* <p>{e.tag}</p> */}
              {/*  <TagShow tagInput = {e[4]}/>*/}
              <p>${e[2]}</p>
              <p>{e[5].substring(0, lenth)}...</p>
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
          pageSize={size}
          onChange={(e) => {
            if (props.state === "") {
              axios
                .get(`/ongoingTask/ongoing/${e}/${size}/${name}`)
                .then((res) => {
                  // res.data.map(e => ({id:e.id, title: e.title}))
                  setResult(res.data);
                });
            } else {
              axios
                .get(
                  `/ongoingTask/ongoingSearch/${e}/${size}/${name}/${props.state}`
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
