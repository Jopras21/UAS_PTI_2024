import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "../src/Home/home.jsx";
import Destination from "../src/Destination/destination.jsx";
import History from "../src/History/history.jsx";
import About from "../src/About/about.jsx";
import Feedback from "../src/Feedback/feedback.jsx";

import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Destination/*" element={<Destination />} />
          <Route path="/About/*" element={<About />} />
          <Route path="/History/*" element={<History />} />
          <Route path="/Feedback/*" element={<Feedback />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
