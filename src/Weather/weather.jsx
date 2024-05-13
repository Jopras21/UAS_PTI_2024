import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ae255f0b32749339de311169c5fba70a";

  const searchLocation = () => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  };

  return (
    <>
      <div className="search text-center">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Masukkan Lokasi Anda"
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="desc">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name != undefined && (
          <div className="bottom">
            <div className="feels">
              <p>Feels Like</p>
              {data.main ? <p>{data.main.feels_like}°C</p> : null}
            </div>
            <div className="humidity">
              <p>Humidity</p>
              {data.main ? <p>{data.main.humidity}%</p> : null}
            </div>
            <div className="wind">
              <p>Wind Speed</p>
              {data.wind ? <p>{data.wind.speed}m/h</p> : null}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Weather;
