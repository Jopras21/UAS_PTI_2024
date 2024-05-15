import React from 'react';
import '../History/card.css';

const Card = () => {
  return (
    <div className="card">
      <img viewBox="0 0 24 24" src='../src/assets/BgSejarah/arca.jpeg' />
      <div className="card__content">
        <p className="card__title">Card Title</p>
        <p className="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </p>
      </div>
    </div>
  );
};

export default Card;
