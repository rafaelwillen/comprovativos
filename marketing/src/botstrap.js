import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function mount(element) {
  ReactDOM.render(<App />, element);
}

// if (process.env.NODE_ENV === "development") {
//   const devRoot = document.getElementById("marketing-dev");
//   if (devRoot) mount(devRoot);
// }

mount(document.getElementById("marketing-dev"));

export { mount };
