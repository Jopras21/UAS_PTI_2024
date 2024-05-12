import React from "react";
import GedungLondon from "../assets/BgSejarah/gedunglondon.jpg";
import DescAwal from "./descAwal";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";

function History(){
    return(
      <>
        <div className="navbar">
            <Navbar />
        </div>
        <div className="container">
            <div className="title">
                <h1>Sejarah</h1>
                <img src={GedungLondon} alt="gedung london"></img>
            </div>
            <div className="body">
                <div className="description">
                    <h3>Sejarah Singkat Provinsi Sumatera Utara</h3>
                    <DescAwal />
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