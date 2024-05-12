import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Home from "../src/Home"
import Destination from "../src/Destination/destination.jsx"
import History from "../src/History/history.jsx"
import About from "/src/About/about.jsx"
import { ThemeProvider } from "@material-tailwind/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Destination/*" element={<Destination />} />
                    <Route path="/About/*" element={<About />} />
                    <Route path="/History/*" element={<History />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
)
