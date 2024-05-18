import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Toba from "../assets/BgSejarah/toba.jpg";
import DescAwal from "./descAwal";
import CarouselHis from "./carouselHis.jsx";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import Lagu from "../Lagu/lagu.jsx";
import TopButton from "../Button/topButton.jsx";
import "./history.css";
import Gallery from "../Gallery/gallery.jsx";
import Sunset from "../assets/sunset.jpg";

function History() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const parallaxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5 } },
  };

  return (
    <>
      <motion.div className="navbar">
        <Navbar />
      </motion.div>
      <TopButton />
      <div className="titleHistory">
        <p className="Judul">History</p>
        <motion.video
          className="vid"
          controls
          autoPlay
          muted
          loop="20"
          initial="hidden"
          animate={controls}
          variants={fadeInVariants}
        >
          <source
            src="https://docs.material-tailwind.com/demo.mp4"
            type="video/mp4"
          />
        </motion.video>
      </div>
      <div
        className="containerHistory"
        ref={ref}
        initial="hidden"
        animate={controls}
      >
        <div className="title"></div>
        <div className="bodyHistory">
          <div className="description" variants={parallaxVariants}>
            <DescAwal />
          </div>
          <div className="tempatHis">
            <motion.h1 variants={parallaxVariants}>Tempat Bersejarah</motion.h1>
          </div>
          <div className="carousel">
            <CarouselHis />
          </div>
          <div className="pakaianAdat">
            <div className="JudulHis">
              <motion.h1 variants={parallaxVariants}>
                Pakaian Adat Sumatera Utara
              </motion.h1>
            </div>
            <motion.div className="DescHis" variants={parallaxVariants}>
              <p>
                Sumatera Utara kaya akan keberagaman budaya terutama dalam aspek
                budaya dan adat istiadat, salah satunya adalah pakaian adat.
                Berikut merupakan beberapa pakaian adat yang ada di Sumatera
                Utara yang berasal dari berbagai suku yang berbeda.
              </p>
            </motion.div>
            <br />
            <motion.div className="gallery" variants={parallaxVariants}>
              <Gallery />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="lagu"></div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default History;
