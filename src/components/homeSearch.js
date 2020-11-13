import React, { useState, useContext, Fragment } from "react";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import axios from "axios";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const div1 = {
  width: "900px",
  margin: "20px auto",
  // minHeight: "200px",
  boxSizing: "border-box",
};
export default function HomeSearch(props) {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  return (
      <div style={div1}>
        {/* <br />
        <Input
          placeholder="input keyword"
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
        />
        <br />
        <br />
        <Input prefix="$" suffix="AUD" />
        <br />
        <br /> */}
        <Search
          placeholder="Input keyword"
          enterButton="Search"
          size="large"
          suffix={suffix}
          value={keyword}
          onChange={(e) => {
            setKeyword(e.target.value);
          }}
          onSearch={() => {
            let address = `http://192.168.0.6:8181/task/search/${keyword}`;
            axios.get(address).then(function (resp) {
              // let a = resp.json();
              // console.log(resp)
              props.setState(resp.data);
            });
          }}
        />
      </div>
  );
}
