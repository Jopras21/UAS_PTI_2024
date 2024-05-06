import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import About from "./about.jsx"
 
import { ThemeProvider } from "@material-tailwind/react";
 
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <About />
    </ThemeProvider>
  </React.StrictMode>
);