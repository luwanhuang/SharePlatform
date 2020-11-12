import React, { Fragment } from "react";

export default function HomeForm() {
  const div1 = {
    width: "900px",
    height: "800px",
    display: "block",
    margin: "0 auto",
  };
  return (
    <Fragment>
      <div>
        <img src="/img/task.png" style={div1} />
      </div>
    </Fragment>
  );
}
