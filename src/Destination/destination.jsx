import React, { useState, useEffect } from "react";
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
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lagu from "../Lagu/lagu.jsx";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function Destination() {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true });
  const [initialPopupShown, setInitialPopupShown] = useState(false);

  const markers = [
    {
      geocode: [2.7861, 98.6161],
      img: "../src/assets/Landscape/Toba.png",
      popup: "🏞️ Danau Toba",
      description:
        "Danau Toba adalah sebuah keajaiban alam yang mempesona. Terletak di tengah-tengah pegunungan, danau vulkanik ini memikat ribuan mata setiap tahunnya. Airnya yang biru memukau, menyajikan pemandangan indah yang tak terlupakan. Selain keindahannya, Danau Toba juga menyimpan misteri sejarah yang menarik, menjadi rumah bagi berbagai cerita dan legenda. Menjelajahi Danau Toba adalah pengalaman yang akan memberi kesan mendalam bagi siapa pun yang berani menjelajahinya. Mari temukan keajaiban ini dan biarkan diri Anda terpesona oleh pesonanya yang tiada tara!",
    },
    {
      geocode: [3.2, 98.5167],
      img: "../src/assets/Landscape/Sibayak.jpg",
      popup: "⛰️ Gunung Sibayak",
      description:
        "Gunung Sibayak adalah perwujudan keindahan alam yang mengagumkan. Berdiri megah sebagai saksi bisu kekuatan alam, gunung berapi aktif ini menyajikan panorama yang luar biasa indah. Dikelilingi oleh hamparan hijau dan udara segar yang menyejukkan, Sibayak menjadi tujuan favorit para pendaki dan petualang. Terlepas dari keangkerannya sebagai gunung berapi aktif, Sibayak menawarkan petualangan tak terlupakan dengan pemandangan yang memesona. Ayo jelajahi Gunung Sibayak dan saksikan keindahannya yang menakjubkan!",
    },
    {
      geocode: [3.5435, 98.1324],
      img: "../src/assets/Landscape/Lawang.jpg",
      popup: "🏔️ Bukit Lawang",
      description:
        "Bukit Lawang adalah surga bagi pecinta alam dan satwa liar. Terkenal dengan kekayaan alamnya yang melimpah dan keunikan konservasi orangutan, Bukit Lawang menawarkan pengalaman tak tertandingi bagi para petualang. Jelajahi hutan hujan tropis yang lebat, temui orangutan liar dalam habitat aslinya, dan nikmati keindahan alam yang memukau. Bukit Lawang bukan hanya destinasi wisata, tetapi juga pelajaran tentang pentingnya pelestarian alam dan satwa liar. Mari berpetualang di Bukit Lawang dan biarkan diri Anda terpesona oleh keajaiban alam yang tak terlupakan!",
    },
    {
      geocode: [2.9165, 98.516],
      img: "../src/assets/Landscape/Sipiso.jpeg",
      popup: "💦 Air Terjun Sipiso Piso",
      description:
        "Air Terjun Sipiso Piso adalah anugerah alam yang menakjubkan. Merupakan salah satu air terjun tertinggi di Indonesia, Sipiso Piso menawarkan pemandangan yang menakjubkan bagi para pengunjungnya. Air yang jatuh dari ketinggian memukau, menciptakan suasana yang magis dan menyejukkan. Sipiso Piso bukan hanya destinasi wisata, tetapi juga sumber inspirasi bagi para pelukis, penulis, dan seniman. Mari nikmati keindahan Air Terjun Sipiso Piso dan biarkan diri Anda terpesona oleh pesonanya yang tiada tara!",
    },
    {
      geocode: [3.1973, 98.541],
      img: "../src/assets/Landscape/Lumbini.jpg",
      popup: "🌳 Taman Alam Lumbini",
      description:
        "Taman Alam Lumbini adalah tempat yang dihormati dan disucikan oleh umat Buddha di seluruh dunia. Dengan pagoda emas yang megah sebagai pusat perhatian, Taman Alam Lumbini menawarkan kedamaian dan ketenangan bagi setiap pengunjungnya. Berjalan-jalan di antara pohon-pohon suci, merenung di depan patung-patung Buddha, dan merasakan energi spiritual yang mengalir melalui tempat ini. Taman Alam Lumbini bukan hanya destinasi wisata, tetapi juga pelajaran tentang kehidupan dan kebijaksanaan. Mari kunjungi Taman Alam Lumbini dan biarkan diri Anda tersentuh oleh ketenangan yang disajikannya!",
    },
    {
      geocode: [0.8667, 104.4167],
      img: "../src/assets/Landscape/Berhala.jpeg",
      popup: "🏝️ Pulau Berhala",
      description:
        "Pulau Berhala adalah surga tersembunyi di tengah lautan yang luas. Dikelilingi oleh pasir putih dan air biru yang jernih, pulau ini menawarkan keindahan alam yang memikat bagi setiap pengunjungnya. Berenang di air yang tenang, berjemur di pantai yang indah, dan menjelajahi kehidupan bawah laut yang kaya akan kehidupan. Pulau Berhala adalah tempat yang sempurna untuk berlibur dan melarikan diri dari hiruk pikuk kota. Mari kunjungi Pulau Berhala dan biarkan diri Anda terpesona oleh keindahannya yang menakjubkan!",
    },
    {
      geocode: [3.1696, 98.393],
      img: "../src/assets/Landscape/Sinabung.jpg",
      popup: "🏔️ Gunung Sinabung",
      description:
        "Gunung Sinabung adalah keindahan alam yang memiliki daya tarik yang unik. Sebagai gunung berapi aktif yang sering meletus, Sinabung menawarkan pemandangan yang spektakuler dan menegangkan bagi para pengunjungnya. Dikelilingi oleh hamparan tanah subur dan pepohonan hijau, Sinabung menjadi titik fokus bagi para petualang dan pecinta alam. Terlepas dari risikonya, Gunung Sinabung menarik para pendaki dan peneliti untuk menjelajahi keindahannya yang megah. Ayo jelajahi Gunung Sinabung dan biarkan diri Anda terpesona oleh pesonanya yang tak tertandingi!",
    },
    {
      geocode: [2.9526, 99.0594],
      img: "../src/assets/Landscape/Siantar.jpg",
      popup: "🦚 Taman Hewan Pematang Siantar",
      description:
        "Taman Hewan Pematang Siantar adalah kebun binatang terkenal yang memukau pengunjung dengan keanekaragaman satwa liarnya. Sebagai rumah bagi berbagai jenis hewan eksotis, kebun binatang ini menawarkan pengalaman edukatif dan menghibur untuk semua usia. Jelajahi habitat berbagai spesies, pelajari tentang upaya konservasi, dan saksikan keindahan alam dari dekat. Taman Hewan Pematang Siantar bukan hanya sebuah kebun binatang; ini adalah tempat keajaiban dan penemuan.",
    },
  ];

  const customIcon = new Icon({
    iconUrl: Pointer,
    iconSize: [38, 38],
  });

  useEffect(() => {
    if (!initialPopupShown && inView) {
      setInitialPopupShown(true);
    }
  }, [initialPopupShown, inView]);

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
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            id="map"
            className="map-container"
          >
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
                <div className="popup-img rounded-full">
                  <img src={selectedMarker.img} alt={selectedMarker.popup} />
                </div>
                <div>
                  <h2 className="text-3xl text-white" id="popup">{selectedMarker.popup}</h2>
                  <p className="w-full px-6 text-white">{selectedMarker.description}</p>
                </div>
              </div>
            )}
          </motion.div>
          <div className="persue"></div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="culinary"
        >
          <Culinary />
        </motion.div>
      </div>
      <div className="lagu">
        <Lagu query="Rambadia Lagu Sumatera Utara" />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Destination;
