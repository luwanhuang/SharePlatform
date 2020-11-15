import React, { useState } from "react";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import "../../css/pSearch.css";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);

export default function PSearch(props) {
  const [keyword, setKeyword] = useState("");
  return (
    <div className = "SearchDiv" >
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
          props.setState(keyword);
        }}
      />
    </div>
  );
}
