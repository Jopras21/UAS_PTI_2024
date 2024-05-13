import React from "react";
import "./about.css";
import Navbar from "../Navbar/navbar.jsx";
import Footer from "../Footer/footer.jsx";
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
      <div className="body">
        <div className="subTitle">
          <p className="subJudul">Meet Our Team</p>
        </div>
        <div className="img">
          <div className="dom">
            <p>Dominico Anthony</p>
          </div>
          <div className="hexsel">
            <p>Hexsel Archieles</p>
          </div>
          <div className="joe">
            <p>Jonathan Sutandar</p>
          </div>
          <div className="jopras">
            <p>Jonathan Prasetyo</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default About;
