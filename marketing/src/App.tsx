import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";
import Landing from "./Pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
]);

const App = () => <RouterProvider router={router} />;
ReactDOM.render(<App />, document.getElementById("app"));
