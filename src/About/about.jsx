import React from "react";
import "./about.css";
import Navbar from "../Navbar/navbar.jsx";
import Footer from "../Footer/footer.jsx";
import Lagu from "../Lagu/lagu.jsx";
import FeedBack from "../Feedback/feedback.jsx";
import ShuffleHero from "./ourteam.jsx";
import Team from "./team.jsx";
import Video from "../assets/Video/destination.mp4";  
import { Trail } from "./trail.jsx";

function About() {
  return (
    <div className="root">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="title">
        <p className="Judul">About Us</p>
        <video className="vid" 
        src={ Video } autoPlay loop muted/>
      </div>
      <div className="lagu">
        <Lagu query="Rambadia Lagu Sumatera Utara" />
      </div>
      <div className="body">
        <div className="ourteam">
          <ShuffleHero />
        </div>
        <div className="trail">
          
        </div>
        <div className="subTitle">
          <p className="subJudul">Meet Our Team</p>
        </div>
        <div className="img">
          <Team />
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
