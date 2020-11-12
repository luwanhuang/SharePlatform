import React, { useState, useContext, Fragment } from "react";
import { TestContext } from "../contexts/TestContext";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";

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
export default function HomeSearch() {
  const { dispatch } = useContext(TestContext);
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  return (
    <Fragment>
      <div style={div1}>
        <br />
        <Input placeholder="input keyword" />
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
          onSearch={(value) => console.log(value)}
        />
      </div>
    </Fragment>
  );
}
