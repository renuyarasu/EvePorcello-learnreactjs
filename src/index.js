import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//Composing Components
function Lake({name}) {
  return <h1>{name}</h1>;
}

function App () {
  return (
    <div>
      <Lake name="Veda" />
      <Lake name="Gnapika" />
      <Lake name="Renuka Prasad" />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
