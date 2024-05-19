import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./descAwal.css";
import Video from "../assets/Video/destination.mp4";
import Toba from "../assets/Landscape/Toba.png";
import Lagu from "../Lagu/lagu.jsx";

function DescAwal() {
  const [history, setHistory] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(
          "https://id.wikipedia.org/api/rest_v1/page/summary/Sumatera_Utara"
        );
        setHistory(response.data.extract);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, []);

  const controls = useAnimation();
  const [ref, inView] = useInView({
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
    <motion.div
      initial="hidden"
      animate={controls}
      className="DescHis"
      ref={ref}
    >
      <motion.div variants={parallaxVariants} className="pengertian">
        <motion.div className="bungkusTulisan">
          <motion.div variants={fadeInVariants} className="headingHistory">
            <h1 className="text-black text-center">Sumatera Utara</h1>
            <div className="footerHistory">{history}</div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={parallaxVariants}
          className="bungkusGambarHistory"
        >
          <img src={Toba} alt="Toba" />
        </motion.div>
      </motion.div>
      <motion.div variants={parallaxVariants} className="bungkusKontenSejarah">
        <motion.div className="kontenSejarah">
          <motion.div variants={fadeInVariants} className="JudulHis">
            <h1 className="text-black">Sejarah Sumatera Utara</h1>
          </motion.div>
          <motion.video src={Video} autoPlay loop className="my-6 flex justify-center" />
          <motion.div variants={fadeInVariants} className="history-content">
            <p>
              Saat zaman pemerintahan Belanda, Sumatera Utara merupakan pusat
              pemerintahan dari seluruh pulau Sumatera bernama Gouvernement van
              Sumatera dipimpin oleh seorang Gubernur di Kota Medan.
            </p>
            <br />
            <p>
              Setelah kemerdekaan, dalam sidang pertama Komite Nasional Daerah,
              Provinsi Sumatera dibagi menjadi tiga Provinsi yakni Sumatera
              Utara, Sumatera Tengah, dan Sumatera Selatan. Sumatera Utara
              sendiri pun juga merupakan penggabungan antara tiga daerah
              administratif yakni Keresidenan Aceh, Keresidenan Sumatera Timur,
              dan Keresidenan Tapanuli.
            </p>
            <br />
            <p>
              Saat Undang-Undang Republik Indonesia No. 10 Tahun 1948
              diterbitkan pada tanggal 15 April 1948, ditetapkan bahwa wilayah
              Sumatera dibagi menjadi tiga Provinsi yang mengatur dan mengurus
              wilayahnya masing-masing: Sumatera Utara, Sumatera Tengah,
              Sumatera Selatan. Tanggal 15 April 1948 ditetapkan menjadi hari
              jadi Provinsi Sumatera Utara.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default DescAwal;
