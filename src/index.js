import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Example from "./components/app";
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';


ReactDOM.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>,
  document.getElementById("root")
);
