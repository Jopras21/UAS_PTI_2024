import React from "react";

function CardHistory(props) {
  return (
    <div className="card">
      <div className="imgContainer">
        <img src={props.img} />
      </div>
      <div className="cardBody">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
      <hr />
    </div>
  );
}
export default CardHistory;
