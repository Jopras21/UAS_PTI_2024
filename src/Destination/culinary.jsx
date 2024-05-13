// culinary.jsx

import React, { useState, useEffect } from "react";
import Card from "./card";
import { Foods } from "./food.js";
import "./culinary.css";

function Culinary() {
  // State to store food data
  const [foodsData, setFoodsData] = useState([]);

  // Effect hook to fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data using Foods function from food.js
        const data = await Foods();
        // Update state with fetched data
        setFoodsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className="my-16">
      <div className="title">
        <h1 className="">Kuliner Khas</h1>
      </div>
      <div className="container">
        {/* Map through foodsData and render each item using Card component */}
        {foodsData.map(function (food) {
          return (
            <Card
              key={food.id}
              img={food.img}
              name={food.name}
              desc={food.desc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Culinary;
