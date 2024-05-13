import React from "react";
import Weather from "../Weather/weather";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

function Home() {
  return (
    <div className="weather">
      <Navbar />
      <Weather />
      <Footer />
    </div>
  );
}

export default Home;
