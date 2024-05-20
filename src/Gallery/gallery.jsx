import React, { useState, useEffect, useRef } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  Captions,
  Fullscreen,
  Thumbnails,
} from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "./gallery.css";
import { motion, useAnimation } from "framer-motion";

import BatakToba from "../assets/Pakaian/bataktoba.jpeg";
import Karo from "../assets/Pakaian/karo.jpeg";
import Angkola2 from "../assets/Pakaian/angkola2.jpeg";
import Nias from "../assets/Pakaian/nias.jpeg";
import Pakpak from "../assets/Pakaian/pakpak.jpeg";
import Angkola from "../assets/Pakaian/angkola.jpeg";
import Melayu from "../assets/Pakaian/melayu.jpg";
import Sibolga from "../assets/Pakaian/sibolga.jpg";
import Karo2 from "../assets/Pakaian/karo2.jpg";
import Simalungun from "../assets/Pakaian/simalungun.jpg";
import Mandailing from "../assets/Pakaian/mandailing.jpg";
import Nias2 from "../assets/Pakaian/nias2.png";

const photos = [
  {
    src: BatakToba,
    width: 480,
    height: 360,
    srcSet: [
      { src: BatakToba, width: 240, height: 180 },
      { src: BatakToba, width: 120, height: 90 },
    ],
    title: "Pakaian Adat Batak Toba",
    description: "Source: detik.com/sumut",
  },
  {
    src: Karo,
    width: 480,
    height: 360,
    srcSet: [
      { src: Karo, width: 240, height: 180 },
      { src: Karo, width: 120, height: 90 },
    ],
    title: "Pakaian Adat Karo",
    description: "Source: detik.com/sumut",
  },
  {
    src: Angkola2,
    width: 480,
    height: 360,
    srcSet: [
      { src: Angkola2, width: 240, height: 180 },
      { src: Angkola2, width: 120, height: 90 },
    ],
    title: "Pakaian Adat Angkola",
    description: "Source: detik.com/sumut",
  },
  {
    src: Nias,
    width: 480,
    height: 360,
    srcSet: [
      { src: Nias, width: 240, height: 180 },
      { src: Nias, width: 120, height: 90 },
    ],
    title: "Pakaian Adat Nias",
    description: "Source: detik.com/sumut",
  },
  {
    src: Pakpak,
    width: 480,
    height: 360,
    srcSet: [
      { src: Pakpak, width: 240, height: 180 },
      { src: Pakpak, width: 120, height: 90 },
    ],
    title: "Pakaian Adat Pakpak",
    description: "Source: detik.com/sumut",
  },
  {
    src: Angkola,
    width: 480,
    height: 360,
    srcSet: [
      { src: Angkola, width: 240, height: 180 },
      { src: Angkola, width: 120, height: 90 },
    ],
    title: "Pakaian Adat Angkola",
    description: "Source: detik.com/sumut",
  },
  {
    src: Melayu,
    width: 343,
    height: 512,
    srcSet: [
      { src: Melayu, width: 172, height: 256 },
      { src: Melayu, width: 86, height: 128 },
    ],
    title: "Pakaian Adat Melayu",
    description: "Source: gramedia.com",
  },
  {
    src: Sibolga,
    width: 400,
    height: 500,
    srcSet: [
      { src: Sibolga, width: 200, height: 250 },
      { src: Sibolga, width: 100, height: 125 },
    ],
    title: "Pakaian Adat Sibolga",
    description: "Source: orami.co.id",
  },
  {
    src: Karo2,
    width: 322,
    height: 512,
    srcSet: [
      { src: Karo2, width: 161, height: 256 },
      { src: Karo2, width: 81, height: 128 },
    ],
    title: "Pakaian Adat Karo",
    description: "Source: pinterest.com",
  },
  {
    src: Simalungun,
    width: 600,
    height: 749,
    srcSet: [
      { src: Simalungun, width: 300, height: 375 },
      { src: Simalungun, width: 150, height: 188 },
    ],
    title: "Pakaian Adat Simalungun",
    description: "Source: rukita.co",
  },
  {
    src: Mandailing,
    width: 600,
    height: 763,
    srcSet: [
      { src: Mandailing, width: 400, height: 508 },
      { src: Mandailing, width: 266, height: 339 },
    ],
    title: "Pakaian Adat Mandailing",
    description: "Source: rimbakita.com",
  },
  {
    src: Nias2,
    width: 944,
    height: 680,
    srcSet: [
      { src: Nias2, width: 472, height: 340 },
      { src: Nias2, width: 236, height: 170 },
    ],
    title: "Pakaian Adat Nias",
    description: "Source: wartanias.com",
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  const galleryRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          });
        } else {
          controls.start({ opacity: 0, y:50 });
        }
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, [controls]);

  return (
    <div ref={galleryRef} className="gallery-container p-8">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
        <PhotoAlbum
          layout="rows"
          photos={photos}
          onClick={({ index }) => setIndex(index)}
        />
      </motion.div>
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Captions, Thumbnails]}
        captions={{ showToggle: true }}
      />
    </div>
  );
}
