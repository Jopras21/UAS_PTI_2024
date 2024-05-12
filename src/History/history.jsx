import React, { useState } from "react";
import GedungLondon from "../assets/BgSejarah/gedunglondon.jpg";
import DescAwal from "./descAwal";
import CardHistory from "./cardHistory";
import Location from "./location";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import SearchResults from "../History/search.jsx";
import "./history.css";

function History(){
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <>
          <div className="navbar">
            <Navbar onSearch={setSearchTerm} />
          </div>
          <div className="containerHistory">
            <div className="title">
              <h1>Sejarah</h1>
              <img src={GedungLondon} alt="gedung london"></img>
            </div>
            <div className="bodyHistory">
              <div className="description">
                <h3>Sejarah Singkat Provinsi Sumatera Utara</h3>
                <DescAwal />
              </div>
              <div>
                <h2>Tempat Bersejarah</h2>
                    {Location.map(function(Location)
                        {
                        return(
                            <CardHistory
                            id={Location.id}
                            img={Location.img}
                            name={Location.name}
                            description={Location.description}
                            />
                        )
                })}
            </div>
            </div>
          </div>
          <div className="search">
            <SearchResults searchTerm={searchTerm} />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </>
      );
    }

export default History;
