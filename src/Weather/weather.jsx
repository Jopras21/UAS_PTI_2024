import React, { useState } from "react";
import axios from "axios";
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
        return "☀️";
      case "Clouds":
        return "☁️";
      case "Rain":
        return "🌧️";
      case "Snow":
        return "❄️";
      case "Thunderstorm":
        return "⛈️";
      case "Drizzle":
        return "🌦️";
      case "Fog":
        return "🌫️";
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
            </div>
            <div className="clouds">
              {data.weather ? (
                <p>
                  {getWeatherIcon(data.weather[0].main)} {data.weather[0].main}
                </p>
              ) : null}
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
