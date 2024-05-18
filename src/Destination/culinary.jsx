import React, { useState, useEffect, useRef } from "react";
import Card from "./card";
import { Foods } from "./food.js";
import { TweenMax } from "gsap";
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
        setFoodsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight) {
          TweenMax.to(card, 0.5, { opacity: 1, y: 0, delay: index * 0.2 });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [foodsData]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
        {filteredFoods.map((food, index) => (
          <Card
            key={food.id}
            ref={(el) => (cardsRef.current[index] = el)}
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
