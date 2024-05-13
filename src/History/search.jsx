import React, { useState, useEffect } from "react";
import axios from "axios";
import "./search.css";

const SearchResults = ({ searchTerm }) => {
const [searchResults, setSearchResults] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);
const apiKey = 'AIzaSyDAOGwq56-voMIxWxeKovDPwQQH-6u-uaU';
const searchEngineId = '81f27819728de437a';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${searchTerm}`;
        const response = await axios.get(url);
        setSearchResults(response.data.items);
      } catch (error) {
        setError('Error fetching data. Please try again later.');
      } finally {
        setLoading(false);
      }
};

    if (searchTerm !== '') {
      fetchData();
    }
  }, [searchTerm, apiKey, searchEngineId]);

  return (
    <div>
      <h2>Search Results</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {searchResults.map((item, index) => (
        <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
            
        </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
