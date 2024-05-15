import React, { useState } from "react";
import Toba from "../assets/BgSejarah/toba.jpg";
import DescAwal from "./descAwal";
import CardHistory from "./cardHis.jsx";
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
            className="border rounded-full text-center p-4 mb-6 mr-2 searchBar w-64"
          />
          <button
            onClick={handleSearch}
            className="border rounded-xl p-2 ml-2 mb-6 bg-neutral text-white"
          >
            Search
          </button>
        </div>
        <div className="title">
          <h1 className="mb-6">Sejarah</h1>
          <img src={Toba} alt=""></img>
        </div>
        <div className="bodyHistory">
          <div className="description">
            <DescAwal />
          </div>
          <div className="cardContainer">
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
