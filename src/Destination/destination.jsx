import React, { useState } from "react";
import Navbar from "../Navbar/navbar.jsx";
import Carousel from "../Carousel/carousel.jsx";
import Culinary from "./culinary.jsx";
import Footer from "../Footer/footer.jsx";
import Pointer from "../assets/pointer.png";
import Video from "../assets/Video/destination.mp4";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import "./destination.css";
import TopButton from "../Button/topButton.jsx";

function Destination() {
  const [selectedMarker, setSelectedMarker] = useState(null);

  const markers = [
    {
      geocode: [2.7861, 98.6161],
      img: "../src/assets/Landscape/Toba.png",
      popup: "🏞️ Danau Toba",
      description: "Danau Toba adalah danau vulkanik terbesar di dunia.",
    },
    {
      geocode: [3.2, 98.5167],
      img: "",
      popup: "⛰️ Gunung Sibayak",
      description:
        "Gunung Sibayak adalah gunung berapi aktif yang populer untuk hiking.",
    },
    {
      geocode: [3.5435, 98.1324],
      popup: "🏔️ Bukit Lawang (trekking dan pusat orangutan)",
      description: "Bukit Lawang terkenal dengan pusat konservasi orangutan.",
    },
    {
      geocode: [2.9165, 98.516],
      popup: "💦 Air Terjun Sipiso Piso",
      description:
        "Air Terjun Sipiso Piso adalah salah satu air terjun tertinggi di Indonesia.",
    },
    {
      geocode: [3.1973, 98.541],
      popup: "🌳 Taman Alam Lumbini",
      description:
        "Taman Alam Lumbini adalah tempat suci Buddha dengan pagoda emas.",
    },
    {
      geocode: [0.8667, 104.4167],
      popup: "🏝️ Pulau Berhala",
      description:
        "Pulau Berhala adalah pulau eksotis dengan pantai yang indah.",
    },
    {
      geocode: [3.1696, 98.393],
      popup: "🏔️ Gunung Sinabung",
      description:
        "Gunung Sinabung adalah gunung berapi aktif yang sering meletus.",
    },
    {
      geocode: [2.9526, 99.0594],
      popup: "🦚 Taman Hewan Pematang Siantar",
      description:
        "Taman Hewan Pematang Siantar adalah kebun binatang yang terkenal.",
    },
  ];

  const customIcon = new Icon({
    iconUrl: Pointer,
    iconSize: [38, 38],
  });

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <TopButton />
      <div className="big-container">
        <div className="destination">
          <div className="text-xl mt-12">
            <h1 className="title1">Destinasi Wisata</h1>
          </div>
          <div className="carousel">
            <Carousel />
          </div>
          <div className="content">
            <video className="vid" controls autoPlay muted loop="20">
              <source src={Video} type="video/mp4" />
            </video>
          </div>
          <div id="map" className="map-container">
            <MapContainer center={[2.1154, 99.5451]} zoom={7}>
              <TileLayer url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=ot1stQR4IlixqPHIopnI" />
              <MarkerClusterGroup>
                {markers.map((marker) => (
                  <Marker
                    key={marker.popup}
                    position={marker.geocode}
                    icon={customIcon}
                    eventHandlers={{
                      click: () => {
                        setSelectedMarker(marker);
                      },
                    }}
                  >
                    <Popup>{marker.popup}</Popup>
                  </Marker>
                ))}
              </MarkerClusterGroup>
            </MapContainer>
            {selectedMarker && (
              <div className="marker-description">
                <img src={selectedMarker.img} alt={selectedMarker.popup} />
                <h2>{selectedMarker.popup}</h2>
                <p>{selectedMarker.description}</p>
              </div>
            )}
          </div>
          <div className="persue"></div>
        </div>
        <div className="culinary">
          <Culinary />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Destination;
