import React from "react";
import "./about.css";
import Navbar from "../Navbar/navbar.jsx";
import Footer from "../Footer/footer.jsx";
import Lagu from "../Lagu/lagu.jsx";
import FeedBack from "../Feedback/feedback.jsx";
import ShuffleHero from "./ourteam.jsx";

function About() {
  return (
    <div className="root">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="title">
        <p className="Judul">About Us</p>
        <video className="vid" controls autoPlay muted loop="20">
          <source
            src="https://docs.material-tailwind.com/demo.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="lagu">
        <Lagu query="Rambadia Lagu Sumatera Utara" />
      </div>
      <div className="body">
      <div className="ourteam">
        <ShuffleHero />
      </div>
        <div className="subTitle">
          <p className="subJudul">Meet Our Team</p>
        </div>
        <div className="img">
          <div className="dom">
            <p>Dominico Anthony <br/> Role</p>
          </div>
          <div className="hexsel">
            <p>Hexsel Archieles <br/> Role</p>
          </div>
          <div className="joe">
            <p>Jonathan Sutandar <br/> Role </p>
          </div>
          <div className="jopras">
            <p>Jonathan Prasetyo <br/> Role</p>
          </div>
        </div>
      
        {/* <div className="kelompok3">
          <h1>Tentang Kelompok Kami</h1>
  <p>
    Kami merupakan Kelompok 3, dab kelompok kami merupakan kelompok yang beranggotakan 4 orang, yang dipersatukan untuk membuat sebuah website bersama sama.<br/> 
    Anggota kelompok kami adalah Dominico, Hexsel, Jonathan Prasety, dan Jonathan Sutandar.
  </p>
</div> */}
{/* <div className="latarbelakang">
  <p>
    Sumatera Utara dipilih sebagai fokus kami karena memiliki warisan budaya yang kaya, lanskap alam yang memukau, dan komunitas yang bersemangat. Kami percaya bahwa dengan mengeksplorasi dan memamerkan keindahan Sumatera Utara, kami dapat berkontribusi untuk mempromosikan pariwisata dan melestarikan identitas budayanya.
  </p>
</div>
<div className="visimisi">
  <h3>Visi:</h3>
  <p>
    Visi kami adalah menjadi kekuatan utama dalam mempromosikan Sumatera Utara sebagai tujuan wisata terkemuka, sambil juga mendorong pertumbuhan ekonomi dan pembangunan yang berkelanjutan di wilayah tersebut.
  </p>
  <h3>Misi:</h3>
  <ul>
    <li>1. Menciptakan konten yang menarik untuk menyoroti objek wisata dan pengalaman unik Sumatera Utara.</li>
    <li>2. Berkolaborasi dengan komunitas lokal dan bisnis untuk mendukung pertumbuhan dan pengembangan mereka.</li>
    <li>3. Meningkatkan kesadaran tentang pentingnya konservasi lingkungan dan pelestarian budaya.</li>
    <li>4. Memberikan layanan dan pengalaman yang luar biasa kepada pengunjung, memastikan kepuasan dan loyalitas mereka.</li>
  </ul>
</div> */}
        <div className="feedback">
          <FeedBack />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default About;
