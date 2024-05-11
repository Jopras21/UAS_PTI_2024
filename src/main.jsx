// main.jsx or app.jsx (either one)
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import About from "../About/about.jsx";
import Destination from "../Destination/destination.jsx";
import Navbar from "./Navbar/navbar.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/Destination/*" element={<Destination />} /> {/* Use wildcard for nested routes */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
