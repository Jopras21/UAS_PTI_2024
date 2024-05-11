import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import About from "/src/About/about.jsx";
import Destination from "../src/Destination/destination.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Destination/*" element={<Destination />} />
          <Route path="/About/*" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
