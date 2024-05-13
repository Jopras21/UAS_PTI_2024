import Weather from "../Weather/weather";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer.jsx"
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import './home.css'
import Toba from "../assets/Landscape/Toba.png"
import Sipiso from "../assets/Landscape/Sipiso.jpeg"
import Sibayak from "../assets/Landscape/Sibayak.jpg"
import Lagu from"../Lagu/lagu.jsx"
function Home() {
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="bg-white" id="containerHome">
        <TextParallaxContent
          imgUrl={Toba}
          subheading="Selamat datang di"
          heading="Sumatera Utara."
        >
          <ExampleContent1 />
        </TextParallaxContent>
        <TextParallaxContent
          imgUrl={Sipiso}
          subheading="Daerah wisata yang sering dikunjungi"
          heading="Tempat Wisata."
        >
          <ExampleContent2 />
        </TextParallaxContent>
        <TextParallaxContent
          imgUrl={Sibayak}
          subheading="Makanan khas Sumatera Utara"
          heading="Makanan Khas."
        >
          <ExampleContent3 />
        </TextParallaxContent>
        <div className="lagu">
        <Lagu query="Siksik sibatumanikam" />
        </div>
        <Footer />
      </div>
    </>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        {/* Memastikan bahwa properti subheading dan heading diteruskan */}
        <OverlayCopy subheading={subheading} heading={heading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
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
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent1 = () => (
  <>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
        Sumatera Utara
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          Sumatera Utara adalah sebuah provinsi di Indonesia yang terletak di bagian utara Pulau Sumatera.
          Ibu kotanya adalah Kota Medan.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
          Provinsi ini memiliki kekayaan alam dan budaya yang beragam,
          termasuk Danau Toba yang merupakan danau vulkanik terbesar di dunia. Sumatera Utara juga dikenal dengan keindahan alamnya,
          seperti pegunungan, pantai, dan hutan tropis.
        </p>
        <a href="/History" className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
          Read More
        </a>
      </div>
    </div>
  </>
);

const ExampleContent2 = () => (
  <>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
        Wisata
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Sumatera Utara adalah sebuah provinsi yang kaya akan keindahan alam, warisan budaya, dan situs sejarah yang menarik. 
        Dari danau vulkanik yang megah hingga hutan hujan tropis yang luas, 
        Sumatera Utara menawarkan berbagai tempat wisata yang menakjubkan bagi para pengunjung.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Berikut Ini adalah beberapa destinasi populer di Sumatera Utara
        </p>
        <a href="/Wisata" className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
          Read More
        </a>
      </div>
    </div>
  </>
);

const ExampleContent3 = () => (
  <>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
        Makanan
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Sumatera Utara merupakan sebuah provinsi yang kaya akan keanekaragaman budaya, 
        termasuk dalam hal kuliner. Makanan tradisional dari Sumatera Utara tidak hanya lezat, 
        tetapi juga mencerminkan sejarah, kebudayaan, dan kekayaan alam daerah tersebut.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Berikut ini adalah beberapa makanan khas Sumatera Utara
        </p>
        <a href="/Wisata" className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
          Read More
        </a>
      </div>
    </div>
  </>
);

export default Home;
