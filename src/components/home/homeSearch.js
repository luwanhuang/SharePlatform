import React, { useState, useContext, Fragment, useEffect } from "react";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import axios from "axios";
import "../../css/homeSearch.css";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
export default function HomeSearch(props) {
  const [keyword, setKeyword] = useState("");
  // const [category, setCategory] = useState("");

  return (
    <div className="SearchDiv">
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
        allowClear="true"
        placeholder="Input keyword"
        enterButton="Search"
        size="large"
        suffix={suffix}
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        onSearch={() => {
          // let address = `http://192.168.0.6:8181/task/search/${keyword}`;
          // axios.get(address).then(function (resp) {
          //   // let a = resp.json();
          //   // console.log(resp)
          //   props.setState(resp.data);
          // });
          props.setState(keyword);
        }}
      />
    </div>
  );
}
