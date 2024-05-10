import React from "react";
import Card from "./card";
import Foods from "./food.js";
import "./culinary.css";

function Culinary() {
  return (
    <div className="">
      <div className="title">
        <h1 className="">Kuliner Khas</h1>
      </div>
      <div className="container">
        {Foods.map(function (Food) {
          return (
            <Card
              key={Food.id}
              icon={Food.icon}
              name={Food.name}
              meaning={Food.meaning}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Culinary;
