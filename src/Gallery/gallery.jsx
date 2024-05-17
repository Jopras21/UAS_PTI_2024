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
      { src: "../src/assets/Pakaian/angkola.jpeg", width: 240, height: 180 },
      { src: "../src/assets/Pakaian/angkola.jpeg", width: 120, height: 90 },
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
];

export default function Gallery() {
  return <PhotoAlbum layout="rows" photos={photos} />;
}