import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./about.jsx"
import Navbar from "./navbar.jsx";
import { ThemeProvider } from "@material-tailwind/react";

 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <Navbar /> */}
      <About />
    </ThemeProvider>
  </React.StrictMode>
);