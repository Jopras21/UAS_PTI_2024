import React from "react";
import Navbar from "../Navbar/navbar.jsx";
import Carousel from "../Carousel/carousel.jsx";
import Culinary from "./culinary.jsx";
import Footer from "../Footer/footer.jsx";
import Pointer from "../assets/pointer.png";
import Video from "../assets/Video/destination.mp4"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import { Icon, divIcon, point } from "leaflet";
import "./destination.css";
import Lagu from"../Lagu/lagu.jsx"

function Destination() {
  //   var map = L.map("map").setView([51.505, -0.09], 13);
  //   L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  //     maxZoom: 19,
  //     attribution:
  //       '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  //   }).addTo(map);

  //   navigator.geolocation.watchPosition(succes, error);

  //   function succes(pos) {
  //     const lat = pos.coords. latitude;
  //     const lng = pos.coords. longitude;
  //     const accuracy = pos.coords.accuray;

  //     let marker = L.marker([lat, lng]).addTo(map);
  //     let circle = L.circle([lat, lng], {radius: accuracy}).addTo(map);

  //     map.fitbounds(circle.getBounds());
  //   }

  //   function error(err) {
  //     if (err.code === 1) {
  //         alert("Please allow geolocation acces");
  //     } else (
  //         alert("Something went wrong")
  //     )
  //   }
  const markers = [
    {
      geocode: [2.7861, 98.6161],
      popup: "🏞️ Danau Toba",
    },
    {
      geocode: [3.2, 98.5167],
      popup: "⛰️ Gunung Sibayak",
    },
    {
      geocode: [3.5435, 98.1324],
      popup: "🏔️ Bukit lawang (treking dan pusat orang utan)",
    },
    {
      geocode: [2.9165, 98.516],
      popup: "💦 Air Terjun Sipiso Piso",
    },
    {
      geocode: [3.1973, 98.541],
      popup: "🌳 Taman Alam Lumbini",
    },
    {
      geocode: [0.8667, 104.4167],
      popup: "🏝️ Pulau Berhala",
    },
    {
      geocode: [3.1696, 98.393],
      popup: "🏔️ Gunung Sinabung",
    },
    {
      geocode: [2.9526, 99.0594],
      popup: "🦚 Taman Hewan Pematang Siantar",
    },
  ];

  const customIcon = new Icon({
    iconUrl: Pointer,
    iconSize: [38, 38],
  });

  // const createCustomClusterIcon = (cluster) => {
  //   return new divIcon({
  //     html: `<div class="cluster-icon>${cluster.getChildCount()}</div>`,
  //     className: "custom-marker-cluster",
  //     iconSize: point(33, 33, true),
  //   });
  // };

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
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
              <source
                src={Video}
                type="video/mp4"
              />
            </video>
          </div>
          <div id="map">
            <MapContainer center={[2.1154, 99.5451]} zoom={7}>
              <TileLayer url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=ot1stQR4IlixqPHIopnI" />
              <MarkerClusterGroup
              // chunkedLoading
              // iconCreateFunction={createCustomClusterIcon}
              >
                {markers.map((marker) => (
                  <Marker position={marker.geocode} icon={customIcon}>
                    <Popup>{marker.popup}</Popup>
                  </Marker>
                ))}
              </MarkerClusterGroup>
            </MapContainer>
          </div>
          <div className="persue"></div>
        </div>
        <div className="culinary">
          <Culinary />
        </div>
        <div className="lagu">
        <Lagu query="Sinanggar Tulo" />
        </div>
      </div>
      <div className="footer">
        <Footer />
        
      </div>
    </>
  );
}

export default Destination;
