import React from "react";
import "./Card.scss";
import Image from "../../assets/cards/cardImage.png";

const Card = ({ cardImage, cardText }) => {
  return (
    <div className="card-wrapper">
      <img src={cardImage} alt="image-card" />
      <p>{cardText}</p>
    </div>
  );
};

export default Card;
