import React, { Fragment } from "react";

export default function HomeForm(props) {
  const div1 = {
    width: "900px",
    height: "800px",
    display: "block",
    margin: "0 auto",
  };
  return (
    <Fragment>
      <div>{props.state}</div>
    </Fragment>
  );
}
