import React from "react";
import Toba from "../assets/BgSejarah/toba.jpg";
import DescAwal from "./descAwal";
import CardHistory from "./cardHis.jsx";
import Location from "./location.js";
import Pakaian from "./pakaian.js";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import Lagu from "../Lagu/lagu.jsx";
import TopButton from "../Button/topButton.jsx";
import "./history.css";

function History() {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <TopButton />
      <div className="title">
        <p className="Judul">History</p>
        <video className="vid" controls autoPlay muted loop="20">
          <source
            src="https://docs.material-tailwind.com/demo.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="containerHistory">
        <div className="title">
        </div>
        <div className="bodyHistory">
          <div className="description">
            <DescAwal />
          </div>
          <div className="cardContainer">
            {Location.map(function (Location) {
              return (
                <CardHistory
                  key={Location.id}
                  img={Location.img}
                  name={Location.name}
                  description={Location.description}
                />
              );
            })}
          </div>
          <div>
            <div className="JudulHis">
              <h1>Pakaian Adat Sumatera Utara</h1>
            </div>
            <div className="DescHis">
              <p>
                Sumatera Utara kaya akan keberagaman budaya terutama dalam aspek
                budaya dan adat istiadat, salah satunya adalah pakaian adat.
                Berikut merupakan beberapa pakaian adat yang ada di Sumatera
                Utara yang berasal dari berbagai suku yang berbeda
              </p>
            </div>
            <br />
            <div className="cardContainer">
              {Pakaian.map(function (Pakaian) {
                return (
                  <CardHistory
                    key={Pakaian.id}
                    img={Pakaian.img}
                    name={Pakaian.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="lagu">
        
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default History;
