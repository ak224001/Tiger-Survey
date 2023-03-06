import React, { useState } from "react";

export default function (props) {
  console.log(props);
  const [display, setdisplay] = useState("header2");
  return (
    <>
      {display == "header1" ? (
        <h1>{props.page}</h1>
      ) : (
        <>
          <h1>Header 2</h1>
          <h1>Header 3</h1>
        </>
      )}
      <button onClick={() => setdisplay("header1")}>Display header1 </button>
    </>
  );
}
