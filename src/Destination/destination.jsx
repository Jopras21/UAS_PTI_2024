import React from "react";
import Navbar from "../Navbar/navbar.jsx";
import Carousel from "../carousel.jsx"
import "./destination.css";

export default function Destination() {
    return (
        <>
        <div className="navbar">
            <Navbar />
        </div>
        <div>
            <Carousel />
        </div>
        <div className="destination">
            <div className="destination">
                <h1 className="title1">Tourist Destination</h1>
            </div>
            <div className="content">
                <div className="toba">
                    <img src="" alt="Danau toba" />
                    <p>Danau Toba</p>
                </div>
                <div className="samosir">
                    <img src="" alt="Danau toba" />
                    <p>Samosir</p>
                </div>
            </div>
        </div>
        </>
    );
}