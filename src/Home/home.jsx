import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer.jsx";
import Weather from "../Weather/weather";
import Toba from "../assets/Landscape/Toba.png";
import Sipiso from "../assets/Landscape/Sipiso.jpeg";
import Sibayak from "../assets/Landscape/Sibayak.jpg";
import Lagu from "../Lagu/lagu.jsx";
import "./home.css";

function Home() {
  return (
    <>
      <div className="nav">
        <Navbar />
      </div>
      <div className="weather">
        <Weather />
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
}

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  const targetRef = useRef(null);
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div ref={targetRef} className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} targetRef={targetRef} />
        <OverlayCopy subheading={subheading} heading={heading} targetRef={targetRef} />
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
  <>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-5xl font-bold md:col-span-4 text-center">
        Sumatera Utara
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          Sumatera Utara adalah sebuah provinsi di Indonesia yang terletak di
          bagian utara Pulau Sumatera. Ibu kotanya adalah Kota Medan.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
          Provinsi ini memiliki kekayaan alam dan budaya yang beragam, termasuk
          Danau Toba yang merupakan danau vulkanik terbesar di dunia. Sumatera
          Utara juga dikenal dengan keindahan alamnya, seperti pegunungan,
          pantai, dan hutan tropis.
        </p>
        <a
          href="/History"
          className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit"
        >
          Read More
        </a>
      </div>
    </div>
  </>
);

const ExampleContent2 = () => (
  <>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-5xl font-bold md:col-span-4 text-center">
        Destinasi Wisata
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          Sumatera Utara adalah sebuah provinsi yang kaya akan keindahan alam,
          warisan budaya, dan situs sejarah yang menarik. Dari danau vulkanik
          yang megah hingga hutan hujan tropis yang luas, Sumatera Utara
          menawarkan berbagai tempat wisata yang menakjubkan bagi para
          pengunjung.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
          Berikut Ini adalah beberapa destinasi populer di Sumatera Utara
        </p>
        <a
          href="/Destination"
          className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit"
        >
          Read More
        </a>
      </div>
    </div>
  </>
);

const ExampleContent3 = () => (
  <>
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-5xl font-bold md:col-span-4 z-10 text-center">
        Makanan Khas
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
          Sumatera Utara merupakan sebuah provinsi yang kaya akan keanekaragaman
          budaya, termasuk dalam hal kuliner. Makanan tradisional dari Sumatera
          Utara tidak hanya lezat, tetapi juga mencerminkan sejarah, kebudayaan,
          dan kekayaan alam daerah tersebut.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
          Berikut ini adalah beberapa makanan khas Sumatera Utara
        </p>
        <a
          href="/Destination"
          className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit"
        >
          Read More
        </a>
      </div>
    </div>
  </>
);

export default Home;
