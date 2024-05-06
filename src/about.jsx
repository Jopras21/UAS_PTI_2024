import React from 'react';
import './about.css';
import hexsel from './assets/hexsel.jpg';
import joe from './assets/joe.jpg';
import jopras from './assets/jopras.png';
import dom from './assets/dom.jpg';
function About() {
  return (
    <div className="container">
      <div className="title">
        <p className="Judul">About Us</p>
        <video className="vid" controls autoPlay muted loop="20">
          <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="body">
        <div className="img">
          <div className="dom">
            <img src={dom} alt="dom" />
          </div>
          <div className="hexsel">
            <img src={hexsel} alt="hexsel" />
          </div>
          <div className="joe">
            <img src={joe} alt="joe" />
          </div>
          <div className="jopras">
            <img src={jopras} alt="jopras" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;