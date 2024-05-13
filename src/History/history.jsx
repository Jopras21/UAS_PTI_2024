import React, { useState } from "react";
import GedungLondon from "../assets/BgSejarah/gedunglondon.jpg";
import DescAwal from "./descAwal";
import CardHistory from "./cardHistory";
import Location from "./location.js";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import SearchResults from "../History/search.jsx";
import Lagu from "../Lagu/lagu.jsx";
import "./history.css";

function History() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <div className="navbar">
        <Navbar onSearch={setSearchTerm} />
      </div>
      <div className="containerHistory">
        <div className="flex justify-center w-full">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Search..."
            className="border rounded-full p-2 mb-6 mr-2 searchBar"
          />
          <button
            onClick={handleSearch}
            className="border rounded-xl p-2 ml-2 mb-6 bg-neutral text-white"
          >
            Search
          </button>
        </div>
        <div className="title">
          <h1>Sejarah</h1>
          <img src={GedungLondon} alt="gedung london"></img>
        </div>
        <div className="bodyHistory">
          <div className="description">
            <DescAwal />
          </div>
          <div>
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
      <div className="search">
        <SearchResults searchTerm={searchTerm} />
      </div>
      <div className="lagu">
        <Lagu query="Alu Siau" />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default History;
