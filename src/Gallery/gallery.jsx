import PhotoAlbum from "react-photo-album";

const photos = [
  {
    src: "../src/assets/Pakaian/bataktoba.jpeg",
    width: 480,
    height: 360,
    srcSet: [
      { src: "../src/assets/Pakaian/bataktoba.jpeg", width: 240, height: 180 },
      { src: "../src/assets/Pakaian/bataktoba.jpeg", width: 120, height: 90 },
    ],
  },
  {
    src: "../src/assets/Pakaian/karo.jpeg",
    width: 480,
    height: 360,
    srcSet: [
      { src: "../src/assets/Pakaian/karo.jpeg", width: 240, height: 180 },
      { src: "../src/assets/Pakaian/karo.jpeg", width: 120, height: 90 },
    ],
  },
  {
    src: "../src/assets/Pakaian/mandailing.jpeg",
    width: 480,
    height: 360,
    srcSet: [
      { src: "../src/assets/Pakaian/mandailing.jpeg", width: 240, height: 180 },
      { src: "../src/assets/Pakaian/mandailing.jpeg", width: 120, height: 90 },
    ],
  },
  {
    src: "../src/assets/Pakaian/nias.jpeg",
    width: 480,
    height: 360,
    srcSet: [
      { src: "../src/assets/Pakaian/nias.jpeg", width: 240, height: 180 },
      { src: "../src/assets/Pakaian/nias.jpeg", width: 120, height: 90 },
    ],
  },
  {
    src: "../src/assets/Pakaian/pakpak.jpeg",
    width: 480,
    height: 360,
    srcSet: [
      { src: "../src/assets/Pakaian/pakpak.jpeg", width: 240, height: 180 },
      { src: "../src/assets/Pakaian/pakpak.jpeg", width: 120, height: 90 },
    ],
  },
  {
    src: "../src/assets/Pakaian/angkola.jpeg",
    width: 480,
    height: 360,
    srcSet: [
      { src: "../src/assets/Pakaian/angkola2.jpeg", width: 240, height: 180 },
      { src: "../src/assets/Pakaian/angkola2.jpeg", width: 120, height: 90 },
    ],
  },
  {
    src: "../src/assets/Pakaian/melayu.jpg",
    width: 343,
    height: 512,
    srcSet: [
      { src: "../src/assets/Pakaian/melayu.jpg", width: 172, height: 256 },
      { src: "../src/assets/Pakaian/melayu.jpg", width: 86, height: 128 },
    ],
  },
  {
    src: "../src/assets/Pakaian/sibolga.jpg",
    width: 400,
    height: 500,
    srcSet: [
      { src: "../src/assets/Pakaian/sibolga.jpg", width: 200, height: 250 },
      { src: "../src/assets/Pakaian/sibolga.jpg", width: 100, height: 125 },
    ],
  },
  {
    src: "../src/assets/Pakaian/karo2.jpg",
    width: 322,
    height: 512,
    srcSet: [
      { src: "../src/assets/Pakaian/karo2.jpg", width: 161, height: 256 },
      { src: "../src/assets/Pakaian/karo2.jpg", width: 81, height: 128 },
    ],
  },
  {
    src: "../src/assets/Pakaian/simalungun.jpg",
    width: 600,
    height: 749,
    srcSet: [
      { src: "../src/assets/Pakaian/simalungun.jpg", width: 300, height: 375 },
      { src: "../src/assets/Pakaian/simalungun.jpg", width: 150, height: 188 },
    ],
  },
  {
    src: "../src/assets/Pakaian/mandailing.jpg",
    width: 600,
    height: 763,
    srcSet: [
      { src: "../src/assets/Pakaian/mandailing.jpg", width: 400, height: 508 },
      { src: "../src/assets/Pakaian/mandailing.jpg", width: 266, height: 339 },
    ],
  },
  {
    src: "../src/assets/Pakaian/nias2.png",
    width: 944,
    height: 680,
    srcSet: [
      { src: "../src/assets/Pakaian/nias2.png", width: 472, height: 340 },
      { src: "../src/assets/Pakaian/nias2.png", width: 236, height: 170 },
    ],
  },
];

export default function Gallery() {
  return <PhotoAlbum layout="rows" photos={photos} />;
}