import React, { useState, useContext, useEffect } from "react";
import { Card, Pagination } from "antd";
import axios from "../utils/axiosInstance";
import { TextContext } from "../app";
import "../../css/personalTask.css";
import TagShow from "../utils/TagShow";

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
    if (props.state !== "") {
      axios
        .get(
          `/finishedApplication/finishedJobSearch/1/${size}/${name}/${props.state}`
        )
        .then(function (resp) {
          setResult(resp.data);
        });
      axios
        .get(
          `/finishedApplication/totalFinishedJobSearch/${name}/${props.state}`
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
      .get(`/finishedApplication/finishedJob/1/${size}/${name}`)
      .then((res) => {
        console.log(res);
        setResult(res.data);
        setTemData(res.data);
      });
    axios.get(`/finishedApplication/totalFinishedJob/${name}`).then((res) => {
      setTotalRes(res.data);
      setTemTotal(res.data);
    });
  }, []);
  return (
    <div className="outFormD">
      <div className="personalCardsD">
        {
            result.map((e, index) => (
          <div className="pCards" key = {e+index}>
            <Card
              title={e.title}
              hoverable="true"
              //     extra={<Button type="primary"
              //     onClick = {
              //         ()=>{
              //             axios.get(`/finishedApplication/agree/${e.id}`)
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
                <TagShow tagInput = {e.tag}/>
              <p>${e.price}</p>
              <p>{e.details.substring(0, lenth)}...</p>
              <p>
                <i>Posted by: </i>
                <b>{e.username}</b>
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
                .get(`/finishedApplication/finishedJob/${e}/${size}/${name}`)
                .then((res) => {
                  // res.data.map(e => ({id:e.id, title: e.title}))
                  setResult(res.data);
                });
            } else {
              axios
                .get(
                  `/finishedApplication/finishedJobSearch/${e}/${size}/${name}/${props.state}`
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

// import React, { Fragment, useState, useContext, useEffect } from "react";
// import { Card } from 'antd';
// import {Link} from 'react-router-dom';
// import axios from "axios";
// import {TextContext} from "../app";

// export default function AppliedTask() {
//   const [name,setName] = useContext(TextContext);
//   const [user,setUser] = useState([]);
//   useEffect(() => {
//     axios.get(`/finishedTask/finishedApp/${name}`)
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
//         <Card title={e.applicant}
//         // extra={<Link style ={{display: (e[3]=="0"?"none":"block")}} to={{
//         //   pathname: "/applicants",
//         //   state: { from: e }
//         // }}>More</Link>}
//         style={{ width: 900, margin : 10 }}>
//         <p>TaskID: {e.taskID}</p>
//         <p>{e.details}</p>
//       </Card>

//       ))
//       }
//     </Fragment>
//   );
// }
