import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=c390140dcbe035259c568a62e06bb77c`;
  const searchLocation = () => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
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
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
          {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
        </div>
        <div className="clouds">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
        {data.name != undefined && (
          <>
            <div className="feels">
              <p>Feels Like</p>
              <br></br>
              {data.main ? <p>{data.main.feels_like}°C</p> : null}
            </div>
            <div className="humidity">
              <p>Humidity</p>
              {data.main ? <p>{data.main.humidity}%</p> : null}
            </div>
            <div className="wind">
              <p>Wind Speed</p>
              {data.wind ? <p>{data.wind.speed.toFixed()}mph</p> : null}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Weather;
