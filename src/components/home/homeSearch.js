import React, { useState} from "react";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
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

  return (
    <div className="SearchDiv">
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
          props.setState(keyword);
        }}
      />
    </div>
  );
}
