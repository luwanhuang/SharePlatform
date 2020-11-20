import React, { useState, useContext, useEffect } from "react";
import { Card, Pagination, Button } from "antd";
import axios from "../utils/axiosInstance";
import { TextContext } from "../app";
import "../../css/personalTask.css";

export default function FinishedTask(props) {
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
        .get(`/finishedTask/finishedSearch/1/${size}/${name}/${props.state}`)
        .then(function (resp) {
          setResult(resp.data);
        });
      axios
        .get(`/finishedTask/finishedSearchTotal/${name}/${props.state}`)
        .then((res) => {
          setTotalRes(res.data);
        });
    } else {
      setResult(temData);
      setTotalRes(temTotal);
    }
  }, [props.state]);
  useEffect(() => {
    axios.get(`/finishedTask/finished/1/${size}/${name}`).then((res) => {
      console.log(res);
      setResult(res.data);
      setTemData(res.data);
    });
    axios.get(`/finishedTask/finishedTotal/${name}`).then((res) => {
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
              //     extra={<Button type="primary"
              //     onClick = {
              //         ()=>{
              //             axios.get(`/finishedTask/agree/${e.id}`)
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
          total={totalRes}
          onChange={(e) => {
            if (props.state === "") {
              axios
                .get(`/finishedTask/finished/${e}/${size}/${name}`)
                .then((res) => {
                  // res.data.map(e => ({id:e.id, title: e.title}))
                  setResult(res.data);
                });
            } else {
              axios
                .get(
                  `/finishedTask/finishedSearch/${e}/${size}/${name}/${props.state}`
                )
                .then((res) => setResult(res.data.content));
            }
          }}
        />
      </div>
    </div>
  );
}

// import React, { Fragment, useState, useContext, useEffect } from "react";
// import { Card } from 'antd';
// import {Link} from 'react-router-dom';
// import axios from "axios";
// import {TextContext} from "../app";

// export default function FinishedTask() {
//   const [name,setName] = useContext(TextContext);
//   const [user,setUser] = useState([]);
//   useEffect(() => {
//     axios.get(`/finishedTask/search/${name}`)
//     .then(res => {
//       console.log(res.data)
//         setUser(res.data);
//     }
//     )
//     }, [])
//   return (
//     <Fragment>
//       {
//         user.map(e=>(
//         <Card title={e.title} style={{ width: 900, margin : 10 }}>
//         <p>${e.price}</p>
//         <p>{e.details}</p>
//       </Card>

//       ))
//       }
//     </Fragment>
//   );
// }
