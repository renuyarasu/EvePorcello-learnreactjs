import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Understanding Props
function Hello({ library, message, number }) {
  return (
    <div>
      <h1>Hello {library}</h1>
      <p>{message}</p>
      <p>{number}</p>
    </div>
  );
}
ReactDOM.render(
  <Hello library="ReactJS" message="Learning now!" number={3} />,
  document.getElementById("root")
);
