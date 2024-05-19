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

  //filter by flavour
  const saltyIds = [7, 8, 9, 11, 14];
  const sweetIds = [2, 6, 10];
  const spicyIds = [1, 5, 12, 13, 15];

  const filteredFoods = foodsData.filter((food) => {
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
  });

  return (
    <div className="my-16">
      <div className="title">
        <h1 className="">Kuliner Khas</h1>
      </div>
      <div className="filters">
      <input
          type="text"
          className="search"
          placeholder="Cari makanan..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">Semua</option>
          <option value="salty">Asin</option>
          <option value="sweet">Manis</option>
          <option value="spicy">Pedas</option>
        </select>
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
