import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Understanding Props

function Hello(props) {
  console.log( Object.keys(props));
  return (
    <div>
      <h1>Welcome to {props.library}</h1>
      <p>{props.message}</p>
      <p>{Object.keys(props).length} Props Total</p>
    </div>
  );
}

ReactDOM.render(<Hello library='ReactJS' message='Have fun!!!' number={3} />, document.getElementById("root"));
