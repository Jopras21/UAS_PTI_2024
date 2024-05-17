import React, { useState, useEffect } from "react";
import axios from "axios";
import './descAwal.css';
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

  return (
    <div className="DescHis">
      <div className="pengertian">
        <div className="bungkusTulisan">
        <div className="headingHistory">
          <h1 className="text-black text-center">Sumatera Utara</h1>
          <div className="footerHistory">
            {history}
          </div>
          </div>
        </div>
        <div className="bungkusGambarHistory">
          <img src={Toba} alt="Toba" />
        </div>
      </div>
      <div className="bungkusKontenSejarah">
      <div className="kontenSejarah">
      <div className="JudulHis">
        <h1 className="text-black">Sejarah Provinsi Sumatera Utara</h1>
      </div>
      <div className="history-content">
        <p>
          Saat zaman pemerintahan Belanda, Sumatera Utara merupakan pusat
          pemerintahan dari seluruh pulau Sumatera bernama Gouvernement van
          Sumatera dipimpin oleh seorang Gubernur di Kota Medan.
        </p>
        <br />
        <p>
          Setelah kemerdekaan, dalam sidang pertama Komite Nasional Daerah,
          Provinsi Sumatera dibagi menjadi tiga Provinsi yakni Sumatera Utara,
          Sumatera Tengah, dan Sumatera Selatan. Sumatera Utara sendiri pun juga
          merupakan penggabungan antara tiga daerah administratif yakni
          Keresidenan Aceh, Keresidenan Sumatera Timur, dan Keresidenan Tapanuli.
        </p>
        <br />
        <p>
          Saat Undang-Undang Republik Indonesia No. 10 Tahun 1948 diterbitkan pada
          tanggal 15 April 1948, ditetapkan bahwa wilayah Sumatera dibagi menjadi
          tiga Provinsi yang mengatur dan mengurus wilayahnya masing-masing:
          Sumatera Utara, Sumatera Tengah, Sumatera Selatan. Tanggal 15 April 1948
          ditetapkan menjadi hari jadi Provinsi Sumatera Utara.
        </p>
      </div>
      </div>
      <div className="gambarKonten">
      {/* <Lagu query="Wonderful Indonesia North Sumatera" /> */}
      </div>
      </div>
      <div className="tempatHis">
        <h1>Tempat Bersejarah</h1>
      </div>
    </div>
  );
}

export default DescAwal;
