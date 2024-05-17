import React, { useState, useEffect } from "react";
import Card from "./card";
import { Foods } from "./food.js";
import "./culinary.css";

function Culinary() {
  const [foodsData, setFoodsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

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

  // Filter foods based on selected category

  const filteredFoods = foodsData.filter((food) => {
    if (selectedCategory === "all") {
      return true; // Menampilkan semua makanan jika kategori yang dipilih adalah "all"
    } else if (selectedCategory === "manis" && food.id === 1) {
      return true; // Menampilkan makanan manis
    } else if (selectedCategory === "asin") {
      return food.category === "asin"; // Menampilkan makanan asin
    } else if (selectedCategory === "pedas") {
      return food.category === "pedas"; // Menampilkan makanan pedas
    }
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
