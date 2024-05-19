import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "@react-spring/parallax";
import "./about.css";
import Navbar from "../Navbar/navbar.jsx";
import Footer from "../Footer/footer.jsx";
import Lagu from "../Lagu/lagu.jsx";
import FeedBack from "../Feedback/feedback.jsx";
import ShuffleHero from "./ourteam.jsx";
import Team from "./team.jsx";
import Video from "../assets/Video/destination.mp4";
import TopButton from "../Button/topButton.jsx";

const fadeIn = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

function About() {
  return (
    <Parallax pages={3}>
      <div className="root">
        <div className="navbar">
          <Navbar />
        </div>
        <TopButton />
        <div
          className="title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
        >
          <motion.p className="Judul">About Us</motion.p>
          <video className="vid" src={Video} autoPlay loop muted />
        </div>
        <div className="lagu">
          <Lagu query="Rambadia Lagu Sumatera Utara" />
        </div>
        <div className="body">
          <motion.div
            className="ourteam"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
          >
            <ShuffleHero />
          </motion.div>
          <div className="trail"></div>
          <div className="subTitle">
            <p className="subJudul">Meet Our Team</p>
          </div>
          <motion.div
            className="img"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeIn}
          >
            <Team />
          </motion.div>
          <motion.div className="feedback">
            <FeedBack />
          </motion.div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Parallax>
  );
}

export default About;


