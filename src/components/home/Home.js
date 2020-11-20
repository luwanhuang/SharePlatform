import React, { useState, useContext } from "react";
import HomeSearch from "./homeSearch";
import HomeForm from "./HomeForm";
import { PathContext } from "../app";

export default function Home() {
  const [path, setPath] = useContext(PathContext);
  setPath("/home");
  const [state, setState] = useState("");
  const div1 = {
    width: "900px",
    margin: "10px auto",
    minHeight: "200px",
    padding: "10px",
    boxSizing: "border-box",
  };

  return (
    <div style={div1}>
      <HomeSearch setState={setState} />
      <HomeForm state={state} />
    </div>
  );
}
