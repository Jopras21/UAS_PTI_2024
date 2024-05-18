import React, { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useAnimation,
  useInView,
} from "framer-motion";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer.jsx";
import Weather from "../Weather/weather";
import Toba from "../assets/Landscape/Toba.png";
import Sipiso from "../assets/Landscape/Sipiso.jpeg";
import Naniura from "../assets/Foods/Naniura.jpg";
import TopButton from "/src/Button/topButton.jsx";
import Fancy from "/src/Button/fancy.jsx";
import Lagu from "../Lagu/lagu.jsx";
import "./home.css";

function Home() {
  const SpotlightButton = () => {
    const btnRef = useRef(null);
    const spanRef = useRef(null);

    useEffect(() => {
      const handleMouseMove = (e) => {
        const { width } = e.target.getBoundingClientRect();
        const offset = e.offsetX;
        const left = `${(offset / width) * 100}%`;

        spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
      };

      const handleMouseLeave = () => {
        spanRef.current.animate(
          { left: "50%" },
          { duration: 100, fill: "forwards" }
        );
      };

      btnRef.current.addEventListener("mousemove", handleMouseMove);
      btnRef.current.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        btnRef.current.removeEventListener("mousemove", handleMouseMove);
        btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, []);
  };

  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <TopButton />
      <div className="bg-white m-0 p-0 w-full" id="containerHome">
        <TextParallaxContent
          imgUrl={Toba}
          subheading="Horas, Manatong di poropinsi Sumatera Utara."
          heading="ᯂᯬᯒᯘ᯲ᯘ᯲, ᯔᯔᯖ᯲ᯗ᯲ᯖ᯲ ᯑ᯲ ᯇᯬᯑᯉ᯲ᯖ᯲ ᯘᯘᯒ᯲ᯘᯖ ᯙᯖᯒ᯲ᯘᯒ᯲ ᯙᯗ᯲ᯖ."
        >
          <ExampleContent1 />
          <div className="weather">
            <h1 className="flex justify-center text-xl">Cuaca saat ini</h1>
            <Weather />
          </div>
        </TextParallaxContent>
        <TextParallaxContent
          imgUrl={Sipiso}
          subheading="Daerah wisata yang sering dikunjungi"
          heading="Tempat Wisata."
        >
          <ExampleContent2 />
        </TextParallaxContent>
        <TextParallaxContent
          imgUrl={Naniura}
          subheading="Makanan khas Sumatera Utara"
          heading="Makanan Khas."
        >
          <ExampleContent3 />
        </TextParallaxContent>
        <Footer />
      </div>
    </>
  );
}

const IMG_PADDING = 0;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  const targetRef = useRef(null);
  return (
    <div
      style={{
      }}
    >
      <div ref={targetRef} className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} targetRef={targetRef} />
        <OverlayCopy
          subheading={subheading}
          heading={heading}
          targetRef={targetRef}
        />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl, targetRef }) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%", 
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      className="sticky z-0 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70 w-full"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading, targetRef }) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white z-50"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-5xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent1 = () => (
  <ContentSection
    title="Sumatera Utara"
    description1="Sumatera Utara adalah sebuah provinsi di Indonesia yang terletak di bagian utara Pulau Sumatera. Ibu kotanya adalah Kota Medan."
    description2="Provinsi ini memiliki kekayaan alam dan budaya yang beragam, termasuk Danau Toba yang merupakan danau vulkanik terbesar di dunia. Sumatera Utara juga dikenal dengan keindahan alamnya, seperti pegunungan, pantai, dan hutan tropis."
    link="/History"
  />
);

const ExampleContent2 = () => (
  <ContentSection
    title="Destinasi Wisata"
    description1="Sumatera Utara adalah sebuah provinsi yang kaya akan keindahan alam, warisan budaya, dan situs sejarah yang menarik. Dari danau vulkanik yang megah hingga hutan hujan tropis yang luas, Sumatera Utara menawarkan berbagai tempat wisata yang menakjubkan bagi para pengunjung."
    description2="Berikut Ini adalah beberapa destinasi populer di Sumatera Utara"
    link="/Destination"
  />
);

const ExampleContent3 = () => (
  <ContentSection
    title="Makanan Khas"
    description1="Sumatera Utara merupakan sebuah provinsi yang kaya akan keanekaragaman budaya, termasuk dalam hal kuliner. Makanan tradisional dari Sumatera Utara tidak hanya lezat, tetapi juga mencerminkan sejarah, kebudayaan, dan kekayaan alam daerah tersebut."
    description2="Berikut ini adalah beberapa makanan khas Sumatera Utara"
    link="/Destination"
  />
);

const ContentSection = ({ title, description1, description2, link }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
      className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pb-24 pt-12 md:grid-cols-12"
    >
      <motion.h2
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        className="col-span-1 text-5xl font-bold md:col-span-4 text-center text-gray-900"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        className="col-span-1 md:col-span-8"
      >
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          {description1}
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
          {description2}
        </p>
        <a href={link} className="w-full md:w-fit">
          <Fancy />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Home;
