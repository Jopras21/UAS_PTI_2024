import { useState } from "react";
import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

//plugins buat lightbox
import { Captions, Fullscreen, Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const photos = [
  {
    src: "../src/assets/Pakaian/bataktoba.jpeg",
    width: 480,
    height: 360,
    srcSet: [
      { src: "../src/assets/Pakaian/bataktoba.jpeg", width: 240, height: 180 },
      { src: "../src/assets/Pakaian/bataktoba.jpeg", width: 120, height: 90 },
    ],
    title: "Pakaian Adat Batak Toba",
    description: "Source: detik.com/sumut"
  },
  {
    src: "../src/assets/Pakaian/karo.jpeg",
    width: 480,
    height: 360,
    srcSet: [
      { src: "../src/assets/Pakaian/karo.jpeg", width: 240, height: 180 },
      { src: "../src/assets/Pakaian/karo.jpeg", width: 120, height: 90 },
    ],
    title: "Pakaian Adat Karo",
    description: "Source: detik.com/sumut"
  },
  {
    src: "../src/assets/Pakaian/angkola2.jpeg",
    width: 480,
    height: 360,
    srcSet: [
      { src: "../src/assets/Pakaian/angkola2.jpeg", width: 240, height: 180 },
      { src: "../src/assets/Pakaian/angkola2.jpeg", width: 120, height: 90 },
    ],
    title: "Pakaian Adat Angkola",
    description: "Source: detik.com/sumut"
  },
  {
    src: "../src/assets/Pakaian/nias.jpeg",
    width: 480,
    height: 360,
    srcSet: [
      { src: "../src/assets/Pakaian/nias.jpeg", width: 240, height: 180 },
      { src: "../src/assets/Pakaian/nias.jpeg", width: 120, height: 90 },
    ],
    title: "Pakaian Adat Nias",
    description: "Source: detik.com/sumut"
  },
  {
    src: "../src/assets/Pakaian/pakpak.jpeg",
    width: 480,
    height: 360,
    srcSet: [
      { src: "../src/assets/Pakaian/pakpak.jpeg", width: 240, height: 180 },
      { src: "../src/assets/Pakaian/pakpak.jpeg", width: 120, height: 90 },
    ],
    title: "Pakaian Adat Pakpak",
    description: "Source: detik.com/sumut"
  },
  {
    src: "../src/assets/Pakaian/angkola.jpeg",
    width: 480,
    height: 360,
    srcSet: [
      { src: "../src/assets/Pakaian/angkola.jpeg", width: 240, height: 180 },
      { src: "../src/assets/Pakaian/angkola.jpeg", width: 120, height: 90 },
    ],
    title: "Pakaian Adat Angkola",
    description: "Source: detik.com/sumut"
  },
  {
    src: "../src/assets/Pakaian/melayu.jpg",
    width: 343,
    height: 512,
    srcSet: [
      { src: "../src/assets/Pakaian/melayu.jpg", width: 172, height: 256 },
      { src: "../src/assets/Pakaian/melayu.jpg", width: 86, height: 128 },
    ],
    title: "Pakaian Adat Melayu",
    description: "Source: gramedia.com"
  },
  {
    src: "../src/assets/Pakaian/sibolga.jpg",
    width: 400,
    height: 500,
    srcSet: [
      { src: "../src/assets/Pakaian/sibolga.jpg", width: 200, height: 250 },
      { src: "../src/assets/Pakaian/sibolga.jpg", width: 100, height: 125 },
    ],
    title: "Pakaian Adat Sibolga",
    description: "Source: orami.co.id"
  },
  {
    src: "../src/assets/Pakaian/karo2.jpg",
    width: 322,
    height: 512,
    srcSet: [
      { src: "../src/assets/Pakaian/karo2.jpg", width: 161, height: 256 },
      { src: "../src/assets/Pakaian/karo2.jpg", width: 81, height: 128 },
    ],
    title: "Pakaian Adat Karo",
    description: "Source: pinterest.com"
  },
  {
    src: "../src/assets/Pakaian/simalungun.jpg",
    width: 600,
    height: 749,
    srcSet: [
      { src: "../src/assets/Pakaian/simalungun.jpg", width: 300, height: 375 },
      { src: "../src/assets/Pakaian/simalungun.jpg", width: 150, height: 188 },
    ],
    title: "Pakaian Adat Simalungun",
    description: "Source: rukita.co"
  },
  {
    src: "../src/assets/Pakaian/mandailing.jpg",
    width: 600,
    height: 763,
    srcSet: [
      { src: "../src/assets/Pakaian/mandailing.jpg", width: 400, height: 508 },
      { src: "../src/assets/Pakaian/mandailing.jpg", width: 266, height: 339 },
    ],
    title: "Pakaian Adat Mandailing",
    description: "Source: rimbakita.com"
  },
  {
    src: "../src/assets/Pakaian/nias2.png",
    width: 944,
    height: 680,
    srcSet: [
      { src: "../src/assets/Pakaian/nias2.png", width: 472, height: 340 },
      { src: "../src/assets/Pakaian/nias2.png", width: 236, height: 170 },
    ],
    title: "Pakaian Adat Nias",
    description: "Source: wartanias.com"
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <PhotoAlbum layout="rows" photos={photos} onClick={({ index }) => setIndex(index)} />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Captions, Thumbnails]}
        captions={{showToggle: true}}
      />
    </>
  );
}