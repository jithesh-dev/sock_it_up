import React from "react";
import "./Card.scss";
function card({ imageUrl, title }) {
  return (
    <div>
      <div
        className="card featured-card"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <h3 className="card-title">{title}</h3>
    </div>
  );
}

export default card;
