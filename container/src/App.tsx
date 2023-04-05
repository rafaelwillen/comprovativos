import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import { mount as mountMarketing } from "marketing/MarketingApp";
// import { mount as mountHelping } from "helping/HelpingApp";
import Spinner from "react-bootstrap/Spinner";
import "./index.scss";
import { createBrowserRouter, BrowserRouter } from "react-router-dom";
// console.log(mount);

const App = () => (
  <div className="bg-gray-50">
    <Header />
    <React.Suspense fallback={<Spinner />}>
      {mountMarketing(document.getElementById("app-marketing"))}
    </React.Suspense>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
