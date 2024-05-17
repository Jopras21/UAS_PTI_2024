import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import "./carouselHis.css";


const imgs = [
  {
    src: "../src/assets/BgSejarah/gedunglondon.jpg",
    title: "Gedung London Sumatera",
    description:
      "Dibangun pada tahun 1909 dan menjadi gedung kantor milik Harrisons & Crossfield Plc, sebuah perusahaan perkebunan dan perdagangan berbasis di London. Beberapa kali gedung ini sempat berpindah tangan dan sekarang dimiliki oleh PT PP London Sumatera. Sampai sekarang gedung ini masih digunakan sebagai gedung kantor untuk perusahaan agrikultur.",
  },
  {
    src: "../src/assets/BgSejarah/istanamaimun.jpg",
    title: "Istana Maimun",
    description:
      "Peninggalan sejarah Kerajaan Deli yang sekarang telah diubah fungsinya menjadi sebuah Museum. Istana ini dibangun oleh Sultan Ma'amun Al-Rashid Perkasa Alamasyah yang memerintah Kerajaan ini antara 1873 - 1924. Pembangunan dimulai pada tahun 1888 dan selesai pada tahun 1891.",
  },
  {
    src: "../src/assets/BgSejarah/makam.jpg",
    title: "Makam Raja-raja Deli",
    description:
      "Terletak di daerah Sisingamangaraja, makam ini merupakan tempat peristirahatan terakhir para raja dan kerabat Kesultanan Deli. Makam-makam ini menjadi saksi sejarah penting tentang peradaban Melayu di Sumatra Utara.",
  },
  {
    src: "../src/assets/BgSejarah/arca.jpeg",
    title: "Situs Peninggalan Arca Batu Raja",
    description:
      "Terletak di Kabupaten Labuhanbatu, situs ini merupakan kompleks arca batu yang diperkirakan berasal dari abad ke-11 hingga abad ke-13 Masehi. Arca-arca ini memberikan gambaran tentang keberadaan kerajaan Hindu-Buddha di wilayah tersebut.",
  },
  {
    src: "../src/assets/BgSejarah/museum.jpeg",
    title: "Museum TB Silalahi Center",
    description:
      "Terletak di Tarutung, museum ini didedikasikan untuk mempertahankan dan mempromosikan kebudayaan Batak Toba. Museum ini menampilkan berbagai artefak sejarah, seni, dan budaya Batak.",
  },
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

function CarouselHis() {
  const [imgIndex, setImgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => (pv === imgs.length - 1 ? 0 : pv + 1));
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div
      className="relative overflow-hidden bg-neutral-900 pb-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: dragX }}
        animate={{ translateX: `-${imgIndex * 100}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      {isHovered && <TextOverlay imgIndex={imgIndex} />}

        <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
}

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((img, idx) => (
        <motion.div
          key={idx}
          style={{
            backgroundImage: `url(${img.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{ scale: imgIndex === idx ? 0.95 : 0.85 }}
          transition={SPRING_OPTIONS}
          className="aspect-video w-screen shrink-0 rounded-xl bg-neutral-800 object-cover"
        />
      ))}
    </>
  );
};

const TextOverlay = ({ imgIndex }) => {
  const { title, description } = imgs[imgIndex];
  return (
    <div
      className="absolute bottom-12 left-0 p-4 h-44 bg-gradient-to-t from-blue-900 to-blue-950 text-white w-full transition-transform"
      id="transisi"
    >
      <h2 className="text-5xl font-bold my-3 inline-block align-middle mx-16 text-slate-50	">
        {title}
      </h2>
      <p className="text-l mx-16">{description}</p>
    </div>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setImgIndex(idx)}
          className={`h-3 w-3 rounded-xl transition-colors ${
            idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
          }`}
        />
      ))}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};

export default CarouselHis;
