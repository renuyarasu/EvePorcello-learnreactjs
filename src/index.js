import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//Introducing and Understand JSX
// let city = 'Hyderabad';
let city = {
  name: "Hyderabad",
  coutry: "India",
};

ReactDOM.render(
  <h1>
    {city.name} in {city.coutry}
  </h1>,
  document.getElementById("root")
);
