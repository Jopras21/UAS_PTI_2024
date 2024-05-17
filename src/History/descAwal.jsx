import React, { useState, useEffect } from "react";
import axios from "axios";
import './descAwal.css';
import Toba from "../assets/Landscape/Toba.png";

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
        <section className="w-full px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-4xl md:text-6xl text-black font-semibold">
              Sumatera Utara
            </h3>
            <p className="text-base md:text-lg text-black my-4 md:my-6">
              {history}
            </p>
          </div>
          <div>
            <img src={Toba} alt="Toba" />
          </div>
        </section>
      </div>
      <div className="JudulHis">
        <h1 className="text-black">Sejarah Singkat Provinsi Sumatera Utara</h1>
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
        <br />
        <p>
          Pada awal tahun 1949 dilakukan reorganisasi kembali, dengan Keputusan
          Pemerintah Darurat RI Nomor 22/Pem/PDRI pada tanggal 17 Mei 1949,
          jabatan Gubernur Sumatera Utara ditiadakan. Selanjutnya dengan Ketetapan
          Pemerintah Darurat RI pada tanggal 17 Desember 1949, dibentuk Provinsi
          Aceh dan Provinsi Tapanuli/Sumatera Timur. Dengan Peraturan Pemerintah
          Pengganti UU No. 5 Tahun 1950 pada tanggal 14 Agustus 1950, Ketetapan
          tersebut dicabut dan Provinsi Sumatera Utara dibentuk kembali.
        </p>
        <br />
        <p>
          Dengan UU RI No. 24 Tahun 1956 yang ditetapkan pada tanggal 7 Desember
          1956, dibentuk Daerah Otonom Provinsi Aceh sehingga wilayah Provinsi
          Sumatera Utara terbagi menjadi dua.
        </p>
      </div>
      <div className="JudulHis">
        <h1>Tempat Bersejarah</h1>
      </div>
    </div>
  );
}

export default DescAwal;
