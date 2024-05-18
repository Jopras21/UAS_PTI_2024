import React, { useState } from "react";
import axios from "axios";
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
        return "🌡️";
    }
  };

  const convertToFahrenheit = (tempF) => {
    return ((tempF - 32) * 5) / 9;
  };

  return (
    <>
      <div className="search flex justify-center text-center text-xl p-6 ">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Masukkan Lokasi Anda"
          type="text"
        />
      </div>
      <div className="container-weather">
        {data.name && (
          <>
            <div className="location">
              <p className="text-slate-950">{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? (
                <h1>{convertToFahrenheit(data.main.temp).toFixed()}°C</h1>
              ) : null}
            </div>{" "}
            <div className="clouds">
              {data.weather && (
                <p>
                  <img
                    src={getWeatherIcon(data.weather[0].main)}
                    alt="Weather icon"
                    className="weather-icon w-32"
                  />
                  {data.weather[0].main}
                </p>
              )}
            </div>
            <div className="feels">
              <p>Feels Like</p>
              <br />
              {data.main ? (
                <p>{convertToFahrenheit(data.main.feels_like).toFixed()}°C</p>
              ) : null}
            </div>
            <div className="humidity">
              <p>Humidity</p>
              {data.main ? <p>{data.main.humidity}%</p> : null}
            </div>
            <div className="wind">
              <p>Wind Speed </p>
              {data.wind ? <p>{data.wind.speed.toFixed()} mph</p> : null}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Weather;
