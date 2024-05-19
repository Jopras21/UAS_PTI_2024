import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";



const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-lg md:text-sm text-indigo-500 font-medium">
          kelompok 3 (The Most Skill Issue Group)
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
    src: "../src/assets/Member/hexsel-di-cf.jpg",
  },
  {
    id: 2,
    src: "../src/assets/Member/jopras-stress.jpg",
  },
  {
    id: 3,
    src: "../src/assets/Member/joe-dkk.jpeg",
  },
  {
    id: 4,
    src: "../src/assets/Member/domi.jpg",
  },
  {
    id: 5,
    src: "../src/assets/Member/joe-tidur.jpg",
  },
  {
    id: 6,
    src: "../src/assets/Member/jopras-stress2.jpg",
  },
  {
    id: 7,
    src: "../src/assets/Member/domi2.jpg",
  },
  {
    id: 8,
    src: "../src/assets/Member/hexsel-di-cf2.jpg",
  },
  {
    id: 9,
    src: "../src/assets/Member/jopras-stress3.jpg",
  },
  {
    id: 10,
    src: "../src/assets/Member/ugpl.jpg",
  },
  {
    id: 11,
    src: "../src/assets/Member/jopras-stress4.jpg",
  },
  {
    id: 12,
    src: "../src/assets/Member/ngantuk.jpg",
  },
  {
    id: 13,
    src: "../src/assets/Member/jopras-dkk.jpg",
  },
  {
    id: 14,
    src: "../src/assets/Member/hexsel1.jpg",
  },
  {
    id: 15,
    src: "../src/assets/Member/hexsel-ama-cosplayer.jpg",
  },
  {
    id: 16,
    src: "../src/assets/Member/hexsel-ama-cosplayer2.jpg",
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