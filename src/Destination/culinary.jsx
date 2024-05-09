import React from "react";
import Card from "./card";
import contacts from "./contacts.js";

function Culinary() {
  return (
    <div className="">
      <div className="title">
        <h1 className="">Emojipedia</h1>
      </div>
      <div className="container">
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