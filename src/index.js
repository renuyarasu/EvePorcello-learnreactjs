import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//Rendering Lists

const lakeList = ["Gnaga", "Yamuna", "Krishna", "Saraswathi"];
function App(props) {
  return (
    <ul style={{ color: "red", fontWeight: "bold" }}>
      {props.lakes.map(lake => (
        <li>{lake}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(<App lakes={lakeList} />, document.getElementById("root"));
