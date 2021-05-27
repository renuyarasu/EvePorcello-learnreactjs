import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Creating a React component;
function Hello() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This error occurred during the build time and cannot be dismissed.</p>
    </div>
  );
}

ReactDOM.render(<Hello />, document.getElementById("root"));
