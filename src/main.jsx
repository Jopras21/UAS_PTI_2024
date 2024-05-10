import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./About/about.jsx";

import Navbar from "./Navbar/navbar.jsx";
import Destination from "./Destination/destination.jsx";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <About />
    </ThemeProvider>
  </React.StrictMode>
);
