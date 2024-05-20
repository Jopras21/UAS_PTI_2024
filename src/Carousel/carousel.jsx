import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import "./carousel.css";

import Toba from "../assets/Landscape/Toba.png";
import Sibayak from "../assets/Landscape/Sibayak.jpg";
import Lawang from "../assets/Landscape/Lawang.jpg";
import Sipiso from "../assets/Landscape/Sipiso.jpeg";

const imgs = [
  {
    src: Toba,
    title: "Danau Toba",
    description: "Berada di provinsi Sumatra Utara",
  },
  {
    src: Sibayak,
    title: "Gunung Sibayak",
    description: "Terletak di Kabupaten Karo",
  },
  {
    src: Lawang,
    title: "Lawang Park",
    description: "Destinasi wisata di Bukittinggi",
  },
  {
    src: Sipiso,
    title: "Air Terjun Sipiso-piso",
    description: "Di dekat Danau Toba",
  },
  // Tambahkan gambar-gambar lain di sini
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

function Carousel() {
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
      className="relative overflow-hidden bg-neutral-900 py-6"
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
      className="absolute bottom-6 left-0 p-4 h-44 bg-gradient-to-t from-zinc-900 to-zinc-950 text-white w-full transition-transform "
      id="transisi"
    >
      <h2 className="text-4xl font-bold my-3 inline-block align-middle mx-16 text-slate-50	">
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

export default Carousel;
