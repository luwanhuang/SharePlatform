import React, { useState, useEffect } from "react";
import { Card, Pagination } from "antd";
import { Link } from "react-router-dom";
import axios from "../utils/axiosInstance";
import TagShow from "../utils/TagShow";
import "../../css/homeForm.css";

export default function HomeForm(props) {
  const [result, setResult] = useState([]);
  const [totalRes, setTotalRes] = useState(0);

  const [temData, setTemData] = useState([]);
  const [temTotal, setTemTotal] = useState(0);

  //this part to change height depend on different screen size
  const lenth = window.innerHeight < 1100 ? 238 : 600;
  const heig = window.innerHeight < 1100 ? "237px" : "303px";

  useEffect(() => {
    if (props.state !== "") {
      axios.get(`/task/keyword/1/3/${props.state}`).then(function (resp) {
        setResult(resp.data.content);
      });
      axios.get(`/task/totalLikeKeyword/${props.state}`).then((res) => {
        setTotalRes(res.data);
      });
    } else {
      setResult(temData);
      setTotalRes(temTotal);
    }
  }, [props.state]);
  useEffect(() => {
    axios.get("/task/findAll/1/3").then((res) => {
      setTemData(res.data.content);
      setResult(res.data.content);
    });
    axios.get("/task/showTotal").then((res) => {
      console.log(res);
      setTemTotal(res.data);
      setTotalRes(res.data);
    });
  }, []);

  return (
    <div className="homeFormD">
      <div className="containCardsD">
        {result.map((e, index) => (
          <div className="cards" key = {e+index}>
            <Card
              style={{ height: heig }}
              hoverable="true"
              title={e.title}
              extra={
                <Link
                  to={{
                    pathname: "/applyTask",
                    state: { from: e },
                  }}
                >
                  Apply
                </Link>
              }
            >
              <TagShow tagInput = {e.tag}/>
              {/*<p>{e.tag}</p>*/}
              <p>${e.price}</p>
              <p>{e.details.substring(0, lenth)}...</p>
            </Card>
          </div>
        ))}
      </div>
      <div className="paginationD">
        <Pagination
          defaultCurrent={1}
          pageSize={3}
          onChange={(e) => {
            if (props.state === "") {
              axios.get(`/task/findAll/${e}/${3}`).then((res) => {
                // res.data.map(e => ({id:e.id, title: e.title}))
                console.log(res.data.content);
                setResult(res.data.content);
              });
            } else {
              axios
                .get(`/task/keyword/${e}/${3}/${props.state}`)
                .then((res) => setResult(res.data.content));
            }
          }}
          total={totalRes}
        />
      </div>
    </div>
  );
}
