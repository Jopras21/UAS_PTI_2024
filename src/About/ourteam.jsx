import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import domi1 from "../assets/Member/domi2.jpg"
import domi2 from "../assets/Member/domi.jpg"
import jopras1 from "../assets/Member/jopras-stress.jpg"
import jopras2 from "../assets/Member/jopras-stress2.jpg"
import jopras3 from "../assets/Member/jopras-stress3.jpg"
import jopras4 from "../assets/Member/jopras-stress4.jpg"
import hexsel1 from "../assets/Member/hexsel1.jpg"
import hexsel2 from "../assets/Member/hexsel-di-cf.jpg"
import hexsel3 from "../assets/Member/hexsel-di-cf2.jpg"
import hexsel4 from "../assets/Member/hexsel-ama-cosplayer.jpg"
import hexsel5 from "../assets/Member/hexsel-ama-cosplayer2.jpg"
import bareng from "../assets/Member/jopras-dkk.jpg"
import bareng2 from "../assets/Member/joe-tidur.jpeg"
import joe1 from "../assets/Member/joe-dkk.jpeg"
import joe2 from "../assets/Member/ngantuk.jpg"
import joe3 from "../assets/Member/ugpl.jpg"



const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-lg md:text-sm text-indigo-400 font-medium">
          kelompok 3 (The Most Skill Issued Group)
        </span>
        <h3 className="text-4xl md:text-6xl text-black font-semibold">
          About Our Team
        </h3>
        <p className="text-base md:text-lg text-black my-4 md:my-6">
        Welcome to our project page! We are a dedicated team of four members brought together by our final exams. Our collaboration stems from a shared passion for learning, innovation, and excellence. Each of us brings unique skills and perspectives to the table, allowing us to create a well-rounded and effective team.
        </p>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: domi1,
  },
  {
    id: 2,
    src: domi2,
  },
  {
    id: 3,
    src: jopras1,
  },
  {
    id: 4,
    src: jopras2,
  },
  {
    id: 5,
    src: jopras3,
  },
  {
    id: 6,
    src: jopras4,
  },
  {
    id: 7,
    src: joe1,
  },
  {
    id: 8,
    src: joe2,
  },
  {
    id: 9,
    src: joe3,
  },
  {
    id: 10,
    src: hexsel1,
  },
  {
    id: 11,
    src: hexsel2,
  },
  {
    id: 12,
    src: hexsel3,
  },
  {
    id: 13,
    src: hexsel4,
  },
  {
    id: 14,
    src: hexsel5,
  },
  {
    id: 15,
    src: bareng,
  },
  {
    id: 16,
    src: bareng2,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;