import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion, useAnimation } from "framer-motion";
import sun from "../assets/Weather/sun.png";
import clouds from "../assets/Weather/clouds.png";
import rain from "../assets/Weather/rain.png";
import snow from "../assets/Weather/snowy.png";
import storm from "../assets/Weather/storm.png";
import drizzle from "../assets/Weather/drizzle.png";
import fog from "../assets/Weather/fog.png";
import "./weather.css";

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const controls = useAnimation();
  const weatherRef = useRef(null);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=c390140dcbe035259c568a62e06bb77c`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clear":
        return sun;
      case "Clouds":
        return clouds;
      case "Rain":
        return rain;
      case "Snow":
        return snow;
      case "Thunderstorm":
        return storm;
      case "Drizzle":
        return drizzle;
      case "Mist":
        return fog;
      default:
        return fog;
    }
  };

  const convertToFahrenheit = (tempF) => {
    return ((tempF - 32) * 5) / 9;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          } else {
            controls.start("hidden");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (weatherRef.current) {
      observer.observe(weatherRef.current);
    }

    return () => {
      if (weatherRef.current) {
        observer.unobserve(weatherRef.current);
      }
    };
  }, [controls]);

  useEffect(() => {
    controls.start("visible");
  }, [data, controls]);

  const variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <div className="container-search text-center">
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Masukkan Lokasi"
        />
        <div className="search"></div>
      </div>
      <div ref={weatherRef} className="container-weather">
        {data.name && (
          <>
            <motion.div
              className="location"
              initial="hidden"
              animate={controls}
              variants={variants}
            >
              <p className="text-slate-950">{data.name}</p>
            </motion.div>
            <motion.div
              className="temp"
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ delay: 0.2 }}
            >
              {data.main && (
                <h1>{convertToFahrenheit(data.main.temp).toFixed()}°C</h1>
              )}
            </motion.div>
            <motion.div
              className="clouds"
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ delay: 0.4 }}
            >
              {data.weather && (
                <div className="weather-details">
                  <img
                    src={getWeatherIcon(data.weather[0].main)}
                    alt="Weather icon"
                    className="weather-icon w-32"
                  />
                  <p>{data.weather[0].main}</p>
                </div>
              )}
            </motion.div>
            <motion.div
              className="feels"
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ delay: 0.6 }}
            >
              <p>Terasa Seperti</p>
              {data.main && (
                <p>{convertToFahrenheit(data.main.feels_like).toFixed()}°C</p>
              )}
            </motion.div>
            <motion.div
              className="humidity"
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ delay: 0.8 }}
            >
              <p>Kelembaban</p>
              {data.main && <p>{data.main.humidity}%</p>}
            </motion.div>
            <motion.div
              className="wind"
              initial="hidden"
              animate={controls}
              variants={variants}
              transition={{ delay: 1 }}
            >
              <p>Kecepatan Angin</p>
              {data.wind && <p>{data.wind.speed.toFixed()} mph</p>}
            </motion.div>
          </>
        )}
      </div>
    </>
  );
}

export default Weather;
