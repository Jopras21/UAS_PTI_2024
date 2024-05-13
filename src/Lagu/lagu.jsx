import React, { useState, useEffect } from "react";
import "./lagu.css";

const apiKey = "AIzaSyD0YP8R42hIPyrvNVlUwAMO-UAg6-RN9U8";
const maxResults = 1;


function Lagu({ query }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, [query]);

  const fetchVideos = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&q=${query}&maxResults=${maxResults}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="bungkus h-0">
      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId} className="video-container">
            <iframe
              width="200px"
              height="200px"
              src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&loop=100`}
              title={video.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lagu;
