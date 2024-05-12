import React from "react";
import GedungLondon from "../assets/BgSejarah/gedunglondon.jpg";
import DescAwal from "./descAwal";
import CardHistory from "./cardHistory";
import Location from "./location";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

function History() {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="container">
        <div className="title">
          <h1>Sejarah</h1>
          <img src={GedungLondon} alt="gedung london" />
        </div>
        <div className="body">
          <div className="description">
            <h2>Sejarah Singkat Provinsi Sumatera Utara</h2>
            <DescAwal />
          </div>
          <div>
            <h2>Tempat Bersejarah</h2>
            {Location.map(function (Location) {
              return (
                <CardHistory
                  id={Location.id}
                  img={Location.img}
                  name={Location.name}
                  description={Location.description}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default History;
