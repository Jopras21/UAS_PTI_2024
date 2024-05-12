import React from "react";
import Weather from "../Weather/weather";
import Navbar from "../Navbar/navbar";

function Home() {
  return (
    <div className="weather">
      <Navbar />
      <Weather />
    </div>
  );
}

export default Home;
