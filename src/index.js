import React from "react";
import ReactDOM from "react-dom";

function getButtontext() {
  return "Click on me!";
}

const App = function() {
  return (
    <div>
      <label className="label" for="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {getButtontext()}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
