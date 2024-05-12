import React, { useState, useEffect } from 'react';
import './lagu.css'; // Import CSS file for styling

const apiKey = 'YOUR_API_KEY';
const query = 'Lagu daerah Sumatera Utara';
const maxResults = 10;

function Lagu() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&q=${query}&maxResults=${maxResults}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setVideos(data.items);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className='bungkus'>
      <h1>Lagu Daerah Sumatera Utara</h1>
      <ul>
        {videos.map(video => (
          <li key={video.id.videoId} className="video-container">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
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