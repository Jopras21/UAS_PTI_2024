import React from "react";
import "./about.css";
import Navbar from "../Navbar/navbar.jsx";
import Footer from "../Footer/footer.jsx";
import Lagu from "../Lagu/lagu.jsx";
import FeedBack from "../Feedback/feedback.jsx";

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
