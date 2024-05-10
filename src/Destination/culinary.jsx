import React from "react";
import Card from "./card";
import contacts from "./contacts.js";

function Culinary() {
  return (
    <div className="container">
      <div className="title">
        <h1 className="">Kuliner Khas</h1>
      </div>
      <div className="card-container">
        {contacts.map(function (contact) {
          return (
            <Card
              key={contact.id}
              icon={contact.icon}
              name={contact.name}
              meaning={contact.meaning}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Culinary;