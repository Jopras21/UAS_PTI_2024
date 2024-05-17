import React, { useState, useEffect } from "react";
import Card from "./card";
import { Foods } from "./food.js";
import "./culinary.css";

function Culinary() {
  const [foodsData, setFoodsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Foods();
        setFoodsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Function to handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter foods based on selected category and search term
  const filteredFoods = foodsData.filter((food) => {
    const categoryMatch =
      selectedCategory === "all" || food.category === selectedCategory;
    const nameMatch = food.name.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && nameMatch;
  });

  return (
    <div className="my-16">
      <div className="title">
        <h1 className="">Kuliner Khas</h1>
      </div>
      <div className="filters">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">Semua</option>
          <option value="salty">Asin</option>
          <option value="sweet">Manis</option>
          <option value="spicy">Pedas</option>
        </select>
        <input
          type="text"
          className="search"
          placeholder="Cari makanan..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="container">
        {filteredFoods.map((food) => (
          <Card
            key={food.id}
            img={food.img}
            name={food.name}
            desc={food.desc}
          />
        ))}
      </div>
    </div>
  );
}

export default Culinary;
