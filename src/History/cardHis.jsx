import React from 'react';
import '../History/card.css';

    const Card = (props) => {
      return (
        <section id="card1" className="card">
        <img src={props.img}/>
        <div class="card__content">
          <p class="card__title">{props.name}</p>
        </div>
      </section>
      );
    };



export default Card;
