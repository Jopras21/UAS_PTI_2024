import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Card from "./card";
import { Foods } from "./food.js";
import "./culinary.css";

function Culinary() {
  const [foodsData, setFoodsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const cardsRef = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Foods();
        console.log("Fetched data:", data);
        setFoodsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const saltyIds = [7, 8, 9, 11, 14];
  const sweetIds = [2, 6, 10];
  const spicyIds = [1, 5, 12, 13, 15];

  const fixImageUrlProtocol = (url) => {
    if (url.startsWith("http://")) {
      return url.replace("http://", "https://");
    }
    return url;
  };

  const filteredFoods = foodsData
    .filter((food) => {
      const nameMatch = food.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      if (selectedCategory === "salty") {
        return saltyIds.includes(food.id) && nameMatch;
      }
      if (selectedCategory === "sweet") {
        return sweetIds.includes(food.id) && nameMatch;
      }
      if (selectedCategory === "spicy") {
        return spicyIds.includes(food.id) && nameMatch;
      }

      const categoryMatch =
        selectedCategory === "all" || food.category === selectedCategory;

      return categoryMatch && nameMatch;
    })
    .map((food) => ({
      ...food,
      img: fixImageUrlProtocol(food.img),
    }));

  return (
    <div className="my-16">
      <div className="title">
        <h1 className="">Kuliner Khas</h1>
      </div>
      <div className="filter-conteainer">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="filter-button rounded-xl"
        >
          <option value="all">Semua</option>
          <option value="salty">Asin</option>
          <option value="sweet">Manis</option>
          <option value="spicy">Pedas</option>
        </select>
        <div className="container-search text-center right-0">
          <input
            type="text"
            placeholder="Cari makanan..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="search"></div>
        </div>
      </div>
      <div className="container">
        {filteredFoods.map((food, index) => (
          <motion.div
            key={food.id}
            ref={(el) => (cardsRef.current[index] = el)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.5 }}
          >
            <Card img={food.img} name={food.name} desc={food.desc} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Culinary;
