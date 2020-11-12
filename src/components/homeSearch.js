import React, { useState, useContext, Fragment } from "react";
import { TestContext } from "../contexts/TestContext";
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
  margin: "30px auto",
  minHeight: "200px",
  boxSizing: "border-box",
};
export default function HomeSearch(props) {
  const { dispatch } = useContext(TestContext);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  return (
    <Fragment>
      <div style={div1}>
        <br />
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
        <br />
        <Search
          placeholder="Category"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={() => {
            let address = `http://localhost:8181/task/search/${keyword}`;
            axios.get(address).then(function (resp) {
              let a = resp.data;
              let b = [{ a: "b" }, {}];
              props.setState(b);
              console.log(resp.data);
            });
          }}
        />
      </div>
    </Fragment>
  );
}
