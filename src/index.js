import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  // React.createElement('div', {style: {color:'crimson'}},
  // React.createElement('h1', null, 'Hellow World!')),

  /*
  React.createElement(

    "ul",
    {
      style: {
        fontWeight: "bold",
        textTransform: "uppercase",
        color: "crimson",
      },
    },
    React.createElement("li", null, "Apples"),
    React.createElement("li", null, "Oranges"),
    React.createElement("li", null, "Bannas"),
    React.createElement("li", null, "Mangoes")
  ),
*/

  //Introducing JSX
  <ul>
    <li>Apples</li>
    <li>Oranges</li>
    <li>Bannas</li>
    <li>Mangoes</li>
    <li>Ghrapes</li>
  </ul>,

  document.getElementById("root")
);
reportWebVitals();
