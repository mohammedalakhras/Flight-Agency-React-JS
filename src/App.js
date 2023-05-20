import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./style.css";
import Discover from "./Component/discover/discover";
import Home from "./Component/Home";
// import About from './Component/ِaboutUs/aboutus';

export default function App() {
  return (
    <div>
      <Home />
    </div>
  );
}
