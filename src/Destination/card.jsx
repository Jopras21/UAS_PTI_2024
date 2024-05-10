import React from "react";
import "./culinary.css";
function Card(props) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="top">
          <h1 className="icon">{props.icon}</h1>
        </div>
        <div className="bottom">
          <h2 className="info">{props.name}</h2>
          <p className="meaning">{props.meaning}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;