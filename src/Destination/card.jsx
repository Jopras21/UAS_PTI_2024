import React, { useRef } from "react";
import "./culinary.css";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const Card = ({ img, name, desc }) => {
  return (
    <div className="grid w-full place-content-center from-indigo-500 to-violet-500 px-4 py-12 text-slate-900">
      <TiltCard img={img} name={name} desc={desc} />
    </div>
  );
};

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const TiltCard = ({ img, name, desc }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
        transition: "none",
      }}
      className="relative h-96 w-80 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300 hover"
    >
      <motion.div
        style={{
          transform: "translateZ(64px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid rounded-xl bg-white shadow-lg"
      >
        <div
          style={{
            transform: "translateZ(70px)",
            transformStyle: "preserve-3d",
          }}
          className="inset-4 grid rounded-xl h-auto"
        >
          <img
            src={img}
            style={{
              transform: "translateZ(80px) rounded-xl w-40 h-36",
            }}
            className="foods-img"
          />
        </div>
        <div
          style={{
            transform: "translateZ(60px)",
            transformStyle: "preserve-3d",
          }}
          className="inset-4 grid text-cyan-950 title-food h-auto"
        >
          <h2
            style={{
              transform: "translateZ(50px)",
            }}
            className="text-center text-2xl font-bold "
          >
            {name}
          </h2>
        </div>
        <div
          style={{
            transform: "translateZ(70px)",
            transformStyle: "preserve-3d",
          }}
          className=" grid place-content-center rounded-xl"
        >
          <p
            style={{
              transform: "translateZ(60px)",
            }}
            className="text-center text-base text-cyan-950 w-full desc px-4"
          >
            {desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
