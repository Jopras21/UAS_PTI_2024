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
        return fog;
    }
  };

  const convertToFahrenheit = (tempF) => {
    return ((tempF - 32) * 5) / 9;
  };

  return (
    <>
      <form class="flex items-center max-w-lg mx-auto">
        <label for="voice-search" class="sr-only">
          Search
        </label>
        <div class="relative w-full">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
              />
            </svg>
          </div>
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Masukkan Lokasi Anda"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            class="w-4 h-4 me-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          Search
        </button>
      </form>

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
              <p>Terasa Seperti</p>
              {data.main ? (
                <p>{convertToFahrenheit(data.main.feels_like).toFixed()}°C</p>
              ) : null}
            </div>
            <div className="humidity">
              <p>Kelembaban</p>
              {data.main ? <p>{data.main.humidity}%</p> : null}
            </div>
            <div className="wind">
              <p>Kecepatan Angin</p>
              {data.wind ? <p>{data.wind.speed.toFixed()} mph</p> : null}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Weather;
