import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import About from "/src/About/about.jsx";
import Destination from "../src/Destination/destination.jsx";
import Navbar from "./Navbar/navbar.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
          <Destination />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
